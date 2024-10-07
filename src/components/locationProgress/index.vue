<template>
  <div class="location-progress">
    <img class="card-bg" src="/images/warehouse.png">
    <div v-if="isLock" class="lock">
      <span>库位锁定</span>
    </div>
    <template v-else>
      <div class="card-content">
        <div class="card-number">
          <Progress :value="list" />
        </div>
      </div>
    </template>
    <div class="card-desc">{{ number }}</div>
  </div>
</template>

<script setup>
import Progress from '@/components/progress/index.vue'
defineProps({
  number: {
    type: String,
  },
  list: {
    type: Number,
  },
  isLock: {
    type: Boolean,
    default: false
  }
})

</script>


<style lang="scss" scoped>
.location-progress {
    position: relative;
  margin-bottom: 20px;
  display: flex;

  .lock {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 15px;

    > span {
      margin-top: 20px;
    }
  }

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
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 16px;
        margin-top: 20px;
      }
    }

    .card-desc {
      position: absolute;
      bottom: 0;
      left: 50%;
      font-size: 14px;
      text-align: center;
      color: #242424;
      transform: translateX(-50%) translateY(100%);
    }

}
</style>