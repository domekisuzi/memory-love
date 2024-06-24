<template>









<!--  我是一个被温柔对待的人，因为我无论怎么摆烂，怎么消沉，我的实验室里的老师，学生都没有放弃过我，虽然我很早很早以前就不再插手实验室里的诸多事情，但是他们每时每刻都在治愈我。我觉得这跟虚荣没关系，我只是相对于其他人，刚好-->
<!--  走到了比较正确的路上，因此当我面临 真正的问题时，我还是会退缩。-->
<!--  <img alt="./img_26.png" src="./img_26.png"/>-->
<!--  这是我之前说的贵人老师，现在他把他多租了一年多的房子免费给了我，我所有的，自认为算是成就的一些东西，大部分都离不开他。-->
<!--  即使是这样，我也没有勇气去面对新的生活。-->
<!--  实验室里的一切的一切，还有我的骄傲，在今年4月份之前我都没有向任何人提起过（除了罗江），我的父母也只是知道我待在实验室过。我只想把故事分享给你，其实每个瞬间我都想，你要是在身边就好了，你会是怎样的表情呢。-->


  <div>
    <el-row>
      <el-col :span="24">
        <el-card>

          <div class="mix">
            <div class="show">
<!--              一定要有id 不然会导致出问题-->
              <el-image  id="chifan" :src="imageUrl"    @click="openViewer"  style="width: 50%;height: 50%" ></el-image>
              <CartoonChatBubble :title="title" :messages="messages"/>
            </div>
            <div class="char">
              <p>
                一起吃饭，其实坐最中间的本来该是右边那个穿蓝衣服那个，但是由于我低情商的说了一句，xxx你不坐到我们移动端的中间么，然后我就坐到了整个房间的中间位置。不过他们肯定也不会在意这个，因为这么长时间的友谊肯定能允许偶尔的脑抽风
              </p>
              <p>
                意义不明的实验室里的学弟学妹的的对话，中间还有一只肖桑的犬。
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
import imageUrl from "@/assets/img_11.png";

import Viewer from "viewerjs";


const messages = ref([
  { sender: 'LV55 管理员 计卓190A杜兴宇', text: '你们是死于？' },
  { sender: 'LV55 管理员 计卓190A杜兴宇', text: '晚修？' },
  { sender: 'LV100 管理员大数据 21覃顺', text: '当时大数据培养方案有矛盾点' },
  { sender: 'LV54 肖桑の犬', text: '死于晚修少一分目前看来是' },
  { sender: 'LV25 大数据2001彭文佳', text: '@肖桑の犬加上大学语文满6分' }
]);

const title = ref('拓扑大数据部闲聊 （267）');
const openViewer = (event) => {
  const id = event.target.id;
  if (id) {
    const element = document.getElementById(id);
    if (element) {
      const viewer = new Viewer(element, {
        movable: true,
        zoomable: true,
      });
      viewer.show();
    }
  }
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