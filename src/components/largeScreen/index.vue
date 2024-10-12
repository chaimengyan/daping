<template>
  <div class="large-screen">
   <div class="screen-header">
     <img class="logo" src="/images/logo.png">
     <img class="big-title" src="/images/bigTitle.png">
     <div class="header-time">
       <img class="header-time-icon" src="/images/time.png">
       <span>{{dateDisplay}}</span>
     </div>
   </div>

    <div class="info-header">
      <Homework :homeworkData="homeworkData" class="info-header-left" />
      <AbnormalBusiness :abnormalBusinessData="abnormalBusinessData" class="info-header-right" />
    </div>

    <div class="info-content">
      <Workflow :workCrudData="workCrudData" :workFlowData="workFlowData" class="workflow" />
      <CheckStatus  :checkStatusData="checkStatusData" class="check-status" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {updateTime} from '@/utils/date.js'
import Homework from '@/components/largeScreen/homework.vue'
import AbnormalBusiness from '@/components/largeScreen/abnormalBusiness.vue'
import Workflow from '@/components/largeScreen/workflow/index.vue'
import CheckStatus from '@/components/largeScreen/checkStatus/index.vue'
import {request} from "@/utils/request.js";

onMounted(() => {
  // 出入库状态3秒一次，表格30秒一次，库位15秒一次，作业统计1分钟一次
  setInterval(() => {
    dateDisplay.value = updateTime()
  }, 1000)
   setInterval(() => {
    inOrOutNow()
  }, 3000)
   setInterval(() => {
    getShelfStatus()
  }, 15000)
   setInterval(() => {
    getJobStatistics()
    getError()
  }, 60000)
  dateDisplay.value = updateTime()
    
})

const dateDisplay = ref('')

const homeworkData = ref({})
// 作业情况统计
function getJobStatistics() {
  request({
    method: 'GET',
    url: '/wcs/api/getJobStatistics'
  }).then(res => {
    homeworkData.value = res.data.data
  })
}

const abnormalBusinessData = ref({})
// 异常业务统计
function getError() {
  request({
    method: 'GET',
    url: '/wcs/api/getError'
  }).then(res => {
    abnormalBusinessData.value = res.data.data
  })
}

const workCrudData = ref({})
// 电商业务日常操作 待入库待出库列表
function getPlanList() {
  request({
    method: 'GET',
    url: '/wcs/api/getPlanList'
  }).then(res => {
    workCrudData.value = res.data.data
  })
}

const workFlowData = ref({})
// 仓库实时作业
function inOrOutNow() {
  request({
    method: 'GET',
    url: '/wcs/api/inOrOutNow'
  }).then(res => {
    workFlowData.value = {}
    if(res.data.code === '50001') {
      getPlanList()
    }else {
      workFlowData.value = res.data.data
    }
  })
}

const checkStatusData = ref({})
// 库位与货架状态
function getShelfStatus() {
  request({
    method: 'GET',
    url: '/wcs/api/getShelfStatus'
  }).then(res => {
    checkStatusData.value = res.data.data
  })
}
</script>

<style lang="scss" scoped>
.large-screen {
  width: 100%;
  height: 100%;
  background-image: url('/images/bigbg.png');
  padding: 20px;
  padding-top: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  .info-header {
    display: flex;
    height: 0;
    flex: 0.5;

    .info-header-left {
      flex-grow: 1;
    }

    .info-header-right {
      margin-left: 20px;
      flex: 0.5;
    }
  }

  .info-content {
    flex: 1;
    display: flex;
    margin-top: 20px;
    height: 0;
    overflow: hidden;

    .workflow {
      width: 0;
      flex: 1;
      margin-right: 20px;
    }
    .check-status {
      width: 0;
      flex: 1;
    }
  }

  .screen-header {
    position: relative;
    width: 100%;

    .logo {
      position: absolute;
      left: 0;
      bottom: 30px;
      width: 200px;
    }
    .big-title {
      width: 100%;
    }
    .header-time {
      position: absolute;
      right: 0;
      bottom: 30px;
      font-size: 16px;
      color: #1a796a;
      display: flex;
      align-items: center;
      font-weight: bold;
      .header-time-icon {
        width: 16px;
        border-radius: 50%;
        margin-right: 8px;
      }
    }
  }


}
</style>
