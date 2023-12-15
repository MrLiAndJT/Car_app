<template>
  <tm-app>
    <tm-form
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
          <tm-button size="small" :margin="[0]">添加车辆</tm-button>
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

const confirm = () => {
  console.log("提交表单...");
};

watch(citydate, (nVal) => {
  formData.value.address = nVal.join("-");
});
</script>

<style lang="scss" scoped>
.add-card-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
