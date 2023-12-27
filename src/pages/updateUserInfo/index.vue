<template>
  <tm-app>
    <tm-form
      :label-width="120"
      :padding="[0, 0]"
      :margin="[20]"
      :border="false"
      style="background-color: rgba(245, 245, 245, 1)"
    >
      <tm-form-item required label="昵称" field="username" :errHeight="15">
        <tm-input v-model="formData.username" placeholder="请输入用户昵称" />
      </tm-form-item>
      <tm-form-item required label="手机号" field="phone" :errHeight="15">
        <tm-input
          v-model="formData.phone"
          placeholder="请输入手机号"
          type="number"
        />
      </tm-form-item>
      <tm-button :width="650" :round="20" class="btn">确定</tm-button>
    </tm-form>
  </tm-app>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const formData = ref({
  username: "",
  phone: null,
});
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  justify-content: center;
}
</style>
