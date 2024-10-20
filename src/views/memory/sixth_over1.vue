

<template>



  <div>
    <el-row>
      <el-col :span="24">
        <el-card>
          <div class="mix">
            <div class="char">
              <p>
                我也记得你大一时，你带着我打游戏，我们聊天，偶尔吐槽一下其他人，你给我带来的一切，我都记得很清楚。
                现在的我拥有什么，当初的自信和骄傲，早就烟消云散了。我一直在想，如果有人在大二的时候告诉我，你为什么要自卑，为什么不向前看，可能人生会有很大转折吧。
              </p>
              <p>
                我见证了许多人的大学四年。我之前跟你说的大一时期我那些经常打游戏的室友，他们大部分人都跟我一样是无业状态。就在最近，我跟他们的联系频率提高了很多，之前
                那个在半夜疯狂玩游戏影响我休息的那个人，在我们一起吃火锅时说到，他大一的精神状态非常不好，这让我有点羞愧，因为我当时还是一个会每天愤怒质问他为什么不努力的人，
                但是即使是这样他也没有责怪过我，我还在在他的毕业生登记表上开玩笑的写道：该生从不抽烟喝酒，作息规律。另一个前室友因为买的毕设出现了问题，找我疯狂调试，我陪他熬了很多个
                夜，改文档，写代码。还有一个我的现室友，他买的毕设出了更大的问题，2300块钱的毕设只有300行代码，然后我就愤怒的和他们对线，质问他们这样忽悠人。然后我就受到了大学中加上你闺蜜的第三个威胁，
                他们把我那个室友的名字说出来，说会告诉我的老师。然后我就反骂过去，你的代码我20分钟就能写出来，报警你就报反正我们也不会用。估计他们之前没遇到我们这么硬核的，最终就是收到了对面一半的退款和道歉，我的室友甚至还想拿到剩下的另一半，我阻止了，
                因为我也没有遇到他这么硬核的，我怂了。于是我就在毕设答辩附近熬了更多的夜，完全重新写了另一个毕设，甚至当时我自己的毕设都没有完全写完。
              </p>
              <p>
                我实验室里的其他人，最后没能找到工作的只有我一个，其他所有人都有着相当不错的待遇。当我问起他们工作经历时，得知原来他们从大二开始就实习了，其中一个人有从初中带上来的女朋友，他跟我说他们就是奔着结婚去的。当初跟我在一起组队比赛时，他还是一个羞涩的，
                所有组织事宜靠我处理的一个小男生。现如今已经变成一个组织饭局，然后还能在吃饭时照顾我的成熟的男人了。我很清醒的意识到，我已经离普通人生活很远了。
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