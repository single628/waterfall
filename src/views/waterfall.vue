<template>
    <div class="waterfallImg">
        <ul class="waterfall_left">
            <li 
            class="left_card"  
            v-for="(item, index) in obj.left_works_arr"  
            :key="index"
            >
                <div class="space-white"></div>
                <div class="container">
                    <div class="header">
                        <div class="img">
                            <img
                                :src="item.img_src"
                                alt="作品详情图片"
                                v-if="item.img_src"
                            />
                        </div>
                    </div>
                    <slot 
                    name='left_card_bottom' 
                    :other_data='item.other'
                    :index='index'
                    ></slot>
                </div>
            </li>
        </ul>
    <ul class='waterfall_right'>
        <li 
        class="right_card"  
        v-for="(item, index) in obj.right_works_arr"  
        :key="index"
        >
            <div class="space-white"></div>
            <div class="container">
                <div class="header">
                    <div class="img">
                            <img
                            :src="item.img_src"
                            alt="作品详情图片"
                            v-if="item.img_src"
                        />
                    </div>
                </div>
                <slot 
                name='right_card_bottom' 
                :other_data='item.other'
                :index='index'
                ></slot>
            </div>
        </li>
    </ul>
</div>
</template>
<script setup>
    import {reactive,defineProps, watchEffect} from 'vue'
    const props = defineProps({
        works:Array,
    })
    let obj = reactive({
        left_works_arr:[],
        right_works_arr:[],
        works:[],
    })

    // 瀑布流
    let waterfallFunc = () => {
        if(obj.works.length){
            obj.left_works_arr = [];
            obj.right_works_arr = [];
            if(obj.works.length===1){
                obj.left_works_arr[0] = obj.works[0];
            }else{
                obj.left_works_arr[0] = obj.works[0];
                obj.right_works_arr[0] = obj.works[1];
                let left_h_sum = obj.works[0].cover_height;
                let right_h_sum = obj.works[1].cover_height;
                for(let i = 2;i < obj.works.length;i++){
                    if(left_h_sum <= right_h_sum){
                        obj.left_works_arr.push(obj.works[i]);
                        left_h_sum += obj.left_works_arr[obj.left_works_arr.length-1].cover_height;
                    }else if(left_h_sum > right_h_sum){
                        obj.right_works_arr.push(obj.works[i]);
                        right_h_sum += obj.right_works_arr[obj.right_works_arr.length-1].cover_height;
                    }
                }
            }
            
        }
    }
    watchEffect(()=>{
        obj.works = props.works
        Object.values(obj.works).length?waterfallFunc():'';
    })
    
</script>
<style scoped lang='less'>
    // 瀑布流图片或视频,
    .waterfallImg {            
        width: 343px;
        display:flex;
        flex-direction: row;
        margin:0 auto;
        .waterfall_left,.waterfall_right{
            list-style: none;
            padding:0 0;
            width:100%;
        }
        .waterfall_left{
            margin-right:7px;
        }
        .left_card,.right_card{
            width:168px;
            .space-white{
                height:8px;
            }
        .container{
            width: 168px;
            border-radius: 8px;
            position: relative;
            background-color: white;
            .img {
                width: 168px;
                img {
                    width: 168px;
                    max-height: 300px;
                    border-top-right-radius: 8px;
                    border-top-left-radius: 8px;
                }
            }
        }        
    }
}
</style>
