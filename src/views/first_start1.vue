<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-card>

          <div class="mix">
            <CartoonSignature :signatures="signatures1"/>
            <p>
              就让我们以历史个签的形式开始叙事吧，我的QQ历史个签，在22个历史签名中，21个都是对你说的，所以从某种意义上说是你让我变得稍微外向？？
              最开始的这个"My heart burning"（现在看来好羞耻），也是我们矛盾的起点，就是班里一个女生向我表白。
            </p>
          </div>

          <div class="mix">
            <CartoonChatBubble :messages="messages2" :title="title2"/>
               <p>
              这个女生后面经常跑到我们实验室，她是一个乐观开朗的女孩，没有因为我拒绝而过多伤心，飞速地向我们班下一位男生发起了攻势，就在前几天她表白又失败了，但是还是一如既往的乐观。
            </p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>

import CartoonChatBubble from "@/components/CartoonChatBubble.vue";
import CartoonSignature from '@/components/CartoonSignature.vue';
import {ref} from "vue";

const signatures1 =[ {
  time: '2022-02-23 01:47',
  content: 'My heart burning,but not for you'
}]
const messages2 = ref([
  { sender: '', text: '寇一飞这byd不回我消息' },
  { sender: 'me', text: '怎么啦' },
  { sender: '', text: '我问他租房的事情' },
  { sender: 'me', text: '你也在这边租房么' },
  { sender: '', text: '我工作的地方租房啊' }
]);

const title2 = ref('大数据2002谢薇');
</script>

<style scoped>
p {
  margin: 10px 0;
  font-size: small;
}

.mix{
  display: flex;
  flex-direction: row;
  margin: 10px;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
.mix CartoonChatBubble{
  /*width: 50%;*/
}
.mix p {
  width: 30%;
}
</style>
