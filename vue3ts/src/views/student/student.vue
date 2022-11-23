<template>
    {{ count }}
    <button @click="msg(-1)">添加</button>
    <table>
      <tr>
        <td>id</td>
        <td>姓名</td>
        <td>年龄</td>
        <td>等级</td>
        <td>成绩</td>
        <td>操作</td>
      </tr>
      <tr v-for="(s, index) in lists" :key="s.id">
        <td>{{ s.id }}</td>
        <td>{{ s.name }}</td>
        <td>{{ s.age }}</td>
        <td>{{ s.deg }}</td>
        <td>{{ s.score }}</td>
        <td>
          <button @click="del(index)">删除</button
          ><button @click="msg(index)">修改</button>
        </td>
      </tr>
    </table>
    <form v-if="addFlsh == true">
      <label for=""> id <input type="text" v-model="data.id" /> </label>
      <label for=""> name <input type="text" v-model="data.name" /> </label>
      <label for=""> age <input type="number" v-model="data.age" /> </label>
      <label for=""> score <input type="number" v-model="data.score" /> </label>
      <label for="">
        deg
        <select name="" id="">
          <option value="S" @click="data.deg = DEG.S">S</option>
          <option value="A" @click="data.deg = DEG.A">A</option>
          <option value="B" @click="data.deg = DEG.B">B</option>
          <option value="C" @click="data.deg = DEG.C">C</option>
          <option value="D" @click="data.deg = DEG.D">D</option>
        </select>
      </label>
      <button @click.prevent="submit">提交</button>
    </form>
    <!-- <router-view /> -->
  </template>
  <script lang="ts">
  // import { defineComponent } from '@vue/composition-api'
  import { ref, reactive } from "vue";
  import { Student, DEG } from "@/types/Students";
  import type { IStudent } from "@/types/Students";
  import { numberLiteralTypeAnnotation } from "@babel/types";
  export default {
    //vue3代码写到setup()
    setup() {
      let count = ref(10); //响应式
      //数据
      let students = new Student();
      let lists = reactive<IStudent[]>(students.query());
      //添加
      let add = (stu: any): void => {
        students.add(stu);
      };
      let del = (index: number): void => {
        students.del(index);
        lists = reactive<IStudent[]>(students.query());
      };
      let alt = (index: number, stu: any): void => {
        students.alt(index, stu);
      };
      let addFlsh = ref(false);
      let data = ref({
        id: "",
        name: "",
        age: 0,
        score: 0,
        deg: DEG.A,
      });
      let StuIndex: number = 0;
      //提交
      let submit = (): void => {
        // if(data.id)
        if (StuIndex != -1) {
          alt(StuIndex, data);
        } else {
          add(data);
        }
        // data.value = {
        //   id: "",
        //   name: "",
        //   age: 0,
        //   score: 0,
        //   deg: DEG.A,
        // };
        addFlsh.value=false;
      };
      //添加修改操作打开
      let msg = (index: number) => {
        addFlsh.value = !addFlsh.value;
        //清空
        data.value = {
          id: "",
          name: "",
          age: 0,
          score: 0,
          deg: DEG.A,
        };
        StuIndex = index; //保存添加修改index
        if (index != -1) {
          //修改
          console.log(index, students.stu(index));
          data.value = students.stu(index);
        }
      };
      return {
        count, //无视它
        lists, //数据
        del, //删除
        addFlsh, //是否点开添加页面
        add, //添加
        data, //数据
        DEG, //等级
        submit, //提交
        msg, //添加修改
        StuIndex, //添加修改保存的index
      };
    },
  };
  </script>
  
  <style lang="less">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  nav {
    padding: 30px;
  
    a {
      font-weight: bold;
      color: #2c3e50;
  
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  </style>
  