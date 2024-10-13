<template>




  <div>
    <el-row>
      <el-col :span="24">
        <el-card>
          <div class="mix">

            <div class="char">
              <p>
                为了提醒下做的行为她行为有多疯狂，我可以告诉她的言语到底为我带来了什么。
              </p>
              <p>
                学妹一脸天真的问我，下次答辩是什么时候，我只能沉默。整个实验室40多人，都在讨论学长怎么样，发生了什么。每个老师都在质疑我为什么不找工作，不知道我未来到底是要去做什么。甚至在实验室的老外，也语重心长的说，you should look forward.
                我每天就处在这种充满期待和压力的眼神中，但是即便如此我还是没有做出任何行为挽回自己的脸面，我做不到。我想问一下，她能够在这种环境下，还面带微笑坚强生活下去吗，她到底要把人折磨到什么地步才能满意，才肯放过我？所以就在受不了精神上的折磨之后，想趁着你的生日进行最后告别。
                罗江其实没做错，他把你们商量后说的话原封不动的给了我。但是我该如何面对，做出什么反应，谁来告诉我？ 可能对你们来说只要我去下跪道歉就能解决问题，但是我认为这是所有悲剧中最为悲剧，扭曲的结局，我可以给你道歉，但是我不可能为她们的恶意，疯狂去道歉，这只会加剧她们的疯狂，如果没有你我到底会被怎么样?我要在20岁的年纪带着案底去过下半辈子么，所以我选择把大脑放空，我决定不再思考。
                本来在12月份，我以为她能正确传达我的自认为诚恳，充满愧疚，而且下定决心离开不再造成困扰的告别，而且我认为就算后续有问题，她也能够及时传达我，你说怎么才能保证离开，那就是不再去看你，不然我怎么可能忍得住，但是结果就是，她非要把错误怪罪到谁的身上，而且也没有担起保证让我离开的责任。
                她认识不到，如果我要怪罪的话，也是怪罪那个一直阻止我正常沟通，持续不断的让我自卑，压榨我的精神的自己么？她认为我认认真真写这封信的目的，就是肯定来追谁的责的么？确实如此，自己一直以来举棍痛击的人，怎么可能是个好人？看来我的宽容完全的多余的，因为她立刻就把这份把我逼疯的责任，归咎于你的身上，把我费劲心思，不拖泥带水，打算永远终结这份连锁的怨恨的目的，轻易的扭曲了。 我还有什么办法来挽回，在我这么多年，
                所思所想的一切的一切，所有我认为对你有益的想法和行为（我没说没做过伤害你的事），一次一次又一次的未能如愿， 一次又一次被歪曲，姑且不论我做的努力，我的行为从来有被尊重过么，我到底有多么心胸宽广，多伟大，才能承受着这种耻辱，带着这份咒怨活下去，所以我决定不再隐瞒。
              </p>
              <p>
                结束掉这个游戏吧，她到底做到了什么，按照她的做法，是引导了我在最痛苦的时期继续前进，让我以积极乐观的心态去追求你，还是说能理解我的想法，让我不拖泥带水的离开，
                还是说在认识到自己之前的行为可能做错之后，及时调节我们之间的关系，她没有，她什么都不懂，她在这段关系中极力介入，单纯是她觉得那种像小说一样的剧情发生在自己身边，她的行为可以说从来没有让事情良性发展过。
                如果她再不离开，我相信在那么多双眼睛见证过的情况下，她逃不开法律的制裁。
              </p>
              <p>
                抱歉，我还没有成长为能够把这些不良情绪藏着心中的人，我需要一些抱怨和牢骚，尽管之前我尝试过压制过一次，但是我没有办法去释放这种情绪。
                你说的那些记得很清楚，你说不会在乎我的想法了，你说把我和罗江都删了。我很后悔去完全信任你的闺蜜，我本认为再怎么说她们的做法也是对你有益的，今后我都会先确定你的意见再行动，不会再把别人的想法当成你的想法。
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
  width: 80%;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
}

</style>