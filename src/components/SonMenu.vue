<template>
    <div class="sonMenu">
        <router-link :to="{name :'GoodsList'}" class="allGoods">
            <div>产看全部</div>
            <div>&gt;</div>
        </router-link>
        <div v-for="i in 10" :key="i">
            <router-link :to="{name :'GoodsList'}" class="title">
                <div>休闲食品</div>
                <div>&gt;</div>
            </router-link>
            <ul class="content">
                <router-link v-for="(item, j) in list" :key="j" :to="{name : 'GoodsList'}" tag="li">
                    <a href="javascript:;">
                        {{item.name}}
                    </a>
                </router-link>
            </ul>
        </div>
        
    </div>
</template>
<script>
export default {
    name : "SonMenu",
    props : {
        list : {
            type : Array,
            required :true
        },
        
    }
}
</script>
<style lang="less" scoped>
    .sonMenu{
        @h: 9rem; 
        height: @h;
        overflow: auto;
        padding: 0 0.12rem;
        width: 4.1rem;
        .allGoods{
            display: block;
            display: flex;
            justify-content: space-between;
            color: #615f5f;
            @h : 0.25rem;
            width: 100%;
            padding: 0.3rem 0 ;
            font-size: @h;
            line-height:@h;
        }
        .title{
            display: block;
            display: flex;
            justify-content: space-between;
            color: #615f5f;
            @h : 0.25rem;
            width: 100%;
            padding: 0.3rem 0 ;
            font-size: @h;
            line-height:@h;
        }
        .content{
            li{
                @w:1.25rem;
                @h:0.56rem;
                width: @w;
                height: @h;
                line-height: @h;
                text-align: center; 
                background: #ffffff;
                margin: 0.08rem 0.05rem 0.08rem 0.04rem;
                float: left;
                box-sizing: border-box;
                a{
                    color: #7a7a7a;
                }
            }
        }
    }
</style>


