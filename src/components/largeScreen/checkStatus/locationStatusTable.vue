<template>
 <div class="location-table">
   <div class="table-column-left">
     <span v-for="(item, index) in currentData.length" :key="index">
       {{ currentData.length - index }}
     </span>
   </div>
   <div class="workCrud">
     <div class="crud-container">
       <div class="crud-moudle">

         <div ref="headerRef" class="table-header-container" :class="{isScroll}">
           <table class="table-body-header">
             <colgroup>
               <col v-for="item in header" :key="item.dataIndex" :width="item.width">
             </colgroup>
             <thead class="header">
             <tr>
               <template v-for="item in header" :key="item.dataIndex">
                 <th class="header-item">
                   <div class="header-list">
                     <span v-for="(item, index) in item.label" :key="index">{{item}}</span>
                   </div>
                 </th>
               </template>
             </tr>
             </thead>
           </table>
         </div>

         <div class="scroll-table" :style="{ height }" @scroll="onScroll">
           <table :style="{transform: `translateY(${top}px)`}" class="table-body">
             <colgroup>
               <col v-for="item in header" :key="item.dataIndex" :width="item.width">
             </colgroup>

             <tbody>
             <tr ref="tableRowRef" v-for="(item, index) in currentData" :key="item.id" class="table-row">
               <th v-for="col in header" class="table-row-item" >

                 <div class="box-list">
                   <img class="box-img" src="/images/box.png" alt="">
                   <img class="box-img" src="/images/box.png" alt="">
                   <img class="box-img" src="/images/box.png" alt="">
                 </div>

               </th>
             </tr>
             </tbody>
           </table>
         </div>
       </div>

     </div>
   </div>
 </div>

</template>

<script setup>
import {ref, onMounted, watch} from 'vue'
import Progress from '@/components/largeScreen/workflow/workProgress.vue'
import WorkCrud from '@/components/largeScreen/workflow/workCrud.vue'
import WarehouseStatus from '@/components/largeScreen/workflow/warehouseStatus.vue'
import WorkForm from '@/components/largeScreen/workflow/workForm.vue'


const props = defineProps({
  crudData: {
    type: Array,
    default: () => []
  },
  crudHeader: {
    type: Array,
  },
  title: {
    type: String,
  },
})

const data = ref([
  {
    id: 1,
    name: '1',
    project: 'project',
    suppler_name:'suppler_name',
    status: '0',
    order_number: 'order_number',
    project_no: '1',
    row_marial_name: '1',
    unit: '个',
    number: '10',
    location: 'location',
  },
  {
    id: 2,
    name: '2',
    project: 'project',
    suppler_name:'suppler_name',
    status: '1',
    order_number: 'order_number',
    project_no: '2',
    row_marial_name: '2',
    unit: '个',
    number: '10',
    location: 'location',
  },
  {
    id: 3,
    name: '3',
    project: 'project',
    suppler_name:'suppler_name',
    status: '2',
    order_number: 'order_number',
    project_no: '2',
    row_marial_name: '2',
    unit: '个',
    number: '10',
    location: 'location',
  },
  {
    id: 4,
    name: '4',
    project: 'project',
    suppler_name:'suppler_name',
    status: 'status',
    order_number: 'order_number',
    project_no: '2',
    row_marial_name: '2',
    unit: '个',
    number: '10',
    location: 'location',
  },
  {
    id: 5,
    name: '5',
    project: 'project',
    suppler_name:'suppler_name',
    status: 'status',
    order_number: 'order_number',
    project_no: '2',
    row_marial_name: '2',
    unit: '个',
    number: '10',
    location: 'location',
  }
])


// const currentData = ref([...props.crudData]);
const currentData = ref([...data.value]);

watch(() => props.crudData, () => {
  if (!currentData.value.length) {
    currentData.value = [...props.crudData]
  } else {
    // 去重合并对象
    mergeData(props.crudData);
  }
})

onMounted(() => {
  init()
})
const top = ref(0)
const maxNum = 6;


const tableRowRef = ref()
const headerRef = ref()
let rowHeight = 0;
const isScroll = ref(false);
const height = ref()


