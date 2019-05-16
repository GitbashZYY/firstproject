<template>
	<div class="six">
	<div class="white-theme"  @click="looked" :class="{selfchange:activity,backchange:change,greenchange:changes}">
		<div class="reader-content">
			<div class="reader-content-details">
				<h1 :class="{twenty:sizes,twentytwo:size1,twentyfour:size2,twentysix:size3,twentyeight:size4}">{{text.title}}</h1>
			</div>
		</div>
		<div class="read-content">
			<div class="inner" :class="{fourteen:sizes,sixteen:size1,eighteen:size2,twenty:size3,twentytwo:size4}">{{text.cpContent}}</div>
		</div>
		</div>
		<div class="page-read-option" v-show="look">
			<div class="top-controll-bar">
				<span class="back">
        <i class="icon"></i>
        <i @click="back">返回</i>
				</span>
				<h1>{{name}}</h1>
			</div>
			<div class="boottom-controll-panel" >
			<div class="item">
				<span class="btn font-btn-w disable" @click ="reduce">Aa-</span>
				<span class="btn progress-bar">
					<span class="content" id="content" :class="{none:sizes,twentyfive:size1,fifty:size2,seventyfive:size3,onehundred:size4}"></span>
				</span>
				<span class="btn font-btn-w" @click="add">Aa+</span>
			</div>
			<div class="item">
				<span class="btn square" @click="clicks" :class="{active:activity}">默认</span>
				<span class="btn square" @click="click" :class="{active:change}" >夜晚</span>
				<span class="btn square" @click="clickss" :class="{active:changes}">护眼</span>
			</div>
		</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:'Six',
		data(){
			return{
        text:'',
        active:0,
        look:false,
        name:'',
        size:0,
        sizes:true,
        size1:false,
        size2:false,
        size3:false,
        size4:false,
        activity:true,
        change:false,
        changes:false
			}
		},
		created(){
			// console.log(this.$route.query.userId);
			// console.log(this.$route.query.userId2);
			this.name = this.$route.query.userId2;
			// console.log(name)
			let link = this.$route.query.userId;
			var fuck = encodeURIComponent(link);
		  // console.log(fuck);

		  var links = "api/chapters/" + fuck;
		  this.axios.get(links).then(res=>{
		  	this.text=res.data.chapter
		  	console.log(this.text)
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
			looked(){
				this.look = !this.look;
			},
			add:function(){
				this.size=this.size+1;
				if(this.size > 4){
					this.size = 4;
					return;
					}
				if(this.size ==1){
        this.sizes = false;
        this.size1 = true;
				}else if(this.size == 2){
        this.size1 = false;
        this.size2 = true;
				}else if(this.size == 3){
        this.size2 = false;
        this.size3 = true;
				}else if(this.size ==4){
         this.size3 = false;
         this.size4 = true;
				}
				
				// console.log("a",this.size);
				
				},
				reduce(){
        this.size = this.size-1;
        // if(this.size = 0){
        // 	this.size = 0;
        // 	return;
        // }
        if(this.size == 3){
        	this.size3 = true;
        	this.size4 = false;
        }else if(this.size == 2){
        	this.size2 = true;
        	this.size3 = false;
        }else if(this.size == 1){
        	this.size1 = true;
        	this.size2 = false;
        }else if(this.size ==0){
        	this.sizes = true;
        	this.size1 = false;
        }
        // console.log("b",this.size);
				},
				actived(){
				this.activity=false;
			},
			clicks(){
      this.activity=true;
      this.change=false;
      this.changes=false;
      this.look=false;
			},
			click(){
       this.change=true;
       this.activity=false;
       this.changes=false;
       this.look=false;
			},
			clickss(){
      this.changes=true;
       this.activity=false;
        this.change=false;
        this.look=false;
			}
			}
			
		}
	
</script>

<style lang="less">
body{
	margin:0;
	padding:0;
}
.selfchange{
	background-color:#eee6dd;
	color:5c5d58;
}
.backchange{
			background-color:#0c0c0c;
			color:#fff;
		}
		.greenchange{
			background-color:#b8cd8d;
			color:#0c2e10;
		}
		.fourteen{
			font-size:14PX;
		}
		.sixteen{
			font-size:16PX;
		}
		.eighteen{
			font-size:18PX;
		}
		.twenty{
			font-size:20PX;
		}
		.twentytwo{
			font-size:22PX;
		}
		.twentyfour{
			font-size:24PX;
		}
		.twentysix{
			font-size:26PX;
		}
		.twentyeight{
			font-size:28PX;
		}
		.none{
			width:0;
		}
		.twentyfive{
			width:25%;
		}
		.fifty{
			width:50%;
		}
		.seventyfive{
			width:75%;
		}
		onehundred{
			width:100%;
		}
	.white-theme{

		min-height:667px;
		height:100%;
		width:100%;
		
		.reader-content{
			.reader-content-details{
				padding-top:.6666rem;
				h1{
					font-weight:400;
					padding:0 .5333rem;
					line-height:1.5rem;
					margin:0;
				}
			}
		}
		.read-content{
			width:100%;
			height:100%;
			.inner{
				text-align:justtify;
				padding:.2666rem .5333rem 0;
				line-height:1.5rem;
			}
		}
		
}
.page-read-option{
      visibility:visible;
      
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* z-index: 999; */
     .top-controll-bar{
      	opacity:1;
      	position:fixed;
      	top:0;
      	left:0;
      	z-index:21;
      	width:100%;
      	height:1.1733rem;
      	color:#fff;
      	background-color:rgba(50,51,52,.9);
      	transition:all .2s ease;
     .back{
	     	position:absolute;
	     	width:1.6rem;
	     	text-align:center;
	     	color:#fff;
	     	font-size:12px;
     .icon{
     	display:inline-block;
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
    h1{
    	font-size:14px;
    	width:70%;
    	height:100%;
    	margin: 0 auto;
    	line-height:1.1733rem;
    	text-align:center;
    	white-space:npwrap;
    	text-overflow:ellipsis;
    	overflow:hidden;
    }
		}
	}
	.boottom-controll-panel{
		position: fixed;
    bottom: 0;
    left: 0;
    z-index: 21;
    width: 100%;
    height: 3.3333rem;
    padding: .53333rem;
    background-color: rgba(50,51,52,.9);
    transition: all .2s ease;
    .item{
    	position: relative;
    height: .8rem;
    margin-bottom: .53333rem;
    font-size: 0;
    .btn{
    	display: inline-block;
    vertical-align: middle;
    
    line-height: .8rem;
    text-align: center;
    border-radius: 2px;
    color: #fff;
    font-size: 14px;
    }
    .font-btn-w{
    	width:.8533rem;
    	font-size:.5066rem;
    }
    .disable{
    	background-color:transparent;
    	color:#888;
    }
    .progress-bar{
    	width:6.4rem;
    	height:.05333rem;
    	background:#b2b2b2;
    	border-radius:0.2666rem;
    	margin:0 .4rem;
    	.content{
    		height:.05333rem;
    		display:block;
    		background:#b93221;
    		border-radius:.0266rem;
    	}
    }
    }
    
		}
		.item{
    	position:relative;
    	height:.8rem;
    	margin-bottom:.5333rem;
    	font-size:0;
    	.btn{
    		display: inline-block;
    vertical-align: middle;
    height: .8rem;
    line-height: .8rem;
    text-align: center;
    border-radius: 2px;
    color: #fff;
    font-size: 14px;
    	}
    	.square{
    		width: 2.66667rem;
    color: #fff;
    border: 1px solid #535353;
    border-radius: .10667rem;
    	}
    	.square:nth-of-type(2){
    		margin:0 .4533rem;
    	}
    	.active{
    		color:#b93221;
    		border:1px solid #b93221;
    	}
    }
</style>

