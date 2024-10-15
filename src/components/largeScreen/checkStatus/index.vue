<template>
  <div class="homework">
    <div class="header">
      <span class="moudle-title">
        电商库位状态
      </span>
      <span class="box">
        <img class="box-img" src="/images/emptyBox.png" alt="">已占用
        <img class="box-img" src="/images/box.png" alt="">未占用
      </span>
    </div>
    
    <div class="moudle">
      <!-- <WarehouseLocation :shelfStatus="checkStatusData.shelfStatus" />
      <GoodsShelves :shelfAllStatus="checkStatusData.shelfAllStatus" /> -->
      <LocationStatusTable :shelfType="'0'" :shelfNum="'3'" :crudHeader="header1" :crudData="tableData1"/>
      <div class="aisle">
        <img src="/images/aisle.png" alt="">
      </div>
      <div class="goods-shelves">
        <div class="goods-shelves-item">
          <div class="goods-shelves-left">
            <LocationStatusTable :shelfType="'1'" :shelfNum="'2'" :crudHeader="header2" :crudData="tableData2"/>
          </div>
          <div class="goods-shelves-right">
            <LocationStatusTable :shelfType="'2'" :shelfNum="'2'" :crudHeader="header3" :crudData="tableData3"/>
          </div>
        </div>

        <div class="goods-shelves-item">
          <div class="goods-shelves-left">
            <LocationStatusTable :shelfType="'1'" :shelfNum="'1'" :crudHeader="header2" :crudData="tableData4"/>
          </div>
          <div class="goods-shelves-right">
            <LocationStatusTable :shelfType="'2'" :shelfNum="'1'" :crudHeader="header3" :crudData="tableData5"/>
          </div>
        </div>

      </div>
      <div class="aisle">
        <img src="/images/aisle.png" alt="">
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted,computed } from 'vue'
import GoodsShelves from '@/components/largeScreen/checkStatus/goodsShelves.vue'
import WarehouseLocation from '@/components/largeScreen/checkStatus/warehouseLocation.vue'
import LocationStatusTable from "./locationStatusTable.vue";

const props = defineProps({
  checkStatusData: {
    type: Object,
  },
})

const tableData1 = computed(() => groupBy(props.checkStatusData['03'], header1.value.map(h=>(h.label))))
const tableData2 = computed(() => groupBy(props.checkStatusData['02'], header2.value.map(h=>(h.label))))
const tableData3 = computed(() => groupBy(props.checkStatusData['02'], header3.value.map(h=>(h.label))))
const tableData4 = computed(() => groupBy(props.checkStatusData['01'], header2.value.map(h=>(h.label))))
const tableData5 = computed(() => groupBy(props.checkStatusData['01'], header3.value.map(h=>(h.label))))

onMounted(() => {
  console.log(groupBy(props.checkStatusData['03'], header1.value.map(h=>(h.label))),'111111');
})

const groupBy = (array, keys) => {
  if(!array) return []
  console.log(array,'array');
  return array.filter(obj => {
      return Object.keys(obj).some(key => keys.includes(key))
    }
  ).reverse()
};


const header1 = ref([
  { label: '24', dataIndex: '24', width: 20 },
  { label: '23', dataIndex: '23', width: 20 },
  { label: '22', dataIndex: '22', width: 20 },
  { label: '21', dataIndex: '21', width: 20 },
  { label: '20', dataIndex: '20', width: 20 },
  { label: '19', dataIndex: '19', width: 20 },
  { label: '18', dataIndex: '18', width: 20 },
  { label: '17', dataIndex: '17', width: 20 },
  { label: '16', dataIndex: '16', width: 20 },
  { label: '15', dataIndex: '15', width: 20 },
  { label: '14', dataIndex: '14', width: 20 },
  { label: '13', dataIndex: '13', width: 20 },
  { label: '12', dataIndex: '12', width: 20 },
  { label: '11', dataIndex: '11', width: 20 },
  { label: '10', dataIndex: '10', width: 20 },
  { label: '09', dataIndex: '9', width: 20 },
  { label: '08', dataIndex: '8', width: 20 },
  { label: '07', dataIndex: '7', width: 20 },
  { label: '06', dataIndex: '6', width: 20 },
  { label: '05', dataIndex: '5', width: 20 },
  { label: '04', dataIndex: '4', width: 20 },
  { label: '03', dataIndex: '3', width: 20 },
  { label: '02', dataIndex: '2', width: 20 },
  { label: '01', dataIndex: '1', width: 20 },
])
// const tableData1 = ref([
// { '24': true, '23': true, '22': true, '21': true, '20': true, '19': false,'18': true, '17': true, '16': false,'15': false, '14': true, '13': true,'24': true, '12': true, '11': true,'10': true, '09': true, '08': true,'07': true, '06': true, '05': true,'04': true, '03': true, '02': true,'01': false},
// { '24': false, '23': true, '22': true, '21': false, '20': true, '19': true,'18': false, '17': true, '16': true,'15': true, '14': true, '13': true,'24': true, '12': true, '11': true,'10': true, '09': true, '08': true,'07': true, '06': true, '05': true,'04': true, '03': true, '02': true,'01': true},
// { '24': false, '23': false, '22': true, '21': true, '20': true, '19': true,'18': true, '17': true, '16': false,'15': true, '14': true, '13': true,'24': true, '12': true, '11': true,'10': true, '09': true, '08': true,'07': true, '06': true, '05': true,'04': true, '03': true, '02': true,'01': true},
// { '24': false, '23': true, '22': false, '21': true, '20': false, '19': true,'18': false, '17': true, '16': false,'15': true, '14': true, '13': true,'24': true, '12': true, '11': true,'10': true, '09': true, '08': true,'07': true, '06': true, '05': true,'04': true, '03': true, '02': true,'01': true},
// ])

