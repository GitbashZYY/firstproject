<template>
    <div class="twelve">
        <div class="page-head">
            <div class="bar-red">
                <span class="bar-back">
					<i class="icon"></i>
					<i @click="back">返回</i>
				</span>
                <span class="index">
					<i class="homePage" @click="back"></i>
				</span>
                <h1>跟"{{name}}"有关的书籍</h1>
            </div>
        </div>
        <div class="list-wraper" v-for="(item,index) in books" :key="index">
            <router-link :to="{name: 'Seven',query :{ userId: item._id,userId2: item.title}}">
                <div class="c-app-book-list">
                    <div class="c-app-book-lister">
                        <div class="inner">
                            <div class="cover">
                                <img :src='img + item.cover'>
						</div>
                                <div class="right">
                                    <h4 class="name">{{item.title}}</h4>
                                    <p>{{item.author}}
                                        <p>{{item.shortIntro}}</p>
                                        <p class="important">
                                            <span class="c-red">{{item.latelyFollower}}</span>人气
                                            <span>
									<span class="split">|</span>
                                            <span class="c-red">{{item.retentionRatio}}%</span>读者保存
                                            </span>
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'twelve',
    data() {
        return {
            active: 0,
            name: '',
            img: 'http://statics.zhuishushenqi.com',
            books: ''
        }
    },
    created() {
        this.name = this.$route.query.userId;
        var content = "api/search?keyword=" + this.name;
        this.axios.get(content).then(res => {
            // console.log(res.data.books)
            this.books = res.data.books;
        })
    },
    methods: {
        back() {
            if (this.active == 1) {
                this.$router.push({
                    name: 'Login',
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
.twelve {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    a {
        text-decoration: none;
    }

    p {
        color: #999;
    }

    .page-head {
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
                    width: 0.4rem;
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

    .list-wraper {
        position: relative;
        width: 100%;
        overflow-y: auto;

        .c-app-book-list {
            background-color: #f5f2ed;

            .c-app-book-lister {
                padding-left: .4rem;

                .inner {
                    padding: .4rem .4rem .4rem 0;

                    .cover {
                        float: left;
                        width: 1.6rem;
                        height: 2rem;
                        border: 1px solid #ebebeb;
                        overflow: hidden;

                        img {
                            width: 100%;
                            display: block;
                        }
                    }

                    .right {
                        height: 2rem;
                        margin-left: 2rem;

                        .name {
                            margin: 0;
                            height: .5333rem;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            line-height: .5066rem;
                            color: #333;
                            font-size: 14px;
                        }

                        p {
                            line-height: .5333rem;
                            height: .5333rem;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;

                            .split {
                                padding: 0 .2666rem;
                            }

                        }

                        .important {
                            color: #666;

                            .c-red {
                                color: #b93321;
                            }

                            .split {
                                padding: 0 .2666rem;
                            }

                            .c-red {
                                color: #b93321;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>