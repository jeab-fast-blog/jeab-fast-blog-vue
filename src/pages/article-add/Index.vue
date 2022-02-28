<template>
  <div class="new-page" :style="`min-height: ${pageMinHeight}px`">
    <h1>新建文章</h1>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'ArticleList',
    data() {
      return {
      }
    },
    computed: {
      ...mapState('setting', ['pageMinHeight']),


    }
  }
</script>

<style scoped lang="less">
@import "index";
</style>