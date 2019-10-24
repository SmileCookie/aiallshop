<template>    
    <div>
        <HeaderCom :text="title" :hasEwm="hasEwm" :hasMes="hasMes" :hasSearch="hasSearch" :hasText="hasText" :isClassName="isClassName"  />
        <div class="main home">
            <h2>发现页面</h2>
        </div>        
        <FooterCom />
    </div>
</template>
<script>
import FooterCom from "../components/Footer"
import HeaderCom from  "../components/Header"

export default {
    name : "Discover",
    components : {
        HeaderCom,
        FooterCom,
    },
    data(){
        return {
            hasEwm : false,
            hasMes : false,
            hasSearch : false,
            hasText : true,
            isClassName : false,
            title : "发现"
        }
    }
}
</script>

