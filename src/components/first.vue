<template>
    <div class="first">
        <div class="head">
            <img src="../assets/sky.png">
            <div class="baiduBtn btn">百度</div>
            <div class="productBtn btn"></div>
            <div class="searchBtn btn"></div>
            <div class="naBtn btn">客户端</div>
        </div>
        <div class="nav">
            <van-tabs v-model="active" class="nav-i" title-active-color="#00b068" color="#00b068">
                <van-tab title="首页">
                    <div class="top-carous">
                        <div class="carous">
                            <van-swipe :autoplay="3000" indicator-color="white" :height="140">
                                <van-swipe-item v-for="(item,index) in banner" :key="index">
                                <router-link :to="{name:'Seven',query: {userId: item.id,userId2:item.title}}"><img class="auto-img" :src='img + item.url'></router-link></van-swipe-item>
                            </van-swipe>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="col">
                            <div class="title">
                                <span>热门推荐</span>
                                <router-link :to="{name: 'Second'}">
                                    <p class="icon">全部</p>
                                </router-link>
                            </div>
                            <div class="col-book" v-for="(item,index) in books" :key="index">
                                <ul>
                                    <router-link :to="{name:'Third', query: { userId: item._id }}">
                                        <li class="oneBook">
                                            <img :src='img + item.cover' height="200" width="150" class="book_cover">
                                            <h2 class="book_title">{{item.title}}</h2>
                                            <p class="author">作者：{{item.author}}</p>
                                            <p class="book_summary">{{item.shortIntro}}</p>
                                            <div class="book_price">
                                                <span class="book_currentPrice">评分：{{item.otherReadRatio}}</span>
                                            </div>
                                        </li>
                                    </router-link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="排行">
                    <div class="ranking-header">
                        <h3>男生</h3>
                    </div>
                    <div class="ranking-body">
                        <ul class="ranking-list">
                            <li v-for="(item,index) in tupian" :key="index">
                                <router-link :to="{name:'Eleven',query:{userId: item._id,userId2:item.title}}"><img :src='img + item.cover' height="64" width="64"  />
                                    <span>{{item.title}}</span></router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="ranking-header">
                        <h3>女生</h3>
                    </div>
                    <div class="ranking-body">
                        <ul class="ranking-list">
                            <li v-for="(item,index) in girl" :key="index">
                                <router-link :to="{name:'Eleven',query:{userId: item._id,userId2:item.title}}"><img :src='img + item.cover' height="64" width="64"  />
                                    <span>{{item.title}}</span></router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="homeFooter-wraper">
                        <div class="homeFooter-top">
                            <div class="search">
                                <div class="search-icon"></div>
                                <input type="text" placeholder="总裁" id="searchBottom" ref="getValue">
                                <div class="search-btn">
                                    <div class="btn" @click="have">搜索</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="co-info">
                        <div>
                            <img src="../assets/jc.png" height="20" width="20">
                            <p>沪公网安备 31011202006103号</p>
                        </div>
                    </div>
                    <div class="co-infos">
                        上海元聚网络科技有限公司 增值电信业务经营许可证沪B2-20170022 网络文化经营许可证沪网文（2016）3206-227号 出版物经营许可证新出发沪批字第U7659号
                    </div>
                    <div class="co-infoss">
                        客服电话：021-54393188-8048
                    </div>
                </van-tab>
                <van-tab title="分类">
                    <div class="category-section">
                        <h4>男生</h4>
                        <div class="category-list" v-for="(item,index) in xuanhuan" :key="index">
                            <router-link :to="{name: 'Four',query:{userId:item.major,userId2:item.mins}}">
                                <span class="name" >{{item.major}}</span>
                                <span class="count"></span>
                            </router-link>
                        </div>
                    </div>
                    <div class="category-section">
                        <h4>女生</h4>
                        <div class="category-list" v-for="(item,index) in manhua" :key="index">
                            <router-link :to="{name: 'Four',query:{userId:item.major,userId2: item.mins}}">
                                <span class="name">{{item.major}}</span>
                                <span class="count"></span>
                            </router-link>
                        </div>
                    </div>
                    <div class="category-section">
                        <h4>漫画</h4>
                        <div class="category-list" v-for="(item,index) in text" :key="index">
                            <router-link :to="{name: 'Four',query:{userId:item.major,userId2: item.mins}}">
                                <span class="name">{{item.major}}</span>
                                <span class="count"></span>
                            </router-link>
                        </div>
                    </div>
                    <div class="category-section">
                        <h4>出版</h4>
                        <div class="category-list" v-for="(item,index) in type" :key="index">
                            <router-link :to="{name: 'Four',query:{userId:item.major,userId2: item.mins}}">
                                <span class="name">{{item.major}}</span>
                                <span class="count"></span>
                            </router-link>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="个人">
                    <div class="unLogin">
                        <router-link :to="{name:'Thirteen'}"><div class="login">登录</div></router-link>
                        <p>登录云书君账号,阅读图书</p>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>
