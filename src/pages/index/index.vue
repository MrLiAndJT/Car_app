<template>
  <view>
    <view class="header" :style="{ height: winSize?.navigatorBar + 'px' }">
      header
    </view>
  </view>
</template>

<script lang="ts" setup>
import { useWindowInfo } from "@/tmui/tool/useFun/useWindowInfo";
const winSize = useWindowInfo();
// 打印，注意它的尺寸可能是动态变化的。因为是在onMounted中取得，窗口尺寸变化，也可能导致变化。
// console.log("1231231312");
console.log("winSize: ", winSize);
const menuButton = uni.getMenuButtonBoundingClientRect();
console.log("menuButton: ", menuButton);
</script>

<style lang="css" scoped>
.header {
  background-color: #abcdef;
  display: flex;
  align-items: center;
}
</style>
