<template>
  <div class="new-page" :style="`min-height: ${pageMinHeight}px`">
    <h1>页面管理</h1>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'PageList',
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