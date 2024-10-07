<template>
  <div class="homework">
<!--    <span class="moudle-title">-->
<!--      仓库实时作业情况-->
<!--    </span>-->
    <div class="moudle">
      <WarehouseLocation :shelfStatus="checkStatusData.shelfStatus" />
      <GoodsShelves :shelfAllStatus="checkStatusData.shelfAllStatus" />
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import GoodsShelves from '@/components/largeScreen/checkStatus/goodsShelves.vue'
import WarehouseLocation from '@/components/largeScreen/checkStatus/warehouseLocation.vue'

defineProps({
  checkStatusData: {
    type: Object,
  },
})
onMounted(() => {
  // [
  //   [
  //     [1,0,1]
  //   ]
  // ]
})




</script>

<style lang="scss" scoped>
.homework {
  //width: 100%;
  //height: 100%;
  padding: 20px;
  border: #ffffff solid 2px;
  border-radius: 10px;
  background-image: linear-gradient(to bottom, #b7d8d7, #edf4fe);
  .moudle-title {
    color: #1a796a;
    font-size: 18px;
    font-weight: bold;
  }
  .moudle {


  }


}
</style>
