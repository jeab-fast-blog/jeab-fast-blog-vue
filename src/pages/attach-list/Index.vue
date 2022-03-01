<template>
  <div class="new-page" :style="`min-height: ${pageMinHeight}px`">
    <p>选择需要上传的文件:</p>
    <a-row>
      <a-col :span="24">
         <a-upload
          name="file"
          :multiple="true"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          :headers="headers"
        >
          <a-button> <a-icon type="upload" /> 选择文件 </a-button> 
         </a-upload>

         <a-checkbox >
          自动重全名文件名
        </a-checkbox>
         <a-button type="primary" style="margin:0 10px 10px 0">
                提交
        </a-button>  
        <a-button type="primary">
                重置
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

        },
        headers: {
          authorization: 'authorization-text',
        },
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