const header2 = ref([
  { label: '21', dataIndex: '21', width: 20 },
  { label: '20', dataIndex: '20', width: 20 },
  { label: '19', dataIndex: '19', width: 20 },
  { label: '18', dataIndex: '18', width: 20 },
  { label: '17', dataIndex: '17', width: 20 },
  { label: '16', dataIndex: '16', width: 20 },
  { label: '15', dataIndex: '15', width: 20 },
  { label: '14', dataIndex: '14', width: 20 },
  { label: '13', dataIndex: '13', width: 20 },
  { label: '12', dataIndex: '12', width: 20 },
  { label: '11', dataIndex: '11', width: 20 },
  { label: '10', dataIndex: '10', width: 20 },
  
])
// const tableData2 = ref([
// {  '21': true, '20': true, '19': false,'18': true, '17': true, '16': false,'15': false, '14': true, '13': true,'24': true, '12': true, '11': true,'10': true, },
// { '21': false, '20': true, '19': true,'18': false, '17': true, '16': true,'15': true, '14': true, '13': true,'24': true, '12': true, '11': true,'10': true, },
// {  '21': true, '20': true, '19': true,'18': true, '17': true, '16': false,'15': true, '14': true, '13': true,'24': true, '12': true, '11': true,'10': true, },
// { '21': true, '20': false, '19': true,'18': false, '17': true, '16': false,'15': true, '14': true, '13': true,'24': true, '12': true, '11': true,'10': true, },

// ])

const header3 = ref([
  { label: '09', dataIndex: '9', width: 20 },
  { label: '08', dataIndex: '8', width: 20 },
  { label: '07', dataIndex: '7', width: 20 },
  { label: '06', dataIndex: '6', width: 20 },
  { label: '05', dataIndex: '5', width: 20 },
  { label: '04', dataIndex: '4', width: 20 },
  { label: '03', dataIndex: '3', width: 20 },
  { label: '02', dataIndex: '2', width: 20 },
  { label: '01', dataIndex: '1', width: 20 },
])
// const tableData3 = ref([
// { '09': true, '08': true,'07': true, '06': true, '05': true,'04': true, '03': true, '02': true,'01': false},
// { '09': true, '08': true,'07': true, '06': true, '05': true,'04': true, '03': true, '02': true,'01': true},
// { '09': true, '08': true,'07': true, '06': true, '05': true,'04': true, '03': true, '02': true,'01': true},
// { '09': true, '08': true,'07': true, '06': true, '05': true,'04': true, '03': true, '02': true,'01': true},

// ])

// const tableData4 = ref([])
// const tableData5 = ref([])



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
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .moudle-title {
    color: #1a796a;
    font-size: 18px;
    font-weight: bold;
    position: relative;
    padding-left: 15px;
    margin-bottom: 10px;
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
  .box {
    display:flex;
    align-items: center;
    color: #1a796a;
    font-size: 16px;
    font-weight: bold;
    .box-img {
      width: 30px;
      height: 100%;
      margin-left: 20px;
      margin-right: 10px;

    }
  }
  .moudle {
    // margin-top: 60px;
     display: flex;
     flex-direction: column;
    flex: 1;
    height: 0;
    .aisle {
      // flex-shrink: 0;
      width: 100%;
      margin-top: 10px;
      margin-bottom: 10px;
      // display: flex;
      // flex-direction: column;
      // position: relative;

      >img {
        width: 100%;
      } 
    }

    .goods-shelves {
      height: 0;
      flex: 1;
      display: flex;
      flex-direction: column;
      .goods-shelves-item {
        flex: 1;
        height: 0;
        display: flex;
        justify-content: space-between;
        column-gap: 100px;

        .goods-shelves-left, .goods-shelves-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          .location-table {
            flex: 1;
          }
        }
        .goods-shelves-right {
          flex: 0.8;
        }
      }
    }

  }


}
</style>
