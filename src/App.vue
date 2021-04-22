<template>
  <el-card id="app">
    <div slot="header" style="text-align: center;">
      <i class="el-icon-d-arrow-right" />
    </div>
    <el-row :gutter="8">
      <el-col :span="12">
        <el-input
          style="height: 100%;"
          type="textarea"
          v-model="source"
          autosize
          show-word-limit
          :maxlength="500"
        ></el-input>
      </el-col>
      <el-col :span="12">
        <div>
          <el-tooltip
            :key="dir.text"
            class="item"
            effect="dark"
            placement="bottom"
            v-for="dir of result"
          >
            <div slot="content">
              <div :key="index" v-for="(meaning, index) of dir.meaning">{{ meaning }}</div>
            </div>
            <span class="text">{{ dir.text }}</span>
          </el-tooltip>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import directory from './assets/directory.json'
import sparkMd5 from 'spark-md5'
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
      return arrayTypeDirectory
        // 将可以替换的部分替换为词典对象的md5
        .reduce((text, dir) => {
          return text.replace(dir.text, dir.md5)
        }, source)
        .split(' ')
        .map(item => {
          const key = item.replace('!', '')
          if (key in md5Directory) {
            const data = { ...md5Directory[key] }
            data.text += item.replace(/\w/g, '')
            return data
          } else {
            return {
              text: item,
              meaning: [item]
            }
          }
        })
    }
  }
}
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
  display: flex;
  margin: 0;
  justify-content: center;
}
#app {
  margin: 10px;
  width: 100%;
  height: 300px;
  max-width: 900px;
}

.el-card__body {
  height: 200px;
}

.el-row {
  height: 100%;
}

.el-col {
  height: 100%;
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
.text:hover {
  color: #fff;
  background: #000;
  cursor: pointer;
}
</style>
