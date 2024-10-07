<template>
  <div class="location-progress">
    <img class="card-bg" src="/images/goodsShelves.png">
    <div v-if="isLock" class="lock">
      <span>货架锁定</span>
    </div>
    <template v-else>
      <div class="card-content">
        <div class="card-number">
          <Progress v-for="(item, index) in list" :value="item" :key="index" />
        </div>
      </div>
    </template>
    <div class="card-desc">{{ number }}</div>
  </div>
</template>

<script setup>
import Progress from '@/components/progress/index.vue'
defineProps({
  list: {
    type: Array,
  },
  number: {
    type: Array,
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
  width: 100px;

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
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 25px 16px;
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