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
        username: "",
        token: "",
      },
    };
  },
  actions: {
    changeUsername(name: string) {
      this.loginData.username = name;
    },
    changeToken(token: string) {
      this.loginData.token = token;
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
