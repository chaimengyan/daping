<template>
  <div class="homework">
    <span class="moudle-title">
      {{Object.keys(workFlowData).length === 0 ? '电商业务日常操作' : '仓库实时作业情况'}}
    </span>
    <div class="moudle">
      <!-- <WarehouseStatus /> -->
      <template v-if="Object.keys(workFlowData).length === 0">
        <WorkCrud v-if="workCrudData.planInItems" :crudHeader="crudInHeader" :title="'待入库数据'" :crudData="workCrudData.planInItems" />
        <WorkCrud v-if="workCrudData.planInItems" :crudHeader="crudOutHeader" :title="'待出库数据'" :crudData="workCrudData.planOutItems" />
      </template>
<!--      <template v-else>-->
        <WorkForm :formData="workFlowData" />
        <workProgress :progressData="workFlowData" />
<!--      </template>-->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import workProgress from '@/components/largeScreen/workflow/workProgress.vue'
import WorkCrud from '@/components/largeScreen/workflow/workCrud.vue'
import WarehouseStatus from '@/components/largeScreen/workflow/warehouseStatus.vue'
import WorkForm from '@/components/largeScreen/workflow/workForm.vue'


defineProps({
  workCrudData: {
    type: Object,
  },
  workFlowData: {
    type: Object,
  }
  
})
onMounted(() => {

})

const crudInHeader = [
  { label: '项目单位', dataIndex: 'firm', width: 100 },
  { label: '订单号', dataIndex: 'orderNumber', width: 80 },
  { label: '行号', dataIndex: 'orderNumberLine', width: 40 },
  { label: '物料名称', dataIndex: 'materialName', width: 140 },
  { label: '计量单位', dataIndex: 'materialUnit', width: 40 },
  { label: '数量', dataIndex: 'materialNum', width: 40 },
]

const crudOutHeader = [
  { label: '项目单位', dataIndex: 'firm', width: 100 },
  { label: '订单号', dataIndex: 'orderNumber', width: 80 },
  { label: '行号', dataIndex: 'orderNumberLine', width: 40 },
  { label: '物料名称', dataIndex: 'materialName', width: 140 },
  { label: '计量单位', dataIndex: 'materialUnit', width: 60 },
  { label: '数量', dataIndex: 'materialNum', width: 40 },
  { label: '仓位', dataIndex: 'whShelfName', width: 70 },
]

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

    flex: 1;
    height: 0;

    display: flex;
    flex-direction: column;
  }


}
</style>
