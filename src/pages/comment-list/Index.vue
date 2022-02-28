<template>
  <div class="new-page" :style="`min-height: ${pageMinHeight}px`">
    <h1>评论管理</h1>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'CommentList',
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