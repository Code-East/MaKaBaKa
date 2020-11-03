<template>
  <div id="collection">
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
    <!-- 收藏 -->
    <div class="mycollection">
      <div class="centent">
        <div class="collection-box">
          <span class="title">我的收藏</span>
        </div>

        <div class="goods-collection">
          <div class="goods-list">
            <goods-box />
            <goods-box />
            <goods-box />
            <goods-box />
            <goods-box />
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <bottom />
  </div>
</template>

<script>
import navBar from "components/navbar/navBar";
import GoodsBox from "components/goodsbox/GoodsBox";
import Bottom from "components/bottom/Bottom";
export default {
  components: {
    navBar,
    GoodsBox,
    Bottom
  },
};
</script>

<style>
#collection .mycollection {
  width: 100%;
  margin-top: 20px;
}
#collection .mycollection .centent {
  width: 1200px;
  margin: 0 auto;
}
#collection .mycollection .centent .collection-box {
  width: 100%;
  line-height: 70px;
}
#collection .mycollection .centent .collection-box .title {
  font-size: 25px;
}
#collection .mycollection .collection-box .collection-goods {
  margin-left: 30px;
}
#collection .mycollection .centent .goods-collection .goods-list{
    min-width: 500px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
}
</style>