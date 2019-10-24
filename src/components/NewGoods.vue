<template>
    <div class="newGoods">
       
        <div class="newHead">
            <h3>{{text}}</h3>
            <router-link tag="a" :to="{name : 'Discover'}">更多 &gt;</router-link>
        </div>

        <div class="swiper-container newSlide">
            <div class="swiper-wrapper">
                
                    <div  v-for="(item, i) in list" :key="i" class="swiper-slide" >
                        <div class="slideGoods" >
                            <router-link :to="{name : 'Detail', query : {goodsID : item.goodsID}}">
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

            <div v-if="hasPag" class="swiper-pagination"></div>
        </div>

        
    </div>
</template>
<script>
import Swiper from "swiper"
//<img :src="item.imgSrc" :title="item.goodsName">
export default {
    name : "NewGoods",
    props : {
        hasPag : {
            type : Boolean,
            default : true
        },
        text : {
            type : String,
            default : true
        },        
        list : {
            type : Array,
            required : true
        }  
    },
    mounted(){
        var option = {};
        if(this.hasPag){
            option.pagination = {el : ".swiper-pagination"};
        }
        option.slidesPerView = 2;
        option.slidesPerGroup = 2;
        var swiper = new Swiper(".swiper-container",option);
    }
}
</script>

<style src="swiper/dist/css/swiper.css"></style>
<style lang="less" scoped>
    .newGoods{
        margin-top: 0.2rem;
        border-bottom: 0.01rem solid #d7d7d7;
        border-top: 0.01rem solid #d7d7d7;
        background: #ffffff;
        .newHead{
            @h : 0.88rem;
            height: @h;
            display: flex;
            align-items: center;
            justify-content:space-between;
            h3{
                @h:0.31rem;
                font-size: @h;
                color: #000;
                height: @h;
                line-height: @h;
                border-left: 0.06rem solid #757575;
                text-indent: 0.15rem;
            }
            a{
                @h : 0.24rem;
                font-size: @h;
                color: #848484;
            }
        }
        .newSlide{
            @h: 5.25rem;
            height: @h;
            box-sizing: border-box;
            padding: 0 0.05rem;
            .slideGoods{
                @w: 3.03rem;
                width: @w;
                float: left;
                margin: 0 0.05rem;
                a{
                    display: block;
                }
                .goodsImg{
                    height: @w;
                    width: @w;
                    background: lime;
                }
                .goodsIntro{
                    font-size: 0.23rem;
                    line-height: 0.32rem;
                    margin-top: 0.1rem;
                    color: #666666;
                    text-align: left;
                    box-sizing: border-box;
                    padding-bottom: 0.15rem;
                    border-bottom:0.02rem solid #d7d7d7;
                }
                .goodsPrice{
                    display: flex;
                    justify-content:space-between;
                    padding: 0 0.1rem;
                    margin-top: 0.1rem;
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


       .swiper-pagination-fraction,
            .swiper-pagination-custom,
            .swiper-container-horizontal > .swiper-pagination-bullets {
            bottom: 8px;
        } 
    }
</style>



