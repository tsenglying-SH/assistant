<template>
    <div>
        <div class="classfication">
            <ul class="list">
                <div class="item1" @click="handleItem1Click"
                    :class="{item1click:showItem1}">
                    <div class="iconfont item">&#xe98f;</div>
                    <p class="icon-desc">可回收垃圾</p>
                </div>
                <div class="item2" @click="handleItem2Click"
                    :class="{item2click:showItem2}">
                    <div class="iconfont item">&#xe68a;</div>
                    <p class="icon-desc">湿垃圾</p>
                </div>
                <div class="item3" @click="handleItem3Click"
                    :class="{item3click:showItem3}">
                    <div class="iconfont item">&#xe689;</div>
                    <p class="icon-desc">干垃圾</p>
                </div>
                <div class="item4" @click="handleItem4Click"
                    :class="{item4click:showItem4}">
                    <div class="iconfont item">&#xe68b;</div>
                    <p class="icon-desc">有害垃圾</p>
                </div>
            </ul>
        </div>
        <div class="content" v-show="showList1">
            <div class="content-introduction1">
                <div class="explain-wraper1">
                    <span class="exlpain1">是指废纸张、废塑料、废玻璃制品、废织物等适宜回收、可循环利用的生活废弃物。</span>
                </div>
                <div class="logo">
                    <p class="logo-content">投放标准</p>
                </div>
            </div>
            <div class="list">
                <div class="goods-wraper1 border-bottom"
                 v-for="(item,index) of recyclableList" :key="index"
                    @click="handleGood1Click(item)">
                      <p class="goods1">{{item}}</p>
                </div> 
            </div> 
        </div>
        <div class="content" v-show="showList2">
            <div class="content-introduction2">
                <div class="explain-wraper2">
                    <span class="exlpain2">湿垃圾又称为厨余垃圾、即易腐垃圾，剩菜剩饭、瓜皮果核、花卉绿植等生活废弃物。</span>
                </div>
                <div class="logo">
                    <p class="logo-content">投放标准</p>
                </div>
            </div>
            <div class="list">
                <div class="goods-wraper2 border-bottom"
                 v-for="(item,index) of wetList" :key="index"
                 @click="handleGood2Click(item)">
                      <p class="goods2">{{item}}</p>
                </div> 
            </div> 
        </div>
        <div class="content" v-show="showList3">
            <div class="content-introduction3">
                <div class="explain-wraper3">
                    <span class="exlpain3">干垃圾即其它垃圾，指除可回收物、有害垃圾、厨余垃圾（湿垃圾）以外的其它生活废弃物</span>
                </div>
                <div class="logo">
                    <p class="logo-content">投放标准</p>
                </div>
            </div>
            <div class="list">
                <div class="goods-wraper3 border-bottom"
                 v-for="(item,index) of dryList" :key="index"
                 @click="handleGood3Click(item)">
                      <p class="goods3">{{item}}</p>
                </div> 
            </div> 
        </div>
        <div class="content" v-show="showList4">
            <div class="content-introduction4">
                <div class="explain-wraper4">
                    <span class="exlpain4">有害垃圾指废电池、废灯管、废药品、废油漆等对人体健康造成危害的生活废弃物。</span>
                </div>
                <div class="logo">
                    <p class="logo-content">投放标准</p>
                </div>
            </div>
            <div class="list">
                <div class="goods-wraper4 border-bottom"
                 v-for="(item,index) of harmfulList" :key="index"
                 @click="handleGood4Click(item)">
                      <p class="goods4">{{item}}</p>
                </div> 
            </div> 
        </div>
        <common-alert1 v-show="showAlert1"
        @close="handleAlert1Close"
        :name="name"></common-alert1>
        <common-alert2 v-show="showAlert2"
        @close="handleAlert2Close"
        :name="name"></common-alert2>
        <common-alert3 v-show="showAlert3"
        @close="handleAlert3Close"
        :name="name"></common-alert3>
        <common-alert4 v-show="showAlert4"
        @close="handleAlert4Close"
        :name="name"></common-alert4>
        <common-alert5 v-show="showAlert5"
        @close="handleAlert5Close"></common-alert5>
     </div>   
