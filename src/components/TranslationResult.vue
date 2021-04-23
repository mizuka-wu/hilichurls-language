<template>
  <span>
    <el-tooltip
      :key="words.text + guid"
      class="item"
      effect="dark"
      placement="bottom"
      v-for="words of segmentWithTranslate.text"
    >
      <div slot="content">
        <div :key="index" v-for="(meaning, index) of words.meaning">{{ meaning }}</div>
      </div>
      <span :class="{ text: true, hilichurls: !words.keepOrigin }">{{ words.text }}</span>
    </el-tooltip>
    <span v-html="segmentWithTranslate.symbol"></span>
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
  },
  computed: {
    segmentWithTranslate ({ segment }) {
      return segment
    }
  }
}
</script>

<style>
.hilichurls {
  border-bottom: 1px dashed #000;
}
</style>
