<template>

  <div>
    <el-row>
      <el-col :span="24">
        <el-card>

          <div class="mix">
            <div class="show">
              <CartoonChatBubble :title="title3" :messages="messages3"/>

            </div>
            <div class="char">
              <p>
                到了23年3月份以后，也就是进入我摆烂全盛期
              </p>
              <p>
                23年6月份，已经很久没有在白天醒来过，将近1个月内没有任何社交，基本没说过几句话，没有正常上过课。
              </p>

            </div>
          </div>

        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import {ref} from "vue";
import CartoonSignature from "@/components/CartoonSignature.vue";
import CartoonChatBubble from "@/components/CartoonChatBubble.vue";

const messages3 = ref([
  { sender: 'Lv97管理员 大数据20肖砥城', text: '谁通宵' },
  { sender: 'LV97管理员 大数据20肖砥城', text: '我不是、我没有啊' },
  { sender: 'LV34 寄算机21王崇文', text: '感觉不如xdcgg 直接通宵' },
  { sender: 'LV100管理员 大数据23-1寇飞舞', text: '感觉不如xdcgg 直接通宵' },
  { sender: 'LV100管理员 大数据23-1寇飞舞', text: '肖神已经连续好几个晚上没在宿舍' },
  { sender: 'LV100管理员 大数据23-1寇飞舞', text: '去卷了' }
]);

const title3 = ref('拓扑大数据部闲聊 （267）');

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
  justify-items: center;
  width: 100%;
}
.mix CartoonChatBubble{
  /*width: 50%;*/
}
.mix p {
  //width: 30%;

}

.mix .show{
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
}
.mix .char{
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
}

</style>