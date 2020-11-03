<template>
  <div id="lest-list-bar">
    <div class="nav">
      <ul>
        <li>
          <a href="javascript:;">
            <div class="userData">
              <img
                src="https://makabaka-1252030395.cos.ap-guangzhou.myqcloud.com/User/default/default.jpg"
                alt=""
              />
              <span>{{ this.$store.state.user.username }}</span>
            </div>
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            @click="itemClick('goodsdata')"
            :class="{ backlistaction: goodsAction }"
          >
            <span>概况</span>
            <i class="el-icon-s-home"></i>
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            @click="itemClick('userdata')"
            :class="{ backlistaction: userAction }"
          >
            <span>用户管理</span>
            <i class="el-icon-user"></i>
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            @click="itemClick('goodsmanage')"
            :class="{ backlistaction: goodsmanage }"
          >
            <span>商品管理</span>
            <i class="el-icon-s-shop"></i>
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            @click="itemClick('fileme')"
            :class="{ backlistaction: fileAction }"
          >
            <span>个人中心</span>
            <i class="el-icon-s-operation"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsAction: true,
      userAction: false,
      goodsmanage: false,
      fileAction: false,
    };
  },
  methods: {
    itemClick(path) {
      // 把其他的
      this.goodsAction = false;
      this.userAction = false;
      this.goodsmanage = false;
      this.fileAction = false;
      switch (path) {
        case "goodsdata":
          this.goodsAction = true;
          break;
        case "userdata":
          this.userAction = true;
          break;
        case "goodsmanage":
          this.goodsmanage = true;
          break;
        case "fileme":
          this.fileAction = true;
          break;
        default:
          break;
      }
      // 跳转子路由
      this.$router.push("/backstage/" + path).catch((err) => err);
    },
    setAction(){
      switch (this.$router.history.current.path) {
      case "/backstage/goodsmanage/goods":
        this.goodsmanage = true;
        break;
      case "/backstage/userdata":
        this.userAction = true;
        break;
      case "/backstage/goodsdata":
        this.goodsAction = true;
        break;
      case "/backstage/fileme":
        this.fileAction = true;
        break;
      default:
        break;
    }
    }
  },
  created() {
    // 修改样式
    this.setAction('goodsdata');
  },
};
</script>
<style>
.backlistaction {
  color: rgb(0, 181, 173) !important;
}
#lest-list-bar {
  width: 260px;
  float: left;
}
#lest-list-bar .nav {
  width: 100%;
  padding: 10px;
  background-color: #ffffff;
}
#lest-list-bar .nav .userData {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#lest-list-bar .nav .userData img{
  width: 50px;
  height: 50px;
  border-radius: 50px;
}
#lest-list-bar .nav ul li {
  margin-top: 10px;
}
#lest-list-bar .nav ul li:nth-child(1) a {
  padding: 30px 30px;
}
#lest-list-bar .nav ul li a {
  display: block;
  padding: 15px 30px;
  color: #3e4b5b;
  text-decoration: none;
  font-size: 16px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  font-family: _GB2312 KaiTi_GB2312;
  font-weight: 550;
}
#lest-list-bar .nav ul li a:hover {
  background-color: #f1f1f1;
}
</style>