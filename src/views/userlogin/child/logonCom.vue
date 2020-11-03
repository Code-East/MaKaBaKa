<template>
  <div id="logoncom">
    <div class="content">
      <h2>用户注册</h2>
      <el-input v-model="username" placeholder="手机号即账号"></el-input>
      <el-input placeholder="密码" v-model="password" show-password></el-input>
      <el-input
        placeholder="确认密码"
        v-model="repassword"
        show-password
      ></el-input>
      <el-input placeholder="邮箱" v-model="email"></el-input>
      <div class="code">
        <el-input
          placeholder="验证码"
          v-model="code"
          class="codebtn"
        ></el-input>
        <el-button type="primary" @click="getCode" v-if="getcodebtn"
          >获取验证码</el-button
        >
        <el-button type="primary" disabled v-if="codebtnshow"
          >{{ timecount }}秒后重新获取</el-button
        >
      </div>
      <el-button type="primary" round @click="logonClick">注册</el-button>
      <el-link target="_blank" @click="tologin">已有账号，去登入</el-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      repassword: "",
      email: "",
      code: "",
      codebtnshow: false,
      getcodebtn: true,
      timecount: 60,
    };
  },
  methods: {
    // 去登入
    tologin() {
      this.$emit("logonClick");
    },
    // 获取邮箱验证码
    getCode() {
      this.getcodebtn = false;
      this.codebtnshow = true;
      this.$message({
          message: '发送成功,5分钟内有效!',
          type: 'success'
        });
      this.countdown();
    },
    // 倒计时
    countdown() {
      let timer = setInterval(() => {
        this.timecount--;
        if (this.timecount == 0) {
          clearInterval(timer);
          this.getcodebtn = true;
          this.codebtnshow = false;
          this.timecount = 60;
        }
      }, 1000);
    },
    // 点击注册
    logonClick() {
        let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      // 验证
      if (
        this.username == "" ||
        this.password == "" ||
        this.repassword == "" ||
        this.email == "" ||
        this.code == ""
      ) {
        this.$message({
          message: "注册内容不能为空哦",
          type: "warning",
        });
        return ;
      }else if(this.password != this.repassword){
          this.$message({
          message: "两次密码不一致",
          type: "warning",
        });
        return ;
      }else if(!reg.test(this.email)){
          this.$message({
          message: "邮箱格式不正确",
          type: "warning",
        });
        return ;
      }

    },
  },
};
</script>
<style>
#logoncom {
  position: absolute;
  top: 20px;
  right: 285px;
  width: 400px;
  height: 450px;
  box-shadow: 5px -5px 20px 0 rgba(81, 79, 79, 0.05),
    -5px 5px 20px 0 rgba(81, 79, 79, 0.05);
  border-radius: 10px;
  background-color: #fff;
  margin-top: 60px;
  opacity: 0.9;
  padding: 10px 20px;
}
#logoncom .content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
#logoncom .content .code {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
#logoncom .content .code .el-button {
  background-color: #4f768f;
  border: none;
}
#logoncom .content .el-input__inner {
  height: 44px;
  border-radius: 22px;
  box-sizing: border-box;
  padding: 0 18px;
}
#logoncom .content > .el-button {
  width: 100%;
  background-color: #4f768f;
  border: none;
}
</style>