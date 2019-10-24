<template>
    <header :class="isClassName ? 'red' : 'white'">
        <a href="javascript:;" v-if="hasEwm" class="">
            <div class="iconfont icon-saoma icon"></div>
            <p>扫码</p>
        </a> 
        
        <a href="javascript:;" v-if="hasBack" class="back iconfont icon-jiantou" @click="back"></a>

        <div class="goodsDetail" v-if="hasDetail">
            <a href="javascript:;">商品</a>
            <a href="javascript:;">详情</a>
            <a href="javascript:;">评论</a>
        </div>
        <a href="javascript:;" v-if="hasMore" class="more iconfont icon-msnui-more" ></a>
        <div class="search-box" v-if="hasSearch">
            <div class="iconfont icon-search1187938easyiconnet search"></div>
            <input type="text" placeholder="请输入商品/店铺名称">
        </div>
        <a href="javascript:;" v-if="hasMes" class="message">
            <div class="iconfont icon-icon-- icon"></div>
            <p>消息</p>
        </a>
        <a href="javascript:;" class = "iconfont icon-saoma hsa" v-if="hasSaoma"></a>
        <h3 v-if="hasText">{{text}}</h3>
        <a href="javascript:;" v-if="hasDel" class="empty">清空购物车</a>
        <a href="javascript:;" v-if="hasFilter" class="filter">筛选</a>
    </header>
</template>
<script>
export default {
    name : "HeaderCom",
    props : {
        text:{
            type: String,
            required : false
        },
        hasEwm : {
            type : Boolean,
            default : true,
        },
        hasMes : {
            type : Boolean,
            default : true,
        },
        hasSearch : {
            type : Boolean,
            default : true
        },
        hasSaoma : {
            type : Boolean,
            default : false
        },
        hasText : {
            type : Boolean,
            default : false
        },
        hasDel : {
            type : Boolean,
            default : false
        },
        isClassName : {
            type : Boolean,
            default : true
        },
        hasBack : {
            type : Boolean,
            default :false,
        },
        hasFilter : {
            type : Boolean,
            default : false
        },
        hasDetail : {
            type : Boolean,
            default : false
        },
        hasMore : {
            type : Boolean,
            default : false 
        }

    },
    methods : {
        back(){
            this.$router.go(-1);
        }
    }
    
}
</script>
<style lang="less" scoped>
@import "../less/style.less";
    .red{
        background :#dd2726; 
    }
    .white{
        background: #fefefe;
        border-bottom :0.02rem solid #b2b2b2;
    }
    @h :@hh;
    header{
        position: fixed;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        height: @h;
        padding: 0.45rem 0.29rem 0 0.29rem;
        z-index: 99;
        a{
            display: block;
            height: 0.7rem;
            color: #ffffff;
            .icon{
                font-size: 0.36rem;
            }
            p{
                font-size: 0.16rem;
            }
        }
        .goodsDetail{
            @w: 3.22rem;
            width: @w;
            line-height: 0.67rem;
            display: flex;
            margin: 0 0.9rem;
            a{  
                display: block;
                font-size: 0.27rem;
                flex: 1;
                margin: 0 0.1rem;
                color:#666666;
                &.detailAct{
                  border-bottom: 0.06rem solid #dd2726;  
                }
                
            }
        }
        .more{
            display: block;
            color: #666666;
            font-size: 0.45rem;
            font-weight: 600;
            width: 0.42rem;
            line-height: 0.6rem;
        }
        .back{
            font-size: 0.39rem;
            color: #454c5b;
            line-height: 0.67rem;
        }
        h3{
            text-align: center;
            flex: 1;
            margin-top: 0.2rem;
            font-size: 0.32rem;
            font-weight: 500;
        }
        .filter{
            font-size: 0.27rem;
            line-height: 0.67rem;
            color: #666666;
        }
        .empty{
            font-size: 0.24rem;
            margin-top: 0.2rem;
            color:#dd2726;
            width: 1.35rem;
            position: absolute;
            right: 0.29rem;
        }
        .hsa{
            font-size: 0.36rem;
            line-height: 0.67rem;
            color: #85868a;
        }
        .search-box{
            @h:0.67rem;
            flex: 1;
            border-radius: 0.08rem;
            background: #ffffff;
            display: flex;
            color: #a7a7a7;
            height: @h;
            margin: 0 0.29rem;
            background: #f1f4f6;
            .iconfont{
                padding: 0.17rem 0.26rem;
                font-size: 0.33rem;
            }
            input{
                outline: none;
                border: none;
                background: #f1f4f6;
            }
            input::-webkit-input-placeholder{
                color: #a7a7a7;
                
            }
        }
        
    }
</style>


