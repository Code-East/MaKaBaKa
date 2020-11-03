<template>
  <div id="cade" ref="card">
    <div class="cade-content">
      <h4>
        <span>{{cardobj.title}}</span>
        <slot name="icon"></slot>
      </h4>
      <h2>{{cardobj.number}}</h2>
      <p>同比增长 {{cardobj.add}}</p>
    </div>
    <img src="~assets/img/circle.svg" alt="">
  </div>
</template>

<script>
export default {
    props:["cardobj"],
   
    mounted(){
        let cade = this.$refs.card;
        switch (this.cardobj.color) {
          case 'red':
            cade.style.background = 'linear-gradient(to right, #ffbf96, #fe7096)';
            break;
          case 'blue':
            cade.style.background = 'linear-gradient(to right, #90caf9, #047edf 99%)';
            break;
            case 'green':
            cade.style.background = 'linear-gradient(to right, #84d9d2, #07cdae)';
            break;
          default:
            break;
        }
    }
};
</script>

<style>
#cade {
  /* position:absolute; */
  width: 370px;
  height: 219px;
  border-radius: 6px;
  /* background-image: url('~') no-repeat !important; */
}
#cade img{
  position: relative;
  top: -171px;
  left: 193px;
  width: 179px;
  height: 219px;
}
#cade .cade-content{
  width: 75%;
  margin: 0 auto;
  margin-top: 30px;
}
#cade .cade-content h4{
    width: 100%;
    margin: 0 auto;
    color: #fff;
    font-size: 17px;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    font-family: "ubuntu-regular", sans-serif;
}
#cade .cade-content h4 i{
    font-size: 20px;
    font-weight: 700;
}
#cade .cade-content h2{
    margin-top: 20px;
    color: #fff;
    font-size: 30px;
}
#cade .cade-content p{
    margin-top: 40px;
    color: #fff;
    font-weight: 700;
    font-family: "ubuntu-medium", sans-serif;
}
</style>