<template>
    <div>
        <HeaderCom :text="title" :hasBack="hasBack" />
        <div class="main">
            <h3>商品名：{{goodsName}}</h3>
            <p>价格：￥{{price}}</p>
            <p>折扣：{{discount}}折</p>
            <hr />
            <p>商品描述：</p>
            <p>{{detail}}</p>
            <img v-for="(item, i) in imgList" :key="i" :src="item" alt="">
        </div>
    </div>
</template>
<script>
import HeaderCom from "@/components/Header"
import jsonp from "fetch-jsonp"

export default {
    name : "Detail",
    data(){
        return {
            hasBack : true,
            title : "商品详情",
            goodsName : "",
            price : 0,
            discount : 0,
            imgList : [],
            detail : ""
        }
    },
    components : {
        HeaderCom
    },
    mounted(){
        var goodsID = this.$route.query.goodsID;
        jsonp(`http://datainfo.duapp.com/shopdata/getGoods.php?goodsID=${goodsID}`)
        .then(r=>r.json())
            .then(data=>{
                console.log(data);
                var {goodsName, price, discount, detail, imgsUrl} = data[0];
                this.goodsName = goodsName;
                this.price = price;
                this.discount = discount;
                this.detail = detail;
                this.imgList = JSON.parse(imgsUrl);
            })
    }

}
</script>

