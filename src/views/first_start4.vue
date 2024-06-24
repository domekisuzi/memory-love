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
                  这些是我被你拒绝后，大脑开始出现问题的时期，具体为什么这么难过后面会解释，主要原因并非在于你，其实很早之前，在大约大二的暑假，也就是我说再等等之前的时候我就察觉了自己的异样，比如说走在路上也会莫名其妙的哭泣。
                </p>

                <p>
                  后面的也就是最近才发生的事情，后面再讨论吧。
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
import imageUrl from "@/assets/img_23.png"
import {ref} from "vue";
import 'viewerjs/dist/viewer.css';
import Viewer from 'viewerjs';

const signatures1 =[ {
  time: '2023-03-07 21:23',
  content: '呱呱呱'
}]
const signatures2 =[ {
  time: '2023-05-21 16:30',
  content: '.'
}]
const signatures3 =[ {
  time: '2023-06-17  01:54',
  content: ' ha la la ha la se la ha le lu'
}]


const messages2 = ref([
  { sender: '', text: '寇一飞这byd不回我消息' },
  { sender: 'me', text: '怎么啦' },
  { sender: '', text: '我问他租房的事情' },
  { sender: 'me', text: '你也在这边租房么' },
  { sender: '', text: '我工作的地方租房啊' }
]);

const title2 = ref('大数据2002谢薇');


const openViewer = () => {
  const viewer = new Viewer(document.getElementById('nihonn'), {

    movable: true,
    zoomable: true,
    // rotatable: true,
    // scalable: true,
    // transition: true,
    // fullscreen: true,
    // keyboard: true,
    // url: imageUrl
  });
  viewer.show();
};

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
