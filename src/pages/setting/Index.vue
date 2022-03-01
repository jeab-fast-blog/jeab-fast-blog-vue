<template>
  <div class="new-page" :style="`min-height: ${pageMinHeight}px`">
    <a-row>
      <a-col :span="24">
        <a-button type="primary" style="margin:0 10px 10px 0">
                静态化管理中心
        </a-button>    
        <a-button type="primary">
          <a-icon type="diff" />
                新建页面
        </a-button>    
      </a-col>
    </a-row> 
    <a-tabs default-active-key="basic" >
      <a-tab-pane key="basic" tab="基础设置">
        <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-model-item label="网站地址">
            <a-input v-model="form.name" />
          </a-form-model-item>
          <a-form-model-item label="网站标题">
            <a-input v-model="form.name" />
          </a-form-model-item>
          <a-form-model-item label="网站副标题">
            <a-input v-model="form.name" />
          </a-form-model-item>
          <a-form-model-item label="版权说明">
            <a-input v-model="form.desc" type="textarea" />
          </a-form-model-item>
        
          <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" @click="onSubmit">
              提交
            </a-button>
          </a-form-model-item>
        </a-form-model>
      </a-tab-pane>
      <a-tab-pane key="global" tab="全局设置" force-render>
        <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-model-item label="网站时区">
             <a-select v-model="form.region" placeholder="please select your zone">
              <a-select-option value="shanghai">
                Zone one
              </a-select-option>
              <a-select-option value="beijing">
                Zone two
              </a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item label="网站语言">
            <a-select v-model="form.region" placeholder="please select your zone">
              <a-select-option value="shanghai">
                Zone one
              </a-select-option>
              <a-select-option value="beijing">
                Zone two
              </a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item label="调试时间">
            <a-switch v-model="form.delivery" />
          </a-form-model-item>
          <a-form-model-item label="允许报Warning级别错误">
            <a-switch v-model="form.delivery" />
          </a-form-model-item>
          <a-form-model-item label="安全增强">
            <a-switch v-model="form.delivery" />
          </a-form-model-item>
          <a-form-model-item label="客户IP获取来源">
            <a-select v-model="form.region" placeholder="please select your zone">
              <a-select-option value="shanghai">
                Zone one
              </a-select-option>
              <a-select-option value="beijing">
                Zone two
              </a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item label="启用XML-RPC协议">
            <a-switch v-model="form.delivery" />
          </a-form-model-item>
          <a-form-model-item label="关闭网站">
            <a-switch v-model="form.delivery" />
          </a-form-model-item>
      
          <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" @click="onSubmit">
              提交
            </a-button>
            <a-button style="margin-left: 10px;">
              Cancel
            </a-button>
          </a-form-model-item>
        </a-form-model>
      </a-tab-pane>
      <a-tab-pane key="page" tab="页面设置">
        <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-model-item label="列表页显示文章的数量">
            <a-input v-model="form.name" />
          </a-form-model-item>
          <a-form-model-item label="列出分类下所有子分类的文章">
            <a-switch v-model="form.delivery" />
          </a-form-model-item>
          <a-form-model-item label="翻页条显示翻页的数量">
            <a-input v-model="form.name" />
          </a-form-model-item>
          <a-form-model-item label="允许搜索返回文章的最大数量">
            <a-input v-model="form.name" />
          </a-form-model-item>
          <a-form-model-item label="代码高亮">
            <a-switch v-model="form.delivery" />
          </a-form-model-item>
          
          <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" @click="onSubmit">
              提交
            </a-button>
          </a-form-model-item>
        </a-form-model>
      </a-tab-pane>
      <a-tab-pane key="comment" tab="评论设置">
        <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-model-item label="关闭评论功能">
            <a-switch v-model="form.delivery" />
          </a-form-model-item>
          <a-form-model-item label="审核评论">
            <a-switch v-model="form.delivery" />
          </a-form-model-item>
          <a-form-model-item label="启用评论倒序输出">
            <a-switch v-model="form.delivery" />
          </a-form-model-item>
          <a-form-model-item label="每页输出评论数量">
            <a-input v-model="form.name" />
          </a-form-model-item>
          <a-form-model-item label="启用评论验证码功能">
            <a-switch v-model="form.delivery" />
          </a-form-model-item>
        
          <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" @click="onSubmit">
              重置
            </a-button>
          </a-form-model-item>
        </a-form-model>
      </a-tab-pane>
      <a-tab-pane key="backend" tab="后台设置">
        <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-model-item label="允许上传文件的类型">
            <a-input v-model="form.name" />
          </a-form-model-item>
          <a-form-model-item label="允许上传文件的大小(单位MB)">
            <a-input v-model="form.name" />
          </a-form-model-item>
          <a-form-model-item label="文章编辑时获取纯文本摘要">
            <a-switch v-model="form.delivery" />
          </a-form-model-item>
          <a-form-model-item label="后台每页文章显示数量">
            <a-input v-model="form.name" />
          </a-form-model-item>
          <a-form-model-item label="启用文章批量删除">
            <a-switch v-model="form.delivery" />
          </a-form-model-item>
          <a-form-model-item label="删除用户同时删除其文章和评论">
            <a-switch v-model="form.delivery" />
          </a-form-model-item>
          <a-form-model-item label="分类管理按传统模式显示">
            <a-switch v-model="form.delivery" />
          </a-form-model-item>
          <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" @click="onSubmit">
              提交
            </a-button>
          </a-form-model-item>
        </a-form-model>
      </a-tab-pane>
      <a-tab-pane key="api" tab="API设置">
        <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-model-item label="启用API协议">
            <a-switch v-model="form.delivery" />
          </a-form-model-item>
          <a-form-model-item label="启用API限流">
            <a-switch v-model="form.delivery" />
          </a-form-model-item>
          <a-form-model-item label="API每分钟限制请求数">
            <a-input v-model="form.name" />
          </a-form-model-item>
          <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" @click="onSubmit">
              提交
            </a-button>
          </a-form-model-item>
        </a-form-model>
      </a-tab-pane>
    </a-tabs> 
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'Setting',
    data() {
      return {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
        form: {
          name: '',
          region: undefined,
          date1: undefined,
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
      }
    },
    computed: {
      ...mapState('setting', ['pageMinHeight']),


    },
    methods: {
      onSubmit() {
        console.log('submit!', this.form);
      },
    },
  }
</script>

<style scoped lang="less">
@import "index";
</style>