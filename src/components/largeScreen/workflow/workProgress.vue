<template>
  <!-- 能查到数据了并且type是入库,先显示卸货中,等到status变为卸货完成,这里变对号 -->
  <!-- 同时下一段由无状态变为行驶中或者(移动中什么的写死就行),等status变为已扫描,行驶中变为扫描完成,下一个变为上架中, -->
  <!-- 最后status变为已上架 -->

  <!-- 出库是有任务了,1节点显示取货中,status是取货完成时,第一节点显示取货完成,第二节点显示行驶中, -->
  <!-- status是扫描中时,第二节点显示扫描中,status是出库中时,第二节点显示扫描完成,第三节点显示出库中，最后status是已出库 -->
  <!--入库：['月台亮灯（横线上不显示文字）','入库月台搬运中','卸货完成','RFID扫描完成','上架中','上架完成']  -->
  <!--出库：['取货中','取货完成','扫描中','扫描完成','出库中','已出库']  -->
  <div class="workProgress">
    <div class="moudle-title">
      作业状态: {{progressData.status}}
    </div>
    <div class="moudle">
      <div class="car">
        <img src="/images/AVGCar.png" alt="">
        <span>AVG小车</span>
      </div>

      <div class="line-content">
        <div class="line1">
          <template v-if="['卸货完成','取货完成','扫描完成','RFID扫描完成','扫描中','上架中','上架完成','出库中','已出库'].includes(progressData.status)">
            <img class="complete-icon" src="/images/complete.png" alt="">
            <span 
              class="desc" 
              style="color: #1a796a"
              >{{ progressData.type === '入库' ? '卸货完成' : '取货完成' }}</span>
          </template>
          <template v-if="['入库月台搬运中','取货中'].includes(progressData.status)">
            <div class="loading">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span class="desc" style="color: #ee8341">{{ progressData.type === '入库' ? '入库月台搬运中' : '下架取货中' }}</span>
          </template>
          <img src="/images/longLine.png" alt="">
        </div>

        <div class="aio">
          <template v-if="progressData.type === '入库'">
            <img src="/images/AIO.png" alt="">
            <span>{{'机器人' + progressData.type + '作业'}}</span>
          </template>
          <template v-else>
            <img src="/images/warehouseLocation.png" alt="">
            <span>库位</span>
            <span class="desc" style="color: #ee8341">{{progressData.whShelfName}}</span>
          </template>
        </div>

        <div class="line2">
          <template v-if="['扫描完成','RFID扫描完成','上架中','上架完成','出库中','已出库'].includes(progressData.status)">
            <img class="complete-icon" src="/images/complete.png" alt="">
            <span 
              class="desc" 
              style="color: #1a796a"
              >{{ progressData.type === '入库' ? 'RFID扫描完成' : 'RFID扫描完成' }}</span>
          </template>
          <template v-if="['卸货完成','取货完成', '扫描中'].includes(progressData.status)">
            <div class="loading">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span class="desc" style="color: #ee8341">{{ progressData.type === '入库' ? '搬运至扫描区' : '搬运至扫描区' }}</span>
          </template>
          <img src="/images/middleLine.png" alt="">
        </div>

        <div class="access-door">
          <img src="/images/accessDoor.png" alt="">
          <span>通道门扫描</span>
        </div>


        <div class="line2">
          <template v-if="['上架完成','已出库'].includes(progressData.status)">
            <img class="complete-icon" src="/images/complete.png" alt="">
            <span 
              class="desc" 
              style="color: #1a796a"
              >{{ progressData.type === '入库' ? '上架完成' : '下架完成' }}</span>
          </template>
          <template v-if="['RFID扫描完成','上架中','出库中'].includes(progressData.status)">
            <div class="loading">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <span class="desc" style="color: #ee8341">{{ progressData.type === '入库' ? '搬运至库区' : '搬运至出库月台' }}</span>
          </template>
          <img src="/images/middleLine.png" alt="">
        </div>

        <div class="warehouse-location">
          <template v-if="progressData.type !== '入库'">
            <img  src="/images/AIO.png" alt="">
            <span>{{'机器人' + progressData.type + '作业'}}</span>
          </template>
          <template v-else>
            <img src="/images/warehouseLocation.png" alt="">
            <span>库位</span>
            <span class="desc" style="color: #ee8341">{{progressData.whShelfName}}</span>
          </template>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

 const props = defineProps({
  progressData: {
    type: Array,
  },
})

onMounted(() => {
  // props.progressData.status = 'RFID扫描完成'

  // setTimeout(() => {
  // props.progressData.status = '上架中'
    
  // }, 2000);
})




</script>

<style lang="scss" scoped>


.loading{
  width: 150px;
  height: 15px;
  margin: 0 auto;
  margin-top:100px;
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
}
.loading span{
  display: inline-block;
  width: 15px;
  height: 100%;
  margin-right: 5px;
  // border-radius: 50%;
  // background: lightgreen;
  -webkit-animation: load 1.04s ease infinite;

  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 12px solid lightgreen;
}
.loading span:last-child{
  margin-right: 0px; 
}
@-webkit-keyframes load{
    0%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
}
.loading span:nth-child(1){
    -webkit-animation-delay:0.13s;
}
.loading span:nth-child(2){
    -webkit-animation-delay:0.26s;
}
.loading span:nth-child(3){
    -webkit-animation-delay:0.39s;
}
.loading span:nth-child(4){
    -webkit-animation-delay:0.52s;
}
.loading span:nth-child(5){
    -webkit-animation-delay:0.65s;
}

.workProgress {
  flex: 1;
  padding: 20px;
  border: #ffffff solid 2px;
  border-radius: 10px;
  background-color:  #edf4fe;
  margin-top: 20px;

  .moudle-title {
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    text-align: right;
    color: #808080;
  }
  .moudle {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    .line-content {
      display: flex;
      align-items: baseline;
    }

    .access-door {
      width: 70px !important;
    }

    .aio, .access-door, .warehouse-location  {
      align-items: center;
    }
    .car, .aio, .access-door, .warehouse-location {
      flex-shrink: 0;
      width: 100px;
      display: flex;
      flex-direction: column;
      position: relative;

      >img {
        width: 100%;
      }

      color: #000;
      font-size: 18px;
      font-weight: bold;

      >span {
        margin-top: 10px;
        white-space: nowrap;
        text-align: center;
      }
    }

    .line1, .line2, .line3 {
      flex-shrink: 0;
      width: 160px;
      margin-left: 50px;
      position: relative;
      display: flex;
      align-self: center;
      .complete-icon {
        position: absolute;
        bottom: 15px;
        left: 50%;
        transform: translateX(-50%);
        width: 30px;
        height: 30px;
      }

      .desc {
        color: #808080;
        font-size: 18px;
        font-weight: bold;
        position: absolute;
        bottom: -25px;
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
      }
      >img {
        width: 100%;
        height: 100%;
      }
    }

    .line1 {
      transform: translateY(-20px);
    }

    .line2, .line3 {
      height: 8px;
      margin: 0 5px;
    }

    .line3 {
      width: 80px;
    }

  }


}
</style>