<template>
    <div class="third">
        <div class="nav-bar">
            <span class="back-btn" @click="back">
				<i></i>
			</span>
            <div class="back-text">书籍详情</div>
            <div id="sharebtn" class="share-btn" @click="block">
                <i></i>
            </div>
        </div>
        <div class="shareButtons" v-show="willshow">
            <p>分享</p>
            <div>
                <a href="#" class="qq"></a>
                <span></span>
                <a href="#" class="renren"></a>
                <span></span>
                <a href="#" class="sina"></a>
                <span></span>
                <a href="#" class="qqzone"></a>
            </div>
        </div>
        <div class="book-info">
            <div class="info-wrap">
                <img :src='img + book.cover' height="88" width="196" class="book-cover">
                <div class="info">
                    <div class="title">{{book.title}}</div>
                    <div class="author">作者：{{book.author}}</div>
                    <div class="rating-wrap">{{book.cat}}</div>
                    <div class="read-num">{{book.updated}}</div>
                </div>
            </div>
        </div>
        <div class="read-data">
            <p class="item">
                <span class="key">追人气</span>
                <span>{{book.latelyFollower}}</span>
            </p>
            <p class="item">
                <span class="key">读者留存率</span>
                <span>{{book.retentionRatio}}</span>
            </p>
            <p class="item">
                <span class="key">总字数</span>
                <span>{{book.wordCount}}</span>
            </p>
        </div>
        <div class="module-wrap">
            <div class="tab-focus">
                <div class="tab-reel">
                    <div class="reel-item">
                        <h3 class="classify-title">图书简介</h3>
                        <div class="inner-wrap">
                            <p class="text-contents" :class="shang? 'text-contents' : 'text-content'">{{book.longIntro}}</p>
                            <span class="arrow" id="dajian" :class="shang? 'arrows' : 'arrow'"  ref="dajian" @click="dianji"> </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="chapter-item">
            <div class="inner">
                <span class="inner-one">目录</span>
                <router-link :to="{name:'Five', query: { userId: book._id, userId2: book.title}}"><i class="arrow"></i></router-link>
                <span class="inner-two">{{book.lastChapter}}</span>
            </div>
        </div>
        <div class="hot-comment">
            <div class="hot-comment-top">
                <h2>热门书评</h2>
                <router-link :to="{name: 'Eight',query :{ userId: this.shuId,userId2: this.book}}"><span class="more">更多评论</span></router-link>
            </div>
        </div>
        <ul class="c-comment-list">
            <li v-for="(item,index) in twoText" :key="index">
                <div class="inner">
                    <img  class="avater" :src='img + item.author.avatar'>
                    <div class="right">
                        <p class="name">{{item.author.nickname}}</p>
                        <p class="title">{{item.title}}</p>
                        <p class="score"></p>
                        <p class="content">{{item.content}}</p>
                        <p class="love">
                            <span>{{item.likeCount}}人觉得有用</span>
                        </p>
                    </div>
                </div>
            </li>
        </ul>
        <div class="c-book-recommend-section">
            <h4  class="title">
    		<i class="tip"></i>
    		<div class="recommend-more">
    			<router-link :to="{name:'Nine', query :{ userId: id}}"><span>更多</span></router-link>
    		</div>
    		</h4>
            <div class="c-book-column-list">
                <div class="one" v-for="(item,index) in liked" :key="index">
                    <router-link :to="{name:'Ten',query :{userId:item._id,userId2:item.title}}"><img :src='img + item.cover'/></router-link>
                        <span>{{item.title}}</span>
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
    </div>
</template>
<script>
export default {
    name: 'Third',
    data() {
        return {
            willshow: false,
            shang: false,
            book: '',
            img: 'http://statics.zhuishushenqi.com',
            twoText: '',
            like: '',
            liked: '',
            shuId: '',
            longText: '',
            twoText: '',
            id: ''
        }
    },
    created() {
        // console.log(this.$route.query.userId)
        this.id = this.$route.query.userId;
        this.img = 'http://statics.zhuishushenqi.com';

        var reyinurl = "api/book-info/" + this.id;
        this.axios.get(reyinurl).then(res => {
            // console.log(res.data)
            this.book = res.data;
            this.shuId = this.book._id;
            // console.log("cc",this.shuId);           
            var shuping = "api/book/reviews?book=" + this.shuId;
            this.axios.get(shuping).then(res => {
                this.longText = res.data.reviews;
                this.twoText = res.data.reviews.slice(0, 2);
                // console.log("ee",this.twoText);
                // console.log("dd",this.longText)
                 })
            })
                var love = "api/recommend/" + this.id;
                this.axios.get(love).then(res => {
                    this.like = res.data;
                    this.liked = res.data.books.slice(0, 4);
                    // console.log("qq",this.liked)
                })
           
        
    },
    methods: {
        block() {
            this.willshow = !this.willshow;
        },
        back() {
            if (this.active == 1) {
                this.router.push({
                    name: 'login',
                    query: {
                        active: this.active
                    }
                })
            } else {
                this.$router.go(-1);
            }
        },
        dianji() {
            this.shang = !this.shang;
            // console.log('aaa')
        }

    }

}
</script>
<style lang="less">
h3,
p {
    margin: 0;
    padding: 0;
}

