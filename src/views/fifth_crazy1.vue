<template>

<!--  疯批闺蜜-->


<!--  但是转念一想，所有的祸不就是因为而且吗。抱歉，我还没有成长为能够把这些不良情绪藏着心中的人，我需要一些抱怨和牢骚，尽管之前我尝试过压制过一次，但是我没有办法去释放这种情绪。-->

<!--  你说的那些记得很清楚，你说不会在乎我的想法了，你说把我和罗江都删了。我很后悔去完全信任你的闺蜜，我本认为再怎么说她们的做法也是对你有益的，今后我都会先确定你的意见再行动，不会再把别人的想法当成你的想法。-->



  <div>
    <el-row>
      <el-col :span="24">
        <el-card>
          <div class="mix">
<!--            <div class="show">-->

<!--            </div>-->
            <div class="char">
              <p>
                你知道当初我为什么对你的闺蜜，没有发生言语冲突么。因为我本来就认为她所作的一切都是为了你。而且我如果去指责她，去说她对我造成的影响，会损坏到你们的关系，
                因为我不确定你身边是否只有这一个人关心你，如果我把原因说出来，导致你们宿舍关系不和，可能对你造成十分恶劣的影响，而且我也不认为我指责她能让我们的关系带向缓和。但是既然已经毕业了，我就把我真正困扰我的原因说出来吧。
                我觉得你身边有个疯子。我觉得你所有的一切，你自己的想法，你的言语，都是那么温柔，可爱。但是只要和她沾上关系，我就觉得疯狂，不可理解，委屈和痛苦。
                相信你也听说过一个心理学实验，一群人需要分别加班警察和囚犯一同生活一个星期。结果就是在明知道这是一个实验的情况下，警察还是会在夜里痛打囚犯，因为他们认为这是理所当然的。
                你的闺蜜就是一个沉迷在这场游戏中的警察，她举起的只有名为正义的警棍。
              </p>

              <p>
                事实证明，攻击性的言语确实会导致一个人的自卑，无论我怎么努力，怎么往积极方面考虑，取得怎样的成就，都抵消不了这些东西给我带来的消极影响。这就是我为什么大二整整一年
                都不敢再卖出一步去沟通和解决问题的原因，这就是我大三之后人生停转的全部原因，虽然我也因为你不理解我而痛苦，但是最让我痛苦，让我饱受折磨的是我在承受了一年的痛苦之后 ，
                不仅没有消除那种自卑，而且又要开启新一轮的痛苦，我的下辈子都不会让这种人再出现在我的视野中。
                我根本不想听有关这方面的一点反驳，我知道她肯定有自己的理由，比如为了让一个骚扰犯离开你之类的，而且事实也证明在她面前，我所做的一切都是那么恶心，不可饶恕，
                但是我懒得多解释一句话，因为我每次解释都会带来新一轮的反驳，然后我又要孤独的，痛苦的去把这种消化不了的情绪压抑在心中，这种争吵是无休止的，无论我怎么想用和平方法解决，
                都会招致一个更大的灾祸，所以我决定不再容忍，让她认识到自己在做什么吧，我不知道她是否因为有些人给她带来过什么创伤，才导致做法是如此极端，但是求求她别把这个东西发泄到
                现实生活中，事实证明就算我不以极端方式去回应她的极端，所有的伤痛，不理解，沉默都转移到了我们中间，而且她也不用因此背负任何责任。我为自己的整个青春都在去尝试消化一个
                置身事外的疯子的言语所造成的损害而感到羞愧，我花了两年时间去认识到，宽容和理解在疯子的脑子里是不存在的。我不会为我自己的言语产生任何罪恶感，因为我对自己的惩罚已经够多
                了。
              </p>
              <p>
                我在很早以前就发现你很容易受其他人的想法而影响，这可能源于你对自己想法的不自信。但是我可以保证，你温柔，善良，而且说的话比谁都有力量，你按照闺蜜想法所做的一切所产生的后果，你的闺蜜都没有想要去为此负责的迹象，她只把局面带向更遥远的极端。
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
  //width: 70%;

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
  width: 80%;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
}

</style>