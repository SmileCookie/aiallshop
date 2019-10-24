<template>
    <div>
        <HeaderCom :hasBack="hasBack" :hasSearch="hasSearch" :hasEwm="hasEwm" :hasMes="hasMes" :isClassName="isClassName" :hasDetail="hasDetail" :hasMore="hasMore" />
        <div class="shopCar">
            <DetailSwiper :list="imgList" />
            
            <div class="goodsTitle">
                <div class="title">{{goodsTitle}}</div>
                <a href="javascript:;" class="share">
                    <div class="iconfont icon-fenxiang"></div>
                    <p>分享</p>
                </a>
            </div>

            <div class="Price">
                <div class="goodsPrice">￥{{goodsPrice}}</div>
                <div class="advantage">口感香嫩 味美肉全 天然野生</div>
                <div class="goodsID">商品货号:{{goodsID}}</div>
            </div>

            <div class="info">
                <div class="assess">累计评价 <span>35</span> 人评价</div>
                <div class="saleNum">累计销量 <span>30</span> </div>
                <div class="">赠送积分<span> 40 </span></div>
            </div>

            <div class="member">
                <div class="common mem">普通会员:<span>￥ 90.00</span></div>
                <div class="gold mem">金牌会员:<span>￥ 80.00</span></div><br />
                <div class="special men">特殊:<span>￥ 90.00</span></div>
            </div>

            <div class="standard">
                <span>规格参数</span>
                <a href="javascript:;" class="iconfont icon-msnui-more"></a>
            </div>

            <div class="store">
                <div class="top">
                    <p>秦海棠旗舰店(艾众购自营)</p>
                    <p>卖家:   秦海棠旗舰店</p>
                </div>
                <div class="bottom">
                    <div class="joinStore botStore">
                        <span class="iconfont icon-dianpu"></span>
                        <span>进入店铺</span>
                    </div>
                    <div class="attent botStore">
                        <span class="iconfont icon-xin"></span>
                        <span>关注店铺</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HeaderCom from "@/components/Header"
import DetailSwiper from "@/components/DetailSwiper"
import {mapState} from "vuex"

export default {
    name : "Detail",
    components : {
        HeaderCom,
        DetailSwiper,
    },
    computed : {
        ...mapState("detail", ["goodsID", "goodsPrice", "goodsTitle", "imgList", "hasBack","hasSearch","hasMes","hasEwm","isClassName","hasDetail","hasMore"])
    },
    mounted(){
        var goodsID = this.$route.query.goodsID;
        this.$store.dispatch("detail/getDetail", {goodsID})
    }
}
</script>
<style lang="less" scoped>

    .shopCar{
        .goodsTitle{
            width: 100%;
            display: flex;
            background: #d7dae3;
            .title{
                padding: 0.2rem 0.24rem;
                text-align: left;
                color: #000000;
                font-size: 0.26rem;
                line-height: 0.36rem;
            }
            .share{
                display: block;
                flex: 1;
                color: #b7b7b7;
                border-left: 0.02rem solid #b7b7b7;
                margin: 0.18rem 0;
                .iconfont{
                    padding: 0 0.33rem;
                    margin-bottom: 0.1rem;
                    color: #666b75;
                }
            }
        }

        .Price{
            background: #ffffff;
            text-align: left;
            padding: 0.27rem 0.3rem 0.18rem 0.3rem;
            @h : 0.65rem;
            .goodsPrice{
                font-size: 0.37rem;
                line-height: @h;
                color: #dd2726;
            }
            .advantage{
                font-size: 0.23rem;
                line-height: @h;
                color:#afafaf;
            }
            .goodsID{
                font-size: 0.23rem;
                line-height: @h;
                color:#666666;
            }
        }
        .info{
            background: #f9f9f9;
            border-top: 0.02rem solid #f1efef;
            border-bottom: 0.02rem solid #f1efef;
            display: flex;
            font-size: 0.24rem;
            line-height: 0.8rem;
            justify-content:space-around;
            span{
                color: #dd2726;
            }
        }
        .member{
            padding: 0.2rem 0.3rem;
            font-size: 0.23rem;
            line-height: 0.48rem;
            color: #ababab;
            text-align: left;
            background: #ffffff;
            border-bottom: 0.02rem solid #f1efef;
            overflow: hidden;
            .mem{
                @w:2.5rem;
                width: @w;
                float: left;
            }
        }

        .standard{
            display: flex;
            padding: 0.27rem 0.3rem;
            margin: 0.21rem 0;
            justify-content: space-between;
            align-items: center;
            font-size: 0.25rem;
            color: #666666;
            background :#FFF;
            border-bottom: 0.02rem solid #f1efef;
            a{
                color: #666666;
            }
        }
        .store{
            padding: 0.25rem 0.3rem;
            background: #ffffff;
            border-bottom: 0.02rem solid #f1efef;
            .top{
                text-align: center;
                p:nth-of-type(1){
                    font-size: 0.26rem;
                    line-height: 0.4rem;
                    color: #3e3e3e;
                }
                p:nth-of-type(2){
                    font-size: 0.25rem;
                    line-height: 0.7rem;
                    color: #a7a7a7;
                }
            }
            .bottom{
                margin-top: 0.1rem;
                display: flex;
                justify-content: space-between;
                .botStore{
                    padding: 0.23rem 0.6rem;
                    border: 0.02rem solid #cbcbcb;
                    font-size: 0.26rem;
                    color: #a7a7a7;
                    border-radius: 0.1rem;
                }
            }
        }
    }
</style>


