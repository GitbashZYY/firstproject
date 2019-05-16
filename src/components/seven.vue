<template>
	<div class="seven-body">
		<div class="page-head">
			<div class="bar-red">
				<span class="bar-back">
					<i class="icon"></i>
					<i @click="back">返回</i>
				</span>
				<span class="index">
					<i class="homePage" @click="back"></i>
				</span>
				<h1>书籍详情</h1>
			</div>
		</div>
    
    <div>
    	<div class="book-detail" >
    		<img :src='img + fenlei.cover'>
    		<div class="desc">
    			<h1>{{fenlei.title}}</h1>
    			<p class="sku">
    				<span class="c-red">{{fenlei.author}}</span>
    				<i>|</i>
    				<span>{{fenlei.minorCate}}</span>
    				<i>|</i>
    				<span>{{fenlei.wordCount}}字</span>
    			</p>
    			<p class="update">{{fenlei.copyrightDesc}}</p>
    		</div>
    	</div>

    	<div class="read-link">
    		<span class="button1" :class="book? 'button1' : 'button' " @click="block">
    			<i class="good" :class="book? 'bad' : 'good'">加入书架</i>
    			<i class="good" :class="book? 'good' : 'bad'">撤出书架</i>
    		</span>
    		<!-- <span class="button1"> -->
    			<!-- <i>撤出书架</i> -->
    		<!-- </span> -->
    		<span class="button">
    			<router-link :to="{name:'Five',query: {userId:this.id,userId2:this.title}}"><i>开始阅读</i></router-link>
    		</span>
    	</div>

    	<div class="reader-data">
    		<p class="item">
    			<span class="key">追人气</span>
    			<span>{{fenlei.latelyFollower}}</span>
    		</p>
    		<p class="item">
    			<span class="key">读者留存率</span>
    			<span>{{fenlei.retentionRatio}}%</span>
    		</p>
    		<p class="item">
    			<span class="key">日更新字数/天</span>
    			<span>{{fenlei.serializeWordCount}}</span>
    		</p>
    	</div>

    	<div class="module-wrap">
    	<div class="tab-focus">
    		<div class="tab-reel">
    			<div class="reel-item">
    				<div class="inner-wrap">
    					<p class="text-contents" :class="shang? 'text-contents' : 'text-content'" >{{fenlei.longIntro}}</p>
    					<span class="arrow" id="dajian" :class="shang? 'arrows' : 'arrow'"  ref="dajian" @click="dianji"> </span> 
    				</div>
    			</div>
    		</div>
    	</div>  	
    </div>

    <div class="chapter-item">
    		<div class="inner">
    			<span class="inner-one">目录</span>
    			<router-link :to="{name:'Five',query: {userId:this.id,userId2:this.title}}"><i class="arrow"></i></router-link>
    			<span class="inner-two">{{fenlei.lastChapter}}</span>
    		</div>
    	</div>

    	<div class="hot-comment">
    		<div class="hot-comment-top">
    			<h2>热门书评</h2>
    			<router-link :to="{name: 'Eight',query :{ userId: this.shuId,userId2: this.fenlei}}"><span class="more">更多评论</span></router-link>
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
    		<div class="c-book-column-list" >
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
	</div>
</template>

<script>
	export default{
		name:'Seven',
		data(){
			return{
		 img:'http://statics.zhuishushenqi.com',
     active:0,
     tupian:'',
     id:'',
     title:'',
     shang:false,
     fenlei:'',
     shuId:'',
     longText:'',
     twoText:'',
     book:false,
     like:'',
     liked:''
			}
		},
		created(){
			// console.log("aa",this.$route.query.userId);
			this.id = this.$route.query.userId;
            this.title = this.$route.query.userId2;
      var mingzi = "api/book-info/" + this.id;
      this.axios.get(mingzi).then(res=>{
      this.fenlei = res.data;
      // console.log("bb",this.fenlei)
      this.shuId = this.fenlei._id;
      // console.log("cc",this.shuId)
      })
      var shuping = "api/book/reviews?book=" + this.shuId;
      this.axios.get(shuping).then(res=>{
      	this.longText = res.data.reviews
      	this.twoText = res.data.reviews.slice(0,2)

      	// console.log("ee",this.twoText)
      	// console.log("dd",this.longText)
        })
      	var love="api/recommend/" + this.id;
        this.axios.get(love).then(res=>{
        	this.like = res.data
        	this.liked = res.data.books.slice(0,4)
        	// console.log("qq",this.liked)
        })
      
      
		},
		methods:{
			back(){
     if(this.active==1){
     	this.router.push({name:"Five",query:{
     		active:this.active
     	}})
     }else{
     	this.$router.go(-1);
     }
			},
			dianji(){
				this.shang = !this.shang;
				console.log('aaa')
			},
			block(){
				this.book =!this.book;
			}
		}
	}
