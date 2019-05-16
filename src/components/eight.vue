<template>
    <div class="eight-body">
        <div class="page-head">
            <div class="bar-red">
                <span class="bar-back">
          <i class="icon"></i>
          <i @click="back">返回</i>
        </span>
                <span class="index">
          <router-link :to="{name:'login'}"><i class="homePage"></i></router-link>
        </span>
                <h1>{{name.title}}</h1>
            </div>
        </div>
        <ul class="c-comment-list">
            <li v-for="(item,index) in longText" :key="index">
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
    </div>
</template>
<script>
export default {
    name: 'Eight',
    data() {
        return {
            active: 0,
            img: 'http://statics.zhuishushenqi.com',
            countText: '',
            longText: '',
            name: ''
        }
    },
    created() {
        this.countText = this.$route.query.userId;
        this.name = this.$route.query.userId2
        // console.log("aa",this.name);
        var shuping = "api/book/reviews?book=" + this.countText;
        this.axios.get(shuping).then(res => {
            this.longText = res.data.reviews
            // console.log("bb",this.longText)
        })
    },
    methods: {
        back() {
            if (this.active == 1) {
                this.$router.push({
                    name: "Seven",
                    query: {
                        active: this.active
                    }
                })
            } else {
                this.$router.go(-1);
            }
        }
    }
}
</script>
<style lang="less" scoped>
ul {
    margin: 0;
    padding: 0;
}

p {
    margin: 0;
}

.eight-body {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.page-head {
    position: relative;
    z-index: 20;
    height: 1.1733rem;
    overflow: hidden;

    .bar-red {
        position: fixed;
        z-index: 20;
        width: 100%;
        height: 1.1733rem;
        overflow: hidden;
        background-color: #b93321;
        color: #fff;

        .bar-back {
            position: absolute;
            width: 1.6rem;
            text-align: center;

            .icon {
                width: .4rem;
                height: 1.1733rem;
                background: url(../assets/zb.png) no-repeat;
                background-size: 125%;
                background-repeat: no-repeat;
                background-position: 50%;
            }

            i {
                display: inline-block;
                vertical-align: middle;
                font-style: normal;
            }
        }

        .index {
            position: absolute;
            right: 0;
            width: 1.3333rem;
            text-align: center;
            height: 100%;
            line-height: 1.1733rem;
            color: #fff;

            i {
                display: inline-block;
                width: .4rem;
                height: 1.1733rem;
                background: url(../assets/hj.png) no-repeat;
                background-size: 125%;
                background-repeat: no-repeat;
                background-position: 50%;
            }
        }

        h1 {
            width: 70%;
            height: 100%;
            margin: 0 auto;
            line-height: 1.1733rem;
            text-align: center;
            font-size: 14px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }
}

.c-comment-list {
    width: 100%;

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

}
</style>