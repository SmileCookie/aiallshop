<template>
    <div>
        <SonMenu :list="list" />
        
    </div>
</template>
<script>
import SonMenu from "@/components/SonMenu"

export default {
    name : "Phone",
    components : {
        SonMenu,
    },
    data(){
        return {
            list :[
                {
                    name :"华为",
                },
                {
                    name :"苹果"
                },
                {
                    name :"oppo",
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
