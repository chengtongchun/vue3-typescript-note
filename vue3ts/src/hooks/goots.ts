import {ref, reactive,computed,toRefs} from 'vue';

export function phoneData(){
    interface IPhone {
        //数据类型接口
        title: string;
        repertory: number;
        price: number;
        max: number;
        min: number;
        num: number;
        shop: number;
      }
      class PhoneData {
        //数据类
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
        add(data: IPhone): void {}
        alt(data: number): void {}
        query(): IPhone[] {
          return this.list;
        }
      }
      let phone = reactive(new PhoneData()); //实例
      let list: IPhone[] = reactive(phone.query()); //数据
      
      let state = reactive({
        form: <IPhone>(<any>{
          title: '',
          repertory: 0,
          price: 0,
          max: 5,
          min: 1,
          num: 0,
          shop: 0
        }), //添加修改的数据
        formIndex: -1, //添加修改的下标
        checkboxList: <IPhone[]>(<any>[]), //复选框勾选的
        checkboxAll: ref(false), //是否勾选全部复选框
      });
      //弹窗的属性方法
      let dialog = ref(false);
      //添加修改报存的数据
      //方法
      //添加修改中转方法
      let msg = (index: number): void => {
        state.form = <IPhone>(<any>ref({
          title: '',
          repertory: 0,
          price: 0,
          max: 5,
          min: 1,
          num: 0,
          shop: 0
        }));
        state.formIndex = index;
        if (index != -1) {
          state.form = list[index];
        }
        dialog.value = true;
      };
      // 从弹窗子组件回来的数据 添加修改
      let ok = (): void => {
        console.log(state.form);
        dialog.value = false;
        if (state.formIndex != -1) {
          list[state.formIndex] = state.form;
        } else {
          list.unshift(state.form);
        }
        // }es
        // }
      };
      //删除方法
      let del = (index: number): void => {
        list.splice(index, 1);
      };
      let conversion = (index: number, priceData: number): number => {
        let priceNum: number = <number>(<any>parseFloat(priceData.toFixed(2)));
        list[index].shop = <number>(<any>priceNum);
        return priceNum;
      };
      //全选 属性 方法
      let boxAll = () => {
        state.checkboxAll = !state.checkboxAll;
        state.checkboxList = <IPhone[]>[];
        if (state.checkboxAll) {
          list.forEach((p: IPhone) => state.checkboxList.unshift(<IPhone>p));
        }
        console.log(state.checkboxList);
      };
      let sum = computed(() => {
        let s = state.checkboxList.reduce(
          (max, c: IPhone) => (max += <number>c.shop),
          0
        );
        if (state.checkboxList.length == list.length) state.checkboxAll = true;
        if (state.checkboxList.length != list.length) state.checkboxAll = false;
        return s.toLocaleString();
      });
      return {phone,list,...toRefs(state),dialog,msg,ok,del,conversion,boxAll,sum}
}
