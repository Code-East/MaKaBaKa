<template>
  <div id="addtype">
    <div class="content">
      <div class="form">
        <el-input v-model="type" placeholder="请输入分类"></el-input>
        <el-button type="info" round @click="addClick">增加</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { addType } from "network/goods";
export default {
  data() {
    return {
      type: "",
    };
  },
  methods: {
    async addClick() {
      if (this.type == "") {
        this.$message({
          message: "类型不能为空哦！",
          type: "warning",
        });
        return;
      }
      let type_name = this.type;
      let res = await addType(type_name);
      if (res.data.code == 200) {
        this.$message({
          message: "增加成功！",
          type: "success",
        });
        this.$router.replace("/backstage/goodsmanage/classify");
      } else {
        this.$message.error("错了哦！");
      }
    },
  },
};
</script>

<style>
#addtype {
  width: 100%;
}
#addtype .content {
  width: 100%;
}
#addtype .content .form {
  display: flex;
  width: 700px;
  height: 100%;
  margin: 30px auto;
  justify-content: space-between;
  align-items: center;
}
#addtype .content .form input {
  width: 600px;
}
</style>