<template>
  <div id="cart">
    <div class="content">
      <div class="header">
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
      <div class="body_wrap">全部商品</div>
      <div class="new_cart_head">
        <ul>
          <li>
            <el-checkbox v-model="checked">全选</el-checkbox>
          </li>
          <li>商品信息</li>
          <li>单价</li>
          <li>数量</li>
          <li>小计</li>
          <li>操作</li>
        </ul>
      </div>
      <!-- 购物车栏 -->
      <cart-goods-item />
      <cart-goods-item />
      <cart-goods-item />

      <div class="cart_paybar">
        <div class="topuy">
          <div class="cart_paybar_info">
            共有
            <span class="allcount">0</span>
            件商品,总计:
            <span class="allprice">￥0.00</span>
          </div>
          <div class="puy-btn">去付款 ></div>
        </div>
      </div>
    </div>
    <bottom/>
  </div>
</template>

<script>
import navBar from "components/navbar/navBar";
import CartGoodsItem from "components/cartgoodsitem/CartGoodsItem";
import bottom from "components/bottom/Bottom";
export default {
  data() {
    return {
      checked:true
    }
  },
  methods:{
    toLogin(){}
  },
  components: {
    navBar,
    CartGoodsItem,
    bottom,
  },
};
</script>

<style>
#cart .content {
  width: 1200px;
  margin: 0 auto;
}
#cart .content .body_wrap {
  margin-top: 30px;
  display: block;
  padding: 1px 0 6px;
  color: #333;
  font-size: 24px;
}
#cart .content .new_cart_head {
  margin-top: 20px;
  height: 25px;
  border: 1px solid #ddd;
  padding: 15px 5px;
  background-color: #f6f6f6;
  margin-bottom: 20px;
}
#cart .content .new_cart_head ul li {
  list-style: none;
  float: left;
}
#cart .content .new_cart_head ul li:nth-child(2) {
  margin-left: 100px;
}
#cart .content .new_cart_head ul li:nth-child(3) {
  margin-left: 600px;
}
#cart .content .new_cart_head ul li:nth-child(4),
li:nth-child(5),
li:nth-child(6) {
  margin-left: 60px;
}
#cart .content .cart_paybar {
  margin-top: 20px;
  width: 100%;
  height: 50px;
  border: 1px solid #e5e5e5;
}
#cart .content .cart_paybar .topuy {
  height: 100%;
  float: right;
  display: flex;
  align-items: center;
}
#cart .content .cart_paybar .topuy .cart_paybar_info {
  color: #666 !important;
  font-size: 13px;
}
#cart .content .cart_paybar .topuy .cart_paybar_info .allcount {
  color: #ff5777;
}
#cart .content .cart_paybar .topuy .cart_paybar_info .allprice {
  color: #ff5777;
  font-size: 26px;
  font-weight: 700;
  margin-right: 10px;
}
#cart .content .cart_paybar .topuy .puy-btn{
    width: 152px;
    height: 51px;
    background: #d8d8d8;
    color: white;
    text-align: center;
    line-height: 51px;
    font-size: 20px;
}
</style>