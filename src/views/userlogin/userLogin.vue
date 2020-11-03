<template>
  <div id="userlogin">
      <div class="centent">
          <div class="logo">
            <div class="logo-bar">
                <img src="~assets/img/logo.png" alt="" @click="backhome">
                <div class="tips">
                    依《网络安全法》相关要求，即日起玛卡巴卡登陆需绑定手机。为保障您的账户安全及正常使用，如您尚未绑定，请尽快完成绑定，感谢您的理解和支持!
                </div>
            </div>
          </div>
          <div class="userlogin-body">
              <!-- 登入组件 -->
              <login-com  @loginClick = 'toLogon' v-if="islogin"/>
              <logon-com  @logonClick = 'toLogin' v-if="islogon"/>
          </div>
        <bottom />
      </div>
  </div>
</template>

<script>
import Bottom from "components/bottom/Bottom"
import loginCom from "./child/loginCom"
import logonCom from "./child/logonCom"
export default {
    data() {
        return {
            islogin:true,
            islogon:false,
        }
    },
    components:{
        Bottom,
        loginCom,
        logonCom
    },
    methods:{
        // 点击注册
        toLogon(){
            this.islogin=false;
            this.islogon = true;
        },
        // 点击去登入 
        toLogin(){
            this.islogin=true;
            this.islogon = false;
        },
        // 去首页
        backhome(){
            this.$router.back();
        }
    }
};
</script>
<style>
#userlogin{
    width: 100%;
}
#userlogin .centent{
    width: 100%;
    margin-top: 40px;
}
#userlogin .logo{
    width: 1200px;
    height: 62px;
    line-height: 62px;
    margin: 0 auto;
}
#userlogin .logo .logo-bar{
    display: flex;
}
#userlogin .logo img{
    width: 130px;
    height: 57px;
    cursor: pointer;
}
#userlogin .logo .tips{
    margin-top: 10px;
    margin-left: 10px;
}
#userlogin .logo .tips{
    padding: 5px 10px;
    height: 28px;
    margin-left: 20px;
    background-color: #648194;
    border: 1px solid #4f768f;
    text-align: center;
    font-size: 11px;
    color: #fff;
    line-height: 28px;
}
#userlogin .centent .userlogin-body{
    width: 100%;
    margin-top: 30px;
    position: relative;
    height: 600px;
    background: url("~assets/img/loginbg.jpg") no-repeat;
    background-size: 100% 100%;
}

</style>