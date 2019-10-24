<template>
    <div>
        <SingleList :goodsList="goodsList" />
    </div>
</template>
<script>
import SingleList from "@/components/SingleList"
import { mapState } from 'vuex';

export default {
    name : "PriceGoods",
    
    components : {
        SingleList,
    },
    computed : {
        ...mapState("goodsList", ["goodsList"])
    },
    mounted(){
        this.$store.dispatch("goodsList/getGoods")
    }
}
</script>