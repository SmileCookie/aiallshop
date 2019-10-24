<template>
    <div>
        <HeaderCom :hasBack="hasBack" :text="title" :hasEwm="hasEwm" :hasMes="hasMes" :hasSearch="hasSearch" :hasText="hasText" :isClassName="isClassName" />
        <div class="main login">
            
        </div>
    </div>
</template>
<script>
import HeaderCom from  "../components/Header"

export default {
    name : "MyCenter",
    components : {
        HeaderCom,

    },
    data(){
        return {
            hasEwm : false,
            hasMes : false,
            hasSearch : false,
            hasText : true,
            isClassName : false,
            title : "登录",
            login : "登录",
            hasBack:true
        }
    }
}
</script>