.nav-bar {
    position: relative;
    width: "100%";
    height: 1.7333rem;
    text-align: center;
    background-color: #fff;
    border-bottom: 1PX solid #f1f1f1;

    .back-btn {
        position: absolute;
        left: 0;
        top: 0;
        width: 1.7333rem;
        height: 1.7333rem;
        text-align: center;

        i {
            background: url(../assets/zuo.png) center no-repeat;
            background-size: cover;
            display: block;
            width: 0.5866rem;
            height: 0.5866rem;
            margin: 11Px 0 0 11PX;
        }
    }

    .back-text {
        color: #000;
        line-height: 1.1733rem;
        text-align: center;
        font-weight: 700;
        font-size: 0.48rem;
    }

    .share-btn {
        position: absolute;
        top: 0;
        right: 0.1866rem;
        width: 1.7333rem;
        height: 1.7333rem;

        i {
            background: url(../assets/q0.png) no-repeat center;
            background-size: cover;
            display: block;
            width: 0.5866rem;
            height: 0.5866rem;
            margin: 0.2933rem 0 0 0.2933rem;
        }
    }
}

.shareButtons {
    position: fixed;
    width: 6.6666rem;
    height: 2.1333rem;
    margin-left: 52px;
    margin-top: 218px;
    background: rgba(42, 42, 42, .95);
    border-radius: 10PX;
    z-index: 99;

    p {
        margin: 0;
        color: #fff;
        text-align: center;
        line-height: 0.9066rem;
    }

    div {
        padding: 0 0.5333rem;
        display: -webkit-box;
        height: 0.88rem;

        a {
            display: block;
            width: 0.88rem;
            height: 0.88rem;
            background: url(../assets/q2.png);
            background-size: auto 0.88rem;
        }

        span {
            -webkit-box-flex: 1;
            display: block;
            height: 100%;
        }

        .qq {
            background: url(../assets/q1.png);
            background-size: auto 0.88rem;
        }

        .renren {
            background-position: 0 0;
        }

        .sina {
            background-position: -43PX 0;
        }

        .qqzone {
            background-position: -86PX 0;
        }
    }
}

.book-info {
    position: relative;
    background-color: #fefefc;

    .info-wrap {
        position: relative;
        min-height: 4.3733rem;
        padding: 10PX 10PX 0;

        .book-cover {
            position: absolute;
            top: 0.2666rem;
            left: 0.2666rem;
            width: 2.8rem;
            height: 3.7333rem;
            display: block;
        }

        .info {
            padding-left: 3.2666rem;
            padding-top: 0.5rem;

            .title {
                font-size: 16px;
                font-weight: 500;
                color: #2a2a2a;
                line-height: 0.8rem;
            }

            .author {
                color: #7f7f7f;
                font-size: 14PX;
                height: 0.7333rem;
                line-height: 0.7333rem;
            }

            .rating-wrap {
                height: 0.7333rem;
                line-height: 0.7333rem;
            }

            .read-num {
                font-size: 12px;
                color: #bfbfbf;
                height: 0.7333rem;
                line-height: 0.7333rem;
            }
        }

    }
}

.module-wrap {
    background: #fefefc;
    color: #7e7e7e;
    width: 100%;

    .tab-focus {
        position: relative;
        overflow: hidden;

        .reel-item {
            border-top: 1px solid #f1f1f1;
            border-bottom: 1px solid #f1f1f1;
            font-size: 13PX;
            line-height: 0.7333rem;
            background: #fff;
            padding: 0 10PX 10PX 10PX;

            .classify-title {
                font-size: 17PX;
                color: #2A2A2A;
                line-height: 0.8rem;
            }

            .inner-wrap {
                position: relative;
                margin-top: 0;
                width: 100%;

                .text-content {
                    display: -webkit-box;
                    overflow: hidden;
                    text-overflow: clip;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                }

                .text-contents {
                    display: -webkit-box;

                    -webkit-box-orient: vertical;
                }

                .arrow {
                    position: absolute;
                    width: 0.5333rem;
                    height: 0.5333rem;
                    bottom: 0;
                    right: -10px;
                    background: url(../assets/xm.png) no-repeat;
                    background-size: 60%;
                    background-position: 50%;

                }

                .arrows {
                    position: absolute;
                    width: 0.5333rem;
                    height: 0.5333rem;
                    bottom: 0;
                    right: -10px;
                    background: url(../assets/sm.png) no-repeat;
                    background-size: 60%;
                    background-position: 50%;

                }
            }
        }
    }
}

