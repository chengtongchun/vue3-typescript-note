<template>
    <div class="my-module" v-show="show">
        <div class="wrap">
            <div class="title">标题</div>
            <div class="main">
                <input type="text" ref="title" v-model="form.title" placeholder="标题">
                <input type="text" ref="title" v-model="form.title" placeholder="标题">
                <input type="text" ref="title" v-model="form.title" placeholder="标题">
            </div>
            <div class="footer">
                <button>取消</button>
                <button @click="$emit(ok)">提交</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        show:{
            type:Boolean,
            default:false
        },
        form:Object,
    },
    setup () {
        let form =reactive({})

        return {form}
    }
}
</script>

<style lang="less" scoped>
.my-module{
    position: fixed;
    left:0;
    top:0;
    width:100%;
    height:100vh;
    background-color: rgba(0, 0, 0, .2);
}
</style>