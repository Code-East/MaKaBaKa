<template>
  <div class="login-box">
    <div class="lg-centent">
      <h2>用户登入</h2>
      <el-input v-model="username" placeholder="账号"></el-input>
      <el-input placeholder="密码" v-model="password" show-password></el-input>
      <el-button type="primary" round @click="loginClick">登入</el-button>
      <el-link target="_blank" @click="tologon">邮箱注册</el-link>
    </div>
  </div>
</template>

<script>
import { isUser } from "network/userlogin";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    tologon() {
      this.$emit("loginClick");
    },
    async loginClick() {
        // 验证用户名和密码
      if (this.username == "" || this.password == "") {
        this.$message({
          message: "用户名和密码不能为空哦",
          type: "warning",
        });
        return ;
      }
      let username  = this.username;
      let userpassword  = this.password;
      let obj = {
        username,userpassword
      }
      let res = await isUser(obj);
      if(res.data.code==200){
        this.$message({
          message: '登入成功',
          type: 'success'
        });
        this.$router.replace('/index');
      }else{
        this.$message.error('账号不存在!');
      }
    },
  },
};
</script>
<style>
.login-box {
  position: absolute;
  top: 100px;
  right: 285px;
  width: 360px;
  height: 300px;
  box-shadow: 5px -5px 20px 0 rgba(81, 79, 79, 0.05),
    -5px 5px 20px 0 rgba(81, 79, 79, 0.05);
  border-radius: 10px;
  background-color: #fff;
  margin-top: 60px;
  opacity: 0.9;
  padding: 10px 20px;
}
.centent .userlogin-body .login-box .lg-centent {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.centent .userlogin-body .login-box .lg-centent .el-input__inner {
  height: 44px;
  border-radius: 22px;
  box-sizing: border-box;
  padding: 0 18px;
}
.centent .userlogin-body .login-box .lg-centent .el-button {
  width: 100%;
  background-color: #4f768f;
  border: none;
  font-size: 13px;
}
</style>