import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        city:localStorage.city||'上海',
        forcastCity:'',
        text:'',
        imgcode:'',
        temperature:'',
        time:'',
        newslist:'',
        garbageName:'',
        weatherList:'',
        addCityList:[]

    },
    actions:{
        changeCity (ctx,city){      //  ctx是上下文的city，city是前面list中dispatch过来的
            // console.log(city)
            ctx.commit('changeCity',city)
        },
        getNews (ctx,list){
            ctx.commit('getNews',list)
        }
    },
    mutations: {
        changeCity (state,city){
            state.city=city
            localStorage.city=city
            state.forcastCity=city
         // 城市改变，首页的预报城市跟着改变
        } ,
        getLocation (state,location){
            // console.log(location.name)
             state.forcastCity=location.name
        },
        getNow (state,now){
             state.text=now.text
             state.temperature=now.temperature
            //  console.log(now.temperature)
             state.code=now.code     
        },
        getLast_update (state,last_update){
            // console.log(last_update)
            state.time=last_update
        },
        getNews (state,list){
                state.newslist=list
                // console.log(state.newslist)
        },
        getGarbageName (state,name){
                state.garbageName=name
        },
        getWeather (state,list){
            state.weatherList=list
            //localStorage.weatherList=list
        },
        changeWeather (state,list){
            state.weatherList=list

        },
        getAddCityList (state,cityItem){
            state.addCityList.push(cityItem)
            console.log(state.addCityList +'来自仓库')
            console.log(state.addCityList.length)
        }


    }
})