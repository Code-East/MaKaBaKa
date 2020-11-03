<template>
  <div id="userdata">
    <div class="content">
      <!-- 搜索 -->
      <div class="user-search">
        <el-input v-model="title" placeholder="用户名" class="inp"></el-input>
        <el-input v-model="name" placeholder="账号" class="inp"></el-input>
        <el-button
          icon="el-icon-search"
          class="btn"
          @click="searchClick"
          type="info"
          plain
          >搜索</el-button
        >
        <el-link type="primary" @click="allDataClick" :underline="false"
          >全部数据</el-link
        >
      </div>
      <div class="table">
        <el-table :data="userData" style="width: 100%,align: center"  @row-click="rowClick">
          <el-table-column prop="id" label="ID" width="150px">
          </el-table-column>
          <el-table-column prop="name" label="用户名" width="150px">
          </el-table-column>
          <el-table-column prop="username" label="账号" width="150px">
          </el-table-column>
          <el-table-column prop="userpassword" label="密码" width="150px">
          </el-table-column>
          <el-table-column prop="email" label="邮箱" width="180px">
          </el-table-column>
          <el-table-column prop="code" label="激活码" width="150px">
          </el-table-column>
          <el-table-column label="操作" width="180px">
            <el-button type="primary" class="updatabtn" @click="setBtnClick"
              >修改</el-button
            >
            <el-button type="danger" @click="delBtnClick">删除</el-button>
          </el-table-column>
        </el-table>
        <div class="page">
        <div class="font">
            <el-link
              type="primary"
              class="topbtn"
              @click="topClick"
              v-show="istop"
              >上一页</el-link
            >
            <span>一共{{ allcount }}页，当前第{{ count }}页</span>
            <el-link
              type="primary"
              class="nextbtn"
              @click="nextClick"
              v-show="isnext"
              >下一页</el-link
            >
          </div>
        </div>
      </div>
      </div>
    </div>
</template>

<script>
import { getUser,delUser,searchUser } from "network/user";
export default {
  data() {
    return {
      userData: [],
      nowgoods: "",
      count: 1,
      allcount: 1,
      istop: false,
      isnext: false,
      nowpage: 0,
      title:null,
      name:null
    };
  },
  methods: {
    // 获取用户
    async getData(top, bot) {
      let res = await getUser({ top, bot });
      let resdata = res.data.data;
      this.userData = resdata.users;
      this.allcount = Math.ceil(resdata.count/10);
      if (this.allcount > this.count) {
        this.isnext = true;
      }
    },
    // 点击行触发
    rowClick(row) {
      this.nowgoods = row;
      console.log(this.nowgoods);
    },
    // 点击删除
    delBtnClick() {
      this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true,
      }).then(async () => {
          let res = await delUser(this.nowgoods.id);
          console.log(res);
          if (res.data.code == 200) {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            this.getData(this.nowpage,this.count*10);
          }else{
            this.$message.error('错了哦!');
          }
        }).catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },

    // 点击修改
    setBtnClick() {},
    // 点击搜索
    async searchClick() {
      if (this.title == "" && this.name == "") {
        this.$message({
          message: "请填写搜索的内容哦！",
          type: "warning",
        });
      } else {
        let name = this.name;
        let username = this.title;
        let searchObj = {
          name,
          username,
          top: 0,
          bot: 10,
        };
        // 查询数据
        let res = await searchUser(searchObj);
        let userdata = res.data;
        console.log(res);
        if (userdata.code == 200) {
          this.userData = userdata.data.users;
          this.allcount = Math.ceil(userdata.data.count);
        } else if (userdata.code == 201) {
          this.$message({
            message: "没有此类数据哦！",
            type: "warning",
          });
        } else {
          this.$message.error("出错了,出错了！");
        }
      }
    },
    // 增加商品
    addClick() {
      this.$router.push("/backstage/goodsmanage/addgoods");
    },
    // 点击全部数据
    allDataClick() {
      this.getData(0, 10);
    },
    // 上一页
    topClick() {
      this.count--;
      this.getData((this.nowpage -= 10), this.count * 10);
      this.isnext = true;
      if (this.count == 1) {
        this.istop = false;
      }
      if (this.nowpage != 0) {
        this.nowpage--;
      }
    },
    // 下一页
    nextClick() {
      this.count++;
      this.getData((this.nowpage += 10), this.count * 10);
      this.istop = true;
      if (this.count == this.allcount) {
        this.isnext = false;
      }
      if (this.nowpage <= this.allcount) {
        this.nowpage++;
      }
    },
  },
  created() {
    // 调用获取用户函数
    this.getData(0, 10);

  },
};
</script>

<style>
#userdata .content .user-search {
  display: flex;
}
#userdata .content .user-search .inp {
  width: 300px !important;
  margin-right: 5px;
}
#userdata .content .user-search .el-link--inner {
  margin-left: 393px;
}
#userdata .content .table {
  margin-top: 10px;
  width: 100%;
  color: black !important;
  background-color: #f8f3f3;
  font-size: 16px;
}
#userdata .table .el-table td,
.el-table th {
  text-align: center;
}
#userdata .content .page {
  width: 100%;
  height: 85px;
  background-color: #fff;
  text-align: center;
  padding-bottom: 10px;
}
#userdata .content .page .font {
  padding: 10px;
}
#userdata .content .page .font .topbtn {
  float: left;
}
#userdata .content .page .font .nextbtn {
  float: right;
}
</style>