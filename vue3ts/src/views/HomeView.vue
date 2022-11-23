<template>
  <table class="phone-table">
    <tr class="phone-num">
      <td><el-button @click="msg(-1)">添加</el-button></td>
      <td class="phone-num-right">勾选数：{{checkboxList.length}} </td>
      <td colspan="5" class="phone-num-right">总价钱：{{sum}}</td>
    </tr>
    <tr class="phone-title">
      <td class="checkboxTd">
        <input
          type="checkbox"
          name=""
          id=""
          @click="boxAll"
          v-model="checkboxAll"
        />
      </td>
      <td>手机型号</td>
      <td>库存</td>
      <td>手机价格</td>
      <td>购买数量</td>
      <td>购买价格</td>
      <td>操作</td>
    </tr>
    <tr
      v-for="(p, index) in phoneData"
      :key="p.title"
      class="phone-content"
      :class="[{ antiquewhite: index % 2 == 0 }, { green: index % 2 != 0 }]"
    >
      <td class="checkboxTd">
        <input
          type="checkbox"
          name=""
          id=""
          :value="p"
          v-model="checkboxList"
        />
      </td>
      <td>{{ p.title }}</td>
      <td>{{ p.repertory }}</td>
      <td>{{ p.price }}</td>
      <td class="shopNum">
        <el-button @click="p.num++" :disabled="p.num >= p.max">+</el-button>
        <span>{{ p.num }}</span>
        <el-button @click="p.num--" :disabled="p.num <= p.min">-</el-button>
      </td>
      <td>{{ (p.shop = p.num * p.price.toFixed(2)) }}</td>
      <td class="msg-button">
        <el-button link type="success" @click="msg(index)"
          >修改</el-button
        >
        <el-button link type="danger"  @click="del(index)"
          >删除</el-button
        >
      </td>
    </tr>
  </table>
  <!-- <el-table
    ref="multipleTableRef"
    :data="phoneData"
    style="width: 100%"
    @selection-change="handleSelectionChange" class="phoneTable"
  >
    <el-table-column type="selection" width="55" />
    <el-table-column property="title" label="手机型号" width="120" align='center' />
    <el-table-column property="repertory" label="库存" width="120" align='center'/>
    <el-table-column property="price" label="手机价格" width="120" align='center'/>
    <el-table-column label="购买数量" width="200" align='center'>
      <template #default="scope">
        <el-button
          @click="scope.row.num++"
          :disabled="scope.row.num >= scope.row.max"
          >+</el-button
        >
        {{ scope.row.num }}
        <el-button
          @click="scope.row.num--"
          :disabled="scope.row.num <= scope.row.min"
          >-</el-button
        >
      </template>
    </el-table-column>
    <el-table-column label="购买价格" width="120" align='center'>
      <template #default="scope">
       {{scope.row.shop=scope.row.num*scope.row.price.toFixed(2)}}
      </template>
    </el-table-column>
    <el-table-column fixed="right" label="操作" width="200" align='center'>
      <template #default="scope">
        <el-button link type="primary" size="small" @click="msg(scope.$index)"
          >修改</el-button
        >
        <el-button link type="primary" size="small" @click="del(scope.$index)">删除</el-button>
      </template>
    </el-table-column>
  </el-table> -->
  <!--  新增修改弹窗 -->
  <el-dialog v-model="dialog" title="Shipping address">
    <el-form :model="formData">
      <el-form-item label="手机名" :label-width="140" >
        <el-input v-model="formData.title" ref="title" :autofocus="true"></el-input>
      </el-form-item>
      <el-form-item label="库存" :label-width="140">
        <el-input v-model.number="formData.repertory"></el-input>
      </el-form-item>
      <el-form-item label="价格" :label-width="140">
        <el-input v-model.number="formData.price"></el-input>
      </el-form-item>
      <el-form-item label="购买数量" :label-width="140">
        <el-input v-model.number="formData.num"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialog = false">取消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </template>
  </el-dialog>
  <MyModule :show="true"></MyModule>
</template>

