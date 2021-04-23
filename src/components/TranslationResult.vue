<template>
  <span>
    <span class="translated">
      <el-tooltip
        :key="words.text + guid"
        class="item"
        effect="dark"
        placement="bottom"
        v-for="words of segmentWithTranslate.text"
      >
        <div slot="content" class="origin">
          {{ words.text }}
          <div :key="index" v-for="(meaning, index) of words.meaning">{{ meaning }}</div>
        </div>
        <span :class="{ text: true, hilichurls: !words.keepOrigin }">{{ words.text }}</span>
      </el-tooltip>
      <div class="translated-text">{{ segmentWithTranslate.translated }}</div>
    </span>
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
      const { text, symbol } = segment

      const translated = text.map(item => {
        const meaning = item.meaning[0]
          .replace('[官方]', '')
          .replace('[本义]', '')
        const [type = '', mean = ''] = meaning.split(' ')
        if (type === '短') {
          return mean
        }
        return mean.replace(/[\s,.。；].*/g, '')
      }).join(' ')

      return {
        translated,
        text,
        symbol
      }
    }
  }
}
</script>

<style>
.hilichurls {
  border-bottom: 1px dashed #000;
}

.translated {
  vertical-align: top;
  position: relative;
  padding-bottom: 24px;
  display: inline-flex;
}

.translated-text {
  position: absolute;
  display: inline;
  left: 4px;
  bottom: 0;
  color: #aaa;
  z-index: 0;
  text-overflow: clip;
  overflow: hidden;
  word-break: keep-all;
  height: 24px;
  width: 110%;
}
</style>
