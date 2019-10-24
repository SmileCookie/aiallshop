<template>
    <div>
        <HeaderCom />
        <div class="main home">
            <NavCom />
            <NewGoods :text="newTitle" :list="newGoodsList" />
            <NewGoods :text="hotTitle" :list="newGoodsList" />
            <Commodity :text="foodTitile" :list="newGoodsList" />
            <Commodity :text="commodityTitle" :list="newGoodsList" />
            <Commodity :text="girlTitle" :list="newGoodsList" />
            <Commodity :text="guessTitle" :list="newGoodsList" />
        </div>
         <FooterCom />
    </div>
</template>
<script>
import HeaderCom from "@/components/Header"
import NavCom from "@/components/Nav"
import NewGoods from "@/components/NewGoods"
import Commodity from "@/components/Commodity"
import FooterCom from "@/components/Footer"
import {mapState} from "vuex"

export default {
    name : "Home",
    computed : {
        ...mapState("home", ["newGoodsList", "newTitle","hotTitle","foodTitile","commodityTitle","girlTitle" ,"guessTitle","newGoodsList"])
    },
    components : {
        HeaderCom,
        NavCom,
        NewGoods,
        Commodity,
        FooterCom,
    },
    mounted(){
        this.$store.dispatch("home/getGoods")
    }
}
</script>

