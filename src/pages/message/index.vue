<template>
  <tm-app color="#fff">
    <tm-sheet
      :padding="[0, 0]"
      :margin="[32, 0, 32, 0]"
      v-for="(item, index) in messageList"
      :key="item.id"
    >
      <tm-slide-switch
        @click="cellClick"
        :width="686"
        :height="120"
        :shadow="0"
      >
        <view class="msg-item">
          <text class="icon iconfont icon-lingsheng"></text>
          <view class="msg-content">
            <view class="title">{{ item.title }}</view>
            <view class="subtit">{{ item.subtitle }}</view>
          </view>
        </view>
        <template v-slot:right>
          <view class="flex flex-row flex-row-center-end">
            <tm-sheet
              _class="flex flex-row flex-row-center-center"
              :width="110"
              :height="120"
              color="red"
              no-level
              :margin="[0]"
              :padding="[0]"
            >
              <tm-text :userInteractionEnabled="false" label="删除"></tm-text>
            </tm-sheet>
          </view>
        </template>
      </tm-slide-switch>
    </tm-sheet>
  </tm-app>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const action = ref([
  { text: "操作", color: "black" },
  { text: "删除按钮", color: "green", icon: "tmicon-delete" },
]);

const cellClick = () => {
  console.log("cellClick....");
};

const messageList = ref([
  {
    id: 0,
    title: "系统消息",
    subtitle: "会装云小程序派单，全新上线啦！",
  },
  {
    id: 1,
    title: "提示消息2",
    subtitle: "这是一部分提示消息，你看懂了嘛",
  },
  {
    id: 2,
    title: "呼呼",
    subtitle: "呼呼回鹘u呼呼呼呼会呼呼呼，全新上线啦！",
  },
]);
</script>

<style lang="scss" scoped>
.msg-item {
  display: flex;
  align-items: center;
  background-color: #fff;
  border-top: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
  padding: 20rpx;
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: $uni-color-primary;
    color: #333;
    margin-right: 20rpx;
    border-radius: 50%;
    font-size: 40rpx;
  }
  .msg-content {
    .title {
      color: #333;
      font-size: 32rpx;
    }
    .subtit {
      color: #999;
      font-size: 24rpx;
    }
  }
}
</style>
