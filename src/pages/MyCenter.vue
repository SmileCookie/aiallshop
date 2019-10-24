<template>   
    <div>
        <HeaderCom :text="title" :hasEwm="hasEwm" :hasMes="hasMes" :hasSearch="hasSearch" :hasText="hasText" :isClassName="isClassName" />
        <div class="main home">
            <div class="login-bg">
                <router-link :to="{name : 'Login'}" class="login-box">
                    <div class="head">
                        <span class="iconfont icon-gerenzhongxin"></span>
                    </div>
                    <div class="login">登录</div>
                </router-link>
            </div>
        </div>      
        <FooterCom />
    </div>
</template>
<script>
import FooterCom from "../components/Footer"
import HeaderCom from  "../components/Header"

export default {
    name : "MyCenter",
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
            title : "用户中心",
            login : "登录"
        }
    }
}
</script>
<style lang="less" scoped>
.login-bg{
    position: relative;
    width:100%;
    height: 3.2rem;
    background: lime;
    .login-box{
        
        @w : 1.3rem;
        display: block;
        height: 2.rem;
        width:@w;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateY(-50%);
        margin-left: -@w /2;
        .head{
            height: @w;
            width: @w;
            text-align: center;
            line-height: @w;
            border-radius: @w / 2;
            background: #e0f1f3;
            .iconfont{
                color: #515151;
                font-size: 0.74rem;
            }
        }
        .login{
            @h : 0.5rem;
            display: block;
            margin-top:0.1rem;
            width: @w;
            height: @h;
            border: 0.02rem solid #ffffff;
            box-sizing: border-box;
            line-height: @h;
            color: #ffffff; 
            border-radius: @h / 10;
        }
    }
}

</style>


