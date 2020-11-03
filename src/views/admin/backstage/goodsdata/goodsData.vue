<template>
  <div id="goods-data">
    <!-- 横条 -->
      <page-header>
        <div slot="left">
          <i class="el-icon-s-home"></i>
          <span>Dashboard</span>
        </div>
        <div slot="right">
          <span>Overview</span>
          <i class="el-icon-lollipop"></i>
        </div>
      </page-header>
    <!-- 卡片 -->
    <div class="cade-row"> 
      <cade :cardobj = "red">
        <i slot="icon" class="el-icon-data-line"></i>
      </cade>
       <cade :cardobj = "blue">
        <i slot="icon" class="el-icon-sunny"></i>
      </cade>
      <cade :cardobj = "green">
      <i slot="icon" class="el-icon-collection-tag"></i>
      </cade>
    </div>
    <!-- 表格 -->
    <div class="table">
      <bar-chart/>
      <pie-chart />
    </div>
  </div>
</template>

<script>
import pageHeader from "components/pageheader/pageHeader"
import BarChart from "views/echarts/BarChart"
import PieChart from "views/echarts/PieChart"
import Cade from './child/Cade'
export default {
  data() {
    return {
      red:{
        color:'red',
        title:'销售额',
        number:'￥15,0000',
        add:'60%'
      },
      blue:{
        color:'blue',
        title:'每周订单',
        number:'45,6230',
        add:'70%'
      },
      green:{
        color :'green',
        title:'用户量',
        number:'15,2320',
        add:'40%'
      },
    }
  },
  components:{
    pageHeader,
    Cade,
    BarChart,
    PieChart
  }
};
</script>

<style>
#goods-data .cade-row{
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
}
#goods-data .table{
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
}
</style>