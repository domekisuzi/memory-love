<template>



  <el-dialog
      v-model="centerDialogVisible"
      title="提示"
      width="500"
      align-center
      @close="toAnotherPage"
      @close-auto-focus="toAnotherPage"
  >
    <span>当你打开这个网站的时候，我可能就知道你打开了</span>
    <el-image id="duihua" :src=imageSrc />


    <span>这也就意味着我要重新考虑我们之前的关系，以及我可以正儿八经成为唐ちゃん单推人了（好耶）</span>
    <span>由于最近有点忙所以我就还是前情提要吧，大概是6月毕业那会写的，我会不断更新这个网站</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="centerDialogVisible = false"  >
          回顾前情
        </el-button>
      </div>
    </template>
  </el-dialog>


</template>



<script setup>
import { ref } from 'vue'
import imageSrc from '@/assets/img_30_dialog.jpg'
import {useRouter} from "vue-router";
const centerDialogVisible = ref(true)

const  router = useRouter()

const toAnotherPage = () =>{
  console.log( "hhh")
  router.push('/memory')
}

</script>



<style scoped>

</style>