<template>
  <div id="app">
    <el-row>
      <el-col :span="12">
        <el-input type="textarea" v-model="source" />
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
        <div>
          <span :key="dir.text" v-for="dir of result">{{ dir.meaning[0] }}</span>
        </div>
      </el-col>
    </el-row>
  </div>
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
      return arrayTypeDirectory.reduce((text, dir) => {
        return text.replace(dir.text, dir.md5)
      }, source)
        .split(' ')
        .map(item => {
          const data = { ...md5Directory[item.replace('!', '')] }
          data.text += item.replace(/\w/g, '')
          return data
        })
    }
  }
}
</script>

<style>
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
