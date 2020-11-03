<template>
  <div id="login">
    <div name="loginform" method="post" class="login_form">
      <h1>用户登入</h1>
      <el-input v-model="username" placeholder="用户名" name="username" class="name_inp"></el-input>
      <el-input
        placeholder="请输入密码"
        v-model="password"
        name="password"
        show-password
        class="password_inp"
      ></el-input>
      <button class="login_btn" @click="loginClick">登入</button>
      <div class="login_bottom">
        <el-link type="info" @click="logonClick">点击注册</el-link>
        <el-link type="info">忘记密码</el-link>
      </div>
    </div>
  </div>
</template>

<script>
import { isUser } from "network/admin";

export default {
  data() {
    return {
      username: "",
      password: "",
      userdata: "",
      usertype:''
    };
  },
  props:{
    
  },
  methods: {
    async loginClick() {
      let username = this.username;
      let userpassword = this.password;
      // 判断是否填写了用户名和密码
      if (username == "" || userpassword == "") {
        this.$message("请填写用户名和密码");
        return;
      }
      // 获取用户信息
      let user = { username, userpassword };
      let res = await isUser(user);
      let data = res.data;
      // code为200登入成功
      if (data.code == 200) {
        this.$message({
          message: "登入成功",
          type: "success",
        });
        // 跳转到后台
        this.$router.push("/backstage").catch((err) => err);
        // code为300用户名或密码错误
      } else if (data.code == 300) {
        this.$message.error("用户名或密码错误！");
      } else {
        this.$message.error("异常错误，请联管理员！");
      }
    },
    logonClick() {
      this.$router.push("/logon").catch((err) => err);
    },
  },
  // 在路由跳转到此页面前触发
  // beforeRouteEnter (to,from,next){
  //   // 判断是从哪一个页面来的
  //   if(from.path=='/index'){
  //     this.usertype = ''
  //   }
  //   next();
  // },
};
</script>
<style>
#login {
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
.login_form {
  width: 450px;
  height: 300px;
  border-radius: 10px;
  padding: 10px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.login_form .login_bottom {
  width: 81%;
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
}
.login_from .login_bottom a {
  font-size: 12px;
  color: #cccccc;
}
.name_inp,
.password_inp {
  width: 80%;
}
.login_btn {
  width: 80%;
  height: 41px;
  border: none;
  background-color: #00b5ad;
  color: #fff;
  font-weight: 700;
  outline: none;
  border-radius: 5px;
}
.login_btn:hover {
  cursor: pointer;
  background-color: #19948e;
}
</style>

