<template>
  <tm-app>
    <tm-navbar
      title=""
      color="primary"
      linearDeep="accent"
      hideHome
      :padding="[20, 0]"
      :leftWidth="700"
    >
      <template v-slot:left>
        <view class="header">
          <text class="name">装车大师</text>
          <text class="intro">一站式汽车电子安装平台</text>
        </view>
      </template>
    </tm-navbar>
  </tm-app>
</template>

<script lang="ts" setup>
console.log("高度: ", uni.getSystemInfoSync().statusBarHeight);
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  .name {
    font-size: 32rpx;
    margin-right: 20rpx;
    font-style: italic;
    font-weight: 600;
  }
  .intro {
    font-size: 24rpx;
  }
}
</style>
