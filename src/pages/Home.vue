<template>
   <div>
        <HeaderCom :text="title" />
        <div class = "main">
            <Search />
            <Banner />
            <GoodsList :list="goodsList" />
        </div>
        
   </div> 
</template>

<script>
    import HeaderCom from "@/components/Header"
    import Search from "@/components/Search"
    import Banner from "@/components/Banner"
    import GoodsList from "@/components/GoodsList"

    import jsonp from "fetch-jsonp"

    export default {
        name : "Home",
        data () {
            return {
                title : "首页",
                content : "这是首页页面的文本内容",
                goodsList : []
            }
        },
        components :{
            HeaderCom,
            Search,
            Banner,
            GoodsList,
        },
        mounted(){
            //开始请求数据
            jsonp("http://datainfo.duapp.com/shopdata/getGoods.php")
             .then(r=>r.json())
              .then(data=>{
                    console.log(data);
                    this.goodsList = data;
                    var newList = [];
                    data.map(({goodsID, goodsName, discount, price, imgsUrl, goodsListImg})=>{
                        //解构赋值
                        var imgSrc = goodsListImg;
                        price *= 1;
                        discount = discount == 0 ? 10 : discount*1;
                        var oldPrice = price*10/discount;

                        oldPrice = oldPrice.toFixed(2);
                        price = price.toFixed(2);

                        var obj = {
                            goodsName,
                            imgSrc,
                            price,
                            oldPrice,
                            discount,
                            goodsID
                        }
                        newList.push(obj);
                    })

                    this.goodsList  = newList;

              })
        }
    }
</script>

<style scoped>
    
</style>
