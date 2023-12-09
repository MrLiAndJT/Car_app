<template></template>
<script lang="ts" setup>
import { useTmpiniaStore } from "@/tmui/tool/lib/tmpinia";
const store = useTmpiniaStore();

store.setTmVuetifyAddTheme("theme-yellow", "#eee353", true);
</script>
<style lang="scss">
// 阿里云字体图标
@import "@/iconfont/index.scss";
/* #ifdef APP-PLUS-NVUE */
@import "./tmui/scss/nvue.css";
/* #endif */
/* #ifndef APP-PLUS-NVUE */
@import "./tmui/scss/noNvue.css";
/* #endif */
</style>
