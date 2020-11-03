<template>
  <div id="index">
    <!-- 头部 -->
    <div class="headerbox">
      <div class="header">
        <!-- 导航栏 -->
        <nav-bar>
          <img
            class="logo"
            v-lazy="require('assets/img/logo.png')"
            slot="logo"
          />
          <div slot="search">
            <el-input placeholder="请输入内容">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>

          <div class="i" slot="icon1">
            <span class="el-icon-star-off"></span>
          </div>
          <div class="i" slot="icon2">
            <span class="el-icon-shopping-cart-2"></span>
          </div>
          <div class="i" slot="icon3">
            <span class="el-icon-toilet-paper"></span>
          </div>
          <div class="i" slot="icon4" @click="toLogin">
            <div>登入</div>
          </div>
        </nav-bar>
      </div>
    </div>
    <!-- 内容 -->
    <div class="content">
      <!-- 大图和分类 -->
      <div class="wrap">
        <!-- 大图和分类的左边 -->
        <div class="wrap-left">
          <goods-item />
          <goods-item />
          <goods-item />
          <goods-item />
        </div>
        <!-- 大图和分类的中间 -->
        <div class="weap-center">
            <!-- 大图 -->
          <div class="bigimg"></div>
            <!-- 分类 -->
          <wrap-class-ify/>
        </div>
        <!-- 大图和分类的右边 -->
        <div class="wrap-right">
          <goods-item />
          <goods-item />
          <goods-item />
           <goods-item />
        </div>
      </div>
      <!-- 商品列表 -->
      <div class="goodslist">
        <goods-item />
       <goods-item />
        <goods-item />
        <goods-item />
       <goods-item />
        <goods-item />
        <goods-item />
        <goods-item />
        <goods-item />
         <goods-item />
        <goods-item />
        <goods-item />
        <goods-item />
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "components/navbar/navBar";
import goodsItem from "./goodsitem/goodsItem";
import wrapClassIfy from "./wrapClassIfy/wrapClassIfy"

export default {
  components: {
    navBar,
    goodsItem,
    wrapClassIfy
  },
  methods:{
    // 进入登入页面
    toLogin(){
      this.$router.push('/userlogin');
    }
  }
};
</script>

<style scoped>
#index {
  width: 100%;
}
#index .headerbox {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 1000;
  width: 100%;
  background-color: #fff;
  margin-bottom: 30px;
}
#index .header {
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
}
#index .header .i span {
  font-size: 28px;
}
#index .header .i div {
  font-size: 14px;
  color: #333;
}
#index .header .el-button {
  background: #ffffff3b;
  border: none;
}
#index .content {
  width: 1200px;
  margin: 0 auto;
  margin-top: 87px;
}
#index .content .wrap {
  display: flex;
  justify-content: space-between;
}
#index .content .wrap .wrap-left,
.wrap-right {
  /* height: 710px; */
  display: flex;
  flex-direction: column;
}
#index .content .wrap .weap-center .bigimg {
  width: 710px;
  height: 715px;
  background-color: lightcoral;
  border-radius: 10px;
}
#index .wrap .bigimg {
  /* width: 710px; */
  height: 596px;
  margin-top: 10px;
}
#index .goodslist {
  width: 100%;
  /* display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: space-around; */
  margin: 0 auto;
  margin-top: 5px;
  column-count: 5;
  column-gap: 28px;
}
#index .goodslist .box {
  width: 205px;
  height: 223px;
  padding: 5px;
  margin-top: 10px;
  border-radius: 10px;
  background-color: yellowgreen;
}
</style>