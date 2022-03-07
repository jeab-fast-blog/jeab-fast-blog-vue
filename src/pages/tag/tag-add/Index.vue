<template>
  <div class="new-page" :style="`min-height: ${pageMinHeight}px`">
    <a-row>
      <a-col :span="8" :offset="2">
          <a-form-model
                    :model="form"
                  >
                    
            <a-form-model-item label="名称">
              <a-input
                v-model="form.name"
              />
            </a-form-model-item>
            <a-form-model-item label="别名">
              <a-input
                v-model="form.alise"
              />
            </a-form-model-item>
            
            <a-form-model-item label="排序">
              <a-input
                v-model="form.sort"
              />
            </a-form-model-item>
           
            <a-form-model-item label="摘要">
              <a-input v-model="form.desc" type="textarea" />

            </a-form-model-item>
            <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
              <a-button type="primary" @click="onSubmit">
                提交
              </a-button>
          
            </a-form-model-item>
          </a-form-model>
      </a-col>
    </a-row>
    
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'TagAdd',
    data() {
      return {
        value: "",
        form: {
        title: '',
        thumbnail: '',
        content: '',
      },
      }
    },
    computed: {
      ...mapState('setting', ['pageMinHeight']),


    },
    methods: {
      onSubmit() {

      }
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