<template>
  <div id="navbar">
    <div class="content">
      <div class="logo">
        <slot name="logo" class="class"></slot>
      </div>
      <div class="search">
        <slot name="search"></slot>
      </div>
      <div class="user">
        <slot name="user"></slot>
      </div>

      <div class="right">
        <slot name="icon1"></slot>
        <slot name="icon2"></slot>
        <slot name="icon3"></slot>
        <slot name="icon4"></slot>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style>
#navbar {
  width: 100%;
  height: 70px;
  font-family: "ubuntu-light", sans-serif;
  background: #ffffff;
  background-color: #ffffff;
}
#navbar .search .el-input__inner {
  background-color: #f7f7f7 !important;
  border: none;
}
#navbar .content {
  width: 1300px;
  margin: 0 auto;
  line-height: 70px;
  display: flex;
  justify-content: space-around;
  font-size: 16px !important;
}
#navbar .content .logo {
  width: 200px;
  height: 65px;
  line-height: 70px;
}
#navbar .content .search {
  width: 655px !important;
}
#navbar .content .user {
  height: 20px;
}
#navbar .content .right {
  width: 300px;
  line-height: 70px;
  font-size: 18px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #9c9fa6;
}
#navbar .content .right .i {
  cursor: pointer;
}
#navbar .content .right .i:nth-child(1):after {
  content: "";
  position: absolute;
  top: 19px;
  border-radius: 100%;
  background-color: #fed713;
  border: 4px solid#fed713 !important;
}
#navbar .content .right .i:nth-child(2):after {
  content: "";
  position: absolute;
  top: 19px;
  border-radius: 100%;
  background-color: red;
  border: 4px solid red !important;
}
#navbar .content .right .i:nth-child(3):after {
  content: "";
  position: absolute;
  top: 19px;
  border-radius: 100%;
  background-color: rgb(154, 248, 99);
  border: 4px solid rgb(154, 248, 99) !important;
}
</style>