<script>
import { Swipe, SwipeItem, Tab, Tabs } from 'vant'
export default {
    name: 'first',
    components: {
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem,
        [Tab.name]: Tab,
        [Tabs.name]: Tabs
    },
    data() {
        return {
            active: 0,
            reyin: {},
            img: 'http://statics.zhuishushenqi.com',
            books: '',
            bookname: '',
            text: '',
            type: '',
            manhua: '',
            xuanhuan: '',
            tupian: '',
            girl: '',
            lunbo: '',
            banner: [
              {url:'/recommendPage/155660592562552',id:'5781b1685b55e1f4233bf75b',title:'那年那蝉那把剑'},
              {url:'/recommendPage/155660588781147',id:'591551912f1fef63376249f1',title:'万古武帝'},
              {url:'/recommendPage/155660599369520',id:'55c4c612eeca954b4fe119dd',title:'盛世暖婚'},
              {url:'/recommendPage/155660596069151',id:'5885d29da4320493048d0d29',title:'一品嫡女'},
            ]

        }
        // api/ranking/54d43437d47d13ff21cad58b
        // http://statics.zhuishushenqi.com/recommendPage/155660592562552
        // http://statics.zhuishushenqi.com/recommendPage/155660588781147
        // http://statics.zhuishushenqi.com/recommendPage/155660599369520
        // http://statics.zhuishushenqi.com/recommendPage/155660596069151
    },
    created() {
        var reyinurl = "api/recommend/53115e30173bfacb4904897e";
        this.axios.get(reyinurl).then(res => {
            // console.log(res)
            this.reyin = reyinurl.data;
            this.books = res.data.books.slice(0, 10);
            this.bookname = res.data.books[1];
            // console.log(this.books) //图片链接``
            // console.log(res.data.books)
        })

        var fenlei = "api/sub-categories";
        this.axios.get(fenlei).then(res => {
            this.text = res.data.picture;
            // console.log("this.text==>",this.text);
            this.manhua = res.data.female;
            // console.log("this.manhua=>",this.manhua);
            this.type = res.data.press;
        })

        var zifenlei = "api/sub-categories";
        this.axios.get(zifenlei).then(res => {
            this.xuanhuan = res.data.male;
            // console.log("this.xuanhuan",this.xuanhuan);
        })
        var paihang = "api/rank-category";
        this.axios.get(paihang).then(res => {
            this.tupian = res.data.male.slice(0, 7);
            this.girl = res.data.female.slice(0, 7);
            // console.log("aa=>",this.tupian);
        })

    },
    methods: {
        have() {
            var value = this.$refs.getValue.value;
            // console.log(value); 
            this.$router.push({ name: 'Twelve', query: { userId: value } });
        }
    }
}
</script>
<style>
body {
    margin: 0 auto;
    padding: 0;
}

ul,
li,
p,
h2 {
    list-style: none;
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
}

.auto-img {
    display: block;
    width: 100%;
    height: 100%;
}

.first {
    width: 100%;
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
}

.head {
    width: 100%;
    background-size: auto 44PX;
    background-color: #00d37d;
    height: 1.1733rem;
    position: relative;
}

.head img {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 30%;
    height: 100%;
}

.head .baiduBtn {
    width: 43px;
    left: 5px;
}

.head .btn {
    position: absolute;
    height: 28px;
    line-height: 28px;
    top: 7px;
    border: 1px solid #00b068;
    text-align: center;
    color: #fff;
    font-size: 13px;
    font-weight: 700;
}

