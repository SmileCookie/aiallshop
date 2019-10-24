<template>
    <div>
        <HeaderCom :text="title" :hasEwm="hasEwm" :hasMes="hasMes" :hasSearch="hasSearch" :hasText="hasText" :hasDel="hasDel" :isClassName="isClassName" />
        <div class="main shopCar">
            <div class="goodsCar" v-for="i in 6" :key="i">
                <div class="store">
                    <input type="checkbox" class="iconfont icon-duihao2 select-box">
                    <span class="iconfont icon-dianpu"></span>
                    <span>店铺: 苏苏零食屋</span>
                </div>
                <div class="goods">
                    <div class="select-box select">
                        <input type="checkbox" class="iconfont icon-duihao2">
                    </div>
                    <div class="goodsImg">
                        <router-link :to="{name : 'Detail'}">
                            <img src="https://www.52zhonggou.com/images/201703/thumb_img/3133_thumb_G_1490248465635.jpg" alt="">
                        </router-link>
                    </div>

                    <div class="goodsInfo">
                        <router-link :to="{name : 'Detail'}" class="title">
                            <div class="goodsTitle">【金晔原汁原味山楂宝】 天然原果草莓山楂宝 200g</div>
                            <p>口味:香浓原味</p>
                        </router-link>
                        <div class="goodsNum">
                            <a href="javascript:;">-</a>
                            <input type="text">
                            <a href="javascript:;">+</a>
                        </div>
                    </div>

                    <div class="goodsPrice">
                        <div class="price">￥:15.00</div>
                        <p class="del">
                            <a href="javascript:;" class="iconfont icon-lajitong"></a>
                        </p>
                    </div>
                </div>
            </div>

            <div class="count-box">
                <p class="selectAll">
                    <input type="checkbox">
                </p>
                <div class="allPrice">
                    <p class="money">合计:<span>￥253.00</span></p>
                    <router-link class="pay" :to="{name : 'Detail'}">结算</router-link>
                </div>
            </div>
        </div>       
        <FooterCom />
    </div>
   
</template>
<script>
import FooterCom from "../components/Footer"
import HeaderCom from  "../components/Header"

export default {
    name : "ShopCar",
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
            hasDel : true,
            isClassName : false,
            title : "购物车",
        }
    }
}
</script>
<style lang="less" scoped>

    .goodsCar{
        width: 100%;
        margin-bottom: 0.2rem;
        .select-box{
            margin-right:0.28rem;
        }
        .store{
            padding: 0.3rem 0.18rem;
            background: #ffffff;
            text-align: left;
            border-bottom: 0.02rem solid #f1efef;
            span:nth-of-type(1){
                margin-right: 0.17rem;
                color: #a0a0a0;
                font-size: 0.32rem;
            }
            span:nth-of-type(2){
                color: #3e3e3e;
                font-size: 0.26rem;
            }
        }

        .goods{
            background: #f9f9f9;
            padding: 0.16rem 0.18rem;
            display: flex;
            align-items: center;
            .goodsInfo{
                text-align: left;
                margin: 0 0.21rem;
                .title{
                    display: block;
                    line-height: 0.38rem;
                    .goodsTitle{
                        font-size: 0.24rem;    
                        color: #3e3e3e;
                    }
                    p{
                        font-size: 0.2rem;
                        color: #a7a7a7;
                    }
                }
                .goodsNum{
                    @h:0.58rem;
                    @w:2.08rem;
                    width: @w;
                    height: @h;
                    border: 0.02rem solid #d7d7d7;
                    display: flex;
                    align-items: center;
                    border-radius: 0.1rem;
                    input{
                        @h:0.42rem;
                        width: 1.08rem;
                        height:@h ;
                        outline: none;
                        border: none;
                        border-left: 0.02rem solid #d7d7d7;
                        border-right: 0.02rem solid #d7d7d7;
                        text-align: center;
                    }
                    a{
                        flex: 1;
                        color: #666666;
                        text-align: center;
                    }
                }
            }
            .goodsPrice{
                .price{
                    font-size: 0.2rem;
                    color: red;
                    text-align: left;
                    margin-bottom: 1.3rem;
                    line-height: 0.38rem;
                }
                .del{
                    font-size: 0.34rem;
                    text-align: right;
                    a{
                        color: #989898;
                    }
                }
            }

        }
    }

    .count-box{
        position:fixed;
        bottom:1.08rem;
        left:0;
        background: #ffffff;
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding-left: 0.18rem;
        border: 0.02rem solid #d7d7d7;
        box-sizing: border-box;
        line-height: 1rem;
        .allPrice{
            display: flex;
            justify-content: space-between;
            .money{
                span{
                    color:#dd2726;
                }
            }
            .pay{
                margin-left: 0.27rem;
                display: block;width: 1.92rem;
                background: #dd2726;
                color:#ffffff;
                
            }
        }
    }
</style>

