<template>
  <div id="wrapclassify">
    <div class="content">
      <div class="goods-market">
        <div class="market"><span class="pink">购物</span>商场</div>
        <div class="word">潮流新品抢先购</div>
      </div>
      <!-- 分类图片列表 -->
      <div class="type-img-list">
        <div class="img-item">
          <img src="~assets/img/logo.png" alt="" />
          <span>上衣</span>
        </div>
        <div class="img-item">
          <img src="~assets/img/logo.png" alt="" />
          <span>上衣</span>
        </div>
        <div class="img-item">
          <img src="~assets/img/logo.png" alt="" />
          <span>上衣</span>
        </div>
        <div class="img-item">
          <img src="~assets/img/logo.png" alt="" />
          <span>上衣</span>
        </div>
        <div class="img-item">
          <img src="~assets/img/logo.png" alt="" />
          <span>上衣</span>
        </div>
        <div class="img-item">
          <img src="~assets/img/logo.png" alt="" />
          <span>上衣</span>
        </div>
        <div class="img-item">
          <img src="~assets/img/logo.png" alt="" />
          <span>上衣</span>
        </div>
        <div class="img-item">
          <img src="~assets/img/logo.png" alt="" />
          <span>上衣</span>
        </div>
        <div class="img-item">
          <img src="~assets/img/logo.png" alt="" />
          <span>上衣</span>
        </div>
        <div class="img-item">
          <img src="~assets/img/logo.png" alt="" />
          <span>上衣</span>
        </div>
        <div class="img-item">
          <img src="~assets/img/logo.png" alt="" />
          <span>上衣</span>
        </div>
        <div class="img-item">
          <img src="~assets/img/logo.png" alt="" />
          <span>上衣</span>
        </div>
      </div>
      <!-- 分类按钮 -->
      <div class="type-button">
        <span>时尚套装</span>
        <span>时尚套装</span>
        <span>时尚套装</span>
        <span>时尚套装</span>
        <span>时尚套装</span>
        <span>时尚套装</span>
        <span>时尚套装</span>
        <span>时尚套装</span>
        <span>时尚套装</span>
        <span>时尚套装</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
#wrapclassify {
  width: 680px;
  margin-top: 20px;
  border-radius: 10px;
  background-color: lightskyblue;
  box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.05);
  padding: 15px;
}
#wrapclassify .content {
  width: 100%;
  height: 100%;
}
#wrapclassify .content .goods-market {
  width: 100%;
  height: 55px;
  font-size: 21px;
  display: flex;
  font-weight: 500;
  line-height: 55px;
  cursor: pointer;
}
#wrapclassify .content .goods-market .pink {
  color: #f66262;
}
#wrapclassify .content .goods-market .word {
  font-size: 15px;
  margin-left: 10px;
  color: #838080;
  line-height: 55px;
}
#wrapclassify .content .type-img-list { 
    width: 100%;
    height: 240px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: space-between;
}
#wrapclassify .content .type-img-list .img-item {
  width: 112px;
  height: 112px;
  text-align: center;
}
#wrapclassify .content .type-img-list .img-item img {
  width: 100px;
  height: 100px;
}
#wrapclassify .content .type-button{
    width: 100%;
    height: 100px;
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: space-between;
}
#wrapclassify .content .type-button span{
    display: block;
    width: 90px;
    height: 15px;
    padding: 10px 15px;
    background-color:rgb(245, 245, 245);
    text-align: center;
    border-radius: 30px;
    line-height: 15px;
    cursor: pointer;
}
</style>