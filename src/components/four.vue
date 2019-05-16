<template>
	<div class="four" >
		<div class="page-head">
			<div class="bar-red">
				<span class="bar-back">
					<i class="icon"></i>
					<i @click="back">返回</i>
				</span>
				<span class="index">
					<i class="homePage" @click="back"></i>
				</span>
				<h1>{{name}}</h1>
			</div>
		</div>
		<div class="filter-item">
			<div class="inner">
				<ul >
					<li :class="{red:activity}" @click="actived" >全部</li>
					<li v-for="(item,index) in fenlei"  @click="clickAdd(index)" :key="index"  :class="{red:i === index}">{{item}}</li>
				</ul>
			</div>
		</div>
  
  <!--  class="list-wraper" --> 
		<div class="list-wraper" v-for="(item,index) in major" :key="index" v-show="activity">
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
							<span class="split">|</span>
							{{item.majorCate}}</p>
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

		<div class="list-wraper" v-for="(item,index) in quanbu" :key="name + index" >
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
							<span class="split">|</span>
							{{item.majorCate}}</p>
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
		<div class="c-no-data" v-show="nofind">
				<span class="icon"></span>
				<span class="tip">暂无数据</span>
			</div>
	</div>
</template>

<script>
  export default{
  	name:'Four',
  	data(){
  		return{
  			activity:true,
  			active:0,
  			name:'',
  			fenlei:'',
  			major:'',
  			img: 'http://statics.zhuishushenqi.com',
  			i:null,
        yes:'',
        leixing:'',
        lunbo:'',
        quanbu:'',
        nofind:false
  		}
  	},
  	
  	created(){
  		// console.log(this.$route.query.userId)
     this.name = this.$route.query.userId;
     this.fenlei = this.$route.query.userId2
     // console.log('this.fenlei==>',this.fenlei)
     var xiaoshuo = "api/category-info?gender=male&type=hot&major=" + this.name;
     this.axios.get(xiaoshuo).then(res=>{
     	this.major = res.data.books
     	// console.log("bb",this.major.length)
     })
         
  	},
  	methods:{
  		back(){
  			if(this.active==1){
      this.router.push({name:'Login',query:{
      active:this.active
      }})
  			}else{
  				this.$router.go(-1);
  			}
  		},
  		clickAdd(index){
  		this.activity = false;
      this.i = index;
      // console.log(this.i)
      this.yes= this.$route.query.userId2;
      for(var b = this.i; b < this.yes.length; b ++){
       // console.log(this.yes[b]);
       this.leixing = this.yes[b];
       var lunbo = "api/category-info?gender=male&type=hot&major=" + this.name + "&minor=" +this.leixing ;
       this.axios.get(lunbo).then(res=>{
        this.quanbu = res.data.books
        // console.log("cc",this.quanbu.length)
       })
       if(this.quanbu.length == 0){
         this.nofind=true;
       }
      // console.log("this.leixing==>",this.leixing)
       return;
      }
  		},
  		actived(){
      this.activity = true;
      this.i = null;
      if(this.major.length == 0){
      	this.nofind=true;
      }
  		}

  	}
  }	
</script>

<style lang="less" scoped>
html.border *{
	box-sizing: border-box;
}
li.active{
	color:red;
}
p{
	margin:0;
	color:#999;
}
a{
	text-decoration:none;
}
.four{
	width:100%;
	height:100%;
  position:absolute;
  top:0;
  left:0;
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
.filter-item{
	position:relative;
	width:100%;
	height:1.2rem;
	line-height:1.2rem;
	overflow:hidden;
	color:#666;
	.inner{
		height:100%;
		overflow-x:auto;
		ul{
			margin:0;
			width:auto;
			height:100%;
			white-space:nowrap;
			text-overflow:ellipsis;
			list-style:none;
			padding:0;
			li:first-child{
				padding-left:.4rem;
			}
			li{
				display:inline-block;
				height:100%;
				padding:0 .2666rem;
				font-size:13px;
			}
		}
	}
}
.list-wraper{
	position:relative;
	width:100%;
	overflow-y:auto;
	.c-app-book-list{
		background-color:#f5f2ed;
		.c-app-book-lister{
			padding-left:.4rem;
			.inner{
				padding:.4rem .4rem .4rem 0;
				.cover{
					float:left;
					width:1.6rem;
					height:2rem;
					border:1px solid #ebebeb;
					overflow:hidden;
					img{
						width:100%;
						display:block;
					}
				}
				.right{
					height:2rem;
					margin-left:2rem;
					.name{
						margin:0;
						height:.5333rem;
						white-space:nowrap;
						text-overflow:ellipsis;
						overflow:hidden;
						line-height:.5066rem;
						color:#333;
						font-size:14px;
					}
					p{
						line-height:.5333rem;
						height:.5333rem;
						white-space:nowrap;
						text-overflow:ellipsis;
						overflow:hidden;
						.split{
							padding:0 .2666rem;
						}
						
					}
					.important{
							color:#666;
							.c-red{
								color:#b93321;
							}
							.split{
								padding:0 .2666rem;
							}
							.c-red{
								color:#b93321;
							}
						}
				}
			}
		}
	}
}
.red{
	color:red;
}
.no{
	color:#666;
}
.c-no-data{
	width:2.1333rem;
	margin:2.4rem auto;
	.icon{
		display:inline-block;
		width:100%;
		height:2.1333rem;
		background:url(../assets/no.png) 50% no-repeat;
		background-size:contain;	
	}
	.tip{
		display: inline-block;
    width: 100%;
    height: .8rem;
    line-height: .8rem;
    margin: .26667rem auto;
    text-align: center;
    color: #ccc;
    font-size: 16px;
	}
}
</style>