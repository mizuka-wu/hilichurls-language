<template>
  <el-card id="app">
    <div
      class="header"
      slot="header"
    >
      <div>丘丘语</div>
      <i class="el-icon-d-arrow-right" />
      <div>丘丘语（注释）</div>
    </div>
    <el-row :gutter="8">
      <el-col v-bind="span">
        <el-input
          :maxlength="500"
          autosize
          show-word-limit
          style="height: 100%;"
          type="textarea"
          v-model="source"
        ></el-input>
        <div class="button-container">
          <el-button
            @click="clickPic"
            class="pic-select-wrapper"
            icon="el-icon-picture"
            type="text"
            v-if="ocr"
          >
            <input
              @change="selectPic"
              accept=".png, .jpg, .jpeg"
              class="pic-select"
              ref="inputFile"
              type="file"
            />
          </el-button>
        </div>
        <!-- <el-button type="text" icon="el-icon-camera"></el-button> -->
      </el-col>
      <el-col
        class="result"
        v-bind="span"
      >
        <span
          :key="index"
          v-for="(segment, index) of result"
        >
          <el-tooltip
            :key="words.text + index"
            class="item"
            effect="dark"
            placement="bottom"
            v-for="words of segment.text"
          >
            <div slot="content">
              <div
                :key="index"
                v-for="(meaning, index) of words.meaning"
              >{{ meaning }}</div>
            </div>
            <span :class="{ text: true, hilichurls: words.isHilichurlsLang }">{{ words.text }}</span>
          </el-tooltip>
          <span v-html="segment.symbol"></span>
        </span>
      </el-col>
    </el-row>
    <canvas
      v-if="false"
      height="300"
      id="canvas"
      style="position: fixed;left: 0;top: 0;z-index: 999;"
      width="500"
    />
  </el-card>
</template>

<script>
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import directory from './assets/directory.json'
import sparkMd5 from 'spark-md5'
import { createWorker } from 'tesseract.js'
import { Loading } from 'element-ui'

const LANGUAGE = 'eng' // +chi_sim

export default {
  name: 'App',
  data () {
    const arrayTypeDirectory = Object.keys(directory).reduce((_arrayTypeDirectory, key) => {
      const md5 = sparkMd5.hash(key)
      _arrayTypeDirectory.push({
        text: key,
        md5,
        meaning: directory[key]
      })
      return _arrayTypeDirectory
    }, [])
      .sort((a, b) => b.text.length - a.text.length)
    return {
      span: {
        xs: 24,
        sm: 24,
        md: 12,
        lg: 12
      },
      loading: null,
      ocr: null,
      source: 'Muhe ye! Nini zido!',
      arrayTypeDirectory
    }
  },
  computed: {
    md5Directory ({ arrayTypeDirectory }) {
      return arrayTypeDirectory.reduce((obj, { md5, ...dir }) => {
        obj[md5] = dir
        return obj
      }, {})
    },
    result ({ source, arrayTypeDirectory, md5Directory }) {
      const segments = Array.from(source
        .matchAll(/(?<text>[\w\s]*)(?<symbol>[\n,!.\s]*)/g))
        .map(item => item.groups)
        .filter(item => item.segment !== '' || item.symbol !== '')
      return segments.map(({ text, symbol }) => ({
        symbol: symbol.replace('\n', '<br/>'),
        text: arrayTypeDirectory
          .reduce((_text, dir) => _text.replace(dir.text, dir.md5), text)
          .split(' ')
          .map(md5 => md5Directory[md5] || {
            text: md5,
            meaning: [
              md5
            ]
          })
      }))
    }
  },
  methods: {
    clickPic () {
      this.$refs.inputFile.click()
    },
    async selectPic (e) {
      const vm = this
      this.loading = Loading.service({ fullscreen: true })
      const pic = e.target.files[0]
      e.target.value = ''
      const imageUrl = window.URL.createObjectURL(pic)
      try {
        const image = new MarvinImage()
        image.load(imageUrl, async function () {
          URL.revokeObjectURL(imageUrl)
          const segments = Marvin.findTextRegions(image).filter(item => item.height >= 5)
          vm.source = ''
          for (const seg of segments) {
            if (seg.height >= 5) {
              const { data: { text } } = await vm.ocr.recognize(pic, {
                rectangle: {
                  top: seg.y1,
                  left: seg.x1,
                  width: seg.width,
                  height: seg.height
                }
              })
              if (text) {
                vm.source += `${text}\n`
              // image.drawRect(seg.x1, seg.y1 - 5, seg.width, seg.height + 10, 0xFFFF0000)
              // image.drawRect(seg.x1 + 1, seg.y1 - 4, seg.width - 2, seg.height + 8, 0xFFFF0000)
              }
            }
          }

          // 画上去
          // image.draw(document.querySelector('#canvas'))
          vm.loading.close()
          vm.loading = null
        })
      } catch (e) {
        this.$message.error('获取文字失败')
        URL.revokeObjectURL(imageUrl)
        vm.loading.close()
        vm.loading = null
      }
    }
  },
  async created () {
    const vm = this
    const ocr = createWorker({
      langPath: `${process.env.BASE_URL}`,
      logger: function (message) {
        switch (message.status) {
          case 'recognizing text': {
            if (vm.loading) {
              const progress = message.progress * 100
              vm.loading.text = `正在获取文字${progress.toFixed(0)}%`
            }
            break
          }
          default: {
            break
          }
        }
      }
    })
    await ocr.load()
    await ocr.loadLanguage(LANGUAGE)
    await ocr.initialize(LANGUAGE)
    this.ocr = ocr
  }
}
</script>

<style>
html,
body {
  width: 100%;
  display: flex;
  margin: 0;
  justify-content: center;
}
#app {
  margin: 10px;
  width: 100%;
  min-height: 300px;
  max-width: 900px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.el-card__body {
  height: 200px;
}

.el-row {
  height: 100%;
}

.el-col {
  height: 100%;
  padding-bottom: 24px;
}

.el-col textarea {
  height: 100%;
  border: 0;
  max-height: 100%;
  overflow: auto;
  resize: none;
}

.text {
  margin: 0px 4px;
  padding: 2px 1px;
}

.hilichurls {
  border-bottom: 1px dashed #000;
}

.text:hover {
  color: #fff;
  background: #000;
  cursor: pointer;
}

.pic-select-wrapper {
  overflow: hidden;
  width: 20px;
}

.pic-select {
  opacity: 0;
}

.button-container {
  position: relative;
  top: 0;
  height: 24px;
  display: flex;
  align-items: center;
}

.result {
  height: 100%;
  word-break: break-all;
  overflow: auto;
}
</style>
