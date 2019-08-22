<template>
    <div class="total">
        <router-link to="/disneydetail"  tag="div" class="recommend ">
            <div class="list border-bottom"> 
                <div class="img-wrapper">
                    <img  class="img" :src="list1.imgUrl" />
                </div>
                <div class="right">
                    <p class="title">{{list1.name}}</p>
                    <div class=" iconfont star">&#xe601;&#xe601;&#xe601;&#xe601;&#xe601;</div>
                    <div class="money">
                        <span class="sign">￥</span>
                        <span class="number">{{list1.money}}</span>
                         起
                        <span class="district">{{list1.district}}</span>
                    </div>
                </div>
            </div>
            <div class="ticket border-bottom">
                <div class="ticket-title">{{list1.ticket1}}</div>
                <div class="ticket-money">
                    <span class="money-sign">￥</span>
                    <span class="number">{{list1.ticket1Money}}</span>
                </div>
            </div>
            <div class="ticket border-bottom">
                <div class="ticket-title">{{list1.ticket2}}</div>
                <div class="ticket-money">
                    <span class="money-sign">￥</span>
                    <span class="number">{{list1.ticket2Money}}</span>
                </div>
            </div>
        </router-link>
        <router-link to="/towerdetail"  tag="div" class="recommend ">
            <div class="list border-bottom"> 
                <div class="img-wrapper">
                    <img  class="img" :src="list2.imgUrl" />
                </div>
                <div class="right">
                    <p class="title">{{list2.name}}</p>
                    <div class=" iconfont star">&#xe601;&#xe601;&#xe601;&#xe601;&#xe601;</div>
                    <div class="money">
                        <span class="sign">￥</span>
                        <span class="number">{{list2.money}}</span>
                         起
                        <span class="district">{{list2.district}}</span>
                    </div>
                </div>
            </div>
            <div class="ticket border-bottom">
                <div class="ticket-title">{{list2.ticket1}}</div>
                <div class="ticket-money">
                    <span class="money-sign">￥</span>
                    <span class="number">{{list2.ticket1Money}}</span>
                </div>
            </div>
            <div class="ticket border-bottom">
                <div class="ticket-title">{{list2.ticket2}}</div>
                <div class="ticket-money">
                    <span class="money-sign">￥</span>
                    <span class="number">{{list2.ticket2Money}}</span>
                </div>
            </div>
        </router-link>
        <router-link to="/zoodetail"  tag="div" class="recommend ">
            <div class="list border-bottom"> 
                <div class="img-wrapper">
                    <img  class="img" :src="list3.imgUrl" />
                </div>
                <div class="right">
                    <p class="title">{{list3.name}}</p>
                    <div class=" iconfont star">&#xe601;&#xe601;&#xe601;&#xe601;&#xe601;</div>
                    <div class="money">
                        <span class="sign">￥</span>
                        <span class="number">{{list3.money}}</span>
                         起
                        <span class="district">{{list3.district}}</span>
                    </div>
                </div>
            </div>
            <div class="ticket border-bottom">
                <div class="ticket-title">{{list3.ticket1}}</div>
                <div class="ticket-money">
                    <span class="money-sign">￥</span>
                    <span class="number">{{list3.ticket1Money}}</span>
                </div>
            </div>
            <div class="ticket border-bottom">
                <div class="ticket-title">{{list3.ticket2}}</div>
                <div class="ticket-money">
                    <span class="money-sign">￥</span>
                    <span class="number">{{list3.ticket2Money}}</span>
                </div>
            </div>
        </router-link>
        <router-link to="/mayadetail"  tag="div" class="recommend ">
            <div class="list border-bottom"> 
                <div class="img-wrapper">
                    <img  class="img" :src="list4.imgUrl" />
                </div>
                <div class="right">
                    <p class="title">{{list4.name}}</p>
                    <div class=" iconfont star">&#xe601;&#xe601;&#xe601;&#xe601;&#xe601;</div>
                    <div class="money">
                        <span class="sign">￥</span>
                        <span class="number">{{list4.money}}</span>
                         起
                        <span class="district">{{list4.district}}</span>
                    </div>
                </div>
            </div>
            <div class="ticket border-bottom">
                <div class="ticket-title">{{list4.ticket1}}</div>
                <div class="ticket-money">
                    <span class="money-sign">￥</span>
                    <span class="number">{{list4.ticket1Money}}</span>
                </div>
            </div>
            <div class="ticket border-bottom">
                <div class="ticket-title">{{list4.ticket2}}</div>
                <div class="ticket-money">
                    <span class="money-sign">￥</span>
                    <span class="number">{{list4.ticket2Money}}</span>
                </div>
            </div>
        </router-link>
        <router-link to="/gardendetail"  tag="div" class="recommend ">
            <div class="list border-bottom"> 
                <div class="img-wrapper">
                    <img  class="img" :src="list5.imgUrl" />
                </div>
                <div class="right">
                    <p class="title">{{list5.name}}</p>
                    <div class=" iconfont star">&#xe601;&#xe601;&#xe601;&#xe601;&#xe601;</div>
                    <div class="money">
                        <span class="sign">￥</span>
                        <span class="number">{{list5.money}}</span>
                         起
                        <span class="district">{{list5.district}}</span>
                    </div>
                </div>
            </div>
            <div class="ticket border-bottom">
                <div class="ticket-title">{{list5.ticket1}}</div>
                <div class="ticket-money">
                    <span class="money-sign">￥</span>
                    <span class="number">{{list5.ticket1Money}}</span>
                </div>
            </div>
            <div class="ticket border-bottom">
                <div class="ticket-title">{{list5.ticket2}}</div>
                <div class="ticket-money">
                    <span class="money-sign">￥</span>
                    <span class="number">{{list5.ticket2Money}}</span>
                </div>
            </div>
        </router-link>
        <router-link to="/aquariumdetail"  tag="div" class="recommend ">
            <div class="list border-bottom"> 
                <div class="img-wrapper">
                    <img  class="img" :src="list6.imgUrl" />
                </div>
                <div class="right">
                    <p class="title">{{list6.name}}</p>
                    <div class=" iconfont star">&#xe601;&#xe601;&#xe601;&#xe601;&#xe601;</div>
                    <div class="money">
                        <span class="sign">￥</span>
                        <span class="number">{{list6.money}}</span>
                         起
                        <span class="district">{{list6.district}}</span>
                    </div>
                </div>
            </div>
            <div class="ticket border-bottom">
                <div class="ticket-title">{{list6.ticket1}}</div>
                <div class="ticket-money">
                    <span class="money-sign">￥</span>
                    <span class="number">{{list6.ticket1Money}}</span>
                </div>
            </div>
            <div class="ticket border-bottom">
                <div class="ticket-title">{{list6.ticket2}}</div>
                <div class="ticket-money">
                    <span class="money-sign">￥</span>
                    <span class="number">{{list6.ticket2Money}}</span>
                </div>
            </div>
        </router-link>
   </div>
