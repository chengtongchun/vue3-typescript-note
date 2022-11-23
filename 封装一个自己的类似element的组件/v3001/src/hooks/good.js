import {ref,reactive,computed, toRefs} from 'vue'
export function useGoods(){
    //把商品相关的数据和操作代码放在一起， 像增删改查 选中 计算总成绩等
    let state = reactive({
        isNew: true,//是否新增
        isShow: false,//是否显示对话框
        title: '',//对话框标题
        form: {},//新增修改时绑定的表单
        checklist: [],//选择
        goods: [
            { title: "手机1", num: 100, price: 152.3, max: 15, min: 5 },
            { title: "手机2", num: 100, price: 12.3, max: 15, min: 5 },
            { title: "手机3", num: 200, price: 22.3, max: 15, min: 5 },
            { title: "手机4", num: 100, price: 33.3, max: 15, min: 5 },
            { title: "手机5", num: 200, price: 43.3, max: 15, min: 5 },
            { title: "手机6", num: 100, price: 33.3, max: 15, min: 5 },
        ],

    }
    );
    //新增
    const add = () => {
        state.title = "新增"
        state.isNew = true
        state.isShow = true
        state.form = {}
    }
    const del = (index) => {
        state.goods.splice(index, 1)
    }
    //修改
    const modi = (good) => {
        state.title = "修改"
        state.form = good;
        state.isNew = false;
        state.isShow = true
    }
    const sum = computed(() => {
        return state.goods.reduce((max, good) => max += good.num, 0)
    })
    //保存
    const save = () => {
        if (state.isNew)
            state.goods.push(state.form)
        state.form = {}
        state.isShow = false;
    }
    return {...toRefs(state),add,del,modi,sum,save}
}