<template>
    <div>
        <HeaderCom :hasBack="hasBack" :hasSearch="hasSearch" :hasFilter="hasFilter" :hasEwm="hasEwm" :hasMes="hasMes" :isClassName="isClassName" />
        <GoodsFilter />
        <div class="GoodsList">
            <div class="goodsBg">
                <router-view :goodsList="goodsList" />
            </div>
        </div>
    </div>

</template>
<script>
import HeaderCom from "@/components/Header"
import GoodsFilter from "@/components/GoodsFilter"
import SingleList from "@/components/SingleList"
import { mapState } from 'vuex';

export default {
    name : "GoodsList",
    components : {
        HeaderCom,
        GoodsFilter,
        SingleList,
    },
    computed : {
        ...mapState("goodsList", ["goodsList", "hasBack" , "hasSearch" , "hasFilter","hasMes" ,"hasEwm" ,"isClassName" ]),
        ...mapState("putGoods", ["putGoodsList"])
    },
    mounted(){
        this.$router.push({
            name : "PutGoods"
        })
        
    },
    updated(){
        this.$store.dispatch("goodsList/getGoods")
    }
}
</script>

