<template>
    <div>
        <div class="reminder" @click="handleReminderClick">
            <span class="iconfont loudspeaker">&#xe619;</span>
            <p class="reminder-content">{{this.notice}}</p>
            <span class="iconfont more">&#xe78a;</span>
        </div>
        <div class="recommend"> 
            <div class="recommend-title  border-bottom">
               <span class="iconfont zan">&#xe600;</span> 今日推荐
            </div>
            <div class="recommend-list border-bottom" 
                v-for="(item,index) of todaylist" :key="index">
                <div class="left">
                    <div class=" left-first">{{item.title}}</div>
                    <div class="left-second">
                        <img  class="left-second-img" src="https://img1.qunarzz.com/piao/fusion/1804/f0/39deb48037c83702.png" />
                        <span class="left-second-time">{{item.deadline}}</span>
                    </div>
                </div>
                <div class="right">
                    <div class="right-first">
                        <p class="money">{{item.money}}</p>
                    </div>
                    <button class="right-second" 
                    @click="handleOrderClick(item.title,item.money,item.deadline)">
                    预定</button>
                </div>
            </div>
        </div> 
        <div class="recommend-title border-bottom">
               <span class="iconfont zan">&#xe600;</span> 成人票
        </div>
        <div class="item" v-for="(item,index) of list1" :key="index">
            <div class="item-title border-bottom">
                <span class="item-title-icon"></span>
                {{item.title}}
                <span class="money">￥
                    <span class="money-number">{{item.money}}</span>
                    <span class="qi">起</span>
                </span>
            </div>
        </div>
        <div class="recommend-title border-bottom">
               <span class="iconfont zan">&#xe600;</span> 优惠人群票
        </div>
        <div class="item" v-for="(item,index) of list2" :key="'list2'+index">
            <div class="item-title border-bottom">
                <span class="item-title-icon"></span>
                {{item.title}}
                <span class="money">￥
                    <span class="money-number">{{item.money}}</span>
                    <span class="qi">起</span>
                </span>
            </div>
        </div>
        <commen-notice v-show="showNotice"
        @close="handleClose"
        :notice="notice">
        </commen-notice>
        <common-pay v-show="showOrder" @Exit="handleExitClick"
        :title="title" :money="money" :deadline="deadline"
        ></common-pay>
    </div>
    
</template>
<script>
import CommenNotice from '@/common/notice/Notice'
import CommonPay from '@/common/payment/Payment'
export default {
    name:'DetailList',
    components:{
        CommenNotice,
        CommonPay
    },
    data (){
        return{
            showNotice:false,
            showOrder:false,
            title:'',
            money:'',
            deadline:'',
            todaylist:[{
                id:'001',
                title:'上海玛雅海滩水公园夜场成人票',
                deadline:'可订明日',
                money:'￥180'},
                {
                id:'002',
                title:'【早订优惠】上海玛雅海滩水公园成人全日票',
                deadline:'23:45前可订明日',
                money:'￥210'},
                {
                id:'003',
                title:'上海	玛雅水公园家庭套票（2大1小）',
                deadline:'23:45前可订明日',
                money:'￥520'},
                
                ],
            notice:'严禁不会游泳的旅客在深水区戏水游玩，为了您和其他游客的健康，请不要在园内吸烟，敬请配合，多谢理解！',
        }
    },
    methods:{
        handleReminderClick (){
            this.showNotice=true
        },
        handleClose (){
            this.showNotice=false
        },
        handleExitClick (){
            this.showOrder=false
        },
        handleOrderClick (ptitle,pmoney,pdeadline){
            this.title=ptitle
            this.money=pmoney
            this.deadline=pdeadline
            this.showOrder=true
        }
    },
    props:{
        list1:Array,
        list2:Array 
    },
}
</script>
<style lang="stylus" scoped>
    .border-bottom
        &:before
            border-color: #ccc
            border-width: .02 rem
    .reminder
        margin:.2rem 0
        height:1rem 
        width:100%
        background:#FFEFD5
        display:flex
        .loudspeaker
            margin-top:.3rem
            margin-left:.2rem
            margin-right:.1rem
            font-size:.4rem
            color:#FF8C00 
        .reminder-content
            line-height:1rem 
            height:1rem
            overflow:hidden
            white-space:nowrap
            text-overflow:ellipsis
            color:#FF8C00
        .more
            margin-top:.3rem
            margin-right:.2rem
            font-size:.4rem
    .recommend
        margin-left: .2rem 
        .recommend-title
            height:.8rem 
            line-height:.8rem 
            font-size:.32rem
            .zan
                margin-right:.1rem
                color:#F08080
        .recommend-list 
            margin:.2rem .2rem .2rem  0
            min-height:1.4rem
            display:flex
            .left
                width:5.28rem 
                margin-right:.2rem
                .left-first
                    min-height:.8rem 
                    line-height:.5rem
                    font-size:.32rem
                .left-second
                    height:.4rem
                    font-size:.24rem
                    .left-second-img
                        height:.25rem
                    .left-second-time
                        line-hight:.5rem
            .right
                width:1.82rem 
                .right-first
                    height:.48rem 
                    line-height:.48rem
                    font-size:.4rem 
                    font-weight:700
                    color:#ff9800
                    text-align:center
                .right-second
                    margin-left:.2rem
                    width:1.5rem
                    height:.6rem
                    border-radius:.1rem
                    background:#ff9800
                    color:white
                    font-weight:560
    
    .recommend-title
        margin-left:.2rem
        height:.8rem 
        line-height:.8rem 
        font-size:.32rem
        .zan
            margin-right:.1rem
            color:#F08080

    .item-title
        line-height: .9rem
        font-size:.32rem
        padding: 0 .2rem
        position:relative
        margin-left:.1rem
        .item-title-icon
            position:relative
            display: inline-block;
            width: .36rem;
            height: .36rem;
            left: .06rem
            top: .05rem
            background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
            margin-right: .1rem;
            background-size: .4rem 3rem
        .money
            position:absolute
            right:.3rem
            color:#ff9800
            font-size:.25rem 
            .money-number
                font-size:.4rem
            .qi
                color:#ccc
    .recommend-title
        margin-left:.2rem
        height:.8rem 
        line-height:.8rem 
        font-size:.32rem
        .zan
            margin-right:.1rem
            color:#F08080
    .item-title
        line-height: .9rem
        font-size:.32rem
        padding: 0 .2rem
        position:relative
        .item-title-icon
            position:relative
            display: inline-block;
            width: .36rem;
            height: .36rem;
            left: .06rem
            top: .05rem
            background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
            margin-right: .1rem;
            background-size: .4rem 3rem
        .money
            position:absolute
            right:.3rem
            color:#ff9800
            font-size:.25rem 
            .money-number
                font-size:.4rem
            .qi
                color:#ccc
   
</style>



