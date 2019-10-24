import Vue from "vue"

export default {
    namespaced: true,
    state: {
        hasBack: true,
        hasSearch: false,
        hasMes: false,
        hasEwm: false,
        isClassName: false,
        hasDetail: true,
        hasMore: true,
        imgList: [1, 2, 3, 4],
        goodsPrice : "",
        goodsTitle : ""

    },
    mutations : {
        setData(state, obj) {
            state.imgList = obj.list;
            state.goodsPrice = obj.goodsPrice;
            state.goodsTitle = obj.goodsTitle;
            state.goodsID = obj.goodsID;
        }
    },
    actions : {
        getDetail(store,{goodsID}) {
            console.log(goodsID);
            var goodsId = goodsID
            Vue.http.get("./static/newGoods.json")
            .then(data => {
                //console.log(data.body);
                var newList = [];
                var obj = {};
                data.body.map(({goodsID, goodsTitle, goodsPrice, goodsDetail}) => {
                    if(goodsId == goodsID){
                        //newList = goodsDetail;
                        goodsPrice *= 1;
                        goodsPrice = goodsPrice.toFixed(2);
                        
                        obj.goodsTitle = goodsTitle;
                        obj.goodsPrice = goodsPrice;
                        obj.list = goodsDetail;
                        obj.goodsID = goodsID;
                    }
                });
                //console.log(newList);
                store.commit("setData", obj)
            })
        }
    }
    
}