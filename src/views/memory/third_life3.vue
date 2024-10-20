<template>

  <div>
    <el-row>
      <el-col :span="24">
        <el-card>

          <div class="mix">
            <div class="show">
              <CartoonChatBubble :title="title5" :messages="messages5"/>
            </div>
            <div class="char">
              <p>
                我是一个被温柔对待的人，因为我无论怎么摆烂，怎么消沉，我的实验室里的老师，学生都没有放弃过我，虽然我很早很早以前就不再插手实验室里的诸多事情，但是他们每时每刻都在治愈我。
                我觉得这跟虚荣没关系，我只是相对于其他人，刚好走到了比较正确的路上，这也是我为什么我当初没有跟你闺蜜直接对线的原因之一。
              </p>
              <p>
                这是我之前说的贵人老师，现在他把他多租了一年多的房子免费给了我，我所有的，自认为算是成就的一些东西，大部分都离不开他。
                即使是这样，我也没有勇气去面对新的生活。
                实验室里的一切的一切，还有我的骄傲，在今年4月份之前（后面我稍微变得愿意和别人聊天了一些）我都没有向任何人提起过（除了罗江），我的父母也只是知道我待在实验室过。我只想把故事分享给你，其实每个瞬间我都想，你要是在身边就好了，那时候你会是怎样的表情呢。
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


const messages5 = ref([
  { sender: '刘文正老师', text: '那房子有点烂你要做好心里准备' },
  { sender: '肖砥城', text: '有地方住我就已经得磕头了' },
  { sender: '刘文正老师', text: '可以可以。' },
  { sender: '刘文正老师', text: '你找到工作了吗' },
  { sender: '肖砥城', text: '最近在面吧' }
]);

const title5 = ref('刘文正老师');


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