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
            v-for="dir of text"
          >
            <div slot="content">
              <div :key="index" v-for="(meaning, index) of dir.meaning">{{ meaning }}</div>
            </div>
            <span class="text">{{ dir.text }}</span>
          </el-tooltip>
        </div>
        <div>
          <span :key="dir.text" v-for="dir of text">{{ dir.meaning[0] }}</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import dir from './assets/directory.json'
import sparkMd5 from 'spark-md5'
export default {
  name: 'App',
  data () {
    const list = Object.keys(dir).reduce((_list, key) => {
      const md5 = sparkMd5.hash(key)
      _list.push({
        text: key,
        md5,
        meaning: dir[key]
      })
      return _list
    }, [])
      .sort((a, b) => b.text.length - a.text.length)
    return {
      source: 'Muhe ye! Nini zido!',
      list
    }
  },
  computed: {
    md5ToDir ({ list }) {
      return list.reduce((obj, { md5, ...dir }) => {
        obj[md5] = dir
        return obj
      }, {})
    },
    text ({ source, list, md5ToDir }) {
      return list.reduce((text, dir) => {
        return text.replace(dir.text, dir.md5)
      }, source)
        .split(' ')
        .map(item => {
          const data = { ...md5ToDir[item.replace('!', '')] }
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
