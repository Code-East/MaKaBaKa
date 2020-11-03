<template>
    <div id='goodsitem'>
        <div class="content">
            <img src="~assets/img/man.jpg" alt="实现不了哦">
            <div class="font">
                一段介绍哦
            </div>
            <div class="price">
                <div class="cover"></div>
                <span>￥123</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
 }
</script>

<style scoped>
#goodsitem{
    position: relative;
    break-inside: avoid;
    box-sizing: border-box;
    width: 220px;
    height: 293px;
    padding: 5px;
    margin-top: 10px;
    border-radius: 10px;
    background-color: #ffffff;
    cursor: pointer;
}
#goodsitem:hover{
    
}
#goodsitem .content img{
    width: 100%;
    height: 240px;
    border-radius: 10px;
}
#goodsitem .content .price{
    position: absolute;
    left: 5px;
    top: 190px;
   
}
#goodsitem .content .price .cover{
    width: 50px;
    height: 30px;
    background: #000;
    opacity: .5;
    z-index: 0;
    border-radius: 0 20px 20px 0;
}
#goodsitem .content .price span{
    position: absolute;
    top:4px;
    color: #fff;
    z-index: 1;
}
</style>