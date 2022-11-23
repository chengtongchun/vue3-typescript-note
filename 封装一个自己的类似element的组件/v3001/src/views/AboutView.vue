<template>
    <div>
        <button @click="add">增加</button>
        <table>
            <tr>
                <th>选择</th>
                <th>标题</th>
                <th v-big="30">数量</th><!--v-big用了全局指令-->
                <th>价格</th>
                <th>金额</th>
                <th>操作</th>
            </tr>
            <tr v-for="(good, index) in goods" :key="good.title" :class="{ red: index % 2 == 0 }">
                <td><input type="checkbox" v-model="checklist" :value="good"></td>
                <td>{{ good.title }}</td>
                <td> <button @click="good.num++">+</button>
                    {{ good.num }}
                    <button @click="good.num--">-</button>{{ good.price }}
                </td>
                <td>{{ good.price }}</td>
                <td>{{ calcPrice(good.num, good.price) }}</td>
                <td><a href="#" @click.prevent="del(index)">删除</a>
                    <button @click="modi(good)">修改</button>
                </td>
            </tr>

        </table>

    </div>
    <!--对话框组件
     :w="'300px'" 在子组件的样式中v-bind(w)
      v-slot="scope"定义作用域 scope.data输出子组件中:data中的数据
    -->
    <my-edit :title="title" :visible="isShow"
    :form="form" @confirm="save" 
    :w="'300px'" :h="'200px'"
    v-slot="scope">
       子组件传过来的数据 {{scope.data}}
  </my-edit>
</template>
<script setup>
import MyEdit from '@/components/MyEdit.vue'
//引入商品代码
import {useGoods} from '@/hooks/good.js'
const{ isNew,isShow,title,form,checklist,goods,add,del,modi,sum,save} =useGoods();
function calcPrice(num, price) {
    return (num * price).toFixed(2)
}
</script>

<style lang="less" scoped>
.red {
    background: pink;
}
</style>