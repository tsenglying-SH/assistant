<template>
    <div class="icons" >
        <!-- <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content"
                 src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"/>
            </div>
            <p class="icon-desc">景点</p>
        </div> -->
         <router-link tag="div" class="icon" to="/garbagedetail">
            <div class="icon-img">
                <img class="icon-img-content"
                 src="https://skin.kankanews.com/v5/openservice/images/icon_ljfl.png"/>
            </div>
            <p class="icon-desc">垃圾分类查询</p>
        </router-link>
        <router-link tag="div" class="icon" to="/destinationdetail">
            <div class="icon-img">
                <img class="icon-img-content"
                 src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" />
            </div>
            <p class="icon-desc">热门景点</p>
        </router-link>

        <router-link tag="div" class="icon" to="/towerdetail">
            <div class="icon-img">
                <img class="icon-img-content"
                 src="@/assets/photos/11.jpg" />
            </div>
            <p class="icon-desc">东方明珠</p>
        </router-link>

        <router-link tag="div" class="icon" to="/aquariumdetail">
            <div class="icon-img">
                <img class="icon-img-content"
                 src="https://img1.qunarzz.com/piao/fusion/1810/50/26ffa31b56646402.png" />
            </div>
            <p class="icon-desc">海昌海洋馆</p>
       </router-link>

        <router-link tag="div" class="icon" to="/gardendetail">
            <div class="icon-img">
                <img class="icon-img-content"
                 src="http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png" />
            </div>
            <p class="icon-desc">植物园</p>
        </router-link>

        <router-link tag="div" class="icon" to="/mayadetail">
            <div class="icon-img">
                <img class="icon-img-content"
                 src="https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/0f18f305d448365942f04b085d8f58bb.png" />
            </div>
            <p class="icon-desc">玛雅水上公园</p>
        </router-link>

        <router-link tag="div" class="icon" to="/zoodetail">
            <div class="icon-img">
                <img class="icon-img-content"
                 src="http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png" />
            </div>
            <p class="icon-desc">野生动物园</p>
        </router-link>

        <router-link tag="div" class="icon" to="/disneydetail">
            <div class="icon-img">
                <img class="icon-img-content"
                 src="http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png" />
            </div>
            <p class="icon-desc">迪士尼</p>
        </router-link>
        
    </div>
</template>

<script>
export default {
    name:'HomeIcons',
    data(){
        return{
        }
    }
    
}
</script>

<style lang="stylus" scoped>
    .icons
        overflow: hidden
        height: 0
        padding-bottom: 50%
        
        .icon
            position: relative
            overflow: hidden
            float: left
            width: 25%
            height: 0
            padding-bottom: 25%
            
            .icon-img
                position: absolute 
                left: 0
                right: 0
                top: 0
                bottom: .44 rem
                box-sizing: border-box
                padding: .1 rem
                
                .icon-img-content
                    display: block
                    margin: 0 auto
                    height: 100%
            .icon-desc
                position: absolute 
                left: 0
                right: 0
                bottom: 7px
                height: .44 rem
                line-height: .44 rem
                text-align: center
                color: #333

                
</style>
