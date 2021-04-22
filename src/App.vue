<template>
  <el-card id="app">
    <div slot="header" class="header">
      <div>丘丘语</div>
      <i class="el-icon-d-arrow-right" />
      <div>丘丘语（注释）</div>
    </div>
    <el-row :gutter="8">
      <el-col v-bind="span">
        <el-input
          style="height: 100%;"
          type="textarea"
          v-model="source"
          autosize
          show-word-limit
          :maxlength="500"
        ></el-input>
        <el-button
          v-if="ocr"
          type="text"
          class="pic-select-wrapper"
          icon="el-icon-picture"
          @click="clickPic"
        >
          <input
            type="file"
            ref="inputFile"
            class="pic-select"
            @change="selectPic"
            accept=".png, .jpg"
          />
        </el-button>
        <!-- <el-button type="text" icon="el-icon-camera"></el-button> -->
      </el-col>
      <el-col v-bind="span">
        <div v-for="(line, index) of result" :key="index">
          <el-tooltip
            :key="words.text + index"
            class="item"
            effect="dark"
            placement="bottom"
            v-for="words of line"
          >
            <div slot="content">
              <div :key="index" v-for="(meaning, index) of words.meaning">{{ meaning }}</div>
            </div>
            <span :class="{ text: true, hilichurls: words.isHilichurlsLang }">{{ words.text }}</span>
          </el-tooltip>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import directory from './assets/directory.json'
import sparkMd5 from 'spark-md5'
import { createWorker } from 'tesseract.js'
import { Loading } from 'element-ui'

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
      return source.split('\n').map(sourceText => arrayTypeDirectory
        // 将可以替换的部分替换为词典对象的md5
        .reduce((text, dir) => {
          return text.replace(dir.text, dir.md5)
        }, sourceText)
        .split(' ')
        .map(item => {
          const key = item.replace('!', '')
          if (key in md5Directory) {
            const data = { ...md5Directory[key], isHilichurlsLang: true }
            data.text += item.replace(/\w/g, '')
            return data
          } else {
            return {
              text: item,
              meaning: [item]
            }
          }
        }))
    }
  },
  methods: {
    clickPic () {
      this.$refs.inputFile.click()
    },
    async selectPic (e) {
      this.loading = Loading.service({ fullscreen: true })
      const pic = e.target.files[0]
      e.target.value = ''
      const { data: { text } } = await this.ocr.recognize(pic)
      this.source = text
      // await this.ocr.terminate()
      this.loading.close()
      this.loading = null
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
    await ocr.loadLanguage('eng+chi_sim')
    await ocr.initialize('eng+chi_sim')
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
</style>
