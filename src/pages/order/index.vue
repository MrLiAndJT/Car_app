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
      ></tm-segtab>
    </tm-sheet>

    <OrderCard />
  </tm-app>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import OrderCard from "./components/OrderCard.vue";

const searchValue = ref("");

const tabsTitle = ref([
  { id: "1", text: "全部订单" },
  { id: "2", text: "退款记录" },
  {
    id: "3",
    text: "申诉记录",
  },
]);
</script>

<style lang="scss">
.segtab {
  margin-top: 50rpx;
}
</style>
