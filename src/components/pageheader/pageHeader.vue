<template>
    <div id='pageheader'>
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {

 }
</script>

<style>
#pageheader{
    width: 100%;
    height: 47px;
    display: flex;
    justify-content: space-between;
}
#pageheader .left i{
    padding: 10px;
    color: #fff;
    border-radius: 4px;
    text-align: center;
    background: linear-gradient(to right, #da8cff, #9a55ff);
    box-shadow: 0px 3px 8.3px 0.7px rgba(163, 200, 255, 0.35);
}
#pageheader .left span{
    color: #000;
    font-size: 17px;
    font-weight: 700;
    margin-left: 10px;
}
#pageheader .right span{
    color: #495057;
    margin-right: 5px;
}
#pageheader .right i{
    color: #9a55ff;
}
#pageheader .right,.left{
    line-height: 47px;
    text-align: center;
}

</style>