import Vue from "vue"



export default {
    namespaced : true,
    state : {
        hasBack : true,
        hasSearch : true,
        hasFilter : true,
        hasMes : false,
        hasEwm : false,
        isClassName : false,
        goodsList : []
    },
    mutations : {
        setGoodsList(state, obj) {
            state.goodsList = obj.list;
        }
    },
    actions : {
        getGoods(store) {
            Vue.http.get("./static/newGoods.json")
                
                .then(data => {
                    //console.log(data.body);
                    this.goodsList = data.body;
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
                    store.commit("setGoodsList", {list : newList})
                })
        }
    }
}