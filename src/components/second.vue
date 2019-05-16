 <template>
	<div class="second">
	<div class="wrap">
		<h3 class="toolBar">热门推荐</h3>
		<span @click="back">返回</span>
	</div>
	 <ul>
	 	<li class="oneBook" v-for="(item,index) in books" :key="index">
	 	<router-link :to="{name:'Third', query: { userId: item._id }}">
	 		<img :src='img + item.cover' class="book_cover" />
	 		<h2 class="book_title">{{item.title}}</h2>
	 		<p class="author">作者：{{item.author}}</p>
	 		<p class="book_summary">{{item.shortIntro}}</p>
	 		<div class="book_price">
	 			<span class="book_current">评分：{{item.otherReadRatio}}</span>
	 		</div>
	 		</router-link>
	 	</li>
	 </ul>

     </div> 
</template>

<script>
	export default{
		name:'Second',
		data(){
			return{
       reyin: {},
            img:'http://statics.zhuishushenqi.com',
            books:'',
            bookname:''
			}
		},
		created(){
      var reyinurl = "api/recommend/53115e30173bfacb4904897e";
      this.axios.get(reyinurl).then(res=>{
      	console.log(res)
      	this.books=res.data.books
      	console.log("abc",this.books)
      })
		},
		methods:{
			back(){
				if (this.active == 1){
         this.router.push({name: 'login',query:{
         	active: this.active
         }})
				}else{
					this.$router.go(-1);
				}
			}
		}
	}
</script>

<style>
body{
		margin: 0 auto;
		padding: 0;
	}
	p,h2,h3{
		margin: 0;
		padding: 0;
	}
	ul,li{
		list-style: none;
		padding: 0;
		margin: 0;
	}
	a{
		text-decoration: none;
	}
	.second .wrap{
		height: 1.1466rem;
		background: #00d37d;
		border-bottom: 1px solid #c2c2c2;
		position: relative;
		line-height: 1.1466rem;
		text-align: center;
		color: #fff;
		font-size: 18PX;
		padding: 0 0.2133rem 0 0.1066rem;
	}
	.second .wrap span{
		position: absolute;
		display: block;
		color: #fff;
		font-size: 14PX;
		top: 0.2133rem;
		font-weight: 400;
		height: 0.7466rem;
		line-height: 0.7466rem;
		width: 1.0666rem;
		padding: 0 1PX 0 0.24rem;
		text-align: center;
		overflow: hidden;
		background: url(../assets/fh.png);
		background-size: 1.3333rem 0.7466rem;
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
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
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

</style>
