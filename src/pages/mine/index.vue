<template>
  <tm-app class="mine-wrap">
    <view class="user-container">
      <view class="user-info-wrap" @click="login">
        <view class="con-left">
          <tm-avatar
            :font-size="42"
            :round="12"
            color="pink"
            linear="top"
            icon="tmicon-QQ"
          ></tm-avatar>
        </view>
        <view class="con-right">
          <view class="user-name">
            <text class="name">
              {{ userStore.$state.loginData.username || "登陆/注册" }}
            </text>
            <text class="iconfont icon-jinrujiantou"></text>
          </view>
          <view class="phone-wrap" v-if="userStore.$state.loginData.token">
            <text class="iconfont icon-qiehuanchengshi"></text>
            <text class="phone-number">13282726250</text>
          </view>
        </view>
      </view>
      <view class="wallet">
        <view class="con-left">
          <text class="text">账户余额</text>
          <text class="util">¥</text>
          <text class="numer">0.00</text>
        </view>
        <view class="con-right">
          <!-- <tm-button text="月落" size="mini" shape="circle">查看明细</tm-button> -->
          <tm-button
            :margin="[0]"
            :shadow="0"
            :border="1"
            :padding="[10]"
            outlined
            size="normal"
            label="查看明细"
            :fontSize="24"
            :width="140"
            :height="60"
            fontColor="#333"
            :round="20"
          ></tm-button>
        </view>
      </view>
    </view>
    <tm-sheet :margin="[20, 100, 20, 20]" :round="[4, 4, 0, 0]">
      <tm-cell
        :margin="[0, 0]"
        :titleFontSize="30"
        title="我的评价"
        :round="[4, 4, 0, 0]"
      />
      <tm-cell :margin="[0, 0]" :titleFontSize="30" title="我的保修卡" />
      <tm-cell :margin="[0, 0]" :titleFontSize="30" title="意见反馈" />
      <tm-cell :margin="[0, 0]" :titleFontSize="30" title="联系客服" />
      <tm-cell
        :margin="[0, 0]"
        :titleFontSize="30"
        :title="'关于' + APP_NAME"
      />
      <tm-cell :margin="[0, 0]" :titleFontSize="30" title="服务协议" />
      <tm-cell
        :margin="[0, 0]"
        :titleFontSize="30"
        title="我是师傅"
        rightText="查看入驻信息"
        :round="[0, 0, 4, 4]"
      />
    </tm-sheet>

    <tm-sheet
      v-if="userStore.$state.loginData.token"
      :margin="[20]"
      :padding="[0]"
      :round="[0, 0, 4, 4]"
    >
      <tm-cell
        :margin="[0, 0]"
        :titleFontSize="30"
        title="退出登录"
        :round="[0, 0, 4, 4]"
        @click="loginOut"
      />
    </tm-sheet>
  </tm-app>
</template>

<script lang="ts" setup>
import { useUserStore } from "@/store/modules/user";

const APP_NAME = import.meta.env.VITE_APP_NAME;

// 用户 store
const userStore = useUserStore();

const goPage = (url: string) => {
  uni.navigateTo({
    url,
  });
};

// 登陆流程
const login = () => {
  if (!userStore.$state.loginData.token) {
    // 未登录，去到登陆页面
    goPage("/pages/login/index");
  } else {
    // 已登陆，去到修改用户信息页面
    goPage("/pages/updateUserInfo/index");
  }
};

// 退出登录
const loginOut = () => {
  uni
    .showModal({
      title: "退出",
      content: "确定退出登录吗？",
    })
    .then((data) => {
      if (data.confirm) {
        // 确定退出登录
        userStore.logout();
      }
    })
    .catch((err) => {
      console.log("取消: ", err);
    });
};
</script>

<style lang="scss" scoped>
.mine-wrap {
  min-height: 100vh;
  background-color: #f4f4f4;
  .user-container {
    position: relative;
    height: 270rpx;
    background-color: $uni-color-primary;
    .user-info-wrap {
      display: flex;
      align-items: center;
      padding: 40rpx 20rpx 30rpx 20rpx;
      .con-left {
        margin-right: 40rpx;
      }
      .con-right {
        .user-name {
          margin-bottom: 10rpx;
          .name {
            font-weight: 500;
          }
          .iconfont {
            font-weight: bold;
          }
        }
        .phone-wrap {
          display: flex;
          align-items: center;
          .iconfont {
            font-weight: bold;
          }
          .phone-number {
            margin-left: 10rpx;
            font-size: 24rpx;
          }
        }
      }
    }
    .wallet {
      position: absolute;
      width: 100%;
      box-sizing: border-box;
      bottom: -70rpx;
      height: 150rpx;
      width: 710rpx;
      left: 20rpx;
      background-color: #fff;
      border-radius: 10rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20rpx;
      .con-left {
        font-size: 24rpx;
        color: #999;
        .util {
          font-weight: 500;
          margin-left: 10rpx;
          margin-right: 5rpx;
          color: #f40;
        }
        .numer {
          font-size: 38rpx;
          color: #f40;
          font-weight: 600;
        }
      }
      .con-right {
      }
    }
  }
}
</style>
@/store/user @/store/modules/user
