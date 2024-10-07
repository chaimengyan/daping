<template>
  <div class="location">
    <img class="card-bg" src="/images/checkWarehouse.png">
    <div class="card-content">
      <div class="card-number" :class="{ [`status-${status}`]: true }">
        <span>{{ statusMap[status] }}</span>
      </div>
    </div>
    <div class="card-desc">{{ number }}</div>
  </div>
</template>

<script setup>
defineProps({
  number: {
    type: Number,
  },
  status: {
    type: Number,
  }
})



const statusMap = {
  0: '待盘点',
  1: '盘点中',
  2: '盘点完成',
}
</script>


<style lang="scss" scoped>
.location {
    width: 160px;
    position: relative;

    .card-bg {
      width: 100%;
    }

    .card-content {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      .card-number {
        font-size: 16px;
        font-weight: bold;
        align-self: center;

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

    .card-desc {
      font-size: 14px;
      text-align: center;
      color: #242424;
    }

}
</style>