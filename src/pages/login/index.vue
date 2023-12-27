<template>
  <tm-app>
    <tm-sheet
      class="login-wrap"
      parenClass="sheet"
      :margin="[20]"
      :padding="[20]"
      contStyle="justify-content: center;"
    >
      <tm-button
        type="primary"
        class="login-btn"
        :width="650"
        :round="20"
        @click="login"
      >
        微信授权登录
      </tm-button>
    </tm-sheet>
  </tm-app>
</template>

<script lang="ts" setup>
import System from "@/api/system";
import { useUserStore } from "@/store/modules/user";

// 用户 store
const userStore = useUserStore();

// 登陆流程
const login = () => {
  uni
    .login()
    .then((res) => {
      return System.login({ code: res.code });
    })
    .then(({ data }) => {
      uni.showToast({
        title: "登录成功!",
      });
      userStore.changeToken(data.token);
      userStore.changeUsername("测试用户");
      uni.navigateBack();
    })
    .catch((err) => {});
};
</script>

<style lang="scss" scoped>
.login-wrap {
  flex: 1;
  display: flex;
  flex-direction: column;
  :deep(.sheet) {
    flex: 1;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  .login-btn {
    min-width: 600rpx;
  }
}
</style>
