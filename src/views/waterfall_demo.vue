<script>
import waterfall from './waterfall.vue'
import {toRefs,reactive} from 'vue'
export default {
    components:{
        waterfall
    },
    setup(){
        
        let data =  reactive({
            "works": [
            {
                "img_src": "https://evp.51job.com/51job/api/1.0/public/upload/voteapp/20220530/1653881141434.jpeg",
                "cover_height": 299,
                'other':{
                    "title": "作品标题",
                    "nickname": "杰杰",
                    "description": "作品描述",
                    "vote": 23,
                    'isActive':false,
                    'id':1,
                },
            },
            {
                "img_src": "https://evp.51job.com/51job/api/1.0/public/upload/voteapp/20220516/1652687304232.jpeg",
                "cover_height": 168,
                'other':{
                    "title": "水调歌头",
                    "nickname": "苏东坡",
                    "description": "明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在...",
                    "vote": 25,
                    'isActive':false,
                    'id':2,
                },
            },
            {
                "img_src": "https://evp.51job.com/51job/api/1.0/public/upload/voteapp/20220426/1650963409212.jpeg",
                "cover_height": 168,
                'other':{
                    "title": "默认标题",
                    "nickname": "掰掰",     
                    "description": "作品描述作品描述",
                    "vote": 30,
                    'isActive':false,
                    'id':3,
                },
            },
            {
                "img_src": "https://evp.51job.com/51job/api/1.0/public/upload/voteapp/20220428/1651115625747.jpeg",
                "cover_height": 168,
                'other':{
                    "title": "默认标题",
                    "nickname": "昵称",            
                    "description": "呵呵呵呵呵呵",
                    "vote": 80,
                    'isActive':false,
                    'id':4,
                },
            },
            {
                "img_src": "https://evp.51job.com/51job/api/1.0/public/upload/voteapp/20220526/1653537778162.jpeg",
                "cover_height": 299,
                'other':{                
                    "title": "作品的标题目",
                    "nickname": "你吃",                    
                    "description": "描述描述",
                    "vote": 65,
                    'isActive':false,
                    'id':5,
                },

            },
            {

                "img_src": "https://evp.51job.com/51job/api/1.0/public/upload/voteapp/20220521/1653104632510.png",
                "cover_height": 168,
                'other':{                                
                    "title": "包包",
                    "nickname": "刘先生",
                    "description": "啦啦啦啦啦啦啦",
                    "vote": 45, 
                    'isActive':false,
                    'id':6,              
                }, 
            },
            {
                "img_src": "https://evp.51job.com/51job/api/1.0/public/upload/voteapp/20220616/1655364872328.png",
                "cover_height": 224,
                'other':{                                               
                    "title": "标题",
                    "nickname": "阿兰",             
                    "description": "描述",
                    "vote": 18,   
                    'isActive':false,
                    'id':7,           
                },                
            },
            {
                "img_src": "https://evp.51job.com/51job/api/1.0/public/upload/voteapp/20220422/1650597659640.jpeg",
                "cover_height": 168,
                'other':{                                              
                    "title": "作品名称作品名称",
                    "nickname": "布布",
                    "description": "作品描述",
                    "vote": 18, 
                    'isActive':false,
                    'id':8,       
                },
            },
            {
                "img_src": "https://evp.51job.com/51job/api/1.0/public/upload/voteapp/20220608/1654658214814.jpeg",
                "cover_height": 299,
                'other':{                                
                    "title": "标题",
                    "nickname": "成",
                    "description": "描述",
                    "vote": 70, 
                    'isActive':false,
                    'id':9,              
                },
            },
            {

                "img_src": "https://evp.51job.com/51job/api/1.0/public/upload/voteapp/20220421/1650531529212.jpeg",
                "cover_height": 168,
                'other':{                                              
                    "title": "默认标题",
                    "nickname": "毒液",
                    "description": "哈哈哈哈哈哈",
                    "vote": 63,  
                    'isActive':false,
                    'id':10,      
                },

            },
            {

                "img_src": "https://evp.51job.com/51job/api/1.0/public/upload/voteapp/20220513/1652408101528.png",
                "cover_height": 95,
                'other':{                                
                    "title": "默认标题",
                    "nickname": "王小虎",                
                    "description": "王小虎的作品",
                    "vote": 16,
                    'isActive':false,
                    'id':11,
                },

            },
            {
                "img_src": "https://evp.51job.com/51job/api/1.0/public/upload/voteapp/20220512/1652351553979.jpeg",
                "cover_height": 95,
                'other':{             
                    "title": "测试",
                    "nickname": "测试1",                                   
                    "description": "我喜欢这个活动",
                    "vote": 1,      
                    'isActive':false,
                    'id':12,     
                },
            }
        ]
        })

        const likeFunc = (id)=>{
            data.works.forEach((item)=>{
                if(item.other.id===id){
                    item.other.isActive = !item.other.isActive
                }
            })
        }

        return{
            ...toRefs(data),
            likeFunc
        }
    }
}
</script>
<template>
    <div class="waterfall_demo">
        <waterfall :works='works'>
            <template  v-slot:left_card_bottom="left_bottom_data">
                <div class="desc">
                    {{left_bottom_data.other_data.title}}----{{left_bottom_data.index}}
                </div>
                <div class="bottom">
                    <p class="nickname" >{{ left_bottom_data.other_data.nickname }}</p>
                    <div class="vote">
                        <img 
                        class="like_img" 
                        v-show='left_bottom_data.other_data.isActive' 
                        src="../assets/like.png" 
                        v-on:click="likeFunc(left_bottom_data.other_data.id)"
                        >
                        <img 
                        class="unlike_img" 
                        v-show='!left_bottom_data.other_data.isActive' 
                        src="../assets/unlike.png" 
                        v-on:click="likeFunc(left_bottom_data.other_data.id)"
                        >
                        <span class='vote_num' >{{ left_bottom_data.other_data.vote }}</span>
                    </div>
                </div>
            </template>
            <template v-slot:right_card_bottom="right_bottom_data">
                <div class="desc">
                    {{right_bottom_data.other_data.title}}----{{right_bottom_data.index}}
                </div>
                <div class="bottom">
                    <p class="nickname" >{{ right_bottom_data.other_data.nickname }}</p>
                    <div class="vote">
                        <img 
                        class="like_img" 
                        v-show='right_bottom_data.other_data.isActive' 
                        src="../assets/like.png" 
                        v-on:click="likeFunc(right_bottom_data.other_data.id)"
                        >
                        <img 
                        class="unlike_img" 
                        v-show='!right_bottom_data.other_data.isActive' 
                        src="../assets/unlike.png" 
                        v-on:click="likeFunc(right_bottom_data.other_data.id)"
                        >
                        <span class='vote_num' >{{ right_bottom_data.other_data.vote }}</span>
                    </div>
                </div>
            </template>
        </waterfall>
    </div>
</template>
<style scoped lang='less'>
    .waterfall_demo{
        background: goldenrod;
        .desc{
            width:100%;
            padding: 10px 10px;
            box-sizing: border-box;
            font-size:12px;
        }
        .bottom{
            display:flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 10px;
            .nickname,.vote_num{
                font-size:12px;
            }
            .vote{
                display:flex;
                justify-content: space-around;
                // width:40px;
                align-items: center;
                .like_img,.unlike_img{
                    width:12px;
                    height:12px;
                    margin-right: 3px;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
            }
        }
    }
    
</style>