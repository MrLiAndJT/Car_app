<template>
  <tm-app>
    <tm-sheet :margin="[0, 0]" :padding="[20, 20]" color="#fff">
      <tm-input
        v-model="searchValue"
        prefix="tmicon-search"
        showClear
        placeholder="搜索您想查找的订单"
        placeholderStyle="font-size: 24rpx"
        :height="80"
      />
      <tm-segtab
        class="segtab"
        :width="710"
        :list="tabsTitle"
        :height="100"
        defaultValue="1"
        color="theme-yellow"
        @change="segtabChange"
      />
    </tm-sheet>

    <OrderCard v-if="showData" />

    <view class="empt-data" v-else> 暂无数据 </view>
  </tm-app>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import OrderCard from "./components/OrderCard.vue";
import Main from "@/api/main";

const searchValue = ref("");
const loading = ref(false);

const showData = ref(true);

const tabsTitle = ref([
  { id: "1", text: "全部订单" },
  { id: "2", text: "退款记录" },
  {
    id: "3",
    text: "申诉记录",
  },
]);

const segtabChange = (value: string) => {
  console.log("value: ", value);
  if (value === "1") {
    showData.value = true;
  } else {
    showData.value = false;
  }
};

const getOrderList = async () => {
  uni.showLoading();
  const data = await Main.userOrderList();
  console.log("data: ", data);
};

getOrderList();
</script>

<style lang="scss">
.segtab {
  margin-top: 50rpx;
}
.empt-data {
  color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100rpx;
}
</style>
