<template>
  <div class="warehouseStatus">
    <div class="header">
      <span class="moudle-title">
        货架状态
      </span>
      <div class="header-color-block">
        <div v-for="item in progressColorKey" :key="item" :style="{ backgroundColor: progressColor[item] }"></div>
      </div>
    </div>
    <div class="moudle">
      <LocationShe v-for="(item,index) in shelfAllStatus" v-bind="item" :key="index" />
    </div>

  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import LocationShe from '@/components/locationShelvesProgress/index.vue'
import {progressColorKey} from "@/utils/progress.js";
import {progressColor} from "@/enum/common.js";

defineProps({
  shelfAllStatus: {
    type: Array,
  },
})

onMounted(() => {

})

const cardList = ref([
  { list: [80, 32, 20], number: 'A01', isLock: true },
  { list: [80, 32, 20], number: 'A02' },
  { list: [80, 32, 20], number: 'A03' },
  { list: [80, 32, 20], number: 'A04' },
  { list: [80, 32, 20], number: 'A05' },
])


</script>

<style lang="scss" scoped>
.warehouseStatus {
  margin-top: 40px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;

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
      height: 80%;
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
