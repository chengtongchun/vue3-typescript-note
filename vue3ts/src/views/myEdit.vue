<template>
  <div class="mydialog-box" v-if="show">
    <div class="mydialog">
      <div class="header">
          <slot name="header"></slot>
      </div>
      <div class="main">
        <label for="title">
          <span>手机型号</span
          ><input type="text" id="title" v-model="form.title" placeholder="" v-red="'red'" />
        </label>
        <label for="repertory">
          <span>手机库存</span
          ><input type="text" id="repertory" v-model.number="form.repertory" placeholder=""  />
        </label>
        <label for="price">
          <span>手机价格</span
          ><input type="text" id="price" v-model.number="form.price" placeholder="" />
        </label>
        <label for="num">
          <span>购买数量</span
          ><input type="text" id="num" v-model.number="form.num" placeholder="" />
        </label>
        <h4>{{ctc}}</h4>
      </div>
      <div class="footer">
        <button @click="show = false" v-big="'20px'">取消</button>
        <button @click="save" v-big="'20px'">确定</button>
      </div>
      <slot :data="porp.form" ></slot>
    </div>
  </div>
  <!-- <el-form :model="formData" label-width="80px">
              <el-form-item label="手机名">
                <el-input v-model="form.title" ref="title"></el-input>
              </el-form-item>
              <el-form-item label="库存">
                <el-input v-model.number="form.repertory"></el-input>
              </el-form-item>
              <el-form-item label="价格">
                <el-input v-model.number="form.price"></el-input>
              </el-form-item>
              <el-form-item label="购买数量">
                <el-input v-model.number="form.num"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialog = false">取 消</el-button>
              <el-button type="primary" @click="submit">确 定</el-button>
            </div> -->
</template>
<script>
export default{//禁用Attributes继承
  inheritAttrs:true
}
</script>
<script setup>
import {nextTick,ref,inject} from 'vue'
const ctc=inject('ctc')//依赖注入

let porp = defineProps({
  title: { type: String, default: "my dialog" }, //标题
  show: { type: Boolean, required: true, default: false }, //是否打开组件//[Boolean]
  form: [Object, Array], //数据
});

//自定义指令   获取焦点
const vFocus={
  mouted:(el)=>{
    console.log(el)
    el.focus()
  }
}
//局部自定义指令
const vBig=(el,binding)=>{
  el.style.fontSize=binding.value
  el.style.background='rgba(19, 18, 18, 0.1)'
}
// let emit=defineEmits(['confirm'])//不用校验的话，直接用这个
let emit = defineEmits({
  confirm: ({ title, num, price, repertory }) => {
    // if (title&&num&&price&&repertory) {
    //   return true
    // } else {
    //   console.warn('不能为空')//只是个警告,依旧过去
    //   // return false
    //   alert("哈哈哈哈")
    // }
  },
});
let save = () => {
  let f = porp.form;
  if (
    f.title != "" &&
    f.title != null &&
    f.num > 0 &&
    f.price > 0 &&
    f.repertory > 0
  ) {
    emit("confirm", porp.form);
  } else {
    console.warn("不能为空");
  }
};
</script>

<style lang="less" scoped>
.mydialog-box {
  //包裹整体的组件box
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  background-color: rgba(19, 18, 18, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  .mydialog {
    //组件整体
    width: 600px;
    height: 400px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius:10px;
    border:1px solid yellowgreen;
    .header,.footer {//头部
      width: 100%;
      flex: 1;
      // background: yellow;
      display: flex;
      align-items: center;
      justify-content: center;
      button{
        width:100px;
        height:40px;
        margin: 10px;
        border-radius:20px ;
        border:0px;
        color: red;
        font-size: 16px;
      }
    }
    .main {//身体
      width:100%;
      flex: 8;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      label{
        width:100%;height:30px;
                display: flex;justify-content: center;
                align-items:center ;

        input{
          height:90%;
          border: 1px solid rgb(0, 255, 213);
          border-radius: 20px;;
        }
        span{
          margin-right: 10px;;
        }
      }
    }
  }
}
</style>
