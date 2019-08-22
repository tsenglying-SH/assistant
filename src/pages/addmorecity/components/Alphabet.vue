<template>
    <ul class="list">
        <li class="alpha" v-for="item of letters"
        :key="item"
        :ref="item"
        @click="handleLetterClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd">
        {{item}}
        </li>
        <!-- <li class="alpha">B</li>
        
        <li class="alpha">Z</li> -->
    </ul>
    
</template>
<script>
export default {
    name:'CityAlphabet',
    props:{
        cities:Object
    },
    data (){
        return{
            touchStatus:false,
            timer:null
        }
    },
    computed:{
            letters (){
                const letters =[]
                for ( let i in this.cities){
                  letters.push(i)  
                }
                return  letters
            }
    },
    methods:{
        handleLetterClick (e){
            this.$emit('change',e.target.innerText) //向父组件传值
            //  console.log(e.target.innerText)
        },
        handleTouchStart (){
            this.touchStatus=true
        },
         handleTouchMove (e){
             if(this.touchStatus){
                 if (this.timer){
                     clearTimeout(this.timer)
                 }
                 this.timer=setTimeout(()=>{
                      const startY=this.$refs['A'][0].offsetTop
                 const touchY=e.touches[0].clientY-80
                 const index=Math.floor((touchY-startY)/20)
                //  console.log(index)
                if (index>= 0 && index< this.letters.length){
                   this.$emit('change',this.letters[index]) 
                }
                 },10)                 
             }
        },
         handleTouchEnd (){
            this.touchStatus=false
        }

    }
}
</script>

<style lang="stylus" scoped >
@import '../../../assets/styles/varibles.styl'
    .list
        display: flex
        flex-direction: column
        justify-content:center
        position: absolute
        right:0
        top: 1.58 rem
        bottom: 0
        .alpha
            color:$bgColor
            line-height: .4 rem
            font-size: .33 rem
            text-align: center
</style>

