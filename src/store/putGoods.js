import Vue from "vue"



export default {
    namespaced : true,
    state : {
        putGoodsList : []
    },
    mutations : {
        setPutGoodsList(state, obj) {
            state.putGoodsList = obj.list;
        }
    },
    actions : {
        getGoods(store) {
            Vue.http.get("./static/putGoods.json")
                
                .then(data => {
                    //console.log(data.body);
                    this.putGoodsList = data.body;
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
                    store.commit("setPutGoodsList", {list : newList})
                })
        }
    }
}