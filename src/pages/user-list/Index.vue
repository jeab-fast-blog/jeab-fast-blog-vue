<template>
  <div class="new-page" :style="`min-height: ${pageMinHeight}px`">
    <a-row>
      <a-col :span="24">
        <a-button type="primary" style="margin:0 10px 10px 0">
          <a-icon type="user-add" />
                新建用户
        </a-button>  
        <a-button type="primary">
            <a-icon type="user" />
                查看权限
        </a-button>     
      </a-col>
    </a-row>  
    <a-form layout="inline" :form="form">
      <a-form-item label="用户级别">
        <a-input />
      </a-form-item>
      <a-form-item>
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
    title: '用户级别',
    dataIndex: 'level',
    key: 'level',
  },
  {
    title: '名称',
    dataIndex: 'name',
    key: 'author',
  },
  {
    title: '别名',
    key: 'alias',
    dataIndex: 'alias',
  },
   {
    title: '文章总数',
    key: 'articleNum',
    dataIndex: 'articleNum',
  },
   {
    title: '页面总数',
    key: 'pageNum',
    dataIndex: 'pageNum',
  },
  {
    title: '评论总数',
    key: 'commentNum',
    dataIndex: 'commentNum',
  },
   {
    title: '附件总数',
    key: 'attachNum',
    dataIndex: 'attachNum',
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
    level: 'John Brown',
    name: 32,
    alias: 'New York No. 1 Lake Park',
    articleNum: '1',
    pageNum: 'John Brown',
    commentNum: 32,
    attachNum: 32,
  },
  {
    id: '1',
    level: 'John Brown',
    name: 32,
    alias: 'New York No. 1 Lake Park',
    articleNum: '1',
    pageNum: 'John Brown',
    commentNum: 32,
    attachNum: 32,
  },
];
  export default {
    name: 'UserList',
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