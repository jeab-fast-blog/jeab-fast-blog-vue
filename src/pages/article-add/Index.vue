<template>
  <div class="new-page" :style="`min-height: ${pageMinHeight}px`">
    <a-row>
      <a-col :span="20">
        <a-form-model
                    :model="form"
                    :label-col="labelCol"
                    :wrapper-col="wrapperCol"
                  >
                    
              <a-form-model-item label="标题">
                <a-input
                  v-model="form.titile"
                />
              </a-form-model-item>
              <a-form-model-item label="自定义缩略图">
                <a-input
                  v-model="form.thumbnail"
                />
              </a-form-model-item>
              <a-form-model-item label="正文">
                <mavon-editor  class="mavonEditor" v-model="form.content" />
              </a-form-model-item>
              <a-form-model-item label="别名">
                <a-input
                  v-model="form.thumbnail"
                />
              </a-form-model-item>
              <a-form-model-item label="标签">
                <a-input
                  v-model="form.thumbnail"
                />
              </a-form-model-item>
        </a-form-model>
      </a-col>
      <a-col :span="3">
        <a-form-model
                    :model="form"
                    >
                <a-button type="primary">
                  提交
                </a-button>      
                <a-form-model-item label="分类">
                  <a-select
                    label-in-value
                    :default-value="{ key: 'lucy' }"
                  >
                    <a-select-option value="jack">
                      Jack (100)
                    </a-select-option>
                    <a-select-option value="lucy">
                      Lucy (101)
                    </a-select-option>
                  </a-select>
                </a-form-model-item>
                <a-form-model-item label="状态">
                  <a-select
                    label-in-value
                    :default-value="{ key: 'lucy' }"
                  >
                    <a-select-option value="jack">
                      Jack (100)
                    </a-select-option>
                    <a-select-option value="lucy">
                      Lucy (101)
                    </a-select-option>
                  </a-select>
                </a-form-model-item>
                <a-form-model-item label="作者">
                  <a-select
                    label-in-value
                    :default-value="{ key: 'lucy' }"
                  >
                    <a-select-option value="jack">
                      Jack (100)
                    </a-select-option>
                    <a-select-option value="lucy">
                      Lucy (101)
                    </a-select-option>
                  </a-select>
                </a-form-model-item>
                <a-form-model-item label="日期">
                  <a-select
                    label-in-value
                    :default-value="{ key: 'lucy' }"
                  >
                    <a-select-option value="jack">
                      Jack (100)
                    </a-select-option>
                    <a-select-option value="lucy">
                      Lucy (101)
                    </a-select-option>
                  </a-select>
                </a-form-model-item>
                <a-form-model-item label="置顶">
                  <a-select
                    label-in-value
                    :default-value="{ key: 'lucy' }"
                  >
                    <a-select-option value="jack">
                      Jack (100)
                    </a-select-option>
                    <a-select-option value="lucy">
                      Lucy (101)
                    </a-select-option>
                  </a-select>
                </a-form-model-item>
                <a-form-model-item label="禁止评论">
                  <a-select
                    label-in-value
                    :default-value="{ key: 'lucy' }"
                  >
                    <a-select-option value="jack">
                      Jack (100)
                    </a-select-option>
                    <a-select-option value="lucy">
                      Lucy (101)
                    </a-select-option>
                  </a-select>
                </a-form-model-item>
        </a-form-model>
      </a-col>
    </a-row> 

  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'ArticleAdd',
    data() {
      return {
        value: "",
        labelCol: { span: 2 },
        wrapperCol: { span: 21 },
        form: {
        title: '',
        thumbnail: '',
        content: '',
      },
      }
    },
    computed: {
      ...mapState('setting', ['pageMinHeight']),


    }
  }
</script>

<style scoped lang="less">
.mavonEditor{
   width: 100%;
  height: 100%;
}
@import "index";
</style>