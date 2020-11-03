<template>
  <div id="goods">
    <div class="content">
      <!-- 搜索 -->
      <div class="goods-search">
        <el-input v-model="title" placeholder="商品名" class="inp"></el-input>
        <el-input v-model="name" placeholder="厂家" class="inp"></el-input>
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
      <!-- 表格 -->
      <div class="table">
        <el-table
          :data="tableData"
          style="width: 100%,align: center"
          @row-click="rowClick"
        >
          <el-table-column
            prop="commodity_id"
            label="ID"
            sortable
            width="180px"
          ></el-table-column>
          <el-table-column
            prop="commodity_title"
            label="商品名"
            sortable
            width="200px"
          ></el-table-column>
          <el-table-column
            prop="commodity_xmoney"
            label="价格"
            sortable
            width="180px"
          >
          </el-table-column>
          <el-table-column prop="type_name" label="分类" width="180px">
          </el-table-column>
          <el-table-column prop="name" label="厂家" width="200px">
          </el-table-column>
          <el-table-column label="操作" width="200px">
            <el-button type="primary" class="updatabtn" @click="setBtnClick">修改</el-button>
            <el-button type="danger" @click="delBtnClick">删除</el-button>
          </el-table-column>
        </el-table>

        <!-- 分页 -->
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
          <el-button
            type="info"
            class="updatabtn"
            @click="addClick"
            >增加商品</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getGoods, searchGoods, delGoods } from "network/goods.js";
export default {
  data() {
    return {
      title: null,
      name: null,
      tableData: [],
      nowgoods: "",
      count: 1,
      allcount: 1,
      istop: false,
      isnext: false,
      nowpage: 0,
    };
  },
  computed: {
    pageCount() {
      return Math.ceil(this.tableData.length % 10);
    },
  },
  methods: {
    // 点击行触发
    rowClick(row) {
      this.nowgoods = row;
    },
    // 点击删除
    delBtnClick() {
      this.$confirm("此操作将永久删除该商品, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true,
      })
        .then(async () => {
          let res = await delGoods(this.nowgoods.commodity_id);
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
        })
        .catch(() => {
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
        let title = this.title;
        let searchObj = {
          name,
          title,
          top: 0,
          bot: 10,
        };
        // 查询数据
        let res = await searchGoods(searchObj);
        let data = res.data;
        console.log(data);
        if (data.code == 200) {
          this.tableData = data.data.commoditys;
        } else if (data.code == 201) {
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
    // 获取数据
    async getData(top, bot) {
      let goodsData = await getGoods({ top, bot });
      let res = goodsData.data.data;
      this.tableData = res.commoditys;
      this.allcount = Math.ceil(res.count / 10);
      if (this.allcount > this.count) {
        this.isnext = true;
      }
    },
  },
    created() {
    // 调用获取商品数据
    this.getData(0, 10);
  },
};
</script>

<style>
#goods {
  margin-top: 30px;
}
#goods .table {
  margin-top: 10px;
  width: 100%;
  color: black !important;
  background-color: #f8f3f3;
  font-size: 16px;
}
#goods .table .el-table td,
.el-table th {
  text-align: center;
}
#goods .content .goods-search {
  display: flex;
}
#goods .content .goods-search .inp {
  width: 300px !important;
  margin-right: 5px;
}
#goods .content .goods-search .el-link--inner {
  margin-left: 393px;
}
#goods .page {
  width: 100%;
  height: 85px;
  background-color: #fff;
  text-align: center;
  padding-bottom: 10px;
}
#goods .page .font {
  padding: 10px;
}
#goods .page .font .topbtn {
  float: left;
}
#goods .page .font .nextbtn {
  float: right;
}
</style>