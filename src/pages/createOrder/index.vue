<template>
  <tm-app>
    <tm-form
      class="form-wrap"
      v-model="formData"
      layout="vertical"
      @submit="confirm"
      ref="form"
      :label-width="150"
      :padding="[0, 0]"
      :margin="[20]"
      :border="false"
      style="background-color: rgba(245, 245, 245, 1)"
    >
      <tm-sheet :padding="[0, 0]" :margin="[20]" :round="[4]">
        <tm-text :font-size="24" _class="text-weight-b" label="车主信息" />
        <tm-divider />
        <tm-form-item required label="车主姓名" field="name" :errHeight="15">
          <tm-input v-model="formData.name" placeholder="请输入车主姓名" />
        </tm-form-item>
        <tm-form-item required label="电话" field="phone" :errHeight="15">
          <tm-input
            v-model="formData.phone"
            type="number"
            placeholder="请输入电话号码"
          />
        </tm-form-item>
        <tm-form-item required label="地址" field="address" :errHeight="15">
          <view class="location">
            <tm-input
              class="search"
              v-model="formData.address"
              :readonly="true"
              :adjustPosition="false"
              :disabled="true"
              placeholder="请选择地址"
              @click="showdate = true"
            />
            <tm-button type="primary" size="small" @click="selectLocation">
              地图
            </tm-button>
          </view>
        </tm-form-item>
        <tm-form-item
          required
          label="详情地址"
          field="addressDesc"
          :errHeight="15"
        >
          <tm-input
            v-model="formData.addressDesc"
            type="textarea"
            :height="150"
            placeholder="请输入详情地址"
          />
        </tm-form-item>
      </tm-sheet>

      <view class="nearby-shops">
        <tm-text color="primary" @click="getNearbyShop"> 查看附近门店 </tm-text>
      </view>

      <tm-sheet
        :padding="[20]"
        :margin="[0, 20]"
        :round="[4]"
        style="background-color: rgba(245, 245, 245, 1)"
      >
        <view class="add-card-wrap">
          <tm-text :font-size="24" _class="text-weight-b" label="车辆信息" />
          <tm-button
            size="small"
            :margin="[0]"
            @click="navTo('/pages/selectCar/index')"
          >
            添加车辆
          </tm-button>
        </view>

        <tm-divider />
        <tm-sheet :padding="[0, 0]" :margin="[0]" :round="[4]">
          <text class="car-info-text">
            {{ carStore.$state.carBrandInfo?.label || "请添加车辆" }}
          </text>
        </tm-sheet>
      </tm-sheet>

      <tm-sheet :padding="[0, 0]" :margin="[20]" :round="[4]">
        <tm-text :font-size="24" _class="text-weight-b" label="其它信息" />
        <tm-divider />
        <tm-form-item field="desc" :errHeight="15">
          <tm-input
            v-model="formData.desc"
            type="textarea"
            :height="150"
            placeholder="请输入备注"
          />
        </tm-form-item>
        <tm-form-item field="agree" :errHeight="15">
          <view class="agree-wrap">
            <tm-checkbox :margin="[0]" :padding="[0]" v-model="formData.agree">
              <template v-slot:default="{ checked }">
                <view class="flex flex-row agree">
                  <tm-text label="我已经阅读并同意" />
                </view>
              </template>
            </tm-checkbox>
            <view>
              <tm-text
                color="primary"
                label="《合作协议》"
                @click="showAgree = true"
              />
            </view>
          </view>
        </tm-form-item>
      </tm-sheet>
    </tm-form>

    <view class="price-container">
      <view class="con-left"> 预估服务费: ¥0.00 </view>
      <view class="submit">发布订单</view>
    </view>

    <tm-city-picker
      selectedModel="name"
      v-model:show="showdate"
      v-model="citydate"
      v-model:model-str="dateStr"
    />

    <tm-modal
      title="信息框"
      content="这是一分关于汽车维修的xxxxx协议, 一下内容xxxxxxx"
      okText="同意"
      v-model:show="showAgree"
      @ok="formData.agree = true"
      @cancel="formData.agree = false"
    />

    <tm-overlay v-model:show="carStoreConfig.show" contentAnimation>
      <view class="table">
        <view class="header">
          <view class="header-item left">
            <view class="padding"> 合作门店 </view>
          </view>
          <view class="header-item right">
            <view class="padding"> 距离 </view>
          </view>
        </view>
        <view
          v-if="carStoreConfig.tableData.length"
          class="conten-item"
          v-for="item in carStoreConfig.tableData"
          :key="item.id"
        >
          <view class="left">
            <view class="padding"> {{ item.title }} </view>
          </view>
          <view class="right">
            <view class="padding">
              {{ (item.gap || 0).toFixed(2) + item.unit }}
            </view>
          </view>
        </view>
        <view class="null" v-else>附近暂无门店</view>
      </view>
    </tm-overlay>
  </tm-app>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from "vue";
