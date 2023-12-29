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
            @search="filterData"
          />
        </tm-sheet>
      </template>
    </tm-sticky>
    <tm-spin :load="loading" tip="数据加载中...">
      <tm-sheet :margin="[20]" :padding="[20]">
        <tm-indexes :height="height">
          <tm-indexes-item
            v-for="(item, index) in carList"
            :title="item.pinyin"
            :navTitle="item.pinyin"
            :key="item.id"
          >
            <view class="my-16" @click="selectCarModel(item)">
              <tm-text :label="item.label"></tm-text>
            </view>
          </tm-indexes-item>
        </tm-indexes>
      </tm-sheet>
    </tm-spin>
  </tm-app>
</template>

<script lang="ts" setup>
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";
import Main from "@/api/main";
import type { CarInfoOptions } from "@/api/main/main.d";
import { deepClone } from "@/tmui/tool/function/util";
import { useCarStore } from "@/store/modules/car";

type HandleCarOptionsType = Omit<CarInfoOptions, "pinyin"> & {
  pinyin?: string;
};

type CarObjType = {
  [prop: string]: HandleCarOptionsType[];
};

const carStore = useCarStore();
// 搜索文字
const searchValue = ref("");

const height = ref(700);

// 是否正在加载中
const loading = ref(false);

// 原始数据
const originData = ref<CarInfoOptions[]>([]);
// 汽车品牌列表(过滤后的)
const carList = ref<HandleCarOptionsType[]>([]);

// 获取汽车品牌列表
const getCarList = () => {
  loading.value = true;
  Main.CarBrandOptionList()
    .then(({ data }) => {
      originData.value = data;
      filterData();
    })
    .finally(() => {
      loading.value = false;
    });
};

// 根据搜索进行过滤
const filterData = () => {
  let filterList: CarInfoOptions[] = [];
  if (!searchValue.value) {
    filterList = deepClone(originData.value);
  } else {
    filterList = originData.value.filter((item) => {
      return item.label.includes(searchValue.value);
    });
  }
  let list: HandleCarOptionsType[] = [];
  let carCategory: CarObjType = {};
  filterList.forEach((item) => {
    const pinyin = item.pinyin;
    if (Array.isArray(carCategory[pinyin])) {
      carCategory[pinyin].push({
        id: item.id,
        label: item.label,
      });
    } else {
      carCategory[pinyin] = [
        {
          id: item.id,
          label: item.label,
          pinyin,
        },
      ];
    }
  });
  for (const prop in carCategory) {
    const data = carCategory[prop];
    list = [...list, ...data];
  }
  carList.value = list;
};

// 选择品牌下的系列
const selectCarModel = (data: HandleCarOptionsType) => {
  carStore.setCarInfo(data as CarInfoOptions);
  uni.navigateTo({
    url: `/pages/selectCarModel/index`,
  });
};

getCarList();

onLoad(() => {
  const info = uni.getWindowInfo();
  height.value = info.pixelRatio * info.safeArea.height - uni.$tm.u.torpx(200);
});
</script>

<style lang="scss" scoped></style>