const header = [
  { label: [24, 23, 22], dataIndex: 'id', width: 215 },
  { label: [24, 23, 22], dataIndex: 'firm', width: 215 },
  { label: [24, 23, 22], dataIndex: 'vendor;', width: 215 },
  { label: [24, 23, 22], dataIndex: 'orderNumber;', width: 215 },
  { label: [24, 23, 22], dataIndex: 'orderNumberLine', width: 215 },
  { label: [24, 23, 22], dataIndex: 'materialName', width: 215 },
  { label: [24, 23, 22], dataIndex: 'materialUnit', width: 215 },
  { label: [24, 23, 22], dataIndex: 'materialNum', width: 215 },
]


function mergeData(newData) {
  const addList = []

  newData.forEach(item => {

    const cur = currentData.value.find(pre => pre.id === item.id);
    if (cur) {
      Object.assign(cur, item)
    } else {
      addList.push(item)
    }
  })
  currentData.value.push(...addList)
}


function onScroll(e) {
  headerRef.value.scrollLeft = e.target.scrollLeft
}

function init() {
  if (currentData.value?.length > maxNum) {
    // 开启定时滚动
    isScroll.value = true;
    if (tableRowRef.value.length) {
      rowHeight = tableRowRef.value[0].clientHeight;
      height.value = maxNum * rowHeight + 'px'
      setInterval(flushData, 1000 / 160)
    }

  }
}


function flushData() {
  top.value -= 0.1;
  const isMax = Math.abs(top.value) >= rowHeight;

  if (isMax) {
    const first = currentData.value.splice(0, 1);
    currentData.value.push(first[0]);
    top.value = 0;
  }
}

</script>

<style lang="scss" scoped>

.location-table {
  display: flex;
  margin-top: 20px;
  width: 100%;

  .table-column-left {
    position: relative;
    background: rgb(186,213,116);
    border: 2px solid #fff;
    border-right: none;
    font-size: 14px;
    padding: 0 8px;
    padding-top: 30px;
    font-weight: bold;

    border-radius: 4px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;

    display: flex;
    flex-direction: column;
    justify-content: space-around;


    &::after {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      width: 3px;
      height: 100%;
      background: rgb(136, 175, 70);
    }
  }

}
.workCrud {
  width: 0;
  flex: 1;
  border: #ffffff solid 2px;
  border-left: none;
  border-radius: 4px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color:  transparent;
  overflow: hidden;

  .crud-moudle {

    .table-header-container {

      overflow-x: hidden;
      overflow-y: hidden;
      background: rgb(186,213,116);
      border: 2px solid rgb(136, 175, 70);
      border-top: none;
      border-left: none;
      border-right: none;

      &::-webkit-scrollbar {
        background-color: transparent;
      }
      &::-webkit-scrollbar-thumb {
        background-color: transparent;
      }
      &::-webkit-scrollbar-track {
        background-color: transparent;
      }

      &.isScroll {
        overflow-y: scroll;
      }
    }

    .table-body-header, .table-body {
      table-layout: fixed;
      border-collapse:collapse;
      width: 100%;
    }


    .table-body-header {

      .header {
        color: #fff;
        font-size: 14px;
        font-weight: bold;

        .header-item {
          border: 2px solid rgb(136, 175, 70);
          border-top: none;
          border-left: none;
          border-bottom: none;

          line-height: 30px;
          padding: 0 5px;

          .header-list {
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
        }

        .header-item:last-child{
          border-right: none !important;
        }
      }
    }

    .scroll-table {
      overflow: auto;
    }

    .table-body {

      .table-row {
        width: 100%;

        font-size: 12px;
        color: #000;
        font-weight: bold;
        animation: row 0.3s;
        
        .table-row-item {
          border: 2px solid rgb(136, 175, 70);
          border-top: none;
          border-left: none;

          .box-list {
            display: flex;
            justify-content: space-around;
          }

          .box-img {
            cursor: pointer;
          }
        }
        .table-row-item:last-child{
          border-right: none !important;
        }
      }
    }
  }



  @keyframes row {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
  }
}
</style>
