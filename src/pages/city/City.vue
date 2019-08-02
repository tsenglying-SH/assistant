<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"> </city-search>
        <city-list :cities="cities" 
        :hot="hotCities"
        :letter="letter"
        ></city-list>
        <city-alphabet :cities="cities"
        @change="handleLetterChange"
        ></city-alphabet>
    </div>

</template>

<script>
import CityHeader from '@/pages/city/components/Header'
import CitySearch from '@/pages/city/components/Search'
import CityList from '@/pages/city/components/List'
import CityAlphabet from '@/pages/city/components/Alphabet'
import axios from 'axios'
export default {
    name:'City',
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data (){ 
        return{
            cities:{},
            hotCities:[],
            letter: ''
        }
        
    },
    mounted (){
            this.getCityInfo()
    },
    methods:{
        getCityInfo (){
            axios.get('/static/data/city.json')
                .then(this.handleGetCityInfoSucc)
        },
        handleGetCityInfoSucc (res) {
            res=res.data
            if(res.ret && res.data){
                const data=res.data
                this.cities=data.cities
                this.hotCities=data.hotCities

            }

        },
        handleLetterChange (letter){
            // console.log(letter)
            this.letter=letter


        }


    }
}  
</script>

<style lang="stylus" scoped>

</style>


