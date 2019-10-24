<template>
    <div class="register">
        <ul>
            <li v-for="(nav, i) in navlist" :key="i" :to="{name : nav.name}">
                <router-link>{{nav.text}}</router-link>
            </li>
        </ul>
        <div class="input-box">
            <p><span>{{UserName}}</span><input type="text" placeholder={{}}></p>
            <p><span>{{PassWord}}</span><input type="password"></p>
            <p v-if="hasSMS"><span>{{SMStext}}</span><input type="text"></p>
        </div>
    </div>
</template>
<script>
export default {
    name : "Register",
    props : {
        hasSMS: {
            type: Boolean,
            default:true
        },
    },
    data(){
        
        navlist : [
            {
                name : "mobilephone",
                text: `手机注册`,

            },
            {
                name : "email",
                text: `邮箱注册`,
                
            }
        ]
    }
}
</script>
<style lang="less" scoped>

</style>