.read-data {
    padding: .53333rem 0;
    border-bottom: 1px solid #ebebeb;
    border-top: 1px solid #ebebeb;

    .item {
        display: inline-block;
        vertical-align: middle;
        width: 33%;
        text-align: center;

        span:first-child {
            color: #999999;
        }

        span:last-child {
            margin-top: 0.1333rem;
            font-size: 16px;
            display: block;
        }
    }
}

.chapter-item {
    display: block;
    background: #fff;
    padding: 0 0 0 .5333rem;
    border-bottom: 1px solid #ebebeb;
    line-height: .5333rem;
    color: #333;

    .inner {
        position: relative;
        font-size: 14px;
        padding: .5333rem .26667rem .5333rem 0;
        border-top: 1px solid #f4f4f4;

        .arrow {
            float: right;
            width: .5333rem;
            height: .5333rem;
            background: url(../assets/xm.png) no-repeat 50%;
            background-size: 60%;
            background-position: 50%;
            transform: rotate(-90deg);
        }

        .inner-two {
            float: right;
            max-width: 60%;
            color: #999;
            word-break: break-all;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
    }
}

.hot-comment {
    background: #fff;

    .hot-comment-top {
        height: 1.0666rem;
        position: relative;

        h2 {
            margin: 0;
            height: 1.06667rem;
            line-height: 1.06667rem;
            padding: 0 .53333rem;
            font-size: 14px;
            font-weight: 400;
            position: absolute;
            top: 0;
            left: 0;
        }

        .more {
            display: block;
            height: 1.06667rem;
            line-height: 1.06667rem;
            padding: 0 .53333rem;
            font-size: 12px;
            color: #999;
            font-weight: 400;
            position: absolute;
            top: 0;
            right: 0;
        }
    }
}

.c-comment-list {
    width: 100%;
    margin-bottom: .2666rem;

    li {
        padding: .33333rem 0 0 .53333rem;
        background: #fff;

        .inner {
            position: relative;
            padding-left: 1.2rem;
            padding-right: .53333rem;
            padding-bottom: .21333rem;
            border-bottom: 1px solid #ebebeb;

            .avater {
                position: absolute;
                top: 0;
                left: 0;
                width: .93333rem;
                height: .93333rem;
                border-radius: .93333rem;
            }

            .right {
                .name {
                    position: relative;
                    height: .4rem;
                    line-height: .4rem;
                    color: #a58d5e;
                    font-size: 12px;
                }

                .title {
                    height: .53333rem;
                    line-height: .66667rem;
                    font-weight: 700;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    color: #000;
                }

                .score {
                    height: .6666rem;
                    padding: .17333rem 0;
                    font-size: 0;
                }

                .content {
                    height: 1.06667rem;
                    overflow: hidden;
                    line-height: .53333rem;
                    text-align: justify;
                    color: #999;
                }

                .love {
                    padding-top: .13333rem;
                    height: .53333rem;
                    overflow: hidden;

                    span {
                        float: right;
                    }
                }
            }
        }
    }

    li:first-child {
        padding-top: 0;
    }
}

.book-copyright {
    background: #fff;

    h2 {
        height: 1.0666rem;
        line-height: 1.0666rem;
        padding: 0 .5333rem;
        font-size: 14PX;
        font-weight: 400;
        margin: 0;
    }

    .desc {
        color: #999;
        font-size: 12PX;
        padding: 0 .5333rem .2666rem;
    }
}

.c-book-recommend-section {
    background-color: #fff;
    font-size: 0;

    .title {
        margin: 0;
        position: relative;
        height: 1.2rem;
        padding: 0 .4rem;
        line-height: 1.2rem;
        font-size: 14PX;
        overflow: hidden;
        text-align: left;

        .tip {
            position: absolute;
            left: 0;
            top: .4rem;
            width: .0533rem;
            height: .4rem;
            background-color: #b93321;
        }

        .recommend-more {
            float: right;
            color: #b93321;
            box-sizing: border-box;

            span {
                display: block;
                font-size: 12PX;
                color: #b93321;
            }
        }
    }

    .c-book-column-list {
        font-size: 0;
        white-space: nowrap;

        div {
            display: inline-block;
            width: 17%;
            height: 3.0666rem;
            padding: 0 .4rem;
            text-align: left;
            overflow: hidden;

            img {
                height: 2.1333rem;
                display: block;
            }

            span {
                display: block;
                height: .9333rem;
                line-height: .9333rem;
                color: #333;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                font-size: 12PX;
            }
        }
    }
}

.co-info {
    width: 100%;
    margin: 0 auto;
    padding: 20PX 0 0 0;
    color: #999;
    text-align: center;
    font-size: 10PX;

    div {
        display: inline-block;
        height: 0.5333rem;
        line-height: 0.5333rem;

        img {
            float: left;
            max-width: 100%;
            border: none;
        }

        p {
            float: left;
            height: 0.5333rem;
            line-height: 0.5333rem;
            margin: 0 0 0 0.1333rem;
            color: #939393;
        }
    }
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
    border-bottom: 1px solid #999;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
}

p {
    margin: 0;
}
</style>