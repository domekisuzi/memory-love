<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-card>
          <div class="mix">
            <div class="show">
              <CartoonSignature :signatures="signatures1"/>
              <CartoonSignature :signatures="signatures2"/>
              <CartoonSignature :signatures="signatures3"/>
            </div>
            <div class="char">
              <p>
                5月大概是希望你能发现我不敢加你了然后发的个签，9月那个是因为很绝望了发的个签。现在想想，当初难过的最主要原因就是以为被突然直接结束了，要不是有一个借口让我去再找你，或许早就结束了吧。
              </p>
              <p>
                所以为什么一直去点你的空间，尝试在其他你能看得见的地方引起你注意，主要目的就是想让你告诉我，让我去弥补，给我一个机会。但是直到我23年3月这种情况都没有出现，所以就以极其心虚的心态去加了你，然后就理所当然的被拜拜了。
              </p>
              <p>
                这份以为已经结束，但是其实没有结束的心态也体现在了23年12月份，也就是看到你不想回我消息之后我也就没有过多纠缠，因为我一直是这么想的。
              </p>
              <p>
                这个再等等就是我已经取得一定成就的时候才自信发出来的话，我一直在想着怎么样才能更好地表现自己，于是我想到了吉他（但是一直没学好，我的朋友很震惊我跟着书学了很久）。现在应该有个一年多没碰那个了吧。我还之前还跟你说我要学日语来着。
              </p>
            </div>
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
  time: '2022-05-19 13:32',
  content: '还会回来么'
}]
const signatures2 =[ {
  time: '2022-09-06 10:08',
  content: '诺基亚真好用 有事请打19198071910'
}]
const signatures3 =[ {
  time: '2022-10-07 19:05',
  content: '再等等....'
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
