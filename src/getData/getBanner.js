export default cb => {
    fetch("http://localhost:8000/data/banner.json")
        .then(res => res.json())
        .then(data => {
            var list = data.map(({goodsID, goodsImg}) => {
                return {
                    goodsID,
                    goodsImg 

                }
            })
            cb(list);
        })
    
    
    
}