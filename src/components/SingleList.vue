<template>
    <div class="singleGoods">
        <ul>
            <li v-for="(goods, i) in goodsList" :key="i">
                <div class="goodsImg">
                    <router-link :to="{name :'Detail', query: {goodsID : goods.goodsID}}">
                        <img :src="goods.goodsSrc" />
                    </router-link>
                </div>
                <div class="goodsCent">
                    <router-link :to="{name : 'Detail', query: {goodsID : goods.goodsID}}" class="goodsTop">
                        <div class="goodsTitle">
                            {{goods.goodsTitle}}
                        </div>
                        <div class="goodsInfo">
                            <span class="goodsPrice">￥{{goods.goodsPrice}}</span>
                            <span class="goodsSalesNum">销量:{{goods.goodsSalesNum}}</span>
                        </div>
                    </router-link>
                    
                    <div class="goodsCar">
                        <div class="goodsNum">
                            <a href="javascript:;" @click="numUpdate(i,false)">-</a>
                            <input type="text" v-model="goods.num"/>
                            <a href="javascript:;" @click="numUpdate(i,true)">+</a>
                        </div>
                        <div class="joinCar">
                            <a href="javascript:;" class="iconfont icon-gouwuche1"></a>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name : "SingleList",
    data(){
        return{
             
        }
       
    },
    props: {
        goodsList : {
            type :Array,
            required : true
        }
    },
    methods : {
        numUpdate(index, isAdd){
            if(isAdd){
                this.goodsList[index].num++;
            }else if(this.goodsList[index].num > 1){
                this.goodsList[index].num--;
            }
        }
    }
}
</script>
<style lang="less" scoped>
    .singleGoods{
        width: 100%;
        ul{
            li{
                display: flex;
                padding-top: 0.26rem;
                .goodsImg{
                    @h:2.22rem;
                    height: @h;
                    width: @h;
                    background : lime;
                    margin: 0 0.16rem;
                }
                .goodsCent{
                    border-bottom: 0.02rem solid #d7d7d7;
                    flex: 1;
                    padding: 0 0.16rem;
                    .goodsTop{
                        display: block;
                        width: 100%;
                        text-align: left;
                        .goodsTitle{
                            @h: 0.41rem;
                            font-size: 0.25rem;
                            line-height: @h;
                            color: #333333;
                            width: 3.2rem;
                        }
                        .goodsInfo{
                            @h:0.27rem;
                            height: @h *2;
                            line-height: @h *2;
                            .goodsPrice{
                                font-size: @h;
                                color: #dd2726;
                            }
                            .goodsSalesNum{
                                font-size: 0.24rem;
                                color: #a7a7a7;
                                margin-left: 0.1rem;
                            }
                        }
                    }
                    .goodsCar{
                        @h:1.14rem;
                        height: @h;
                        line-height: @h;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
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
                            }
                        }
                        .joinCar{
                            @h :0.64rem;
                            width: @h;
                            height: @h;
                            background: #e3000b;
                            border-radius: @h /2;
                            text-align: center;
                            line-height: @h;
                            font-size: 0.39rem;
                            a{
                                color: #ffffff;
                            }
                        }
                    }
                }
            }
        }
    }
</style>


