<template>
  <div class="warehouseStatus">
    <div class="header">
      <span class="moudle-title">
        库位状态
      </span>
      <div class="header-color-block">
        <div v-for="item in progressColorKey" :key="item" :style="{ backgroundColor: progressColor[item] }"></div>
      </div>
    </div>
    <div class="moudle">
<!--      <Location v-for="(item,index) in cardList" v-bind="item" :key="index" />-->
      <LocationStatusTable />
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import Location  from '@/components/locationProgress/index.vue'
import {progressColorKey} from "@/utils/progress.js";
import {progressColor} from "@/enum/common.js";

import LocationStatusTable from "./locationStatusTable.vue";

defineProps({
  shelfStatus: {
    type: Array,
  },
})
onMounted(() => {

})

const cardList = ref([
  {
    step: 30,
    number: 'A01',
    isLock: true
  },
  {
    step: 90,
    number: 'A02',
  },
  {
    step: 67,
    number: 'A03',
  },
  {
    step: 67,
    number: 'A04',
  },
  {
    step: 91,
    number: 'A05',
  },
  {
    step: 10,
    number: 'A06',
  },
  {
    step: 2,
    number: 'A07',
  },
  {
    step: 100,
    number: 'A08',
  },
])

</script>

<style lang="scss" scoped>
.warehouseStatus {
  //width: 100%;
  //height: 100%;
  margin-top: 10px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .header-color-block {
      display: flex;
      align-items: center;

      >div {
        width: 50px;
        height: 20px;
      }
    }
  }


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
    margin-top: 30px;
    column-gap: 10px;

  }
}
</style>
