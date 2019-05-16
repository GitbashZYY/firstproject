<template>
	<div class="nine-body">
		<div class="page-head">
			<div class="bar-red">
				<span class="bar-back">
					<i class="icon"></i>
					<i @click="back">返回</i>
				</span>
				<span class="index">
					<router-link :to="{name:'login'}"><i class="homePage"></i></router-link>
				</span>
				<h1>你可能感兴趣的</h1>
			</div>
		</div>

		<div class="c-book-list">
			<div class="c-book" v-for="(item,index) in like" :key="index">
				<div class="inner">
				<router-link :to="{name:'Ten',query :{userId: item._id,userId2: item.title}}">
					<img :src='img + item.cover'>
					<div class="right">
						<h4 class="name">{{item.title}}</h4>
						<p>{{item.majorCate}}
            <span class="split">|</span>
            {{item.author}}
						</p>
						<p>{{item.shortIntro}}</p>
						<p class="important">
							<span>
								<span class="c-red">{{item.latelyFollower}}</span>
								人气
							</span>
							<span class="split">|</span>
							<span class="c-red">{{item.retentionRatio}}%</span>
							<span>读者留存</span>
						</p>
					</div>
					</router-link>
				</div>
			</div>
		</div>
		<div class="show-more">
			没有更多书籍
		</div>
	</div>
</template>
<script>
	export default{
		name:'nine',
		data(){
			return{
      active:0,
      id:'',
      img: 'http://statics.zhuishushenqi.com',
      like:''
			}
		},
		created(){
    // console.log("aa",this.$route.query.userId.books)
    this.id = this.$route.query.userId
    var love="api/recommend/" + this.id;
        this.axios.get(love).then(res=>{
        	this.like = res.data.books
        	console.log("bb",this.like)
        })
		},
		methods:{
			back(){
				if(this.active==1){
        this.$router.push({name:"eight", query:{
        	active:this.active
        }})
				}else{
					this.$router.go(-1);
				}
			}
		}
	}
</script>
<style lang="less" scoped>
a{
	text-decoration:none;
}
	.nine-body{
		position:absolute;
		width:100%;
		height:100%;
		top:0;
		left:0;
		.page-head{
	position:relative;
	z-index:20;
	height:1.1733rem;
	overflow:hidden;
	.bar-red{
		position:fixed;
		z-index:20;
		width:100%;
		height:1.1733rem;
		overflow:hidden;
		background-color:#b93321;
		color:#fff;
		.bar-back{
    position:absolute;
    width:1.6rem;
    text-align:center;
		.icon{
			width:.4rem;
			height:1.1733rem;
			background:url(../assets/zb.png) no-repeat;
			background-size:125%;
			background-repeat:no-repeat;
			background-position:50%;
		}
		i{
			display:inline-block;
			vertical-align:middle;
			font-style:normal;
		}
		}
		.index{
      position:absolute;
      right:0;
      width:1.3333rem;
      text-align:center;
      height:100%;
      line-height:1.1733rem;
      color:#fff;
      i{
      	display:inline-block;
      	width:.4rem;
      	height:1.1733rem;
      	background:url(../assets/hj.png) no-repeat;
      	background-size:125%;
      	background-repeat:no-repeat;
      	background-position:50%;
      }
		}
		h1{
			width:70%;
			height:100%;
			margin:0 auto;
			line-height:1.1733rem;
			text-align:center;
			font-size:14px;
			white-space:nowrap;
			text-overflow:ellipsis;
			overflow:hidden;
		}
	}
}	
p{
	margin:0;
	color:#999;
	font-size:12PX;
}
.c-book-list{
	.c-book{
		padding-left:.5333rem;
		.inner{
			background-size: 100% 1px;
    background-image: linear-gradient(180deg,transparent 50%,#ddd 0);
    background-repeat: no-repeat;
    background-position: bottom;
    display:block;
    padding:.4rem .4rem .4rem 0;
    img{
    	float: left;
    width: 1.6rem;
    height: 2rem;
    border: 1px solid #ebebeb;
    background: url(/image/38b2adca9779.img-bk.png) no-repeat;
    background-position: 50%;
    background-size: 100%;
    }
    .right{
    	height:2rem;
    	margin-left:1.8666rem;
    	.name{
      height:.5066rem;
      line-height:.5066rem;
      color:#333;
      font-size:14PX;
      margin:0;
    	}
    	p{
    		height:.5333rem;
    		line-height:.5333rem;
    		white-space:nowrap;
    		text-overflow:ellipsis;
    		overflow:hidden;
    		.split{
    			padding:0 .2666rem;
    		}
    	}
    	.important{
    		color:#444;
    		line-height:.48rem;
    	}
    	.c-red{
    		color:#b93321;
    	}
    }
		}
	}
	}
	.show-more{
		height:1.0666rem;
		line-height:1.0666rem;
		text-align:center;
		color:#999;
	}
}
</style>