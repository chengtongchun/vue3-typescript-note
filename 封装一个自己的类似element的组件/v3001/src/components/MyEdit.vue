<template>

  <div class="mask" v-show="visible">

    <div class="mydialog">
      <!--把样式穿透过来 v-bind="$attrs" -->
      <div class="header">
        <h3>{{ title }}</h3>
        <slot name="header">命名为header的槽</slot>
      </div>
      <div class="main">
        <input type="text" v-model="form.title" v-focus>
        <input type="text" v-model="form.num" v-color="'red'">
        <input type="text" v-model="form.price" v-color="'green'">
        <slot :data="form">默认槽，把form用data的名字传到父组件</slot>
      </div>
      <div class="footer">
        <slot name="footer"></slot>
        {{ message }}
        鼠标位置是{{ x }}--{{ y }}
        <button @click="save">确定</button>
      </div>
    </div>
  </div>

</template>
<script>//可以写多个script
export default {
  inheritAttrs: false//不继承父组件的attrs
}
</script>
<script setup>
/*
定义一个组件的步骤
  定义传入的参数
  定义事件处理
  定义插槽，留给父亲处理
  处理样式  2种方式
  定义暴露
*/
import { ref, inject } from 'vue'
import { useMouse } from '@/hooks/mouse' //显示鼠标位置的通用代码
const { x, y } = useMouse()
const msg = inject('AppVueMsg')//从祖先App.vue中传来的数据
//定义传入的属性   简写defineProps(['title','visible','form','w','h'])
//有类型验证的输入属性
const prop = defineProps({
  title: { type: String, required: true, default: '默认标题' },
  visible: [Boolean, Number],//可以输入布尔或数字
  form: [Object, Array],
  w: String, h: String
})
//定义事件
//简写 const emit= defineEmits(['confirm','cancel'])
//复杂的写法
const emit = defineEmits({
  confirm: ({ title, num, price }) => {
    if (title && num && price) {
      return true
    } else {
      console.warn('你必须要输入')
      return false
    }
  }
})
//定义事件处理函数
const save = () => {
  emit('confirm', prop.form);
}
//局部自定义指令 el是dom元素 binding为v-color="'green'" green就是binding.value
const vFocus = (el) => el.focus();
const vColor = (el, binding) => el.style.color = binding.value;
//定义暴露属性给父组件

defineExpose({ x, y })
</script>

<style lang="less" scoped>
.mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  .mydialog {
    background-color: #fff;
    border-radius: 5px;

    .main {
      width: v-bind(w);
      height: v-bind(h);
      display: flex;
      flex-direction: column;
      padding: 20px 30px;
    }
  }
}
</style>