</template>
<script>
export default {
    name:'DestinationRecommend',
    data (){
        return{
            list1:{ 
                id:'001',
                name:'上海迪士尼乐园',
                imgUrl:'https://imgs.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_110x110_a69574ac.jpg',
                money:'534',
                district:'浦东新区',
                ticket1:'上海迪士尼乐园成人一日票',
                ticket1Money:'569',
                ticket2:'上海迪士尼乐园儿童一日票',
                ticket2Money:'430'},
                list2:{ 
                id:'002',
                name:'东方明珠(5A)',
                imgUrl:'https://imgs.qunarzz.com/tuan/team2/1507/2c/83e0e0e7ae082a.jpg_110x110_24c155d5.jpg',
                money:'70',
                district:'浦东新区',
                ticket1:'东方明珠观光优享套票大小同价',
                ticket1Money:'365',
                ticket2:'成人票(含两球悬空走廊+多媒体秀+历史陈列馆)【刷码入园】',
                ticket2Money:'195'},
                list3:{ 
                id:'003',
                name:'上海野生动物园(5A)',
                imgUrl:'https://imgs.qunarzz.com/sight/p0/1908/60/60a42982845f7bf1a3.img.jpg_110x110_f74dd8bd.jpg',
                money:'118',
                district:'浦东新区',
                ticket1:'【即买即用】上海野生动物园成人票',
                ticket1Money:'122',
                ticket2:'【即买即用】上海野生动物园学生票',
                ticket2Money:'65'},
                list4:{ 
                id:'004',
                name:'上海玛雅海滩水公园',
                imgUrl:'https://imgs.qunarzz.com/sight/p0/1506/30/7a528fae12c17e6e29d5d13a9d9813ee.water.jpg_110x110_5644e92e.jpg',
                money:'190',
                district:'佘山国家旅游度假区',
                ticket1:'【即买即用】上海玛雅海滩水公园成人全日票',
                ticket1Money:'210',
                ticket2:'【早订优惠】上海玛雅海滩水公园夜场票',
                ticket2Money:'180'},
                list5:{ 
                id:'005',
                name:'辰山植物园',
                imgUrl:'http://img1.qunarzz.com/sight/p0/1511/49/499c8f4ce3968f9c90.img.jpg_110x110_8156c933.jpg',
                money:'60',
                district:'佘山国家旅游度假区',
                ticket1:'辰山植物园成人票',
                ticket1Money:'60',
                ticket2:'辰山植物园电子导览',
                ticket2Money:'2'},
                list6:{ 
                id:'006',
                name:'上海海昌海洋公园',
                imgUrl:'//img1.qunarzz.com/sight/p0/1906/19/19b7939928a0200da3.img.jpg_110x110_7f941b92.jpg',
                money:'156',
                district:'浦东新区',
                ticket1:'上海海昌海洋公园景区直通车【人民广场往返海昌海洋公园】',
                ticket1Money:'79',
                ticket2:'<上海海昌海洋公园一日游>冰雪王国、海底奇域、海洋部落',
                ticket2Money:'99'},


                     
        }
    }
    
}
</script>

