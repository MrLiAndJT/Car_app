import { defineStore } from "pinia";

type useUserStoreState = {
  loginData: {
    username: string;
    token: string;
  }; // 登录接口的信息
};

export const useUserStore = defineStore("user", {
  state(): useUserStoreState {
    return {
      loginData: {
        username: "测试用户",
        token: "token-123456abc",
      },
    };
  },
  actions: {
    changeUsername(name: string) {
      this.loginData.username = name;
    },
  },
  persist: {
    key: "user",
    storage: {
      getItem(key) {
        return uni.getStorageSync(key);
      },
      setItem(key, val) {
        uni.setStorageSync(key, val);
      },
    },
  },
});
