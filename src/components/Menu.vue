<template>
    <div class="menu">
        <ul>
            <router-link activeClass="active" v-for="(item, i) in routerList" :key="i" :to="{name : item.name}" tag="li">
                <a href="javascript:;">
                    {{item.title}}
                </a>
            </router-link>
        </ul>
    </div>
</template>
<script>

export default {
    name : "Menu",
    data(){
        return {
            routerList: [
                {
                    name : "drink",
                    title :"食品/酒水/生鲜/特产"
                },
                {
                    name : 'phone',
                    title : "手机"
                }
            ]
        }
    }
    
}
</script>
<style lang="less" scoped>

    .menu{
        width: 1.58rem;
        width:100%;
        overflow: auto;
        height: 9rem;
        ul{
            li{
                border: 0.02rem solid #cccccc;
                border-left: none;
                font-size: 0.26rem;
                width: 1.2rem;
                line-height: 0.4rem;
                padding: 0.37rem 0.37rem;
                text-align: center;
                background: #ffffff;
                &.active{
                    border: none;
                    border-left: 0.02rem solid red;
                    background: none;
                }
                a{
                    color: #3e3e3e;
                }
            }
        }
    }
</style>


