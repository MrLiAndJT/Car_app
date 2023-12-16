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
          <tm-input
            v-model="formData.address"
            @click="showdate = true"
            :readonly="true"
            :adjustPosition="false"
            :disabled="true"
            placeholder="请选择地址"
          />
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
          <tm-text
            :font-size="28"
            label="请添加车辆"
            class="flex-center"
            color="#999"
            :padding="[0, 20]"
          />
        </tm-sheet>
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
  </tm-app>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from "vue";

const dateStr = ref("");
const citydate = ref([]);
const showdate = ref(false);

const formData = ref({
  name: "",
  phone: "",
  address: "",
  addressDesc: "",
  proExit: true,
  desc: "",
  car: "",
});

watch(citydate, (nVal) => {
  formData.value.address = nVal.join("-");
});

const navTo = (url: string) => {
  uni.navigateTo({
    url,
  });
};

const confirm = () => {
  console.log("提交表单...");
};
</script>

<style lang="scss" scoped>
.form-wrap {
  margin-bottom: 120rpx;
  .add-card-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
</style>
