<template>
 <div class="location-table">
   <div v-if="['0','1'].includes(shelfType)" class="table-column-left">
     <span v-for="(item, index) in currentData.length" :key="index">
       0{{ currentData.length - index }}
     </span>
   </div>
   <div class="workCrud">
     <div class="crud-container">
       <div class="crud-moudle">

         <div ref="headerRef" class="table-header-container" :class="{isScroll}">
           <table class="table-body-header">
<!--             <colgroup>-->
<!--               <col v-for="hItem in crudHeader" :key="hItem.dataIndex" :width="hItem.width">-->
<!--             </colgroup>-->
             <thead class="header">
             <tr>
               <template v-for="hItem in crudHeader" :key="hItem.dataIndex">
                 <th class="header-item">
                   <div class="header-list">
                     <span >{{hItem.label}}</span>
                   </div>
                 </th>
               </template>
             </tr>
             </thead>
           </table>
         </div>

         <div class="scroll-table" :style="{ height }" @scroll="onScroll">
           <table :style="{transform: `translateY(${top}px)`}" class="table-body">
<!--             <colgroup>-->
<!--               <col v-for="hItem in crudHeader" :key="hItem.dataIndex" :width="hItem.width">-->
<!--             </colgroup>-->

             <tbody>
             <tr ref="tableRowRef" v-for="(cItem, index) in currentData" :key="index" class="table-row">
               <th v-for="col in crudHeader" class="table-row-item" >

                 <div class="box-list">
                  <img v-if="cItem[col.label]" class="box-img" src="/images/box.png" alt="">
                  <img v-else class="box-img" src="/images/emptyBox.png" alt="">
                   <!-- <img class="box-img" src="/images/emptyBox.png" alt="">
                   <img class="box-img" src="/images/box.png" alt="">
                   <img class="box-img" src="/images/box.png" alt=""> -->
                 </div>

               </th>
             </tr>
             </tbody>
           </table>
         </div>
       </div>

     </div>
   </div>

   <div v-if="['0','2'].includes(shelfType)" class="end-text">{{'C01-0'+shelfNum}}</div>
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
  shelfType: {//0：既显示序号又显示尾号，1：只显示序号，2只显示尾号
    type: String,
    default: '0'
  },
  shelfNum: {
    type: String,
    default: '0'
  },
})
const data = ref([
{ '24': true, '23': true, '22': true, '21': true, '20': true, '19': false,'18': true, '17': true, '16': false,'15': false, '14': true, '13': true,'24': true, '12': true, '11': true,'10': true, '09': true, '08': true,'07': true, '06': true, '05': true,'04': true, '03': true, '02': true,'01': false},
{ '24': false, '23': true, '22': true, '21': false, '20': true, '19': true,'18': false, '17': true, '16': true,'15': true, '14': true, '13': true,'24': true, '12': true, '11': true,'10': true, '09': true, '08': true,'07': true, '06': true, '05': true,'04': true, '03': true, '02': true,'01': true},
{ '24': false, '23': false, '22': true, '21': true, '20': true, '19': true,'18': true, '17': true, '16': false,'15': true, '14': true, '13': true,'24': true, '12': true, '11': true,'10': true, '09': true, '08': true,'07': true, '06': true, '05': true,'04': true, '03': true, '02': true,'01': true},
{ '24': false, '23': true, '22': false, '21': true, '20': false, '19': true,'18': false, '17': true, '16': false,'15': true, '14': true, '13': true,'24': true, '12': true, '11': true,'10': true, '09': true, '08': true,'07': true, '06': true, '05': true,'04': true, '03': true, '02': true,'01': true},
]
)


const currentData = ref([...props.crudData]);
// const currentData = ref([...data.value]);

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
  // margin-top: 20px;
  flex: 0.5;
  height: 0;
  width: 100%;
.end-text {
  transform: rotate(-90deg) translateX(0%);
  font-size: 16px;
  white-space: nowrap;
  color: #1a796a;
  padding-top: 70px;
}
  .table-column-left {
    position: relative;
    background: #32766a;
    border: 1px solid #fff;
    border-right: none;
    font-size: 14px;
    padding: 0 4px;
    padding-top: 20px;
    font-weight: bold;

    border-radius: 4px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;

    display: flex;
    flex-direction: column;
    justify-content: space-around;


    // &::after {
    //   content: '';
    //   position: absolute;
    //   right: 0;
    //   top: 0;
    //   width: 3px;
    //   height: 100%;
    //   background: #40897c;
    // }
  }

}
.workCrud {
  width: 0;
  flex: 1;
  border: #ffffff solid 1px;
  border-left: none;
  border-radius: 4px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color:  transparent;
  overflow: hidden;

  .crud-container {
    height: 100%;
  }

  .crud-moudle {
    height: 100%;
    display: flex;
    flex-direction: column;
    .table-header-container {

      overflow-x: hidden;
      overflow-y: hidden;
      background: #32766a;
      border: 2px solid #40897c;
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

        .header-item:nth-child(3n) {
          // &:nth-child(3n){
            border: 2px solid #40897c;
            border-top: none;
            border-left: none;
            border-bottom: none;
          // }
          line-height: 20px;
          padding: 0 5px;

          .header-list {
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
        }
        .header-item:first-child{
          border-left:  2px solid #40897c;;
        }

        // .header-item:last-child{
        //   border-right: none !important;
        // }
      }
    }

    .scroll-table {
      overflow: hidden;
      flex: 1;
      height: 0;
    }

    .table-body {
      height: 100%;
      .table-row {
        width: 100%;

        font-size: 12px;
        color: #000;
        font-weight: bold;
        animation: row 0.3s;
        
        .table-row-item {
          &:nth-child(3n){
            border-right: 2px solid #40897c;
          }
          border-bottom: 2px solid #40897c;
          .box-list {
            height: 100%;
            display: flex;
            justify-content: space-around;
          }

          .box-img {
            cursor: pointer;
            width: 100%;
          }
        }
        .table-row-item:first-child{
          border-left:  2px solid #40897c;;
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
