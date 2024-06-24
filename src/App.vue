<template>
  <el-container class="main-container">
    <CartoonNavbar />

    <div id="fullpage">
      <div class="section">
        <CartoonCard title="开端">
          <first_start1/>
        </CartoonCard>
      </div>
      <div class="section">
        <CartoonCard title="开端">
        <first_start2/>
        </CartoonCard>
      </div>
      <div class="section">
        <CartoonCard title="拟合">
          <p>这里是拟合内容。</p>
        </CartoonCard>
      </div>
      <div class="section">
        <CartoonCard title="你好">
          <p>这里是你好内容。</p>
        </CartoonCard>
      </div>
    </div>

    <CartoonFooter />
  </el-container>

</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue';
import fullpage from 'fullpage.js';

import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import First_start1 from '@/views/first_start1.vue';
import CartoonNavbar from '@/components/CartoonNavbar.vue';
import CartoonCard from '@/components/CartoonCard.vue';
import CartoonFooter from '@/components/CartoonFooter.vue';
import CartoonNoTitleCard from "@/components/CartoonNoTitleCard.vue";
import CartoonImage from "@/components/CartoonImage.vue";
import CartoonChatBubble from "@/components/CartoonChatBubble.vue";
import CartoonSignature from '@/components/CartoonSignature.vue';
import First_start2 from "@/views/first_start2.vue";




const activeIndex = ref('home');
const handleSelect = (key, keyPath) => {
  fullpage_api.moveTo(key);
};

const messages = ref([
  { sender: 'LV54 肖桑の犬', text: '5.5才行呀' },
  { sender: 'LV55 管理员 计卓190A杜兴宇', text: '你们是死于？' },
  { sender: 'LV55 管理员 计卓190A杜兴宇', text: '晚修？' },
  { sender: 'LV100 管理员大数据 21覃顺', text: '当时大数据培养方案有矛盾点' },
  { sender: 'LV54 肖桑の犬', text: '死于晚修少一分目前看来是' },
  { sender: 'LV25 大数据2001彭文佳', text: '@肖桑の犬加上大学语文满6分' }
]);

const title = ref('拓扑大数据部闲聊 （267）');

const messages2 = ref([
  { sender: '', text: '寇一飞这byd不回我消息' },
  { sender: 'me', text: '怎么啦' },
  { sender: '', text: '我问他租房的事情' },
  { sender: 'me', text: '你也在这边租房么' },
  { sender: '', text: '我工作的地方租房啊' }
]);

const title2 = ref('大数据2002谢薇');

const messages3 = ref([
  { sender: 'Lv97管理员 大数据20肖砥城', text: '谁通宵' },
  { sender: 'LV97管理员 大数据20肖砥城', text: '我不是' },
  { sender: 'LV97管理员 大数据20肖砥城', text: '我没有啊' },
  { sender: 'LV34 寄算机21王崇文', text: '感觉不如xdcgg 直接通宵' },
  { sender: 'LV100管理员 大数据23-1寇飞舞', text: '感觉不如xdcgg 直接通宵' },
  { sender: 'LV100管理员 大数据23-1寇飞舞', text: '肖神已经连续好几个晚上没在宿舍' },
  { sender: 'LV100管理员 大数据23-1寇飞舞', text: '去卷了' }
]);

const title3 = ref('拓扑大数据部闲聊 （267）');

const messages4 = ref([
  { sender: 'me', text: '啥玩意' },
  { sender: 'me', text: '刚起' },
  { sender: '', text: '是的' }
]);
const title4 = ref('寇一飞');
const messages5 = ref([
  { sender: '刘文正老师', text: '那房子有点烂你要做好心里准备' },
  { sender: 'me', text: '有地方住我就已经得磕头了' },
  { sender: '刘文正老师', text: '可以可以。' },
  { sender: 'me', text: '你找到工作了吗' },
  { sender: '刘文正老师', text: '最近在面吧' }
]);

const title5 = ref('刘文正老师');


const signatures =[ {
  time: '2024-06-30',
  content: '这是一个卡通风格的个性签名组件。'
},{
  time: '2024-06-30',
  content: '这是一个卡通风格的个性签名组件。'
}
];


onMounted(() => {
  nextTick(() => {
    new fullpage('#fullpage', {
      anchors: ['Home', 'About', 'Services', 'Contact'],
      navigation: true,
      showActiveTooltip: true,
      // paddingTop: '60px',
      // scrollOverflow: true,
    });
  });
});
</script>

<style scoped>
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
}



.main-container {
  width: 100%;
  /*min-height: 100vh;*/
  display: grid;
}

#fullpage {
  flex: 1;
  /*margin-top: v-bind(--el-header-height);*/
}
.fullpage-wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  /*padding-top: 60px; !* Adjust padding to ensure content is not hidden behind the header *!*/
}

</style>
