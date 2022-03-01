<template>
  <div class="new-page" :style="`min-height: ${pageMinHeight}px`">
    <a-row>
      <a-col :span="24">
        <a-button type="primary" style="margin:0 10px 10px 0">
          <a-icon type="audit" />
                审批评论
        </a-button>    
      </a-col>
    </a-row>  
    <a-form layout="inline" :form="form">
      <a-form-item label="搜索">
        <a-input />
      </a-form-item>
      <a-form-item >
        <a-button type="primary">
                提交
        </a-button>    
      </a-form-item>
    </a-form>
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
    title: '上层ID',
    dataIndex: 'parentId',
    key: 'parentId',
  },
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '正文',
    key: 'content',
    dataIndex: 'content',
  },
   {
    title: '文章',
    key: 'article',
    dataIndex: 'article',
  },
   {
    title: '日期',
    key: 'createTm',
    dataIndex: 'createTm',
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
    parentId: 'John Brown',
    name: 32,
    content: 'New York No. 1 Lake Park',
    article: '1',
    createTm: 'John Brown',
  },
  {
    id: '1',
    parentId: 'John Brown',
    name: 32,
    content: 'New York No. 1 Lake Park',
    createTm: '1',
    article: 'John Brown',
  },
];
  export default {
    name: 'CommentList',
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