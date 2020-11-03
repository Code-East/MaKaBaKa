<template>
  <div id="fileme">
      <div class="content">
        <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="type_id" label="ID" width="180">
        </el-table-column>
        <el-table-column prop="type_name" label="" width="180">
        </el-table-column>
        <el-table-column label="操作">
          <el-button type="primary" class="updatabtn" @click="setBtnClick">修改</el-button>
          <el-button type="danger" @click="delBtnClick">删除</el-button>
        </el-table-column>
      </el-table>
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

</style>