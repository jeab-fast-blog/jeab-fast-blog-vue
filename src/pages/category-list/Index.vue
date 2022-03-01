<template>
  <div class="new-page" :style="`min-height: ${pageMinHeight}px`">
    <a-row>
      <a-col :span="24">
        <a-button type="primary" style="margin:0 10px 10px 0">
                导航管理
        </a-button>    
        <a-button type="primary">
          <a-icon type="folder-add" />
                新建分类
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
    title: '排序',
    dataIndex: 'sort',
    key: 'sort',
  },
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '别名',
    key: 'alias',
    dataIndex: 'alias',
  },
   {
    title: '文章数量',
    key: 'articleNum',
    dataIndex: 'articleNum',
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
    sort: 'John Brown',
    name: 32,
    alias: 'New York No. 1 Lake Park',
    articleNum: '1',
  },
  {
    id: '1',
    sort: 'John Brown',
    name: 32,
    alias: 'New York No. 1 Lake Park',
    articleNum: '1',
  },
];
  export default {
    name: 'CategoryList',
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