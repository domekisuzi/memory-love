<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-card>

          <div class="mix">
            <div class="show">
              <el-image  id="nihonn" :src="imageUrl"    @click="openViewer"  style="width: 50%;height: 50%" ></el-image>
            </div>

            <div class="char">
              <p>
               我还之前还跟你说我要学日语来着。现在也是正式入了二次元国籍了
              </p>
              <p>
                唐ちゃんすごくかわいい！一直想用纯正大佐音告诉你来着。其实22年7月我就考了一次了，但是当时因为给黑心实验室老师打工导致听力的时候睡觉，因为疫情耽误了一年以后才过。
              </p>

              <p>
                好想被你夸奖啊，我从那时开始就这么想象着。
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


const openViewer = () => {
  const viewer = new Viewer(document.getElementById('nihonn'), {

    movable: true,
    zoomable: true,

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

  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
}


</style>
