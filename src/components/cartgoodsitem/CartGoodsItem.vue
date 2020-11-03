<template>
  <div id="cartgoodsitem">
    <div class="content">
      <div class="goods">
        <el-checkbox v-model="checked" @change = "checkBox"></el-checkbox>
        <img src="~assets/img/man.jpg" alt="" />
        <span class="goods-title">按时打发的粉红色的瑞特瑞特特尔</span>
      </div>
      <div class="color-size">
        <span>颜色:</span>
        <span>尺码:</span>
      </div>
      <div class="price">{{ price }}</div>
      <div class="goods-count">
        <el-input-number
          v-model="num"
          @change="handleChange"
          :min="1"
          :max="100"
          size="small"
        ></el-input-number>
      </div>
      <div class="puyprice">{{ allprice }}</div>
      <div class="del">
        <el-link href="https://element.eleme.io" target="_blank">删除</el-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
      checked: false,
      price: 123,
      allprice:0,
      val:1
    };
  },
  methods: {
    handleChange(value) {
        this.allprice=this.price*value;
    },
    checkBox(value){
      console.log(value);
    }
  },
  created(){
    this.allprice = this.price
  }
};
</script>
<style>
#cartgoodsitem {
  width: 100%;
  height: 100px;
  padding: 24px 0px;
  border: 1px solid #ddd;
}
#cartgoodsitem .content {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
#cartgoodsitem .content .goods {
  height: 80px;
  width: 570px;
  display: flex;
  align-items: center;
}
#cartgoodsitem .content .goods img {
  width: 78px;
  height: 78px;
  margin-left: 10px;
}
#cartgoodsitem .content .goods .goods-title {
  margin-left: 20px;
}
#cartgoodsitem .content .puyprice {
  color: #ff5777;
  font-weight: 600;
  font-size: 16px;
}
</style>