import Main from "@/api/main";
import type { PartnerStoreListOut } from "@/api/main/main";
import { useCarStore } from "@/store/modules/car";

const carStore = useCarStore();
const dateStr = ref("");
const citydate = ref([]);
const showdate = ref(false);

const showAgree = ref(false);

const formData = ref({
  name: "",
  phone: "",
  address: "",
  addressDesc: "",
  proExit: true,
  desc: "",
  car: "",
  agree: false,
});

watch(citydate, (nVal) => {
  formData.value.address = nVal.join("-");
  formData.value.addressDesc = "";
});

const navTo = (url: string) => {
  uni.navigateTo({
    url,
  });
};

const carStoreConfig = reactive<{
  show: boolean;
  tableData: PartnerStoreListOut[];
}>({
  show: false,
  tableData: [],
});

// 把位置拆分成数组
/*自动拆分省市区*/
function splitAddress(address: string) {
  var reg = /.+?(省|市|自治区|自治州|县|区)/g;
  return address.match(reg) || [];
}

const selectLocation = () => {
  uni.chooseLocation().then((res) => {
    const addressArr = splitAddress(res.address);
    formData.value.address = addressArr.join("-");
    formData.value.addressDesc = res.address.replace(addressArr.join(""), "");
  });
};

// 查看附近门店
const getNearbyShop = async () => {
  if (!formData.value.address) {
    uni.showToast({
      title: "请先选择地址",
      icon: "none",
    });
    return;
  }
  const data = await Main.partnerStoreList({
    address: formData.value.address + "-" + formData.value.addressDesc,
    limitGap: 5,
  });
  carStoreConfig.tableData = data.data || [];
  carStoreConfig.show = true;
};

const confirm = () => {
  console.log("提交表单...");
};

// 初始化
const init = () => {
  // 把之前选的车辆信息清空
  carStore.setCarInfo(null);
  carStore.setCarBrandInfo(null);
};
init();
</script>

<style lang="scss" scoped>
.form-wrap {
  margin-bottom: 120rpx;
  .add-card-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nearby-shops {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-top: 20rpx;
    background-color: rgba(245, 245, 245, 1);
  }
  .agree-wrap {
    display: flex;
    align-items: center;
    .agree {
      margin-left: 10rpx;
    }
  }
  .car-info-text {
    display: flex;
    align-items: center;
    justify-content: center;
    color: "#999";
    font-size: 28rpx;
    padding: 20rpx;
  }
  .location {
    display: flex;
    align-items: center;
    .search {
      flex: 1;
    }
  }
}

.price-container {
  height: 120rpx;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #000;
  color: #fff;
  .con-left {
    flex: 1;
    margin-left: 20rpx;
  }
  .submit {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 20rpx;
    background-color: $uni-color-primary;
    color: #333;
  }
}

.table {
  width: 700rpx;
  border-radius: 10rpx;
  overflow: hidden;
  .left {
    width: 75%;
    text-align: center;
    border-right: 1px solid #f1f1f1;
  }
  .right {
    width: 25%;
    text-align: center;
  }
  .padding {
    padding: 20rpx 0;
  }
  .header {
    background-color: #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28rpx;
    color: #333;
  }
  .conten-item {
    width: 100%;
    display: flex;
    background-color: #fff;
    border-top: 1px solid #f1f1f1;
    color: #666;
    font-size: 26rpx;
  }
  .null {
    height: 150rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
    background-color: #fff;
    font-size: 28rpx;
  }
}
</style>
