<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-card>
          <div class="mix">
            <div class="char">

              <p>
                实验室里的老外，一个在美国又申请到了全奖硕士，他又准备读另一个大学的研究生，他之前还吱吱歪歪的用中文告诉我，我也可以去美国。另一个直接毕业了，他要继续在中国做外贸生意，我问他你怎么开始这个生意的，他说是中国老板介绍的。
              </p>
              <p>
                所有人都迈向了新的生活，就像流水一样，自然，悄无声息，唯独留下了我。但是我不打算责备自己，我认为，摆烂很爽，我的摆烂也使得我性格不至于扭曲，人生需要摆烂来平复心情，你说我不羡慕他们生活那肯定是假的，但是你要说他们不羡慕我这种摆烂生活我也是不信的。
                我记得我对你造成的种种伤害，我记得我在大二疯狂追求你，然后突然有一天一声不吭就消失。我记得大三又重新找到你，然后因为自卑没有好好表达自己的感情，然后无缘无故的退出了班群，我为自己的不成熟羞愧。我记得自己一声不吭，突然给你寄信，然后给你造成的困扰。
                我记得自己在给你回复后，在没有询问到你的意见就再一次的离开。我能想象到你在我消失期间所产生的不解，困惑和痛苦。

              </p>
              <p>
                我还记得你大一时期，带着我玩游戏，跟我聊天
                是时候终结这份痛苦，是时候迈出新的一步了。

                我决定不再自卑，我将会用接下来的时间，去弥补这份本该美好的青春，我不会再一言不合的就消失，无论如何，我都会把这些伤痛弥补。现在我能感觉到我忘记了很久的东西，那就是在为我们的未来去考虑，去努力时，会让我觉得幸福。
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
import CartoonChatBubble from "@/components/CartoonChatBubble.vue";


import Viewer from "viewerjs";


const messages5 = ref([
  { sender: '刘文正老师', text: '那房子有点烂你要做好心里准备' },
  { sender: '肖砥城', text: '有地方住我就已经得磕头了' },
  { sender: '刘文正老师', text: '可以可以。' },
  { sender: '刘文正老师', text: '你找到工作了吗' },
  { sender: '肖砥城', text: '最近在面吧' }
]);

const title5 = ref('刘文正老师');
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