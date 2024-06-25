<template>








  <!--  所以我无论如何都想知道你过的怎么样，于是就有了之前的找老师计划。-->

  <!--  <img alt="./img.png" src="./img.png"/>-->

  <!--  这个puzzle写于23年的7月份，我想着在暑假期间准备一个完美的计划：在老师的介绍下找到你的室友，因为是通过老师传达消息就会消除疑虑。通过-->
  <!--  说出心中的疑惑和你的室友沟通，确定你的生活状态，以及了解你的爱好，决定自己是不是该出现，最后在室友帮助下，准备一个惊喜party。-->
  <!--  遗憾的事老师爽约了，我唯一可以在不影响你的情况下了解你的方法就这样泡汤了。所以那份担心一直一直持续着。这份担心知道你们打算报警才烟消云散，-->
  <!--  至少我排除了最绝望的，被室友排挤的情况。这也是我后面为什么对于自己想对你说的话显得不那么纠缠的原因，不是为了惩罚你，而是我知道你好就已经满足了。-->

  <!--  但是我真的非常非常的绝望和无助，我失去了了解你的机会，我所做的努力又一次宣告泡汤。-->


  <!--  <img alt="./img_28.png" src="./img_28.png"/>-->
  <!--  我之前还计划过很多东西，包括很多与你共同前进的未来，但是后来我已经想象不到什么未来了，我连自己的未来都无法掌握。-->

  <div>
    <el-row>
      <el-col :span="24">
        <el-card>

          <div class="mix">
            <div class="show">
              <el-image  id="feiwen" :src="imageUrl"    @click="openViewer"  style="width: 70%;height: 70%" ></el-image>
            </div>
            <div class="char">
              <p>
                但是现在看来我觉得纯逆天，过分操心到恶心的地步，不过这也确实反应了当初最纯真的想法。
              </p>
              <p>
                说起纯真我回忆起来大一的某个夜晚，前后文虽然我不记得了，但是你突然对我说我在内涵你什么。然后我牵强的解释我也看南通番。
                抱歉，这其实早就超出了纯情小boy的接收范围，我决定为你颁发我见过的女孩里最瑟瑟奖。要是我们都会像当初那么坦率就好了，就像你当初质问我
                为什么没有有趣的表情包了。仔细想想好像是我最不坦率吧。。。。代入你的视角我觉得我的行为根本是常人无法理解的，我会改的。
              </p>
              <p>
                你知道我为什么那么执着于KFC那次事情么，不是多想让你说你喜欢我，而是那是我唯一让我回忆起你的机会。整整大学四年，我都没有再见过你。这导致的情况就是，
                做的梦一直都是去尝试寻找你的身影，你应该想象不到这种感觉有多糟糕。然后还有很逆天的，之前你说什么男朋友，然后我就做的梦里就在你隐隐约约的身影旁边加了个隐隐约约的男朋友
                ，em，只能说请你自行体会吧。我只有通过回忆过去，才能尝试说服你在我身边，说服你在看着我，但是这仍然不是很奏效。
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
import imageUrl from "@/assets/img_29.png";

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