<script>
import { ref, toRefs, reactive, computed, nextTick, watch } from "vue";
// import { MyModule } from "@/components/MyModule.vue";
export default {
  // components:{MyModule},
  setup() {
    let state = reactive({
      phoneData: [
        {
          title: "oppok10",
          repertory: 100,
          price: 2100.89,
          max: 5,
          min: 1,
          num: 1,
          shop: 0,
        },
        {
          title: "oppok1",
          repertory: 100,
          price: 1300,
          max: 5,
          min: 1,
          num: 1,
          shop: 0,
        },
        {
          title: "荣耀畅玩5A",
          repertory: 100,
          price: 680,
          max: 5,
          min: 1,
          num: 1,
          shop: 0,
        },
      ],
      formData: {
        //添加修改的数据
        title: "",
        repertory: 100,
        price: 0,
        max: 5,
        min: 0,
        num: 0,
      },
      title:null,
      // dialog:false,//控制弹窗
      checkboxList: [], //复选框
      checkboxAll: false, //总复选框
      msgIndex: 0, //修改添加的下标
    });
    // let checkboxAll=ref(false),//总复选框
    function boxAll() {
      //判断总复选框是否勾选
      state.checkboxAll = !state.checkboxAll;
      state.checkboxList = [];
      if (state.checkboxAll == true) {
        state.phoneData.forEach((e) => state.checkboxList.unshift(e));
      }
    }
    let sum = computed(() => {
      //总款
      let shuju = state.checkboxList.reduce((max, p) => (max += p.shop), 0);

      if (state.checkboxList.length == state.phoneData.length) {
        if (state.checkboxAll == false) {
          boxAll();
        }
      }
      if(state.checkboxList.length!=state.phoneData.length){
        state.checkboxAll=false;
      }
      if (shuju != 0) {
        shuju = shuju.toFixed(2);
      }
      return shuju;
    });
    // let title = ref(null); //去dom元素
    let dialog = ref(false);
    //操作
    function msg(index) {
      dialog.value = !dialog.value;
      state.msgIndex = index;
      state.formData = {
        //添加修改的数据
        title: "",
        repertory: 100,
        price: 0,
        max: 5,
        min: 0,
        num: 0,
      };
      if (index != -1) {
        state.formData = state.phoneData[index];
      }
      nextTick(()=>{
        // console.log(title,title.value)
        // title.value.focus();
        console.log(state.title.value)
        state.title.focus();
        // state.price.style.backgroundColor='red'
      })
    }

    //添加
    function add(data) {
      state.phoneData.unshift(data);
    }
    //修改
    function alt(index, data) {
      state.phoneData[index] = data;
    }
    //添加修改的中转
    async function submit() {
      dialog.value = false;
      if (state.msgIndex != -1) {
        await alt(state.msgIndex, state.formData);
      } else {
        await add(state.formData);
      }
      state.formData = {
        //添加修改的数据
        title: "",
        repertory: 100,
        price: 0,
        max: 5,
        min: 0,
        num: 0,
      };
    }
    //删除
    function del(index) {
      state.phoneData.splice(index, 1);
    }
    return {
      ...toRefs(state),
      msg,
      add,
      alt,
      del,
      sum,
      boxAll,
      // title,
      dialog,
      submit,
    };
  },
};
</script>

<style lang="less" scoped>
// 数据表格
.phone-table {
  width: 100%;
  background-color: rgb(220, 220, 220);
  td{
    width:100px;
    // background-color: yellow;
  }
  .phone-num {//表格标题上面一行
    color: red;
    .phone-num-right{
      text-align: left;
    }
   
  }
  .phone-title {//表格标题
    background-color:rgb(137, 138, 133);// antiquewhite;
  }
  .phone-content{//表格数据
    /deep/.el-button{//操作按钮
      border:1px solid yellowgreen;
    }
    .shopNum{//购买数量
      width:100%;
      display: flex;justify-content: space-evenly;align-items: center;
    }
    // .msg-button{
    //   .el-button{}
    // }
  }
  // td（有复选框的）
  // .checkboxTd{//复选框td
  //   width:55px;
   
  // }
}
.antiquewhite {
  background-color: antiquewhite;
}
.green {
  background-color: rgb(188, 199, 142);
}
</style>
