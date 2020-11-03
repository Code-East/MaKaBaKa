<template>
  <div id="add-goods">
    <div class="content">
      <!-- <h2 class="h2">增加商品</h2> -->
      <el-form ref="form" :model="form" label-width="80px" class="form">
        <el-form-item label="商品名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="商品数量">
          <el-input v-model="form.count"></el-input>
        </el-form-item>
        <el-form-item label="原始价格">
          <el-input v-model="form.oldprice"></el-input>
        </el-form-item>
        <el-form-item label="折后价格">
          <el-input v-model="form.newprice"></el-input>
        </el-form-item>
        <el-form-item label="商品分类">
          <el-select v-model="form.classify" placeholder="分类">
            <el-option
              v-for="(item, i) in typeList"
              :key="i"
              :label="item.type_name"
              :value="item.type_id"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="商品尺码">
          <el-checkbox-group v-model="goodsSizeList" @change="sizeChange">
            <el-checkbox label="S"></el-checkbox>
            <el-checkbox label="M"></el-checkbox>
            <el-checkbox label="L"></el-checkbox>
            <el-checkbox label="XL"></el-checkbox>
            <el-checkbox label="XXL"></el-checkbox>
            <el-checkbox label="XXXL"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item label="商品尺码">
          <el-checkbox-group v-model="sizelist" @change="sizeChange">
            <el-checkbox label="S"></el-checkbox>
            <el-checkbox label="M"></el-checkbox>
            <el-checkbox label="L"></el-checkbox>
            <el-checkbox label="XL"></el-checkbox>
            <el-checkbox label="XXL"></el-checkbox>
            <el-checkbox label="XXXL"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item label="商品颜色">
          <el-checkbox-group v-model="colorlist" @change="sizeChange">
            <el-checkbox label="白色"></el-checkbox>
            <el-checkbox label="黑色"></el-checkbox>
            <el-checkbox label="黄色"></el-checkbox>
            <el-checkbox label="绿色"></el-checkbox>
            <el-checkbox label="蓝色"></el-checkbox>
            <el-checkbox label="红色"></el-checkbox>
            <el-checkbox label="紫色"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item label="发布时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="是否发布">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="是否包邮">
          <el-switch v-model="form.free"></el-switch>
        </el-form-item>
        <el-form-item label="商品简介">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="商品图片">
          <el-upload
            action=""
            name="upload"
            list-type="picture-card"
            :auto-upload="false"
            :limit="Number(6)"
            :on-change="upLoadFile"
            :on-remove="removefile"
            :on-exceed="outSide"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog>
            <img width="100%" alt="" />
          </el-dialog>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">发布</el-button>
          <el-button @click="onOut">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import getTime from "assets/js/formData";
import { addGoods, getClassIfy } from "network/goods";
export default {
  data() {
    return {
      form: {
        name: "",
        count: "",
        date: "",
        delivery: 0,
        classify: "",
        desc: "",
        newprice: "",
        oldprice: "",
        free: 0,
      },
      sizelist: [],
      colorlist: [],
      typeList: [],
      file: [],
      formdata: new FormData(),
    };
  },
  methods: {
    // 点击提交
    async onSubmit() {
      // 正则验证是否是数字
      let num = /^\d+$|^\d+\.\d+$/g;
      // 表单效验
      if (
        this.form.name == "" ||
        this.form.count == "" ||
        this.form.date == "" ||
        this.form.classify == "" ||
        this.form.desc == "" ||
        this.form.newprice == "" ||
        this.form.oldprice == ""
      ) {
        this.$message({
          showClose: true,
          message: "请填写所有信息！",
          type: "warning",
        });
        return;
      }
      //是否是数字
      if (
        num.test(this.form.count) &&
        !num.test(this.form.newprice) &&
        num.test(this.form.oldprice)
      ) {
        // string变number
        this.form.count = parseInt(this.form.count);
        this.form.newprice = parseFloat(this.form.newprice);
        this.form.oldprice = parseFloat(this.form.oldprice);
        console.log(typeof this.form.newprice);
        // 修改date格式
        this.form.date = getTime(this.form.date);
        this.form.delivery = this.setbool(this.form.delivery);
        this.form.free = this.setbool(this.form.free);
        // 存入数据到fromdata
        this.formdata.append("name", this.form.name); //名称
        this.formdata.append("count", this.form.count); //数量
        this.formdata.append("date", this.form.date); //时间
        this.formdata.append("delivery", this.form.delivery); //是否发布
        this.formdata.append("classify", this.form.classify); //分类
        this.formdata.append("newprice", this.form.newprice); //现价
        this.formdata.append("oldprice", this.form.oldprice); //原价
        this.formdata.append("desc", this.form.desc); //描述
        this.formdata.append("free", this.form.free); //是否包邮
        //axios发送formdata
        let res = await addGoods(this.formdata);
        console.log(res);
        if (res.data.code == 200) {
          this.$message({
            showClose: true,
            message: "增加成功",
            type: "success",
          });
          //初始化
          this.form = {
            name: "",
            count: "",
            date: "",
            delivery: 0,
            classify: "",
            desc: "",
            newprice: "",
            oldprice: "",
            free: 0,
          };
          this.formdata.delete("file");
        } else if (res.data.code == 300) {
          this.$message({
            showClose: true,
            message: "增加失败!",
            type: "error",
          });
        } else {
          this.$message({
            showClose: true,
            message: "服务器错误，联系管理员!",
            type: "error",
          });
        }
      } else {
        this.$message({
          showClose: true,
          message: "数量和价格必须为数值哦！",
          type: "warning",
        });
      }
    },
    // 当文件按钮发生变化时触发
    upLoadFile(file) {
      // file.raw表示文件
      // 一直加file就是相当于是一个file的数组
      this.formdata.append("file", file.raw);
    },
    // 布尔变数字
    setbool(num) {
      if (num) {
        return 1;
      } else {
        return 0;
      }
    },
    // 点击取消
    onOut() {
      this.$confirm("此操作将不会保存商品，是否确定？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "已取消!",
          });
          this.$router.back();
        })
        .catch(() => {});
    },
    // 删除图片
    removefile(file) {
      //   let index;
      //   // 获取索引
      //   this.file.forEach((val,ind)=>{
      //       if(val.uid==file.uid){
      //         index = ind;
      //       }
      //   });
      //   console.log(index);
      //  this.formdata.delete(`file[]`);
    },
    // 照片超出数量触发
    outSide() {
      this.$message({
        showClose: true,
        message: "最多上传6张照片哦！",
        type: "warning",
      });
    },
    // 获取分类函数
    async getClassIfyData() {
      let res = await getClassIfy();
      this.typeList = res.data;
    },
  },
  // 构子函数
  created() {
    // 调用获取分类函数
    this.getClassIfyData();
  },
};
</script>

<style>
#add-goods {
  margin-top: 20px;
}
#add-goods .content h2 {
  color: #00b5ad;
}
#add-goods .content .form {
  width: 700px !important;
  margin: 0 auto;
  background: #ffffff;
  padding: 30px 15px;
  border-radius: 10px;
  font-size: 16px;
}
</style>