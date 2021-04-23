<template>
  <span>
    <el-tooltip
      :key="words.text + guid"
      class="item"
      effect="dark"
      placement="bottom"
      v-for="words of segment.text"
    >
      <div slot="content">
        <div :key="index" v-for="(meaning, index) of words.meaning">{{ meaning }}</div>
      </div>
      <span :class="{ text: true, hilichurls: words.isHilichurlsLang }">{{ words.text }}</span>
    </el-tooltip>
    <span v-html="segment.symbol"></span>
  </span>
</template>

<script>
import guid from 'guid'
export default {
  props: {
    segment: {
      type: Object
    }
  },
  data () {
    return {
      guid: guid.create()
    }
  }
}
</script>

<style>
</style>
