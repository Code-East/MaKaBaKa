<template>
  <div id="manage">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path:'/backstage/goodsmanage' }">商品</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/backstage/goodsmanage/classify'}" class="is-link">分类</el-breadcrumb-item>
    </el-breadcrumb>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
#manage .el-breadcrumb__inner{    
    cursor: pointer !important;
    font-weight: 700 !important;
    text-decoration: none !important;
    transition: color .2s cubic-bezier(.645,.045,.355,1) !important;
    color: #303133 !important;
}
</style>