</template>
<script>
import CommonAlert1 from '@/common/garbagealert/GarbageAlert1'
import CommonAlert2 from '@/common/garbagealert/GarbageAlert2'
import CommonAlert3 from '@/common/garbagealert/GarbageAlert3'
import CommonAlert4 from '@/common/garbagealert/GarbageAlert4'
import CommonAlert5 from '@/common/garbagealert/GarbageAlert5'
export default {
    name:'GarbageClassfication',
    components:{
        CommonAlert1,
        CommonAlert2,
        CommonAlert3,
        CommonAlert4, 
        CommonAlert5, 
        },
        props:{
            classfication:String    
        },
        
    
    data(){
        return{
            getclassfication:'',
            showAlert1:false,
            showAlert2:false,
            showAlert3:false,
            showAlert4:false,
            showAlert5:false,
            showItem1:true,
            showItem2:false,
            showItem3:false,
            showItem4:false,
            showList1:true,
            showList2:false,
            showList3:false,
            showList4:false,
            name:'',

            recyclableList:[
                '牛奶盒','塑料','玻璃瓶','玻璃','纸','衣服','易拉罐','废塑料',
                '碎玻璃','报纸','纸盒','玻璃杯','塑料杯','矿泉水瓶','泡沫板',
                '电线','鞋子','充电宝','枕头','泡沫箱','纸篓','泡沫塑料','螺丝',
                '书本','广告单','数据线','酒瓶','纸板箱','啤酒瓶','被单','刀片',
                '纸盒','烟盒','皮鞋','白纸','充电线','剪刀','布','玩具','充电器',
                '吸铁石','钥匙','铁','插座','铝箔','铜','书包'
            ],
            wetList:['鸡蛋壳','桃核','玉米棒','瓜子壳','小龙虾','茶叶','米饭','面包',
                    '动物内脏','午餐肉','腊肉','绿叶菜','根茎蔬菜','菌菇','调料','水果果肉','西瓜皮','桔子皮',
                    '火锅汤底','碎骨','咖啡渣','鱼骨','糕饼','糖果','中药材','红枣','冲泡饮料','苹果皮','葡萄枝',
                    '西瓜籽','花瓣','枝叶','家养绿植','中药药渣'],
            dryList:[
                    '餐巾纸','尿不湿','编织袋','尼龙制品','烟蒂','污损纸张','猫砂','干燥剂','大骨头','污损塑料','防碎气泡膜','硬贝壳',
                    '椰子壳','榴莲壳','核桃壳','玉米衣','甘蔗皮','毛发','灰土','炉渣','橡皮泥','太空沙','胶带','花盆',
                    '毛巾','一次性餐具','镜子','陶瓷制品','竹制品抄','牙签','竹筷','眼镜','伞','笔','打火机','橡皮泥'
            ],
            harmfulList:[
                '废电池','废日光灯管','废水银温度计','过期药品','药物胶囊','药品内包装','废油漆桶','染发剂壳','过期的指甲油','洗甲水','废矿物油及其包装物',
                '空药瓶','老鼠药','杀虫喷雾罐','x光片等感光胶片','相片底片','卤素灯','镉镍电池','铅酸电池','蓄电池','纽扣电池','药片盒','感冒药','水银',
                '蟑螂药','消毒液','农药瓶','白织灯泡'
            ]
        }
    },
    methods:{

        fatherShow1 (){
            this.showAlert1=true
            this.name=this.$store.state.garbageName
        },
        fatherShow2 (){
            this.showAlert2=true
            this.name=this.$store.state.garbageName
        },
        fatherShow3 (){
            this.showAlert3=true
            this.name=this.$store.state.garbageName
        },
        fatherShow4 (){
            this.showAlert4=true
            this.name=this.$store.state.garbageName
        },
        fatherShow5 (){
            this.showAlert5=true
        },
       
        handleGood1Click (item){
            this.name=item
            this.showAlert1=true
        },
        handleGood2Click (item){
            this.name=item
            this.showAlert2=true
        },
        handleGood3Click (item){
            this.name=item
            this.showAlert3=true
        },
        handleGood4Click (item){
            this.name=item
            this.showAlert4=true
        },
        handleAlert1Close (){
            this.showAlert1=false
        },
        handleAlert2Close (){
            this.showAlert2=false
        },
        handleAlert3Close (){
            this.showAlert3=false
        },
        handleAlert4Close (){
            this.showAlert4=false
        },
        handleAlert5Close (){
            this.showAlert5=false
        },
         handleItem1Click (){
            this.showItem1=true,
            this.showItem2=false,
            this.showItem3=false,
            this.showItem4=false,
            this.showList1=true,
            this.showList2=false,
            this.showList3=false,
            this.showList4=false
        },
        handleItem2Click (){
            this.showItem1=false,
            this.showItem2=true,
            this.showItem3=false,
            this.showItem4=false,
            this.showList1=false,
            this.showList2=true,
            this.showList3=false,
            this.showList4=false
           
        },
        handleItem3Click (){
            this.showItem1=false,
            this.showItem2=false,
            this.showItem3=true,
            this.showItem4=false,
            this.showList1=false,
            this.showList2=false,
            this.showList3=true,
            this.showList4=false
        },
        handleItem4Click (){
            this.showItem1=false,
            this.showItem2=false,
            this.showItem3=false,
            this.showItem4=true,
            this.showList1=false,
            this.showList2=false,
            this.showList3=false,
            this.showList4=true
        }
    }
}
</script>

