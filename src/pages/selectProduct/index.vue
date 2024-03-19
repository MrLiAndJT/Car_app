<template>
  <view class="full-height overflow-hidden">
    <view class="my-20 px-20 box-sizing-border-box">
      <u-search :show-action="true" actionText="搜索" :animation="true" />
    </view>
    <scroll-view scroll-y="true" class="scroll-container pb-20">
      <view
        class="scroll-view-item"
        v-for="item in 100"
        :key="item"
        @click="open"
      >
        360倒车影像{{ item }}
      </view>
    </scroll-view>
    <u-popup
      mode="bottom"
      :show="show"
      @close="close"
      :round="5"
      :customStyle="{ height: '500rpx' }"
    >
      <view class="popup-container">
        <view class="title-box"> 360倒车影像 </view>
        <scroll-view scroll-y="true" class="product-container pb-20">
          <view
            class="product-item"
            v-for="item in 5"
            :key="item"
            @click="open"
          >
            <view class="name"> 360倒车影像{{ item }} </view>
            <view class="btn">
              <u-button type="primary" size="mini">选择</u-button>
            </view>
          </view>
        </scroll-view>
      </view>
    </u-popup>
  </view>
</template>

<script lang="ts" setup>
import { onUnload } from "@dcloudio/uni-app";
import { ref } from "vue";

const show = ref(false);

const open = () => {
  show.value = true;
};

const close = () => {
  show.value = false;
};

onUnload(() => {
  uni.$emit("select_product", [
    { name: "产品1", id: 1 },
    { name: "产品2", id: 2 },
  ]);
});
</script>

<style lang="scss" scoped>
.scroll-container {
  height: calc(100vh - (64rpx + 20rpx * 2));
  box-sizing: border-box;
  .scroll-view-item {
    margin: 20rpx 0;
    padding: 20rpx;
    box-sizing: border-box;
    border-bottom: 1px solid #f1f1f1;
  }
}

.popup-container {
  padding: 20rpx;
  .title-box {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 20rpx;
    border-bottom: 1px solid #f1f1f1;
    margin-bottom: 20px;
  }
  .product-container {
    height: 500rpx;
    .product-item {
      display: flex;
      align-items: center;
      margin: 20rpx 0;
      padding: 20rpx;
      box-sizing: border-box;
      border-bottom: 1px solid #f1f1f1;
      .name {
        flex: 1;
        margin-right: 10rpx;
      }
      .btn {
        width: 120rpx;
      }
    }
  }
}
</style>
