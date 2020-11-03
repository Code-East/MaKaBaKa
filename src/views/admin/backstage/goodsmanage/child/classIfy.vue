<template>
  <div id="classify">
    <div class="content">
      <el-table :data="tableData" style="width: 100%" class="table" @row-click="rowClick">
        <el-table-column prop="type_id" label="ID" width="300px">
        </el-table-column>
        <el-table-column prop="type_name" label="类型" width="300px">
        </el-table-column>
        <el-table-column label="操作" width="300px">
          <el-button type="primary" class="updatabtn" @click="setBtnClick"
            >修改</el-button
          >
          <el-button type="danger" @click="delBtnClick">删除</el-button>
        </el-table-column>
      </el-table>
      <div class="page">
        <span>共1页,共{{ tableData.length }}条分类</span>
        <el-button type="info" class="updatabtn" @click="addClick"
          >增加分类</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { getClassIfy,delType } from "network/goods";
export default {
  data() {
    return {
      tableData: [],
      nowgoods: "",
    };
  },
  methods: {
    // 点击行触发
    rowClick(row) {
      this.nowgoods = row;
    },
    // 获取数据
    async getType() {
      let res = await getClassIfy();
      this.tableData = res.data;
    },
    // 点击增加商品
    addClick() {
      this.$router.push("/backstage/goodsmanage/addtype");
    },
    // 修改
   setBtnClick(){
        setTimeout(()=>{
          this.$router.push("/backstage/goodsmanage/settype/"+this.nowgoods.type_id);
        },100)
    },
    // 删除
    delBtnClick() {
      this.$confirm("此操作将永久删除该分类, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true,
      })
        .then(async () => {
          let res = await delType(this.nowgoods.type_id);
          console.log(res);
          if (res.data.code == 200) {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            this.getType();
          } else {
            this.$message.error("错了哦!");
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    },
  created() {
    // 获取分类数据
    this.getType();
  },
};
</script>

<style scoped>
#classify {
  width: 100%;
}
#classify .content {
  margin: auto;
  margin-top: 30px;
  width: 900px;
  background-color: #f8f3f3;
  font-size: 16px;
}
#classify .content .page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  align-content: center;
  width: 100%;
}
#classify .el-table td,
.el-table th {
  text-align: center;
}
</style>