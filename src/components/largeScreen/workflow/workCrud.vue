<template>
  <div class="workCrud">
    <span class="moudle-title">
      {{title}}
    </span>
    <div class="crud-container">
      <div class="crud-moudle">

        <div ref="headerRef" class="table-header-container" :class="{isScroll}">
          <table class="table-body-header">
            <colgroup>
              <col v-for="item in crudHeader" :key="item.dataIndex" :width="item.width">
            </colgroup>
            <thead class="header">
            <tr>
              <template v-for="item in crudHeader" :key="item.dataIndex">
                <th class="header-item">{{item.label}}</th>
              </template>
            </tr>
            </thead>
          </table>
        </div>

          <div ref="crudContainerRef" class="scroll-table" :style="{ height }" @scroll="onScroll">
            <table :style="{transform: `translateY(${top}px)`}" class="table-body">
              <colgroup>
                <col v-for="item in crudHeader" :key="item.dataIndex" :width="item.width">
              </colgroup>

              <tbody>
              <tr ref="tableRowRef" v-for="(item, index) in currentData" :key="item.id" class="table-row">
                <th v-for="col in crudHeader" class="table-row-item" >
              <span v-if="col.dataIndex === 'status'" class="col-status" :class="{ [`status-${item[col.dataIndex]}`]: true }">
                {{statusDic[item[col.dataIndex]]}}
              </span>
                  <span v-else>
                {{ item[col.dataIndex] }}
              </span>
                </th>
              </tr>
              </tbody>
            </table>
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

const currentData = ref([...props.crudData]);

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
const statusDic = {
  "0": '待入库',
  "1": '入库中',
  "2": '已完成',
}
  

const tableRowRef = ref()
const headerRef = ref()
const crudContainerRef = ref()
let rowHeight = 0;
const isScroll = ref(false);
const height = ref()


const header = [
  { label: 'id', dataIndex: 'id', width: 70 },
  { label: '项目单位', dataIndex: 'firm', width: 100 },
  { label: '供应商名称', dataIndex: 'vendor;', width: 100 },
  { label: '订单号', dataIndex: 'orderNumber;', width: 100 },
  { label: '行项目号', dataIndex: 'orderNumberLine', width: 60 },
  { label: '物料名称', dataIndex: 'materialName', width: 100 },
  { label: '计量单位', dataIndex: 'materialUnit', width: 60 },
  { label: '数量', dataIndex: 'materialNum', width: 60 },
  { label: '仓位', dataIndex: 'whShelfName', width: 70 },
  { label: '仓位1', dataIndex: 'whShelfName', width: 70 },
  { label: '仓位2', dataIndex: 'whShelfName', width: 70 },
  { label: '仓位33', dataIndex: 'whShelfName', width: 70 },
  { label: '仓位4', dataIndex: 'whShelfName', width: 70 },
  { label: '仓位5', dataIndex: 'whShelfName', width: 70 },
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
  if (tableRowRef.value.length) {
    rowHeight = tableRowRef.value[0].clientHeight;
    const maxNum = Math.floor(crudContainerRef.value.clientHeight / rowHeight) - 1
    console.log(crudContainerRef.value.clientHeight, rowHeight, 'ddd')
    if (currentData.value?.length > maxNum) {
      // 开启定时滚动
      isScroll.value = true;
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
.workCrud {
  //width: 100%;
  height: 0;
  flex: 1;
  padding: 10px;
  border: #ffffff solid 2px;
  border-radius: 10px;
  background-color:  #edf4fe;
  margin-top: 20px;

  display: flex;
  flex-direction: column;

  .moudle-title {
    color: #f7ab00;
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
      background-color: #f7ab00;
      transform: translateY(-50%);
    }
  }

  .crud-container {
    margin-top: 10px;
    flex: 1;
    height: 0;
  }
  .crud-moudle {
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .table-header-container {
      //position: sticky;
      //top: 0;
      //z-index: 20;
      //background: transparent;
      overflow-x: hidden;
      overflow-y: hidden;
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
        color: #1a796a;
        font-size: 14px;
        font-weight: bold;

        .header-item {
          border-right: 1px solid #c6c6c6;
          line-height: 30px;
          padding: 0 5px;
        }

        .header-item:last-child{
          border-right: none !important;
        }
      }
    }

    .scroll-table {
      flex: 1;
      height: 0;
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
          padding: 0 5px;
          padding-top: 8px;
          border-right: 1px solid #c6c6c6;
          .col-status {
            &.status-0 {
              color: #242424;
            }
            &.status-1 {
              color: rgb(243,190,83);
            }
            &.status-2 {
              color: rgb(0,121,104);
            }
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
