<template>   
    <div>
        <HeaderCom :hasEwm="hasEwm" :hasMes="hasMes" :hasSaoma="hasSaoma" :isClassName="isClassName"  />
        <div class="main sort">
            <Menu />
            
            <router-view :list="list" />
          
        </div>            
        <FooterCom />
    </div>
</template>
<script>
import FooterCom from "../components/Footer"
import HeaderCom from  "../components/Header"
import Menu from "../components/Menu"
import SonMenu from "../components/SonMenu"

export default {
    name : "Sort",
    components : {
        HeaderCom,
        FooterCom,
        Menu,
        SonMenu
    },
    data(){
        return {
            hasEwm : false,
            hasMes : false,
            hasSaoma : true,
            isClassName : false,
            list :[]
        }
        
    },
    mounted(){
        this.$router.push({
            name : "drink"
        })
    }
}
</script>


            
