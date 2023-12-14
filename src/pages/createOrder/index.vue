<template>
  <tm-app>
    <tm-sheet :padding="[0, 0]" :margin="[20]" :round="[4]">
      <tm-form
        layout="vertical"
        @submit="confirm"
        ref="form"
        :label-width="150"
        :padding="[0, 0]"
        :margin="[0, 0]"
        :border="false"
      >
        <tm-form-item required label="车主姓名" field="name" :errHeight="15">
          <tm-input v-model="formData.name"></tm-input>
        </tm-form-item>
        <tm-form-item required label="电话" field="phone" :errHeight="15">
          <tm-input v-model="formData.phone" type="number"></tm-input>
        </tm-form-item>
        <tm-form-item required label="地址" field="address" :errHeight="15">
          <tm-input
            v-model="formData.address"
            @click="showdate = true"
            :readonly="true"
            :adjustPosition="false"
            :disabled="true"
          ></tm-input>
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
          ></tm-input>
        </tm-form-item>
      </tm-form>
    </tm-sheet>

    <tm-city-picker
      selectedModel="name"
      v-model:show="showdate"
      v-model="citydate"
      v-model:model-str="dateStr"
    />
  </tm-app>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { watch } from "vue";
import { ref } from "vue";

const dateStr = ref("");
const citydate = ref([]);
const showdate = ref(false);

const formData = reactive({
  name: "",
  phone: "",
  address: "",
  addressDesc: "",
  proExit: true,
  desc: "",
});

const confirm = () => {
  console.log("提交表单...");
};

watch(citydate, (nVal) => {
  formData.address = nVal.join("-");
});
</script>

<style lang="scss" scoped></style>
