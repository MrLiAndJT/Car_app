<template>
  <view class="p-20">
    <view class="bg-white p-20 border-radius-20">
      <view class="title-wrap">
        <text class="title-text">等待付款</text>
        <view class="detail">
          <text class="text">详情</text>
          <u-icon name="arrow-right" color="#999" size="24rpx"></u-icon>
        </view>
      </view>
      <view class="info-container">
        <view class="item">
          <view class="label"> 订单编号: </view>
          <view class="con-right"> SA2312135305511 </view>
        </view>
        <view class="item">
          <view class="label"> 服务类目: </view>
          <view class="con-right"> 360倒车影像按照/车衣贴膜 </view>
        </view>
        <view class="item">
          <view class="label"> 安装车型: </view>
          <view class="con-right"> 玛莎拉蒂 </view>
        </view>
        <view class="item">
          <view class="label"> 下单时间: </view>
          <view class="con-right"> 2023-12-16 20:15:55 </view>
        </view>
        <view class="item">
          <view class="label"> 订单金额: </view>
          <view class="con-right price-box">
            <text>¥</text>
            <text class="price">525.00</text>
          </view>
        </view>
      </view>
      <u-divider />
      <view class="btn-list d-flex justify-content-flex-end">
        <up-button
          type="error"
          size="normal"
          :plain="true"
          shape="circle"
          text="删除"
          :customStyle="btnCss"
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
.title-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40rpx;
  .title-text {
    font-size: 30rpx;
    color: #333;
    font-weight: bold;
  }
  .detail {
    display: flex;
    align-items: center;
    color: #999;
    font-size: 26rpx;
    .text {
      margin-right: 10rpx;
    }
  }
}
.info-container {
  .item {
    display: flex;
    align-items: center;
    font-size: 26rpx;
    margin-bottom: 10rpx;
    .label {
      color: #999;
      width: 150rpx;
    }
    .con-right {
      color: #333;
      &.price-box {
        color: #f40;
        .price {
          margin-left: 5rpx;
          font-size: 34rpx;
          font-weight: bold;
        }
      }
    }
  }
}
.btn-list {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .btn {
    width: 100rpx;
    margin-right: 30rpx;
    padding: 8rpx 20rpx;
    border: 1px solid #bbbbbb;
    text-align: center;
    border-radius: 40rpx;
    font-size: 24rpx;
  }
}
</style>
