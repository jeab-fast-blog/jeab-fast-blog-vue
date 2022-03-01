<template>
  <div class="new-page" :style="`min-height: ${pageMinHeight}px`">
    <a-row>
      <a-col :span="24">
        <a-button type="primary" style="margin:0 10px 10px 0">
                导航管理
        </a-button>    
        <a-button type="primary">
          <a-icon type="diff" />
                新建页面
        </a-button>    
      </a-col>
    </a-row>  

    <a-table :columns="columns" :data-source="data">
      <span slot="action" >
        <a href="">
          <a-icon type="edit" theme="filled" :style="{ fontSize: '18px'}" />
        </a>
        <a-divider type="vertical" />
        <a href="">
          <a-icon type="delete" theme="filled" :style="{ fontSize: '18px'}"/>
        </a>
      </span>
    </a-table>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '作者',
    dataIndex: 'author',
    key: 'author',
  },
  {
    title: '标题',
    key: 'title',
    dataIndex: 'title',
  },
   {
    title: '日期',
    key: 'createTm',
    dataIndex: 'createTm',
  },
   {
    title: '评论',
    key: 'comment',
    dataIndex: 'comment',
  },
  {
    title: '状态',
    key: 'status',
    dataIndex: 'status',
  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
  
];

const data = [
  {
    id: '1',
    author: 32,
    title: 'New York No. 1 Lake Park',
    createTm: '1',
    comment: 'John Brown',
    status: 32,
  },
  {
    id: '1',
    author: 32,
    title: 'New York No. 1 Lake Park',
    createTm: '1',
    comment: 'John Brown',
    status: 32,
  },
];
  export default {
    name: 'PageList',
    data() {
      return {
        data,
        columns,
        form: {

        }
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