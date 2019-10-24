<template>
    <div>
        <HeaderCom :text="title" :hasEwm="hasEwm" :hasMes="hasMes" :hasSearch="hasSearch" :hasText="hasText" :isClassName="isClassName" />
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
            title : "注册",
            login : "登录"
        }
    }
}
</script>
