export default function(callback){
    fetch("http://localhost:8000/data/moreSort.json")
    .then(res=>res.json())
    .then(data => {
        var list = data.map(({path, text,icon})=>{
            return {
                text,
                path,
                icon
            }
        })
        callback(list);
    })

    
}