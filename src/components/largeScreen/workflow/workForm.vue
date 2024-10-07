<template>
  <div class="workForm">
    <span class="form-title">
      {{formData.type + '作业中'}}
    </span>
    <div class="form-body">
      <div class="form-row" v-for="(item, index) in formList" :key="index">
        <div class="row-label">{{item.label}}</div>
        <div>：</div>
        <div class="row-content">{{ formData[item.prop] }}</div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
defineProps({
  formData: {
    type: Array,
  },
})

onMounted(() => {

})

const formList = ref([
  {
    label: '订单号',
    prop: 'orderNumber'
  },
  {
    label: '物料号',
    prop: 'materialNo'
  },
  {
    label: '数量',
    prop: 'planNum'
  },
  {
    label: '当前状态',
    prop: 'status'
  },
  // {
  //   label: '订单号',
  //   prop: '400000880808  出库准备中...'
  // },
])



</script>

<style lang="scss" scoped>
.workForm {
  //width: 100%;
  //height: 100%;
  padding:10px 20px;
  padding-top: 0;
  border: #ffffff solid 2px;
  border-radius: 10px;
  background-color:  #edf4fe;
  margin-top: 20px;

  .form-title {
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
  .form-body {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    .form-row {
      display: flex;
      color: #242424;
      font-size: 14px;
      .row-label {
      }
      .row-content {
      }
    }


  }


}
</style>
