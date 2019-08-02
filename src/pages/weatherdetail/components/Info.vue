<template>
   <div class="weatherinfo">
      <div class="icon">
          <div class="icon-wrapper">
                <img  class="icon-info" :src="this.iconList[this.$store.state.code]" >
          </div>
      </div>
      <p class="temperature">{{this.$store.state.temperature}}<span>&#176;</span>
      </p>
      <p class="status">{{this.$store.state.text}}</p>
   </div>
</template>
<script>
export default {
    name:'WeatherInfo',
    props:{
        now:Object
    },
    data (){
        return{
            iconList:['https://s1.sencdn.com/web/icons/black/0@1x.png',
                      'https://s1.sencdn.com/web/icons/black/1@1x.png',
                      'https://s3.sencdn.com/web/icons/black/2@1x.png',
                      'https://s4.sencdn.com/web/icons/black/3@1x.png',
                      'https://s5.sencdn.com/web/icons/black/4@1x.png',
                      'https://s1.sencdn.com/web/icons/black/5@1x.png',
                      'https://s1.sencdn.com/web/icons/black/6@1x.png',
                      'https://s1.sencdn.com/web/icons/black/7@1x.png',
                      'https://s1.sencdn.com/web/icons/black/8@1x.png',
                      'https://s4.sencdn.com/web/icons/black/9@1x.png',
                      'https://s4.sencdn.com/web/icons/black/10@1x.png',
                      'https://s1.sencdn.com/web/icons/black/11@1x.png',
                      'https://s1.sencdn.com/web/icons/black/12@1x.png',
                      'https://s1.sencdn.com/web/icons/black/13@1x.png',
                      'https://s1.sencdn.com/web/icons/black/14@1x.png',
                      'https://s1.sencdn.com/web/icons/black/15@1x.png',
                      'https://s1.sencdn.com/web/icons/black/16@1x.png',
                      'https://s1.sencdn.com/web/icons/black/17@1x.png',
                      'https://s1.sencdn.com/web/icons/black/18@1x.png',
                      'https://s4.sencdn.com/web/icons/black/19@1x.png',
                      'https://s5.sencdn.com/web/icons/black/20@1x.png',
                      'https://s5.sencdn.com/web/icons/black/21@1x.png',
                      'https://s5.sencdn.com/web/icons/black/22@1x.png',
                      'https://s5.sencdn.com/web/icons/black/23@1x.png',
                      'https://s5.sencdn.com/web/icons/black/24@1x.png',
                      'https://s5.sencdn.com/web/icons/black/25@1x.png',
                      'https://s5.sencdn.com/web/icons/black/26@1x.png',
                      'https://s5.sencdn.com/web/icons/black/27@1x.png',
                      'https://s5.sencdn.com/web/icons/black/28@1x.png',
                      'https://s5.sencdn.com/web/icons/black/29@1x.png',
                      'https://s5.sencdn.com/web/icons/black/30@1x.png',
                      'https://s5.sencdn.com/web/icons/black/31@1x.png',
                      'https://s5.sencdn.com/web/icons/black/32@1x.png',
                      'https://s5.sencdn.com/web/icons/black/33@1x.png',
                      'https://s5.sencdn.com/web/icons/black/34@1x.png',
                      'https://s5.sencdn.com/web/icons/black/35@1x.png',
                      'https://s5.sencdn.com/web/icons/black/36@1x.png',
                      'https://s1.sencdn.com/web/icons/black/37@1x.png',
                      'https://s5.sencdn.com/web/icons/black/38@1x.png',
                      'https://s5.sencdn.com/web/icons/black/99@1x.png'
                      ]  
        }
    },
   
    
}
</script>

<style lang="stylus" scoped>
    .weatherinfo
        height:3.7rem
        .icon
            height:1rem
            .icon-wrapper
                width:1.3rem 
                height:1.3rem
                margin:0 auto
                .icon-info
                    width:100%
        .temperature
            height:1.3rem
            margin-top:.2rem
            margin-left:.3rem
            line-height:1.4rem 
            font-size:1.2rem
            color:#fff
            text-align:center
        .status
            height:.6rem 
            line-height:.6rem
            color:#fff
            text-align:center
            font-size:.4rem


</style>
