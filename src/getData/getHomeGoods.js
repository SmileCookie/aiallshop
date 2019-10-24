export default cb =>{
    fetch("http://localhost:8000/data/homeHotSale.json")
    .then(res=>res.json())
    .then(data =>{
        var list = data.map(({goodsName, goodsImg, goodsID, price})=>{
            return {
                goodsID,
                goodsImg,goodsName,
                price
            }
        })
        cb(list);
    })
}