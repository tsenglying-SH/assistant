<template>
    <div class="pay">
        <div class="content">
            <div class=ticket>
                <div class="ticket-name">{{this.title}}</div>
                <span class="iconfont back" @click="handleExitClick">&#xe60b;</span>
            </div>
            <div class="money">
                    <span class="money-number">{{this.money}}</span>
                     <span class="money-text">/张</span>
            </div>
            <div class="kalendar">价格日历</div>
            <div class="date">
                <div class="today" :class="{todayClick:showToday}"
                    @click="handleTodayClick">
                    今天
                </div>
                <div class="tomorrow" :class="{tomorrowClick:showTomorrow1}"
                 @click="handleTomorrow1Click">
                    明天
                </div>
                <div class="tomorrow" :class="{tomorrowClick:showTomorrow2}"
                @click="handleTomorrow2Click">
                   后天
                </div>
                <div class="tomorrow" :class="{tomorrowClick:showTomorrow3}"
                @click="handleTomorrow3Click">
                    其他
                </div>
            </div>
            <div class="order">
                需要在游玩当天的20:30前预订
            </div>
            <div class="getorder">
                立即预订
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'CommonPay',
    props:{
        title:String,
        money:String,
        deadline:String
    },
    data (){
        return{
            showToday:true,
            showTomorrow1:false,
            showTomorrow2:false,
            showTomorrow3:false
        }
    },
    methods:{
        handleExitClick (){
            this.$emit('Exit')
        },
        handleTodayClick (){
            this.showToday=true
            this.showTomorrow1=false
            this.showTomorrow2=false
            this.showTomorrow3=false
        },
        handleTomorrow1Click (){
            this.showToday=false
            this.showTomorrow1=true
            this.showTomorrow2=false
            this.showTomorrow3=false
        },
        handleTomorrow2Click (){
            this.showToday=false
            this.showTomorrow1=false
            this.showTomorrow2=true
            this.showTomorrow3=false
        },
        handleTomorrow3Click (){
            this.showToday=false
            this.showTomorrow1=false
            this.showTomorrow2=false
            this.showTomorrow3=true
        },
    }
}
</script>
<style lang="stylus" scoped>
    .pay
        position:fixed
        left:0
        right:0
        bottom:0
        top:0
        background: rgba(0, 0, 0, 0.5);
        .content
            position:absolute
            left:0
            bottom:0
            right:0
            height:4.7rem 
            background:#fff
            opacity:1
            .ticket
                margin-left:.2rem
                margin-right:.2rem 
                display:flex
                height:.8rem 
                line-height:.8rem
                font-size:.34rem
                .ticket-name
                    overflow:hidden
                    white-space:nowrap
                    text-overflow:ellipsis
                    min-width:6.5rem
                    font-weight:700
                .back
                    min-width:.8rem
                    font-size:.4rem 
                    text-align:center
            .money
                margin-left:.2rem
                margin-right:.2rem 
                height:.52rem 
                line-height:.52rem
                .money-number
                    color:#ff9800
                    font-size:.38rem
                .money-text
                    color:#9e9e9e
                    font-size:.24rem
            .kalendar
                margin-top:.2rem
                margin-left:.2rem
                margin-right:.2rem
                height:.64rem
                line-height:.64rem
            .date
                margin-left:.2rem 
                display:flex 
                height:.9rem
                .today
                    border: .02rem solid #bdbdbd
                    float:left 
                    margin-right:.2rem
                    width:22.5% 
                    height:.9rem
                    line-height:.9rem
                    text-align:center 
                    border-radius:.15rem
                .todayClick
                    float:left 
                    margin-right:.2rem
                    width:22.5% 
                    height:.9rem
                    line-height:.9rem
                    background:#00bcd4
                    border: .02rem solid #00bcd4
                    text-align:center 
                    border-radius:.15rem
                    color:white
                .tomorrow
                    border: .02rem solid #bdbdbd
                    float:left 
                    margin-right:.2rem
                    width:22.5% 
                    height:.9rem
                    line-height:.9rem
                    text-align:center 
                    border-radius:.15rem
                .tomorrowClick
                    float:left 
                    margin-right:.2rem
                    width:22.5% 
                    height:.9rem
                    line-height:.9rem
                    background:#00bcd4
                    border: .02rem solid #00bcd4
                    text-align:center 
                    border-radius:.15rem
                    color:white
            .order
                margin-left:.2rem 
                margin-right:.2rem
                margin-top:.15rem
                height:.5rem 
                line-height:.5rem
                font-size:.2rem 
                color:#ff9800
            .getorder
                height:1rem 
                line-height:1rem
                width:100% 
                text-align:center 
                background:#ff9800 
                color:white 
                font-size:.36rem

</style>
