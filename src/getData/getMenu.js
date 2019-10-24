export default function(callback){
    fetch("http://localhost:8000/data/sort.json")
    .then(res=>res.json())
    .then(data => {
        var list = data.map(({img, text, path})=>{
            return {
                img,
                text,
                path
            }
        })
        callback(list);
    })

    
}