<style lang="stylus" scoped>
    .border-bottom
        &:before
            border-color: #ccc
            border-width: .025rem
    .total
        margin:0 .2rem
        .recommend
            margin-bottom:.2rem
            height:4.32rem 
            .list
                margin:.2rem 0
                height:2.2rem 
                display:flex
                .img-wrapper
                    height:2rem 
                    width:2rem
                    .img
                        width:100%
                .right
                    height:2rem 
                    margin-left:.2rem
                    .title
                        margin-top:.2rem
                        height:.45rem 
                        line-height:.45rem 
                        font-size:.35rem
                        font-weight:700
                        color:#00bcd4
                    .star
                        font-size:.4rem
                        color:#ff8300
                        letter-spacing:-.2rem
                    .money
                        margin-top:.3rem 
                        width:4.9rem
                        height:.5rem 
                        line-height:.5rem
                        position:relative
                        .sign
                            color:#ff8300
                        .number
                            color:#ff8300 
                            font-size:.4rem 
                        .district 
                            position:absolute 
                            right:0 
                            font-size:.24rem


            .ticket
                height:1rem 
                display:flex
                .ticket-title
                    width:5.9rem 
                    line-height:1rem 
                    font-size:.28rem
                    overflow:hidden
                    white-space:nowrap
                    text-overflow:ellipsis
                .ticket-money
                    height:1rem 
                    width:1.2rem
                    color:#ff8300
                    text-align:center
                    .money-sign
                        height:1rem 
                        line-height:1rem 
                        font-size:.26rem 
                    .number 
                        height:1rem 
                        line-height:1rem 
                        font-size:.33rem 

</style>
