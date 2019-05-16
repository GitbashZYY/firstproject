<template>

    <div class="five-body">
    
      
    
    <!-- <keep-alive>
    <router-view v-if="$route.meta.keepAlive"/>
      </router-view>
    
    <router-view v-if="!$route.meta.keepAlive"> -->
    <!-- 这里是不被缓存的视图组件，比如 Edit！
    </router-view>
    </keep-alive> -->
    <div class="pagehead">
        <div class="header-bar-red">
            <span class="back">
				<i class="icon"></i>
				<i @click="back">返回</i>
			</span>
            <div class="index">
                <router-link :to="{name:'login'}"><i class="homePage"></i></router-link>
            </div>
            <h1>{{text.name}}</h1>
        </div>
        </div>
        <div class="chapter-header">
            <div class="chapter-header-1">
                <h3 class="chapter-title">目录</h3>
                <span class="chapter-title-desc">共{{book.chaptersCount}}章</span>
            </div>
        </div>
        <div class="chapter-body">
            <ul class="chapter-list" v-for="(item,index) in chapters" :key="index">
                <router-link :to="{name:'Six',query: { userId: item.link, userId2: id2}}">
                    <li>
                        <span>{{item.title}}</span>
                    </li>
                </router-link>
            </ul>
        </div>
      
    </div>
</template>
<script>
export default {
    name: 'Five',
    data() {
        return {
            active: 0,
            book: '',
            text: '',
            chapters: '',
            // chaptersCount:'',
            last: '',
            id2: []
        }
    },
    created() {
        // console.log(this.$route.query.userId);
        // console.log(this.$route.query.userId2);
        let id = this.$route.query.userId
        this.id2 = this.$route.query.userId2
        var baidu = "api/book-sources?view=summary&book=" + id;
       //取值
        var songList = localStorage.getItem('songList');
         this.chapters=JSON.parse(songList);
         // var songLister = localStorage.getItem('songLister');
         // this.book=JSON.parse(songLister);
         // this.chapters = JSON.parse(localStorage.getItem('this.chapters'))
        this.axios.get(baidu).then(res => {
            this.book = res.data[0]
            // console.log(this.book)
            // this.charters=localStorage.removeItem('songList');
            
            var count = "api/book-chapters/" + this.book._id;
            this.axios.get(count).then(res => {
                this.text = res.data;
                this.chapters = res.data.chapters;
                // console.log(this.chapters)
                //cun
                
                // this.$store.commit('getSongList', JSON.parse(this.chapters));
                //存储数据
                 localStorage.setItem('songList', JSON.stringify(this.chapters));
                 // localStorage.setItem('songLister', JSON.stringify(this.text));
                
               
                }) 
            })
        },

    methods: {
    	// beforeRouteLeave(to,from,next){
     //  if(to.path == '/six'){
     //        //缓存
     //      from.meta.keepAlive = true;
     //  }else{
     //        //不缓存
     //      from.meta.keepAlive = false ;
     //  }
     //  next()
     // },
        back() {
            if (this.active == 1) {
                this.$router.push({
                    name: 'Third',
                    query: {
                        active: this.active
                        
                    }

                    
                })
                // localStorage.clear
                // this.charters=localStorage.removeItem('songList');

            } else {
                this.$router.go(-1);
                //删除本地数据
                localStorage.removeItem('songList');
                localStorage.removeItem('songLister');

            }
        }
    }

}
</script>
<style lang="less" scoped>
.five-body {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
}

ul,
li {
    list-style: none;
    padding: 0;
    margin: 0;
}

a {
    text-decoration: none;
}
.pagehead{
	position:relative;
	z-index:20;
	height:1.1733rem;
	overflow:hidden;
.header-bar-red {
	width:100%;
    position: fixed;
    z-index: 20;
    height: 1.1733rem;
    overflow: hidden;
    background-color: #b93321;
    color: #fff;

    .back {
        position: absolute;
        width: 1.6rem;
        text-align: center;

        .icon {
            width: .4rem;
            height: 1.1733rem;
            background: url(../assets/zb.png)no-repeat;
            background-size: 125%;
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
        width: 1.333rem;
        text-align: center;
        height: 100%;
        line-height: 1.7333rem;
        color: #fff;

        .homePage {
            display: inline-block;
            width: .4rem;
            height: 1.1733rem;
            background: url(../assets/hj.png) no-repeat;
            background-size: 125%;
            background-position: 50%;
            background-repeat: no-repeat;
        }
    }

    h1 {
        width: 70%;
        height: 100%;
        margin: 0 auto;
        line-height: 1.1733rem;
        text-align: center;
        font-size: 14PX;

    }
}
}
.chapter-header {
    width: 100%;
    padding: .4rem .5333rem;
    font-size: 16PX;
    border-bottom: 1px solid #f8f8f8;

    .chapter-header-1 {
        display: inline;

        .chapter-title {
            font-size: 14PX;
            display: inline;
            margin-right: 0.2666rem;
        }

        .chapter-title-desc {
            color: #999;
            font-size: 12PX;
        }
    }
}

.chapter-body {
    .chapter-list {
        list-style: none;
        text-decaration: none;

        li {
            height: 1.3333rem;
            line-height: 1.3333rem;
            border-bottom: 1px solid #f8f8f8;
            margin-left: .53333rem;

            span {
                display: inline;
                width: 85%;
                color: #999;
            }
        }
    }
}
</style>