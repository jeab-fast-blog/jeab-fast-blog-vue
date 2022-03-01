<template>
  <div class="new-page" :style="`min-height: ${pageMinHeight}px`">
    <a-row>
      <a-col :span="24">
        <a-button type="primary" style="margin:0 10px 10px 0">
          <a-icon type="tag" />
                新建标签
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
    name: 'John Brown',
    alias: 32,
    articleNum: 'New York No. 1 Lake Park',
  },
  {
    id: '1',
    name: 'John Brown',
    alias: 32,
    articleNum: 'New York No. 1 Lake Park',
  },
];
  export default {
    name: 'TagList',
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