</script>

<style lang="less" scoped>
.seven-body{
	position:absolute;
	width:100%;
	top:0;
	left:0;
	background: #f4f4f4;
}
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
ul{
	list-style:none;
	margin:0;
	padding:0;
}
a{
	text-decoration:none;
    color:#fff;
}
p{
	margin:0;
}
.book-detail{
	padding:.5333rem;
	background:#fff;
	img{
		float:left;
		width:1.7333rem;
		height:2.3333rem;
	}
	.desc{
		margin-left:2rem;
		h1{
			margin:0;
			height: .66667rem;
    font-weight: 400;
    font-size: 16px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
		}
		.sku{
			
			font-size:12PX;
			height: 0.8666rem;
    font-size: 12PX;
    line-height: 0.8666rem;
			.c-red{
				display:inline-block;
				vertical-align:middle;
				color:red;
			}
			i{
				margin:0 .2666rem;
				font-style:normal;

			}
			span{
				display:inline-block;
				vertical-align:middle;
				color:#999;
			}
		}
		.update{
			margin-top:10px;
			height:.5333rem;
			color:#999;
		}
	}
}
.read-link{
	padding: 0 .53333rem .53333rem;
    border-bottom: 1px solid #ebebeb;
    font-size: 0;
    background: #fff;
    .button:first-child{
    	color: #b93321;
    background-color: #fff;
    }
    .button:last-child{
    margin-right: 0;
    }
    .button1{
    	display: inline-block;
    vertical-align: middle;
    height: 1.17333rem;
    line-height: 1.17333rem;
    background-color: #999999;
    border: 1px solid #b999999;
    border-radius: 2px;
    text-align: center;
    color: #fff;
    font-size: 16px;
    width: 45%;
    margin-right: 5%;
    i{
    	font-style:normal;
    }
    }
    .button{
    display: inline-block;
    vertical-align: middle;
    height: 1.17333rem;
    line-height: 1.17333rem;
    background-color: #b93321;
    border: 1px solid #b93321;
    border-radius: 2px;
    text-align: center;
    color: #fff;
    font-size: 16px;
    width: 45%;
    margin-right: 5%;
    i{
    	font-style:normal;
    }
    }
}
.reader-data{
   padding: .53333rem 0;
    border-bottom: 1px solid #ebebeb;
    font-size: 0;
    background: #fff;
    .item{
    display: inline-block;
    vertical-align: middle;
    width: 33%;
    text-align: center;
    span{
    	display:block;
    	line-height:.5333rem;
    }
    span:first-child{
    	color:#999;
    	font-size:12PX;
    }
    span:last-child{
    	margin-top:.1333rem;
    	font-size:16PX;
    }
    }
   }
   .module-wrap{
		background:#fefefc;
		color:#222;
		width:100%;
		.tab-focus{
			position:relative;
			overflow:hidden;
			.reel-item{
				border-top: 1px solid #f1f1f1;
				border-bottom: 1px solid #f1f1f1;
				font-size:13PX;
				line-height:0.7333rem;
				background:#fff;
				padding:0 10PX 10PX 10PX;
				.inner-wrap{
					position:relative;
					margin-top:0;
					width:100%;
					.text-content{
						display: -webkit-box;
				    overflow: hidden;
				    text-overflow: clip;
				    -webkit-line-clamp: 3;
				    -webkit-box-orient: vertical;
					}
					.text-contents{
						display: -webkit-box;
				    
				    -webkit-box-orient: vertical;
					}
					.arrow{
						position:absolute;
						width:0.5333rem;
						height:0.5333rem;
						bottom:0;
						right:-10px;
						background:url(../assets/xm.png) no-repeat;
						background-size:60%;
						background-position:50%;
						
					}
					.arrows{
						position:absolute;
						width:0.5333rem;
						height:0.5333rem;
						bottom:0;
						right:-10px;
						background:url(../assets/sm.png) no-repeat;
						background-size:60%;
						background-position:50%;
						
					}
				}
			}
		}
	}
	.chapter-item{
		display:block;
		background:#fff;
		padding:0 0 0 .5333rem;
		border-bottom:1px solid #ebebeb;
		line-height:.5333rem;
		color:#333;
		.inner{
			position:relative;
			font-size:14px;
			padding:.5333rem .26667rem .5333rem 0;
			border-top:1px solid #f4f4f4;
			.arrow{
				float:right;
				width:.5333rem;
				height:.5333rem;
				background:url(../assets/xm.png) no-repeat 50%;
				background-size:60%;
				background-position:50%;
				transform:rotate(-90deg);
			}
			.inner-two{
				float:right;
				max-width:60%;
				color:#999;
				word-break:break-all;
				text-overflow:ellipsis;
				white-space:nowrap;
				overflow:hidden;
				font-size:12PX;
			}
		}
	}
	.hot-comment{
		background:#fff;		
	.hot-comment-top{
			height:1.0666rem;
			position:relative;
		h2{
		margin:0;
		height: 1.06667rem;
    line-height: 1.06667rem;
    padding: 0 .53333rem;
    font-size: 14px;
    font-weight: 400;
    position: absolute;
    top: 0;
    left: 0;
	}
	.more{
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
	.c-comment-list{
	width:100%;
	margin-bottom:.2666rem;
	li{
	padding: .33333rem 0 0 .53333rem;
    background: #fff;
    .inner{
    position: relative;
    padding-left: 1.2rem;
    padding-right: .53333rem;
    padding-bottom: .21333rem;
    border-bottom: 1px solid #ebebeb;
    .avater{
    position: absolute;
    top: 0;
    left: 0;
    width: .93333rem;
    height: .93333rem;
    border-radius: .93333rem;
    }
    .right{
    .name{
    position: relative;
    height: .4rem;
    line-height: .4rem;
    color: #a58d5e;
    font-size: 12px;
    }
    .title{
     height: .53333rem;
    line-height: .66667rem;
    font-weight: 700;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #000;
    }
    .score{
    height: .6666rem;
    padding: .17333rem 0;
    font-size: 0;
    }
    .content{
    height: 1.06667rem;
    overflow: hidden;
    line-height: .53333rem;
    text-align: justify;
    color:#999;
    }
    .love{
    padding-top: .13333rem;
    height: .53333rem;
    overflow: hidden;
    span{
    	float:right;
    }
    }
    }
    }
	}
	li:first-child{
    padding-top:0;
	}
	}
	.book-copyright{
	background:#fff;
	h2{
	height:1.0666rem;
    line-height:1.0666rem;
	padding:0 .5333rem;
	font-size:14PX;
	font-weight:400;
	margin:0;
	}
	.desc{
    color:#999;
    font-size:12PX;
    padding:0 .5333rem .2666rem;
	}
	}
   .c-book-recommend-section{
	background-color:#fff;
	font-size:0;
	.title{
	margin:0;
    position:relative;
    height:1.2rem;
    padding:0 .4rem;
    line-height:1.2rem;
    font-size:14PX;
    overflow:hidden;
    text-align:left;
    .tip{
    position:absolute;
    left:0;
    top:.4rem;
    width:.0533rem;
    height:.4rem;
    background-color:#b93321;
    }
    .recommend-more{
	float:right;
	color:#b93321;
	box-sizing:border-box;
	span{
	display:block;
	font-size:12PX;
	color:#b93321;
	}
	}
	}
	.c-book-column-list{
	font-size:0;
	white-space:nowrap;
	div{
		display:inline-block;
		width:17%;
		height:3.0666rem;
		padding:0 .4rem;
		text-align:left;
		overflow:hidden;
	img{
		height:2.1333rem;
		display:block;
			}
	span{
		display:block;
		height:.9333rem;
		line-height:.9333rem;
		color:#333;
		white-space:nowrap;
		text-overflow:ellipsis;
		overflow:hidden;
		font-size:12PX;
			}
		}
	}
}
.co-info{
	width:100%;
	margin:0 auto;
	padding:20PX 0 0 0;
	color:#999;
	text-align:center;
	font-size:10PX;
	div{
		display:inline-block;
		height:0.5333rem;
		line-height:0.5333rem;
		img{
			float:left;
			max-width:100%;
			border:none;
		}
		p{
    float:left;
    height:0.5333rem;
    line-height:0.5333rem;
    margin:0 0 0 0.1333rem;
    color:#939393;
		}
	}
}
.co-infos{
	padding: 0 0.3rem;
	line-height:0.3rem;
	margin-top:.4rem;
	color:#999;
	text-align:center;
	font-size:10PX;
}
.co-infoss{
	margin-top:.4rem;
	color:#999;
	text-align:center;
	font-size:10PX;
	border-bottom:1px solid #999;
}
	.good{
		display:block;
	}
	.bad{
		display:none;
	}
</style>