import Vue from "vue"
import jsonp from "fetch-jsonp"

export default {
    namespaced : true,
    state : {
        newTitle : "新品上市",
        hotTitle : "热卖商品",
        foodTitile: "食品/酒水/生鲜/特产",
        commodityTitle : "生活日用",
        girlTitle : "女装馆",
        guessTitle : "猜你喜欢",
        newGoodsList : [1,2, 3,4]
    },
    mutations : {
        setNewGoodsList(state, obj) {
            state.newGoodsList = obj.list;
        }
    },
    actions : {
        getGoods(store) {
            Vue.http.get("./static/newGoods.json")
                
                .then(data => {
                    //console.log(data.body);
                    this.newGoodsList = data.body;
                    var newList = [];
                    data.body.map(({goodsID, goodsTitle, goodsPrice, goodsSalesNum, goodsSrc, num}) => {
                            goodsPrice *= 1;
                            num *= 1;
                            goodsPrice = goodsPrice.toFixed(2);

                            var obj = {
                                goodsTitle,
                                goodsID,
                                num,
                                goodsSalesNum,
                                goodsSrc,
                                goodsPrice
                            }
                            newList.push(obj);
                            
                    })
                    //console.log(newList);
                    store.commit("setNewGoodsList", {list : newList})
                })
        }
    }
}