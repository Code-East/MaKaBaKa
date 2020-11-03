<template>
  <div id="settype">
    <div class="content">
      <div class="form">
        <el-input v-model="typeList.type_id" :disabled="true"></el-input>
        <el-input v-model="typeList.type_name"></el-input>
        <el-button type="info" round @click="setClick">修改</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { setType, getType } from "network/goods";
export default {
  data() {
    return {
      typeList: [],
    };
  },
  methods: {
    // 点击修改按钮
    setClick() {
      if (this.typeList.type_name == "") {
        this.$message({
          message: "不能修改为空哦!",
          type: "warning",
        });
        return;
      }
      this.$confirm("此操作将修改分类, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "修改成功!",
          });
        //   调用修改函数
          this.setClassIfy();
          this.$router.back();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消修改",
          });
        });
    },
    // 修改函数
    async setClassIfy() {
      let id = this.typeList.type_id;
      let type_name = this.typeList.type_name;
      let obj = {
        id,
        type_name,
      };
      let res = await setType(obj);
      console.log(res);
    },
    // 获取单个数据
    async getOneType() {
      let res = await getType(this.$route.params.type_id);
      this.typeList = res.data.data;
    },
  },
  created() {
    this.getOneType();
  },
};
</script>

<style>
#settype {
  width: 100%;
}
#settype .content {
  width: 100%;
}
#settype .content .form {
  display: flex;
  width: 700px;
  height: 100%;
  margin: 30px auto;
  justify-content: space-between;
  align-items: center;
}
#settype .content .form input {
  width: 300px;
}
</style>