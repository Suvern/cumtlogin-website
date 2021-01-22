<template>
  <div class="wrapper">
    <Form ref="form" :model="form" inline :rules="rules">
      <FormItem prop="username">
        <Input type="text" v-model="form.username" placeholder="账号"></Input>
      </FormItem>
      <FormItem prop="password">
        <Input
          type="password"
          v-model="form.password"
          placeholder="密码"
        ></Input>
      </FormItem>
      <FormItem>
        <Select
          v-model="form.carrier"
          placeholder="选择运营商"
          style="width: 110px"
        >
          <Option
            v-for="item in carrierList"
            :value="item.value"
            :key="item.value"
          >
            {{ item.label }}
          </Option>
        </Select>
      </FormItem>
      <FormItem>
        <Select
          v-model="form.platform"
          placeholder="选择平台"
          style="width: 106px"
        >
          <Option
            v-for="item in platformList"
            :value="item.value"
            :key="item.value"
          >
            {{ item.label }}
          </Option>
        </Select>
      </FormItem>

      <FromItem>
        <Button type="success" @click="handleClick()" :disabled="isValid()"
          >生成</Button
        >
      </FromItem>
    </Form>

    <Input v-model="code" type="textarea" placeholder="</>" :rows="8" />
  </div>
</template>

<script>
const carrierList = [
  { value: "cmcc", label: "移动" },
  { value: "unicom", label: "联通" },
  { value: "telecom", label: "电信" },
];

const platformList = [
  { value: "windows", label: "Windows" },
  { value: "mac", label: "Mac OS" },
  { value: "linux", label: "Linux/路由器" },
];

export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        carrier: "",
        platform: "",
      },
      rules: {
        username: [{ required: true, message: "请输入账号" }],
        password: [{ required: true, message: "请输入密码" }],
      },
      carrierList: carrierList,
      platformList: platformList,
      code: "",
    };
  },
  methods: {
    handleClick() {
      alert("click");
    },
    isValid() {
      return !Object.keys(this.form).every((k) => this.form[k]);
    },
  },
};
</script>

<style scoped>
.wrapper {
}
</style>