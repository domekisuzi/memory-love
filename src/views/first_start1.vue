<template>
  <div class="content">
    <el-row gutter="20">
      <el-col :span="24">
        <el-card>
          <!-- 循环渲染历史签名内容 -->
          <div v-for="(item, index) in historyItems" :key="index" class="block">
            <!-- 图片 -->
            <el-image class="image" :src="item.imageSrc" :alt="item.imageAlt"></el-image>
            <!-- 文字内容 -->
            <div class="text">
              <p v-html="item.text"></p>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
// 导入历史签名图片
import img21 from '@/assets/img_21.png';
import img20 from '@/assets/img_20.png';
import img16 from '@/assets/img_16.png';
import img22 from '@/assets/img_22.png';
import img23 from '@/assets/img_23.png';
import img17 from '@/assets/img_17.png';
import img18 from '@/assets/img_18.png';
import img19 from '@/assets/img_19.png';

// 定义历史签名数据
const historyItems = [
  {
    imageSrc: img21,
    imageAlt: 'img_21',
    text: '我的历史个签，在22个历史签名中，21个都是对你说的，所以从某种意义上说是你让我变得稍微外向？？',
  },
  {
    imageSrc: img20,
    imageAlt: 'img_20',
    text: '最开始的这个"My heart burning"（现在看来好羞耻），也是我们矛盾的起点，就是班里一个女生向我表白。',
  },
  {
    imageSrc: img16,
    imageAlt: 'img_16',
    text: '这个女生后面经常跑到我们实验室，她是一个乐观开朗的女孩，没有因为我拒绝而过多伤心，飞速地向我们班下一位男生发起了攻势，就在前几天她表白又失败了，但是还是一如既往的乐观。',
  },
  {
    imageSrc: img22,
    imageAlt: 'img_22',
    text: '这个再等等就是我已经取得一定成就的时候才自信发出来的话，我一直在想着怎么样才能更好的表现自己，于是我想到了吉他（但是一直没学好，我的朋友很震惊我跟着书学了很久）。现在应该有个一年多没碰那个了吧。我还之前还跟你说我要学日语来着。 唐ちゃんすごくかわいい！一直想用纯正大佐音告诉你来着。其实22年7月我就考了一次了，但是当时因为给黑心实验室老师打工导致听力的时候睡觉，因为疫情耽误了一年以后才过。',
  },
  {
    imageSrc: img23,
    imageAlt: 'img_23',
    text: '好想被你夸奖啊，我从那时开始就这么想象着。',
  },
  {
    imageSrc: img17,
    imageAlt: 'img_17',
    text: '',
  },
  {
    imageSrc: img18,
    imageAlt: 'img_18',
    text: '这些是我被你拒绝后，大脑开始出现问题的时期，具体为什么这么难过后面会解释，跟被拒绝的关系不是很大，其实很早之前，在大约大二的暑假，也就是我说再等等之前的时候我就察觉了自己的异样，比如说走在路上也会莫名其妙的哭泣。',
  },
  {
    imageSrc: img19,
    imageAlt: 'img_19',
    text: '后面的也就是最近才发生的事情，后面再讨论吧。',
  },
];

// 定义样式
const contentStyle = {
  padding: '20px',
};

const blockStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '20px',
};

const imageStyle = {
  width: '150px',
  height: '150px',
  marginRight: '20px',
};

const textStyle = {
  flex: '1',
};

</script>

<style scoped>
.content {
  padding: 20px;
}

.block {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.image {
  width: 150px;
  height: 150px;
  margin-right: 20px;
}

.text {
  flex: 1;
}
</style>
