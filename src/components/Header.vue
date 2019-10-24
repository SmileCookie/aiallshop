<template>
    <header>
        <a href="javascript:;" v-if='hasBack' class="btn back-btn" @click='back'>&lt;</a>
        <h3>{{text}}</h3>
        <a href="javascript:;" v-if='hasShop' class="btn shopCar-btn">购物车</a>
    </header>
</template>
<script>
export default {
    name : "HeaderCom",
    props : {
        text : {
            type : String,
            required : true,
        },
        hasBack : {
            type : Boolean,
            default : true,
        },
        hasShop : {
            type : Boolean,
            default : true
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

    .bg(){
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#b22021+0,ab0c09+100 */
        background: #b22021; /* Old browsers */
        background: -moz-linear-gradient(top,  #b22021 0%, #ab0c09 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top,  #b22021 0%,#ab0c09 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom,  #b22021 0%,#ab0c09 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b22021', endColorstr='#ab0c09',GradientType=0 ); /* IE6-9 */
    }

    header{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 4;
        .bg();
        @h : @th;
        h3{
            height: @h;
            text-align: center;
            color: #ffffff;
            line-height: @h;
            font-size: 0.33rem;
        }
        .btn{
            position: absolute;
            display: block;
        }
        .back-btn{
            left: 0;
            top: 0;
            width: @h;
            height: @h;
            text-align: center;
            line-height: @h;
            color:#fff;
            font-size: 0.54rem;
        }
        .btn-bg(){
             /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#a90329+0,8f0222+44,6d0019+100;Brown+Red+3D */
            background: #a90329; /* Old browsers */
            background: -moz-linear-gradient(top,  #a90329 0%, #8f0222 44%, #6d0019 100%); /* FF3.6-15 */
            background: -webkit-linear-gradient(top,  #a90329 0%,#8f0222 44%,#6d0019 100%); /* Chrome10-25,Safari5.1-6 */
            background: linear-gradient(to bottom,  #a90329 0%,#8f0222 44%,#6d0019 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a90329', endColorstr='#6d0019',GradientType=0 ); /* IE6-9 */
        }
        .shopCar-btn{
            @h : 0.68rem;
            right: 0.15rem;
            top:50%;
            transform: translateY(-50%);
            width: 1.2rem;
            height: @h;
            line-height: @h;
            text-align: center;
            font-size: 0.32rem;
            color: #fff;
            border-radius:  0.1rem;
            .btn-bg();
            @offset : 0.025rem;
            @blur : 0.05rem;
            @opacity: 0.47;
            box-shadow: 0rem -@offset @blur rgba(0, 0, 0, @opacity),
                        inset 0rem -@offset @blur rgba(0, 0, 0, @opacity),
                        0rem @offset @blur rgba(255, 255, 255, @opacity),
                        inset 0rem @offset @blur rgba(255, 255, 255, @opacity)
        }

    }
</style>


