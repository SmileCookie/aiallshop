export default (cb, goodsId) =>{
    fetch("http://localhost:8000/data/goodsDetail.json")
    .then(res=>res.json())
    .then(data =>{
        var list = data.map(({goodsName, goodsImg, goodsID, price})=>{
            if(goodsId == goodsID){
                var data = {
                    goodsID,
                    goodsImg,
                    goodsName,
                    price
                }
                cb(data);
                return ;
            }
            
        })
        
    })
}
