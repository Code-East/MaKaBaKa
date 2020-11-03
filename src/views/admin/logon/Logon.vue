<template>
  <div id="logon">
    <div name="logonform" method="post" class="logon_form">
      <h1>用户注册</h1>
      <el-input
        v-model="username"
        placeholder="请输入用户名"
        name="username"
        class="name_inp"
      ></el-input>
      <el-input
        placeholder="密码"
        v-model="password"
        name="password"
        show-password
        class="password_inp"
      ></el-input>
      <el-input
        placeholder="确认密码"
        v-model="againword"
        name="password"
        show-password
        class="password_inp"
      ></el-input>
      <el-input
        placeholder="邮箱"
        v-model="email"
        name="password"
        class="password_inp"
      ></el-input>
      <div class="proving">
        <el-input
          v-model="code"
          placeholder="输入激活码"
          name="username"
          class="name_inp"
        ></el-input>
        <el-link type="primary" @click="getCode">如何获得？</el-link>
      </div>
      <button class="logon_btn" @click="subitClick">提交</button>
      <div class="logon_bottom">
        <el-link type="info" @click="loginClick">已有账号，去登入</el-link>
        <el-link type="info">忘记密码</el-link>
      </div>
    </div>
  </div>
</template>

<script>
import { inertUser } from "network/admin";
export default {
  data() {
    return {
      username: "",
      password: "",
      againword: "",
      code: "",
      email: "",
    };
  },
  methods: {
    //  点击登入
    loginClick() {
      this.$router.push("/admin").catch((err) => err);
    },
    // 点击提交
    async subitClick() {
      let username = this.username;
      let userpassword = this.password;
      let againword = this.againword;
      let code = this.code;
      let email = this.email;
      let obj = {
        username,
        userpassword,
        code,
        email,
      };
      // 邮箱正则
      let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (
        username == "" ||
        userpassword == "" ||
        againword == "" ||
        code == "" ||
        email == ""
      ) {
        this.$message("请填写所有信息");
        return;
      }
      if (userpassword !== againword) {
        this.$message.error("两次密码不一致！");
        return;
      }
      if (!reg.test(email)) {
        this.$message.error("邮箱格式错误！");
        return;
      }
      // 增加用户
      let res = await inertUser(obj);
      let userdata = res.data;
      console.log(userdata);
      switch (userdata.code) {
        case 200:
          this.$message({
            message: "注册成功，进去登入",
            type: "success",
          });
          this.$router.push("/admin").catch((err) => err);
          break;
        case 302:
          this.$message("用户名已被注册");
          break;
        case 301:
          this.$message("激活码无效！");
          break;
        default:
          this.$message.error("未知错误，请联系管理员");
          break;
      }
    },
    // 点击如何获取
    getCode() {
      this.$notify({
        title: "发送邮箱至：",
        message: "2531122734@qq.com",
        type: "success",
      });
    },
  },
};
</script>

<style>
#logon {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: url("~assets/img/bg.jpg") no-repeat 100% 100%;
}
h1 {
  color: #00b5ad !important;
}
.logon_form {
  width: 450px;
  height: 450px;
  border-radius: 10px;
  padding: 10px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.logon_form .logon_bottom {
  width: 81%;
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
}
.logon_form .proving {
  width: 80%;
  display: flex;
  justify-content: space-between;
}
.logon_form .proving button {
  background-color: #00b5ad;
}

.logon_from .logon_bottom a {
  font-size: 12px;
  color: #cccccc;
}
.name_inp,
.password_inp {
  width: 80%;
}
.logon_btn {
  width: 80%;
  height: 41px;
  border: none;
  background-color: #00b5ad;
  color: #fff;
  font-weight: 700;
  outline: none;
  border-radius: 5px;
}
.logon_btn:hover {
  background-color: #19948e;
}
</style>