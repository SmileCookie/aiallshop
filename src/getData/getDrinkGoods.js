export default cb =>{
    fetch("http://localhost:8000/data/liquor.json")
    .then(res=>res.json())
    .then(data=>{
        var list = data.map(({goodsID, goodsName, price, goodsImg})=>{

            
            return {
                goodsID,
                goodsName,
                goodsImg,
                price,
            }
        })
        cb(list);
    })
}