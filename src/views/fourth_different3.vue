

<template>

  <div>
    <el-row>
      <el-col :span="24">
        <el-card>
          <div class="mix">
            <div class="show">
              <el-image  id="wenjian" :src="imageUrl"    @click="openViewer"  style="width: 50%;height: 50%" ></el-image>
              <el-image  id="weilai" :src="imageUrl1"    @click="openViewer"  style="width: 50%;height: 50%;margin-top: 10px" ></el-image>
            </div>
            <div class="char">
              <p>
                在那份担忧下，我无论如何都想知道你过的怎么样，于是就有了之前的找老师计划。
              </p>
              <p>
                这个puzzle写于23年的7月份，我想着在暑假期间准备一个完美的计划：在老师的介绍下找到你的室友，因为是通过老师传达消息就会消除疑虑。通过
                说出心中的疑惑和你的室友沟通，确定你的生活状态，以及了解你的爱好，决定自己是不是该出现，如果有机会的话，在室友帮助下，准备一个惊喜party。
                遗憾的是老师爽约了，他对我之前的承诺支支吾吾，我唯一可以在不影响你的情况下了解你的方法就这样泡汤了。所以那份担心一直一直持续着。这份担心知道你们打算报警才烟消云散，
                至少我排除了最绝望的，被室友排挤的情况。这也是我后面为什么对于自己想对你说的话显得不那么纠缠的原因，不是为了惩罚你，而是我知道你好就已经满足了，那时我觉得肯定有一天
                你可以走出阴影，因为你身边已经有一群爱着你的人。
              </p>
              <p>
                我真的非常非常的绝望和无助，我失去了了解你的机会，我所做的努力又一次宣告泡汤。我又找不到你了。
              </p>
              <p>
                我之前还计划过很多东西，包括很多与你共同前进的未来，但是后来我已经想象不到什么未来了，你到底在哪里呢。
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
import imageUrl from "@/assets/img.png";
import imageUrl1 from "@/assets/img_28.png";
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