<template>
  <tm-app>
    <tm-navbar
      title=""
      color="primary"
      linearDeep="accent"
      hideHome
      :padding="[40, 0]"
      :leftWidth="700"
    >
      <template v-slot:left>
        <view class="header">
          <text class="name">装车大师</text>
          <text class="intro">一站式汽车电子安装平台</text>
        </view>
      </template>
    </tm-navbar>
    <view class="banner-container">
      <tm-input
        v-model="searchValue"
        prefix="tmicon-search"
        showClear
        placeholder="搜索您需要的服务"
        placeholderStyle="font-size: 24rpx"
      />
      <view class="intro-box">
        <view class="content-left">
          <text class="title">让安装 更简单</text>
          <text class="subtitle">专业安装 安全保障</text>
        </view>
        <tm-image
          preview
          :width="300"
          :height="300"
          :src="steering_wheel"
          class="img"
        />
      </view>
    </view>
  </tm-app>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import steering_wheel from "@/static/steering_wheel.png";
const searchValue = ref("");
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
.banner-container {
  background-color: $uni-color-primary;
  height: 300rpx;
  padding: 40rpx;
  overflow: hidden;
  position: relative;
  .intro-box {
    display: flex;
    .content-left {
      display: flex;
      flex-direction: column;
      .title {
        margin-top: 40rpx;
        margin-bottom: 10rpx;
        font-size: 40rpx;
        font-weight: bold;
      }
      .subtitle {
        color: #282828;
        font-size: 24rpx;
      }
    }
    .img {
      position: absolute;
      right: -20rpx;
      bottom: -60rpx;
    }
  }
}
</style>
