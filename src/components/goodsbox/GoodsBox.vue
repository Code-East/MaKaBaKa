<template>
  <div id="goodsbox">
    <div class="content">
      <img src="~assets/img/man.jpg" alt="" />
      <div class="item-font">
        <p class="font">
          秋季新款男鞋子韩版潮流运百搭动鞋男鞋休闲鞋夏季男士透气老爹鞋
        </p>
        <div class="price-box">
          <div class="price">
            <span class="newprice">￥123</span>
            <span class="oldprice">￥156</span>
          </div>
          <div class="star">
            <i class="el-icon-star-off"></i>
            <span>234</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style>
#goodsbox {
  width: 220px;
  height: 375px;
  margin-top: 20px;
  border: 1px solid #f2f2f2;
  cursor: pointer;
}
#goodsbox:hover {
  border: 1px solid rgb(216, 130, 144);
}
#goodsbox .content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
#goodsbox .content img {
  width: 100%;
  height: 290px;
  vertical-align: middle;
}
#goodsbox .content  .item-font{
    padding: 0 5px;
    margin-top: 10px;
}
#goodsbox .content .price-box {
  margin-top: 10px;
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
}
#goodsbox .content .price-box .newprice{
    color: #333;
    font-weight: 700;
    font-size: 16px;
}
#goodsbox .content .price-box .oldprice{
    text-decoration: line-through;
    font-size: 14px;
    color: #666;
    line-height: 20px;
    margin-left: 8px;    
}
#goodsbox .content .price-box .star{
    font-size: 12px;
    color: #999;
}

</style>