<style lang="stylus" scoped>
    .border-bottom
        &:before
            border-color: #ccc
            border-width: .03 rem
    .classfication
        height:1.5rem
        .list
            display:flex
            .item1
                width:1.875rem
                height:1.5rem
                color:blue
                background:#ccc
                text-align:center
                .item
                    margin-top:.2rem
                    font-size:.8rem
                .icon-desc
                    font-size:.3rem
            .item1click
                width:1.875rem
                height:1.5rem
                color:white
                background:blue
                text-align:center
                .item
                    margin-top:.2rem
                    font-size:.8rem
                .icon-desc
                    font-size:.3rem
            .item2
                width:1.875rem
                height:1.5rem
                color:#8B4513
                background:#ccc
                text-align:center
                .item
                    margin-top:.2rem
                    font-size:.8rem
                .icon-desc
                    font-size:.3rem
            .item2click
                width:1.875rem
                height:1.5rem
                color:white
                background:#8B4513
                text-align:center
                .item
                    margin-top:.2rem
                    font-size:.8rem
                .icon-desc
                    font-size:.3rem
            .item3
                width:1.875rem
                height:1.5rem
                color:#1F1F1F
                background:#ccc
                text-align:center
                .item
                    margin-top:.2rem
                    font-size:.8rem
                .icon-desc
                    font-size:.3rem
            .item3click
                width:1.875rem
                height:1.5rem
                color:white
                background:#1F1F1F
                text-align:center
                .item
                    margin-top:.2rem
                    font-size:.8rem
                .icon-desc
                    font-size:.3rem
            .item4
                width:1.875rem
                height:1.5rem
                color:red
                background:#ccc
                text-align:center
                .item
                    margin-top:.2rem
                    font-size:.8rem
                .icon-desc
                    font-size:.3rem
            .item4click
                width:1.875rem
                height:1.5rem
                color:white
                background:red
                text-align:center
                .item
                    margin-top:.2rem
                    font-size:.8rem
                .icon-desc
                    font-size:.3rem  
    .content-introduction1
        height 2rem
        width:100%
        background:blue
        position:relative
        .explain-wraper1
            padding-top:.2rem
            margin:0 .4rem 0 .4rem
            .exlpain1 
                font-size:.3rem 
                line-height:.6rem
                color:white
        .logo
            position:absolute
            bottom:.2rem 
            right:.3rem
            width:1.6rem 
            height:.6rem
            background:white
            border-radius:.3rem
            .logo-content
                line-height:.6rem
                text-indent:.2rem
                font-weight:700
    .goods-wraper1
        height:1rem 
        .goods1
            height 1rem
            line-height:1rem 
            text-align:center
            font-size:.35rem
            color:blue

    .content-introduction2
        height 2rem
        width:100%
        background:#8B4513
        position:relative
        .explain-wraper2
            padding-top:.2rem
            margin:0 .4rem 0 .4rem
            .exlpain2 
                font-size:.3rem 
                line-height:.6rem
                color:white
        .logo
            position:absolute
            bottom:.2rem 
            right:.3rem
            width:1.6rem 
            height:.6rem
            background:white
            border-radius:.3rem
            .logo-content
                line-height:.6rem
                text-indent:.2rem
                font-weight:700
    .goods-wraper2
        height:1rem 
        .goods2
            height 1rem
            line-height:1rem 
            text-align:center
            font-size:.35rem
            color:#8B4513

    .content-introduction3
        height 2rem
        width:100%
        background:#1F1F1F
        position:relative
        .explain-wraper3
            padding-top:.2rem
            margin:0 .4rem 0 .4rem
            .exlpain3 
                font-size:.3rem 
                line-height:.6rem
                color:white
        .logo
            position:absolute
            bottom:.2rem 
            right:.3rem
            width:1.6rem 
            height:.6rem
            background:white
            border-radius:.3rem
            .logo-content
                line-height:.6rem
                text-indent:.2rem
                font-weight:700
    .goods-wraper3
        height:1rem 
        .goods3
            height 1rem
            line-height:1rem 
            text-align:center
            font-size:.35rem
            color:#1F1F1F

    .content-introduction4
        height 2rem
        width:100%
        background:red
        position:relative
        .explain-wraper4
            padding-top:.2rem
            margin:0 .4rem 0 .4rem
            .exlpain4 
                font-size:.3rem 
                line-height:.6rem
                color:white
        .logo
            position:absolute
            bottom:.2rem 
            right:.3rem
            width:1.6rem 
            height:.6rem
            background:white
            border-radius:.3rem
            .logo-content
                line-height:.6rem
                text-indent:.2rem
                font-weight:700
    .goods-wraper4
        height:1rem 
        .goods4
            height 1rem
            line-height:1rem 
            text-align:center
            font-size:.35rem
            color:red
    
                
</style>
