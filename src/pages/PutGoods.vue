<template>
    <div>
        <SingleList :goodsList="putGoodsList" />
    </div>
</template>
<script>
import SingleList from "@/components/SingleList"
import { mapState } from 'vuex';

export default {
    name : "PutGoods",
    
    components : {
        SingleList,
    },
    computed : {
        ...mapState("putGoods", ["putGoodsList"])
    },
    mounted(){
        this.$store.dispatch("putGoods/getGoods")
    }
}
</script>

