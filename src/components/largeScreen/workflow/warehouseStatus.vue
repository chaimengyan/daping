<template>
  <div class="warehouseStatus">
    <span class="moudle-title">
      空闲盘点中
    </span>
    <div class="moudle">
      <Location v-bind="item" v-for="(item, index) in cardList" :key="index"/>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import Location from '@/components/location/index.vue'

onMounted(() => {

})

const cardList = ref([
  {
    status: 1,
    number: 'A01',
  },
  {
    status: 1,
    number: 'A02',
  },
  {
    status: 0,
    number: 'A03',
  },
  {
    status: 0,
    number: 'A04',
  },
  {
    status: 0,
    number: 'A05',
  },
  {
    status: 2,
    number: 'A06',
  },
  {
    status: 2,
    number: 'A07',
  },
  {
    status: 2,
    number: 'A08',
  },
])


</script>

<style lang="scss" scoped>
.warehouseStatus {
  //width: 100%;
  //height: 100%;
  padding: 10px 20px;
  padding-top: 0;
  border: #ffffff solid 2px;
  border-radius: 10px;
  background-color:  #edf4fe;
  margin-top: 20px;
  .moudle-title {
    color: #f7ab00;
    font-size: 16px;
    font-weight: bold;
    position: relative;
    padding-left: 15px;
    &::before {
      position: absolute;
      top: 20%;
      left: 0;
      content: '';
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #f7ab00;
      transform: translateY(-50%);
    }
  }

  .moudle {
    display: flex;
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: space-between;

    gap: 20px;
  }
}
</style>
