<template>
  <h1 @click="yingImg=!yingImg">{{ying}}</h1>
  <Transition>
  <h2 v-if="yingImg">此处前方，此刻未来，皆是你的天地。</h2>
</Transition>
  <table class="phone-table">
    <tr class="phone-num">
     <td><el-button utton @click="msg(-1)">添加</el-button></td>
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
    <TransitionGroup name="tranList">
    <tr
      v-for="(p, index) in list"
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
      <td>{{ conversion(index,p.num * p.price) }}</td>
      <td class="msg-button">
        <el-button link type="success" @click="msg(index)"
          >修改</el-button
        >
        <el-button link type="danger"  @click="del(index)"
          >删除</el-button
        >
      </td>
    </tr>
  </TransitionGroup>
  </table>
  <my-edit title="练习" :show="dialog" :form="form"   @confirm="ok">
    <template #header>
        <h3 v-show="formIndex!=-1">修改</h3>
    <h3 v-show="formIndex==-1">添加</h3>
    </template>    
    <template  v-slot="scope">
      {{scope.data}}
    </template>
</my-edit>
</template>
<script lang="ts" setup>
import {ref, reactive,computed ,inject} from 'vue';
import myEdit from '@/views/myEdit.vue'
import {phoneData} from '@/hooks/goots'
const ying=inject('ying')
let yingImg=ref(true);
const {phone,list,form,formIndex,checkboxAll,checkboxList,dialog,msg,ok,del,conversion,boxAll,sum}=phoneData();
// components:{
//     myEdit
// }
/*
interface IPhone {//数据类型接口
  title: string ;
  repertory: number;
  price: number;
  max: number;
  min: number;
  num: number;
  shop: number;
}
class PhoneData {//数据类
  list: IPhone[];
  constructor() {
    this.list = [
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
    ];
  }
  add(data:IPhone):void{}
  alt(data:number):void{}
  query():IPhone[]{return this.list}
}
let phone=reactive(new PhoneData())//实例
let list:IPhone[]=reactive(phone.query());//数据

let state=reactive({
    form:<IPhone><any>{},//添加修改的数据
    formIndex:-1,//添加修改的下标
    checkboxList:<IPhone[]><any>[],//复选框勾选的
        checkboxAll:ref(false)//是否勾选全部复选框
})
//弹窗的属性方法
let dialog=ref(false);
//添加修改报存的数据
//方法
//添加修改中转方法
let msg=(index:number):void=>{
    state.form=<IPhone><any>ref({})
    state.formIndex=index;
    if(index!=-1){
        state.form=list[index]
    }
    dialog.value=true
}
// 从弹窗子组件回来的数据 添加修改
let ok=():void=>{
    console.log(state.form)
        dialog.value=false;
        if(state.formIndex!=-1){
            list[state.formIndex]=state.form;
        }else{
            list.unshift(state.form)   
        }
    // }es
    // }
}
//删除方法
let del=(index:number):void=>{list.splice(index,1)}
// //修改方法
// let alt=():void=>{}
// //添加方法
// let add=():void=>{}
//单个数据手机价格转化
let conversion=(index:number,priceData:number):number=>{
    let priceNum:number=<number><any>parseFloat(priceData.toFixed(2))
        list[index].shop=<number><any>priceNum
    return priceNum;
}
//全选 属性 方法
// let checkboxList=<IPhone[]>ref([])//复选框勾选的
// let checkboxAll=ref(false);//是否勾选全部复选框
let boxAll=()=>{
    state.checkboxAll=!state.checkboxAll;
    state.checkboxList=<IPhone[]>[]
    if(state.checkboxAll){
        list.forEach((p:IPhone)=>state.checkboxList.unshift(<IPhone>p))
    }
    console.log(state.checkboxList)

}
// 计算属性
let sum =(computed(() => {
    let s= state.checkboxList.reduce((max,c:IPhone)=>max+=(<number>c.shop),0)//max+=parseFloat(c.shop),0);
        if(state.checkboxList.length==list.length) state.checkboxAll=true;
        if(state.checkboxList.length!=list.length) state.checkboxAll=false
        return s.toLocaleString();
    }));
*/
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
  }
}
.antiquewhite {
  background-color: antiquewhite;
}
.green {
  background-color: rgb(188, 199, 142);
}

//Transition的class 进入/离开
v-enter-active,.v-leave-active {
  transition: opacity 0.8s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
//TransitionGroup的class进入/离开
.tranList-enter-active,
.tranList-leave-active {
  transition: all 0.8s ease;
}
.tranList-enter-from,
.tranList-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
