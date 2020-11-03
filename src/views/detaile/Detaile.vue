<template>
  <div id="detail">
    <div class="content">
      <!-- 商品轮播图和价格 -->
      <div class="info-box">
        <div class="img-box">
          <el-carousel indicator-position="outside" height="600px">
            <el-carousel-item v-for="item in 4" :key="item">
              <img src="~assets/img/man.jpg" alt="" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <!-- 商品右边title等 -->
        <div class="shop-font">
          <h2>2020秋季新款韩版气质高腰显瘦黑色T恤上衣女百搭长袖打底衫</h2>
          <div class="price-box">
            <div class="oldprice">
              <span>价格:</span>
              <span>￥122</span>
            </div>
            <div class="newprice">
              <div class="price">
                <span>活动价:</span>
                <span>￥122</span>
              </div>
              <div class="common">
                <span>评论:130</span>
                <span>累计销量:130</span>
              </div>
            </div>
          </div>
          <!-- 商品尺码 -->
          <div class="goods-prowrap">
            <div class="goods-color">
              <div class="color-box">
                <span>颜色:</span>
                <div class="color-item">
                  <span>白色</span>
                  <span>黄色</span>
                  <span>绿色</span>
                  <span>蓝色</span>
                </div>
              </div>

              <div class="goods-size">
                <div class="size-box">
                  <span>尺码:</span>
                  <div class="size-item">
                    <span>S</span>
                    <span>M</span>
                    <span>L</span>
                    <span>XL</span>
                  </div>
                </div>
              </div>

              <div class="goods-count">
                <span>数量:</span>
                <div class="count-box">
                  <el-input-number
                    v-model="num"
                    :min="1"
                    :max="10"
                    label="描述文字"
                    size="mini"
                  ></el-input-number>
                  <span class="ku">库存123件</span>
                </div>
              </div>
            </div>
          </div>
          <!-- 购买和购物车 -->
          <div class="goods-buy">
            <button class="buy">立即够买</button>
            <button class="add-cart">加入购物车</button>
          </div>
          <div class="goods-collection">
            <div class="collection">
              <i class="el-icon-star-off"></i>
              <span>232</span>
            </div>
          </div>

          <div class="goods-pay">
            <div class="goods-server">
              <span>服务说明:</span>
              <div class="server-item">
                <ul>
                  <li><i class="el-icon-circle-check"></i>小时发货</li>
                  <li><i class="el-icon-circle-check"></i>7天无理由退款</li>
                  <li><i class="el-icon-circle-check"></i>全国包邮</li>
                  <li><i class="el-icon-circle-check"></i>延误必反</li>
                </ul>
              </div>
            </div>
            <div class="pay-box">
              <span>支付方式:</span>
              <span>充值支付</span>
            </div>
          </div>
        </div>
      </div>

      <div class="detail-content">
        <div class="detail-main">
          <div class="main-top-tabbar">
            <ul>
              <li class="tabbar-action">商品详情</li>
              <li>累计评论</li>
            </ul>
          </div>
          <div class="body-center">
            <div class="goods-desc">
              <h3>商品描述</h3>
              <div class="desc-font">
                本店所有商品均赠送运费险！各位小仙女可以放心购买
                品质保证！关于码数问题可以咨询本店在线客服哦！祝各位亲购物愉快！
              </div>
            </div>
            <div class="goods-show">
              <h3>穿着效果</h3>
              <div class="show-img">
                <img src="~assets/img/man.jpg" alt="">
              </div>
            </div>
          </div>

        </div>

        <div class="detail-main-right">
          <div class="right-box">
            <ul>
              <li class="right-item-action">
                <i class="el-icon-caret-right"></i>
                <span>商品描述</span>
              </li>
              <li>
                <i class="el-icon-caret-right"></i>
                <span>穿着效果</span>
              </li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
    };
  },
};
</script>

<style scoped>
@import url("~assets/css/detail.css");
</style>