<template>
  <tm-app class="app-container">
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
    <view class="content">
      <tm-roll-notice
        :width="650"
        :list="['恭喜xxxx用户下单成功', '热烈庆祝xxxx中奖免单']"
        :margin="[0, 0]"
        class="notice"
        followTheme
      />
      <view class="statistics-wrap">
        <view class="item">
          <view class="tit">
            <text class="num">3.77</text>
            <text class="util">万</text>
          </view>
          <view class="subtit">专业入驻师傅</view>
        </view>

        <view class="item">
          <view class="tit">
            <text class="num">15.13</text>
            <text class="util">万</text>
          </view>
          <view class="subtit">累计服务订单</view>
        </view>

        <view class="item">
          <view class="tit">
            <text class="num">97.9</text>
            <text class="util">%</text>
          </view>
          <view class="subtit">服务好评率</view>
        </view>
      </view>
      <tm-image
        preview
        :width="670"
        :height="277"
        :src="dispatch_order"
        class="img"
      />
      <view class="order-process-wrap">
        <view class="tit">下单流程</view>
        <view class="step-wrap">
          <view class="step-item">
            <view class="icon">
              <text class="iconfont icon-icon_fabu"></text>
            </view>
            <view class="text">发布需求</view>
          </view>
          <text class="next iconfont icon-xiayibu"></text>
          <view class="step-item">
            <view class="icon">
              <text class="iconfont icon-gerentouxiang_o"></text>
            </view>
            <view class="text">分配师傅</view>
          </view>
          <text class="next iconfont icon-xiayibu"></text>
          <view class="step-item">
            <view class="icon">
              <text class="iconfont icon-weixiu"></text>
            </view>
            <view class="text">上门/到店服务</view>
          </view>
          <text class="next iconfont icon-xiayibu"></text>
          <view class="step-item">
            <view class="icon">
              <text class="iconfont icon-fuwutiyandingyi"></text>
            </view>
            <view class="text">验收评价</view>
          </view>
        </view>
      </view>
    </view>
  </tm-app>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import steering_wheel from "@/static/steering_wheel.png";
import dispatch_order from "@/static/dispatch_order.jpg";
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
.content {
  position: relative;
  z-index: 9;
  margin-top: -35rpx;
  border-top-left-radius: 40rpx;
  border-top-right-radius: 40rpx;
  background-color: #fff;
  padding: 40rpx;
  .statistics-wrap {
    margin: 50rpx 0;
    display: flex;
    justify-content: space-around;
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      .tit {
        margin-bottom: 10rpx;
        font-weight: 600;
        .num {
          font-size: 40rpx;
        }
        .util {
          margin-left: 10rpx;
        }
      }
      .subtit {
        font-size: 24rpx;
        color: #999;
      }
    }
  }
  .order-process-wrap {
    position: relative;
    height: 250rpx;
    margin-top: 40rpx;
    background-color: $uni-color-primary;
    border-radius: 20rpx;
    .tit {
      position: absolute;
      left: 0;
      top: 0;
      padding: 10rpx 40rpx;
      background-color: #000;
      color: $uni-color-primary;
      font-size: 24rpx;
      border-top-left-radius: 20rpx;
      border-bottom-right-radius: 20rpx;
    }
    .step-wrap {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      font-size: 24rpx;
      .step-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        .icon {
          width: 60rpx;
          height: 60rpx;
          background-color: #e8d262;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
        }
        .text {
          margin-top: 15rpx;
          font-size: 24rpx;
          transform: scale(0.8);
        }
      }
      .next {
        color: #fff;
        font-size: 44rpx;
      }
    }
  }
}
</style>
