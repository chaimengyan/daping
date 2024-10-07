
<template>
  <div class="progress" :style="{ backgroundColor: list }">
    <span>{{value}}%</span>
  </div>
</template>


<script setup>
import {computed} from "vue";
import {getProgressColor} from "@/utils/progress.js";

const props = defineProps({
  value: {
    type: Number,
  }
})


const list = computed(() => getProgressColor(props.value))
</script>

<style lang="scss" scoped>

.progress {

  padding: 0 10px;
  color: #fff;
  font-size: 17px;
  font-weight: bold;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>