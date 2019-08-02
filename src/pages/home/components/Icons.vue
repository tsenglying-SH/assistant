<template>
    <div class="icons" >
        <div class="icon" v-for="item of contentList" :key="item.id">
            <div class="icon-img">
                <img class="icon-img-content"
                 :src="item.imgUrl" />
            </div>
            <p class="icon-desc">{{item.desc}}</p>
        </div>
        
        <!-- <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content"
                 src="http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png" />
            </div>
            <p class="icon-desc">水上乐园</p>
        </div>

        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content"
                 src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/3ef092d0a89ffddb7f781cda30c8ae49.png" />
            </div>
            <p class="icon-desc">暑期大促</p>
        </div>

        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content"
                 src="http://img1.qunarzz.com/piao/fusion/1803/f5/c4c9d9830404e602.png" />
            </div>
            <p class="icon-desc">室内娱乐</p>
        </div>

        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content"
                 src="http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png" />
            </div>
            <p class="icon-desc">动植物园</p>
        </div>

        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content"
                 src="http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png" />
            </div>
            <p class="icon-desc">世纪公园</p>
        </div>

        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content"
                 src="http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png" />
            </div>
            <p class="icon-desc">野生动物园</p>
        </div>

        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content"
                 src="http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png" />
            </div>
            <p class="icon-desc">迪士尼</p>
        </div> -->
        
    </div>
</template>

<script>
export default {
    name:'HomeIcons',
    data(){
        return{
        contentList:[{
            id:'001',
            imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
            desc:'景点'

        },{
            id:'002',
            imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
            desc:'水上乐园'

        },{
            id:'003',
            imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/3ef092d0a89ffddb7f781cda30c8ae49.png',
            desc:'暑期大促'

        },{
            id:'004',
            imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/f5/c4c9d9830404e602.png',
            desc:'室内娱乐'

        },{
            id:'005',
            imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
            desc:'植物园'

        },{
            id:'006',
            imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
            desc:'世纪公园'

        },{
            id:'007',
            imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
            desc:'野生动物园'

        },{
            id:'008',
            imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png',
            desc:'迪士尼'

            },]
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
