<template>
    <ul class="goods-list">
        <li v-for="(goods, i) in list" :key="i">
            <router-link class="main-box" :to="{name : 'Detail', query : {goodsID : goods.goodsID}}">
                <div class="img-box">
                    <img :src="goods.imgSrc" :title="goods.godsName">
                </div>
                <div class="content">
                    <h3>{{goods.goodsName}}</h3>
                    <p class="price"><span>￥{{goods.price}}</span><del>￥{{goods.oldPrice}}</del></p>
                    <p class="discount">{{goods.discount}}折</p>
                </div>
            </router-link>
            <a href="javascript:;" class="shopCar-btn iconfont icon-headShop"></a>
        </li>
    </ul>
</template>
<script>
export default {
  name : "GoodsList",
  props : {
      list : {
          type : Array,
          required : true
      }
  }
}
</script>
<style lang="less" scoped>
    .goods-list{
        li{
            padding: 0.2rem 0.15rem;
            @h : 1.7rem;
            position: relative;
            border-bottom: 0.01rem solid #cccccc;
            .main-box{
                display: flex;
                
            }

            .img-box{
                    width: @h;
                    height: @h;
                    overflow: hidden;
                    margin-right: 0.15rem;
                    img{
                        height: auto;
                    }
                }

                .content{
                    flex: 1;

                    h3{
                        @h : 0.43rem;
                        font: 0.28rem/@h microsoft yahei;
                        color: #000000;
                        height: @h*2;
                    }

                    .price{
                        line-height: 0.36rem;
                        vertical-align: middle;
                        span{
                            vertical-align: middle;
                            font-size: 0.32rem;
                            color: #f1015a;
                            margin-right: 0.05rem;
                        }
                        del{
                            vertical-align: middle;
                            font-size: 0.24rem;
                            color: #cccccc;
                        }
                    }
                    .discount{
                        font-size: 0.24rem;
                        line-height: 0.6rem;
                        color: #666666;
                    }
                }

            .btn-bg(){
                /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#e84274+0,d51551+100 */
                background: #e84274; /* Old browsers */
                background: -moz-linear-gradient(top, #e84274 0%, #d51551 100%); /* FF3.6-15 */
                background: -webkit-linear-gradient(top, #e84274 0%,#d51551 100%); /* Chrome10-25,Safari5.1-6 */
                background: linear-gradient(to bottom, #e84274 0%,#d51551 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e84274', endColorstr='#d51551',GradientType=0 ); /* IE6-9 */
            }
            .shopCar-btn{
                position: absolute;
                width: 1.16rem;
                height: 0.5rem;
                border-radius: 0.5rem;
                .btn-bg();
                right: 0.25rem;
                bottom: 0.4rem;
                color: #ffffff;
                text-align: center;
                line-height: 0.5rem;
                font-size: 0.44rem;
                border: 0.02rem solid #d8225d;

                &:after{
                    content: "";
                    display: block;
                    position: absolute;
                    width: 100%;
                    height: 50%;
                    background: rgba(255, 255, 255, 0.2);
                    top: 0;
                    left: 0;
                    border-radius: 0 0 50% 50% e("/") 0 0 50% 50%;
                }
            }
        }
    }
</style>