.head .productBtn {
    width: 43px;
    left: 50px;
    border-left: 0;
    background: url(//wkstatic.bdimg.com/static/wapyuedu/static/common/static/images/productsBtn_be5f460.png) no-repeat center center;
    background-size: 15px 15px;
}

.head .searchBtn {
    right: 59px;
    width: 34px;
    background: url(//wkstatic.bdimg.com/static/wapyuedu/static/common/static/images/searchBtn_4a8c9df.png) no-repeat center center;
    background-size: 0.4rem 0.4rem;
}

.head .naBtn {
    right: 5px;
    width: 53px;
}

.head .naBtn:after {
    display: block;
    position: absolute;
    right: -5px;
    top: -5px;
    background: url(//wkstatic.bdimg.com/static/wapyuedu/static/common/static/images/_new_18d0ac5.png);
    background-size: 24px 11px;
    width: 24px;
    height: 11px;
    content: '';
}

.nav {
    position: relative;
    width: 100%;
    overflow: hidden;
}

.top-carous {
    border-bottom: 1px solid #d9d9d9;
    border-top: 1px solid #d9d9d9;

}

.carous {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;

}

.col .title {
    background: #f1f0ed;
    font-size: 16px;
    line-height: 38px;
    height: 38px;
    border-bottom: 1px solid #d5d5d3;
    padding: 0 15px;
    font-weight: 700;
}

.col .title span {
    float: left;
    color: #8c8c8c;
}

.col .icon {
    float: right;
    color: #8c8c8c;
    display: block;
    background: url(../assets/8.png) no-repeat 30px 12px;
    background-size: auto 12px;
    padding-right: 10px;
    font-size: 13px;
}

.oneBook {
    background: #edece3;
    border-bottom: 1px solid #d5d6d3;
    padding: 10px 10px 10px 97px;
    position: relative;
    min-height: 95px;
}

.oneBook .book_cover {
    position: absolute;
    left: 10px;
    top: 10px;
    width: 73px;
    height: 93px;
    border-bottom: 2px solid #b5aeac;
    border-radius: 5px;
}

.oneBook .book_title {
    height: 20px;
    line-height: 20px;
    font-size: 17px;
    overflow: hidden;
    color: #6c6c6c;
}

.oneBook .author {
    height: 18px;
    line-height: 18px;
    overflow: hidden;
    font-size: 12px;
    color: #838383;
}

.oneBook .book_summary {
    margin: 2px 0;
    height: 36px;
    line-height: 18px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    font-size: 13px;
    color: #838383;
}

.oneBook .book_price {
    margin-top: 2px;
    font-size: 12px;
    color: #8c8c8c;
}

.oneBook .book_currentPrice {
    margin-left: 5px;
    color: #f66D00;
}

.page_container {
    overflow: hidden;
}

.rankPage {
    background-color: #edebe3;
    padding: 10px;
    overflow: hidden;
    border-bottom: 1px solid #d5d6d3;
}

.rank-all {
    display: block;
    height: 0.64rem;
    width: 100%;
    color: #6c6c6c;
    line-height: 0.64rem;
    font-size: 16PX;
}

.rankPage .rank-one {
    float: left;
}

.rankPage .rank-two {
    display: block;
    float: right;
    padding-right: 0.32rem;
    background: url(../assets/8.png) no-repeat right center;
    background-size: 7px 12px;
}

.bookCat {
    background: #edebe3;
    padding: 0.1333rem 0.2666rem 0.2666rem;
}

.bookCat .bookText {
    margin-top: 5px;
    line-height: 0.9333rem;
    color: #6c6c6c;
    font-size: 16px;
    text-indent: 0.24rem;
}

.bookCat .dd {
    overflow: hidden;
    background: #f8f8f8;
    border: 1px solid #d3d6d6;
    border-top: 0;
    border-radius: 5px;
}

.bookCat .dd li {
    float: left;
    width: 50%;
    box-sizing: border-box;
    font-size: 16px;
    color: #717171;
    text-align: center;
    line-height: 50px;
    border-top: 1px solid #d3d6d6;
    height: 1.3333rem;
    overflow: hidden;
}

.homeFooter-wraper {
    background: #f4f4f4;
    width: 100%;
    margin-top: 0.3333rem;
}

.homeFooter-wraper .homeFooter-top {
    padding: .4666rem 0 .3333rem;
    width: 100%;
}

.homeFooter-wraper .homeFooter-top .search {
    position: relative;
    padding: 0 .4rem;
    margin-bottom: .4rem;
    display: inline-block;
    width: 100%;
}

.homeFooter-wraper .homeFooter-top .search .search-icon {
    position: absolute;
    top: 0;
    left: .4rem;
    width: .8rem;
    height: .9rem;
    background: url(../assets/search.png) no-repeat;
    background-size: 50%;
    background-position: 50%;
}

.homeFooter-wraper .homeFooter-top .search input {
    float: left;
    width: 67%;
    height: .8rem;
    padding-left: .8rem;
    border: 1px solid #ebebeb;
    border-radius: 2px;
    -webkit-appearance: none;
    line-height: .8rem;
}

.homeFooter-wraper .homeFooter-top .search .search-btn {
    width: 14.5%;
    display: inline-block;
    padding-left: .2333rem;
    right: .4rem;
}

.homeFooter-wraper .homeFooter-top .search .search-btn .btn {
    width: 90%;
    height: .8rem;
    border-radius: 2px;
    border: 1px solid #ebebeb;
    background: #fff;
    line-height: .8rem;
    text-align: center;
}

.co-info {
    width: 100%;
    margin: 0 auto;
    padding: 20PX 0 0 0;
    color: #999;
    text-align: center;
    font-size: 10PX;
}

.co-info div {
    display: inline-block;
    height: 0.5333rem;
    line-height: 0.5333rem;
}

.co-info div img {
    float: left;
    max-width: 100%;
    border: none;
}

.co-info div p {
    float: left;
    height: 0.5333rem;
    line-height: 0.5333rem;
    margin: 0 0 0 0.1333rem;
    color: #939393;
}

.co-infos {
    padding: 0 0.3rem;
    line-height: 0.3rem;
    margin-top: .4rem;
    color: #999;
    text-align: center;
    font-size: 10PX;
}

.co-infoss {
    margin-top: .4rem;
    color: #999;
    text-align: center;
    font-size: 10PX;
    margin-bottom: .4rem;
}

.category-section {
    overflow: hidden;
}

.category-section h4 {
    margin: 0;
    padding: 0 .4rem;
    height: 1.6rem;
    line-height: 1.6rem;
    font-weight: 400;
    border-top: 1px solid #f8f8f8;
    color: #999;
}

.category-list {
    float: left;
    font-size: 0;
    display: inline-block;
    vertical-align: middle;
    width: 30%;
    padding: 0.14999rem;
    text-align: center;
    border-top: 1px solid #f8f8f8;
    border-right: 1px solid #f8f8f8;
    border-bottom: 1px solid #f8f8f8;

}

.name {
    display: block;
    line-height: 0.93333rem;
    font-size: 15px;
    font-weight: 700;
    color: #333;
}

.count {
    display: block;
    line-height: .53333rem;
    font-size: 12px;
    color: #ccc;
}

.ranking-header {}

.ranking-header h3 {
    margin: 0;
    padding-left: .4rem;
    padding-top: .26667rem;
    height: 1.44rem;
    line-height: 1.17333rem;
    font-weight: 400;
    color: #999;
    background-color: #e6e6e6;
}

.ranking-body .ranking-list li {
    display: inline-block;
    width: 100%;
    height: 100%;
}

.ranking-body .ranking-list li img {
    float: left;
    width: .8rem;
    height: .8rem;
    margin: .4rem 0 0 .4rem;
    border: none;

}

.ranking-body .ranking-list li span {
    background-size: 100% 1px;
    background-image: linear-gradient(180deg, transparent 50%, #ebebeb 0);
    background-repeat: no-repeat;
    background-position: bottom;
    display: block;
    color: #333;
    font-size: 14px;
    font-weight: 500;
    height: 100%;
    line-height: 1.6rem;
    margin-left: 1.46667rem;
}
.unLogin{
    padding:4rem 0 9.0133rem;
    background: #edebe3;
}
.unLogin .login{
    display: block;
    margin:0 auto;
    text-align: center;
    width: 2.5333rem;
    height:1rem;
    line-height: 1rem;
    background:#00e185;
    border:1px solid #00b068;
    color:#fff;
    font-size:18PX;
}
.unLogin p{
    line-height: 1.3866rem;
    font-size:16PX;
    color:#6c6c6c;
    text-align: center;
}
</style>