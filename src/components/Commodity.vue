<template>
    <div class="goods">
        <div class="head">
            <router-link :to="{name : 'Discover'}" tag="div">
                <a href="javascript:;">
                    <p></p>
                    <div class="title">{{text}}</div>
                    <span>&gt;</span>
                </a>                
            </router-link>
        </div>
        <div class="content-box">
        <div class="content" v-for="(item ,i) in list" :key="i">
            <router-link  class="conHead" :to="{name : 'Detail', query : {goodsID : item.goodsID}}" tag="a">
                <div class="goodsImg">
                    <img :src="item.goodsSrc" alt="">            
                </div>
                <div class="goodsIntro">{{item.goodsTitle}}</div>
            </router-link>
            <div class="goodsPrice">
                <p class="price">￥{{item.goodsPrice}}</p>
                <a href="javascript:;" class="joinShopCar">
                    <span class="iconfont icon-gouwuche"></span>
                </a>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    name : "Commodity",
    props : {
        text : {
            type : String,
            required : false,
        },
        list : {
            type : Array,
            required : true
        }
    }
}
</script>
<style lang="less" scoped>
    .goods{
        
        .head{
            
            a{
                display: block;
                position: relative;
                @h: 0.8rem;
                height: @h;
                p{
                width: 80%;
                height: 0.02rem;
                background: #d8d8d8;
                position: absolute;
                top: 0.4rem;
                left: 50%;
                transform: translateX(-50%);
                }
                .title{ 
                    height: @h;
                    padding:0 0.24rem;
                    line-height: @h;
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 9;
                    background: #f3f3f3;
                    color:#666666;
                }
                span{
                    float: right;
                    line-height: @h;
                    font-size: 0.28rem;
                    margin-right: 0.18rem;
                    color:#bfbfbf;
                }
            }
        }
        .content-box{
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            margin: 0 0.06rem;
            .content{
                @h : 4.83rem;
                @w : 3.03rem;
                height: @h;
                width: @w;
                background: #ffffff;
                border-radius: 0.1rem;
                margin-top: 0.1rem;
                .conHead{
                    display: block;                
                    width: 100%;
                    .goodsImg{
                        height: @w;
                        background: lime;
                    }
                    .goodsIntro{
                        @h: 0.22rem;
                        font-size: @h;
                        color: #666666;
                        text-align: left;
                        line-height: @h + 0.1rem;
                        padding:  0.15rem 0;
                        border-bottom: 0.02rem solid #d7d7d7;
                    }
                }

                .goodsPrice{
                    display: flex;
                    justify-content:space-between;                    
                    margin-top: 0.1rem;
                    padding: 0 0.1rem;
                    .price{
                        font-size: 0.2rem;
                        color: #dd2726;
                        margin-top: 0.1rem;
                    }
                    .joinShopCar{
                        display: block;
                        @h: 0.62rem;
                        height: @h;
                        width: @h;
                        border-radius: @h /2;
                        background:#e3000b;
                        line-height: @h;
                        text-align: center;
                        span{
                            font-size: 0.39rem;
                            color: #ffffff;
                        }
                    }
                }
            }
        }
        
    }
</style>

