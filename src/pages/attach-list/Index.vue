<template>
  <div class="new-page" :style="`min-height: ${pageMinHeight}px`">
    <a-form layout="inline" :form="form">
      <a-form-item label="分类">
        <a-input />
      </a-form-item>
      <a-form-item label="类型">
        <a-input />
      </a-form-item>
      <a-form-item>
        <a-checkbox >
          置顶
        </a-checkbox>
      </a-form-item>
      <a-form-item >
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
    title: '作者',
    dataIndex: 'author',
    key: 'author',
  },
  {
    title: '名称',
    key: 'name',
    dataIndex: 'name',
  },
   {
    title: '日期',
    key: 'createTm',
    dataIndex: 'createTm',
  },
   {
    title: '大小',
    key: 'size',
    dataIndex: 'size',
  },
  {
    title: '类型',
    key: 'type',
    dataIndex: 'type',
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
    author: 'John Brown',
    name: 32,
    createTm: 'New York No. 1 Lake Park',
    size: '1',
    type: 'John Brown',
  },
  {
    id: '1',
    author: 'John Brown',
    name: 32,
    createTm: 'New York No. 1 Lake Park',
    size: '1',
    type: 'John Brown',
  },
];
  export default {
    name: 'AttachList',
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