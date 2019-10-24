<template>
    <nav>
        <ul>
            <router-link activeClass="active" v-for="(nav, i) in list" :key="i" :to="{name : nav.name}" tag="li">
                <a href="javascript:;">
                    <div class="iconfont" :class="nav.icon"></div>
                    <p>{{nav.text}}</p>
                </a>
            </router-link>
        </ul>
    </nav>
</template>
<script>
export default {
    name : "Footer",
    data(){
        return {
            list : [
                {
                    name : "Home",
                    text : "首页",
                    icon : "icon-icon"
                },
                {
                    name : "Sort",
                    text : "分类",
                    icon : "icon-fenlei"
                },
                {
                    name : "Discover",
                    text : "发现",
                    icon : "icon-find"
                },
                {
                    name : "ShopCar",
                    text : "购物车",
                    icon : "icon-gouwuche"
                },
                {
                    name : "MyCenter",
                    text : "个人中心",
                    icon : "icon-gerenzhongxin"
                },
            ]
        }
    }
}
</script>
<style lang="less" scoped>
@import "../less/style.less";
    nav{
        width: 100%;
        position: fixed;
        left: 0;
        bottom: 0;
        background: #f8f8f8;
        z-index: 99;
        border-top: 0.02rem solid #d8d8d8;
        ul{
            width: 100%;
            display: flex;
        }
        li{
            flex: 1;
            &.active{
                a{
                    color: #dd2726;
                }
            }
            a{
                display: block;
                height: @bh;
                color: #5e6571;
                text-align: center;
                padding-top: 0.05rem;
                box-sizing: border-box;
                .iconfont{
                    @h:0.72rem;
                    height: @h;
                    line-height: @h;
                    font-size: @h - 0.3rem;
                }
                p{
                    @h : 0.19rem;
                    height: @h;
                    line-height: @h;
                    font-size: @h;
                }
            }
        }
    }
</style>


