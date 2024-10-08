<template>
  <div class="homework">
    <span class="moudle-title">
      仓库作业情况统计
    </span>
    <div class="moudle">
      <div v-for="(item,index) in cardList" class="moudle-card" key="index">
        <img class="card-bg" :src="item.bg">
        <div class="card-content">
          <img class="card-icon" :src="item.icon">
          <div class="card-number">
            <span>{{ homeworkData[item.number] }}</span>
          </div>
          <div class="card-desc">{{ item.desc }}</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

defineProps({
  homeworkData: {
    type: Object,
  },
  
})
onMounted(() => {

})

const cardList = ref([
  {
    bg: '/images/hwRedBg.png',
    icon: '/images/today.png',
    number: 'inAndOutCount',
    desc: '当日出入库总量',
  },
  {
    bg: '/images/hwRedBg.png',
    icon: '/images/completed.png',
    number: 'inAndOutAllCount',
    desc: '已完成出入库总量',
  },
  {
    bg: '/images/hwRedBg.png',
    icon: '/images/residue.png',
    number: 'inAndOutPlanCount',
    desc: '剩余出入库总量',
  },
  {
    bg: '/images/hwGreenBg.png',
    icon: '/images/dispatchArea.png',
    number: 'goodsCount',
    desc: '发货区总量',
  },
  {
    bg: '/images/hwGreenBg.png',
    icon: '/images/goodsShelvesIcon.png',
    number: 'shelfCount',
    desc: '货架总量',
  },
])


</script>

<style lang="scss" scoped>
.homework {
  //width: 100%;
  //height: 100%;
  padding: 20px;
  border: #ffffff solid 2px;
  border-radius: 10px;
  background-image: linear-gradient(to bottom, #b7d8d7, #edf4fe);
  display: flex;
  flex-direction: column;


  .moudle-title {
    color: #1a796a;
    font-size: 18px;
    font-weight: bold;
    position: relative;
    padding-left: 15px;
    &::before {
      position: absolute;
      top: 50%;
      left: 0;
      content: '';
      width: 6px;
      height: 90%;
      background-color: #1a796a;
      transform: translateY(-50%);
    }
  }
  .moudle {
    display: flex;
    margin-top: 10px;
    height: 0 !important;
    flex: 1;
    justify-content: space-between;
    column-gap: 10px;
    .moudle-card {
      height: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      .card-bg {
        height: 100%;
      }
      .card-content {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        padding: 0px 9px 11px 10px;
        .card-icon {
          width: 30px;
          margin-top: 12px;
          margin-left: 12px;
        }
        .card-number {
          font-size: 58px;
          font-weight: bold;
          color: #ffffff;
          align-self: center;
        }
        .card-desc {
          font-size: 14px;
          align-self: center;
          margin-bottom: 18px;
        }
      }

    }
  }


}
</style>
