<template>
  <div id="backstage">
    <!-- 顶部导航栏 -->
    <nav-bar>
      <img class="logo" v-lazy="require('assets/img/logo.png')" slot="logo" />
      <div slot="search">
        <el-input
          placeholder="search..."
          prefix-icon="el-icon-search"
          class="searchInp"
        ></el-input>
      </div>
      <div slot="user">
        <img src="" alt="" class="header" />
        <el-dropdown trigger="click">
          <span class="el-dropdown-link user">
            {{ this.$store.state.user.username }}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <div>
              <el-dropdown-item icon="el-icon-remove-outline"
                >退出登入</el-dropdown-item
              >
            </div>
            <div>
              <el-dropdown-item icon="el-icon-circle-plus"
                >切换账号</el-dropdown-item
              >
            </div>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
          <div class="i" slot="icon1">
            <span class="el-icon-star-off"></span>
          </div>
          <div class="i" slot="icon2">
            <span class="el-icon-bell"></span>
          </div>
          <div class="i" slot="icon3">
            <span class="el-icon-umbrella"></span>
          </div>
          <div class="i" slot="icon4">
            <span class="el-icon-refresh-right"></span>
          </div>

    </nav-bar>

    <div class="body-content">
      <!-- 左侧list -->
      <left-list-bar />
      <!-- 主体部分 -->
      <div class="main-body">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "components/navbar/navBar";
import leftListBar from "./child/leftListBar";

import { getuser } from "network/admin";

export default {
  data() {
    return {};
  },
  components: {
    navBar,
    leftListBar,
  },
  async created() {
    let res = await getuser();
    let user = res.data.user;
    // 使用vuex增加用户
    this.$store.commit("setUser", user);
  },
  // 前置导航
  beforeRouteEnter(to,from,next){
    getuser().then(res => {
      console.log(res);
    } )
    next();
  }
};
</script>

<style>
#backstage{
  max-width: 1600px;
}
#backstage .body-content {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
#backstage .main-body {
  flex: 1;
  padding: 44px 36px;
  background: #f2edf3;
}
</style>