<template>
    
</template>

<script >
import {ref,toRef} from 'vue'
export default {
    setup () {
        let state=reactive({
            phoneDatas:[
            {
                title:'opponk10',repertory:100,price:2100,max:5,min:0
            },
            {
                title:'opponk1',repertory:100,price:1300,max:5,min:0
            },
            {
                title:'荣耀畅玩5A',repertory:100,price:680,max:5,min:0
            }
        ]
        })
        return {
            ...toRef(state)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>