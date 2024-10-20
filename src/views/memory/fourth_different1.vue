<template>

  <div>
    <el-row>
      <el-col :span="24">
        <el-card>

          <div class="mix">
            <div class="show">
              <el-image  id="xiaochou" :src="imageUrl"    @click="openViewer"  style="width: 70%;height: 70%" ></el-image>
            </div>
            <div class="char">
              <p>
                最艰难的一年是2022年，我以为我把你丢了，所以我满世界的去找你的影子。其实我一直想不到什么办法，我的身边也没有任何有过靠谱恋爱经验的人，所以我一直很煎熬，这种煎熬后面也转换成了绝望。
              </p>
              <p>
                其实在这条道路上从来没有人支持过我，我所求助的只有三个人，一个是罗江，一个是我的老师，还有之前我给你发的照片的那个老外。
              </p>
              <p>
                罗江根本没谈过，我的老师希望我能赶紧振作起来，还给我举例了商纣王的故事，他说纣王的爱情故事是绝美的，但是却导致整个国家覆灭。
                那个老外则是直接摇摇头给我说：you should move to next one.但是我要如何去move to next one 呢。
              </p>
              <p>
                在你眼里我是怎样的存在呢，是一直在陪伴你的人，还是一直在你一旁骚扰你的人。 我不知道自己是什么。对我来说你是一个一直让我牵挂的人，
                我经历过男生小丑阶段之燕子没有我你一定要幸福啊。在大多数失眠的夜晚，我都因为你是否受到委屈而伤心，还担心你会因为跟所有高中同学相处不好而自卑，
                所以还想着一定要修复关系。
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
import imageUrl from "@/assets/img_27.png";

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