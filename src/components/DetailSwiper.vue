<template>
    <div class="">
        <div class="swiper-container detailSwiper ">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, i)  in list" :key="i">
                    <img :src="item.detailImg" >
                </div>
            </div>

            <div v-if="hasPag" class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
import Swiper from "swiper"

export default {
    name : "DetailSwiper",
    props : {
        hasPag : {
            type : Boolean,
            default : true
        },
        list : {
            type : Array,
            required : true,
        }  
    },
    mounted(){
        var option = {};
        if(this.hasPag){
            option.pagination = {el : ".swiper-pagination"};
        }
        option.loop = true;
        var swiper = new Swiper(".swiper-container",option);
    }
}
</script>

<style src="swiper/dist/css/swiper.css"></style>
<style lang="less" scoped>
    .detailSwiper{
        @h:5.29rem;
        height: @h;
        width:100%;
    }
</style>


