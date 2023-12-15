<template>
  <tm-app>
    <tm-sticky :offset="0">
      <template v-slot:sticky>
        <tm-sheet :margin="[0]" :padding="[20, 20]">
          <tm-input
            v-model="searchValue"
            :searchWidth="120"
            prefix="tmicon-search"
            searchLabel="搜索"
          />
        </tm-sheet>
      </template>
    </tm-sticky>
    <tm-sheet :margin="[20]" :padding="[20]">
      <tm-indexes :height="height">
        <tm-indexes-item
          title="热门汽车"
          navTitle="热"
          :padding="[0]"
          :margin="[0]"
        >
          <view class="my-10 flex flex-row flex-wrap">
            <tm-tag outlined label="奔驰"></tm-tag>
            <tm-tag outlined label="宝马"></tm-tag>
            <tm-tag outlined label="特斯拉"></tm-tag>
            <tm-tag outlined label="奥迪"></tm-tag>
            <tm-tag outlined label="本田"></tm-tag>
            <tm-tag outlined label="丰田"></tm-tag>
            <tm-tag outlined label="法拉利"></tm-tag>
            <tm-tag outlined label="GTA"></tm-tag>
          </view>
        </tm-indexes-item>

        <tm-indexes-item
          :title="item.navTitle"
          :navTitle="item.navTitle"
          v-for="(item, index) in carList"
          :key="item.id"
        >
          <view class="my-16">
            <tm-text :label="item.name"></tm-text>
          </view>
        </tm-indexes-item>
      </tm-indexes>
    </tm-sheet>
  </tm-app>
</template>

<script lang="ts" setup>
import { onLoad } from "@dcloudio/uni-app";
import { reactive, ref } from "vue";

type CarListType = {
  id: number;
  name: string;
  navTitle?: string;
};

const searchValue = ref("");

const height = ref(700);

const carList = reactive<CarListType[]>([
  {
    id: 1,
    name: "奥迪",
    navTitle: "A",
  },
  {
    id: 2,
    name: "宝马",
    navTitle: "B",
  },
  {
    id: 3,
    name: "奔驰",
    // navTitle: "B",
  },
  {
    id: 4,
    name: "长安",
    navTitle: "C",
  },
  {
    id: 5,
    name: "大众",
    navTitle: "D",
  },
  {
    id: 6,
    name: "大发",
    // navTitle: "D",
  },
  {
    id: 7,
    name: "东风",
    // navTitle: "D",
  },
  {
    id: 8,
    name: "法拉利",
    navTitle: "F",
  },
  {
    id: 9,
    name: "广汽集团",
    navTitle: "G",
  },
  {
    id: 10,
    name: "广汽集团",
    // navTitle: "G",
  },
  {
    id: 11,
    name: "哈佛",
    navTitle: "H",
  },
  {
    id: 12,
    name: "Icona",
    navTitle: "I",
  },
  {
    id: 13,
    name: "Jeep",
    navTitle: "J",
  },
  {
    id: 14,
    name: "吉利汽车",
    // navTitle: "J",
  },
  {
    id: 15,
    name: "凯迪拉克",
    navTitle: "K",
  },
  {
    id: 16,
    name: "兰博基尼",
    navTitle: "L",
  },
  {
    id: 17,
    name: "马自达",
    navTitle: "M",
  },
  {
    id: 18,
    name: "玛莎拉蒂",
    // navTitle: "M",
  },
  {
    id: 19,
    name: "迈巴赫",
    // navTitle: "M",
  },
  {
    id: 20,
    name: "马自达",
    // navTitle: "M",
  },
  {
    id: 21,
    name: "纳智捷",
    navTitle: "N",
  },
  {
    id: 22,
    name: "讴歌",
    navTitle: "O",
  },
  {
    id: 23,
    name: "鹏克汽车",
    navTitle: "P",
  },
  {
    id: 24,
    name: "奇瑞汽车",
    // navTitle: "P",
  },
  {
    id: 25,
    name: "日产",
    navTitle: "R",
  },
  {
    id: 26,
    name: "三菱",
    navTitle: "S",
  },
  {
    id: 27,
    name: "坦克",
    navTitle: "T",
  },
  {
    id: 28,
    name: "蔚来",
    navTitle: "W",
  },
  {
    id: 29,
    name: "现代",
    navTitle: "X",
  },
  {
    id: 30,
    name: "雪铁龙",
    // navTitle: "X",
  },
  {
    id: 31,
    name: "野马",
    navTitle: "Y",
  },
  {
    id: 32,
    name: "众泰",
    navTitle: "Z",
  },
]);

onLoad(() => {
  const info = uni.getWindowInfo();
  height.value = info.pixelRatio * info.safeArea.height - uni.$tm.u.torpx(200);
});
</script>

<style lang="scss" scoped></style>
