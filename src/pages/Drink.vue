<template>
    <div>
        <SonMenu :list="list" />
        
    </div>
</template>
<script>
import SonMenu from "@/components/SonMenu"

export default {
    name : "Drink",
    components : {
        SonMenu,
    },
    data(){
        return {
            list :[
                {
                    name :"啤酒",
                },
                {
                    name :"红酒"
                },
                {
                    name :"黄酒",
                },
                {
                    name :"白酒",
                },
                {
                    name :"崂山",
                },
                {
                    name :"青岛",
                },
                {
                    name :"哈尔滨",
                }
            ]     
        }
    }
}
</script>

