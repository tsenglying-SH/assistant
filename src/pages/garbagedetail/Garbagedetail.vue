<template>
   <div class=garbage> 
       <garbage-header></garbage-header>
       <div class="header-img"></div>
       <garbage-search @getClass="handleGetClass"
       @getNone="handleGetNone"></garbage-search>
       <garbage-classfication :classfication="classfication"
       ref="judge"></garbage-classfication>  
   </div>
</template>
<script>
import GarbageSearch from './components/Search'
import GarbageHeader from './components/Header'
import GarbageClassfication from './components/Classfication'
export default {
    name:'Garbagedetail',
    components:{
         GarbageSearch,
         GarbageHeader,
         GarbageClassfication

    },
    data (){
        return{
            classfication:'',
        }
    },
    methods:{
        handleGetClass (letter){
             
            this.classfication=letter
            if(this.classfication==='干垃圾'){
                this.$refs.judge.fatherShow3()
            }else{
                if(this.classfication==='可回收垃圾'){
                    this.$refs.judge.fatherShow1()
                }else{
                    if(this.classfication==='湿垃圾'){
                        this.$refs.judge.fatherShow2()
                    }else{
                        this.$refs.judge.fatherShow4()
                    }
                }
            }
                
        },
        handleGetNone (){
            this.$refs.judge.fatherShow5()
        }
    }
    
}
</script>

<style lang="stylus" scoped>
    .header-img
        margin: 0rem auto 0.1rem
        width: 7.3rem
        height: 2.8rem
        background: url(https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2011875315,1554157991&fm=26&gp=0.jpg)  center
        background-size: 110%

    </style>
