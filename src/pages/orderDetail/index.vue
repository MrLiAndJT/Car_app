<template>
  <view class="bg-gray min-full-height">
    <view
      class="status bg-white d-flex justify-content-center align-items-center"
    >
      <view class="content">
        <view class="title">等待付款</view>
        <view class="time">2024-01-23 14:24:56</view>
      </view>
    </view>
    <view class="info-container mt-20 bg-white p-20">
      <view class="title">基本信息</view>
      <view class="data-list">
        <view class="list-item">
          <view class="label">订单编号:</view>
          <view class="content">293713474167163182</view>
        </view>
        <view class="list-item">
          <view class="label">服务项目:</view>
          <view class="content"
            >车载音响、奔驰车标改装、360倒车影像、车模车衣</view
          >
        </view>
        <view class="list-item">
          <view class="label">安装车型:</view>
          <view class="content">奔驰C260</view>
        </view>
        <view class="list-item">
          <view class="label">下单时间:</view>
          <view class="content">2024-01-23 14:24:56</view>
        </view>
        <view class="list-item">
          <view class="label">订单金额:</view>
          <view class="content">
            <text>¥</text>
            <text>569</text>
          </view>
        </view>
      </view>
    </view>
    <view class="info-container mt-20 bg-white p-20">
      <view class="title">车主信息</view>
      <view class="data-list">
        <view class="list-item">
          <view class="label">车主姓名:</view>
          <view class="content">叶凡</view>
        </view>
        <view class="list-item">
          <view class="label">车主电话:</view>
          <view class="content">13524367894</view>
        </view>
        <view class="list-item">
          <view class="label">车主地址:</view>
          <view class="content">广东省广州市番禺区xx街道56号301</view>
        </view>
      </view>
    </view>
    <view class="btn-list d-flex justify-content-flex-end mt-20 bg-white p-20">
      <up-button
        type="error"
        size="normal"
        :plain="true"
        shape="circle"
        text="删除"
        :customStyle="btnCss"
        @confirm=""
      />
      <up-button
        type="info"
        size="normal"
        :plain="true"
        shape="circle"
        text="修改订单"
        :customStyle="btnCss"
      />
      <up-button
        type="primary"
        size="normal"
        :plain="true"
        shape="circle"
        text="立即支付"
        :customStyle="btnCss"
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const btnCss = reactive({
  width: "250rpx",
  height: "60rpx",
  margin: "0 20rpx",
  fontSize: "28rpx",
});
</script>

<style lang="scss" scoped>
.status {
  padding: 70rpx 0;
  box-sizing: border-box;
  .content {
    text-align: center;
    .title {
      font-size: 38rpx;
    }
    .time {
      margin-top: 10rpx;
      font-size: 28rpx;
      color: #666;
    }
  }
}
.info-container {
  .title {
    font-size: 34rpx;
    margin-bottom: 20rpx;
  }
  .data-list {
    .list-item {
      margin: 15rpx 0;
      display: flex;
      font-size: 28rpx;
      .label {
        width: 150rpx;
        color: #999;
        text-align: right;
        margin-right: 60rpx;
      }
      .content {
        flex: 1;
      }
    }
  }
}
</style>
