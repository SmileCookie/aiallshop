<template>
    <div class="goodsFilter">
        <ul>
            <router-link activeClass="active" v-for="(item, i) in list" :key="i" :to="{name : item.router}" tag="li">
                <a href="javascript:;">
                    {{item.name}}
                </a>
                <a href="javascript:;" class="iconfont icon-jiantouarrow483"></a>
            </router-link>
        </ul>
        <a href="javascript:;" class="iconfont icon-leimupinleifenleileibie sort"></a>
    </div>
</template>
<script>
export default {
    name : "GoodsFilter",
    data(){
        return {
            list : [
                {
                    name : "上架",
                    router : "PutGoods"
                },
                {
                    name : "销量",
                    router : "PriceGoods"
                },
                {
                    name : "价格",
                    router : "PutGoods"
                },
                {
                    name : "更新",
                    router : "PriceGoods"
                },
                {
                    name : "人气",
                    router : "PutGoods"
                }
            ]
        }
    }
}
</script>
<style lang="less" scoped>
@import "../less/style.less";
    .goodsFilter{
        position: fixed;
        top: @hh;;
        left: 0;
        background: #fefefe;
        width: 100%;
        display: flex;
        align-items: center;
        ul{
            width: 5.47rem; 
            display: flex;
            li{
                @h : 0.88rem;
                flex: 1;
                height: @h;
                line-height:@h;
                &.active{
                    a{
                        color: red;
                    }
                }
                a{
                    color:#9d9d9d;
                }
                .iconfont{
                    display: none;
                }
            }
        }
        .sort{
            display: block;
            @h : 0.88rem;
            flex: 1;
            width:100%;
            text-align: center; 
            color:#9d9d9d;
            background: #fefefe;
            border-left: 0.02rem solid #9d9d9d;
            height: 0.34rem;
            font-size: 0.34rem;
        }
    }
</style>


