<template>
    <nav>
        <ul>
            <router-link  v-for="(nav, i) in list" :key="i" :to="{name : 'Discover'}" tag="li">
                <a href="javascript:;">
                    <div class="icon-box" :class="nav.iconbg">
                        <span class="iconfont" :class="nav.icon"></span>
                    </div>
                    <p>{{nav.text}}</p>
                </a>     
            </router-link>
        </ul>
        
        
    </nav>
    
</template>
<script>

export default {
    name: "NavCom",
    data(){
        return {
            list : [
                {
                    name : "Discover",
                    text : "店铺街",
                    icon : "icon-dianpu",
                    iconbg : "dianpuBg"
                },
                {
                    name : "Discover",
                    text : "全部品牌",
                    icon : "icon-wxbpinpaibao",
                    iconbg : "wxBg"
                },
                {
                    name : "Discover",
                    text : "限时抢购",
                    icon : "icon-lablehot",
                    iconbg : "hotBg"
                },
                {
                    name : "Discover",
                    text : "优惠活动",
                    icon : "icon-icon1",
                    iconbg : "icon1Bg"
                },
                {
                    name : "Discover",
                    text : "我的关注",
                    icon : "icon-shoucang",
                    iconbg : "scBg"
                },
                {
                    name : "Discover",
                    text : "文章资讯",
                    icon : "icon-icon--1",
                    iconbg : "icon_1Bg"
                },
                {
                    name : "Discover",
                    text : "联系电话",
                    icon : "icon-iconfontdianhua2",
                    iconbg : "dhBg"
                },
                {
                    name : "Discover",
                    text : "在线客服",
                    icon : "icon-serve",
                    iconbg : "serBg"
                }
            ]
        }
    },
}
</script>
<style lang="less" scoped>
    nav{  
        box-sizing: border-box;
        padding-bottom: 0.17rem;  
        background: #ffffff;
        
        ul{
           height: 3.78rem; 
           width: 100%;
           box-sizing: border-box;
           padding: 0 0.3rem ; 
           border-bottom: rgb(241, 50, 50);
            li{    
                float: left;
                width: 25%;             
                a{  
                    @h : 1.74rem;
                    display: block;
                    text-align:center;
                    height: @h;
                    .icon-box{
                        @h : 0.86rem;
                        height: @h;
                        line-height: @h;
                        width: @h;
                        background : lime;
                        margin: 0.33rem 0 0.22rem 0;
                        margin-left: 20%; 
                        border-radius: @h /2;
                        color: #ffffff;
                        &.dianpuBg{
                            background: #f3303c;
                        }
                        &.wxBg{
                            background: #f99a10;
                        }
                        &.hotBg{
                            background: #ef3f59;
                        }
                        &.icon1Bg{
                            background: #ef70cb;
                        }
                        &.scBg{
                            background: #b18aee;
                        }
                        &.icon_1Bg{
                            background: #8994ef;
                        }
                        &.dhBg{
                            background: #3ecc75;
                        }
                        &.serBg{
                            background: #f1397d;
                        }
                        .iconfont{
                            font-size: 0.43rem;
                        }   
                    }
                    p{
                        @h : 0.39rem;
                        height: @h;
                        line-height: @h;
                        font-size: 0.25rem;
                        color: #676767;
                    }
                }
            }
        }
        
    }
</style>


