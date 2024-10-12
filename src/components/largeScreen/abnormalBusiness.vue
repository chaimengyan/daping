<template>
  <div class="homework">
    <span class="moudle-title">
      异常业务统计
    </span>
    <div class="moudle">
      <div v-for="(item,index) in cardList" class="moudle-card" key="index">
        <img class="card-bg" :src="item.bg">
        <div class="card-content">
          <div class="card-number" :style="item.desc === '超期未入库业务' ? 'color: #f7535f' : 'color: #1a796a'">
            <span>{{ abnormalBusinessData[item.number] }}</span>
          </div>
          <img class="card-icon" :src="item.icon">
        </div>
        <div class="card-desc">{{ item.desc }}</div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

defineProps({
  abnormalBusinessData: {
    type: Object,
  },
})
onMounted(() => {

})

const cardList = ref([
  {
    bg: '/images/noWarehousingBg.png',
    icon: '/images/noWarehousingIcon.png',
    number: 'longTimeIn',
    desc: '超期未入库业务',
  },
  {
    bg: '/images/noPickingBg.png',
    icon: '/images/noPickingIcon.png',
    number: 'longTimeOut',
    desc: '超期未领料业务量',
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
    margin-top: 40px;
    justify-content: space-around;
    //padding: 0 80px;

    height: 0 !important;
    flex: 0.8;
    column-gap: 10px;

    //.moudle-card:first-child {
    //  margin-right: 80px;
    //}
    .moudle-card {

      // flex: 1;
      // width: 0;
      height: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      flex-direction: column;
      .card-bg {
        // width: 100%;
        height:100%;
      }
      .card-content {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px 9px 11px 10px;

        .card-number {
          font-size: 58px;
          font-weight: bold;
          color: #ffffff;
          align-self: center;
        }

        .card-icon {
          width: 40px;
          margin-top: 6px;
          align-self: center;
        }
      }
      .card-desc {
        font-size: 14px;
        text-align: center;
        margin-top: 18px;
        color: #1a796a;

      }

    }
  }


}
</style>
