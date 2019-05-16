<template>
	<div class="thirteen">
		<div class="page-head">
			<div class="bar-red">
				<span class="bar-back">
					<i class="icon" @click="back"></i>
				</span>
				<span class="index">
				</span>
				<div>登录云书君账号</div>
			</div>
		</div>
		<div class="mod-content">
			<div class="form">
				<div class="img-div">
					<div class="logo-dom"></div>
				</div>
				<p class="form-input-wrapper form-item-username form-input-mobile">
			<input type="text" name="" class="text-input" maxlength="60" placeholder="手机号" v-model="userInfo.phone">
		</p>
		<p class="form-input-wrapper form-item-username form-input-mobile">
			<input type="password" name="" class="text-input" maxlength="60" placeholder="输入密码(8-16位)" v-model="userInfo.pwd" >
		</p>
		<p class="form-item form-item-btn">
			<input type="submit" value="登录" class="pass-button-full pass-button-full-disabled" @click="login">
		</p>
		<div class="f14">
			<div class="left">登录遇到问题</div>
			<div class="type-other-login">其他登录模式</div>
		</div>
		<p class="f14 account-login account-login-width">
			<router-link :to="{name:'Register'}"><span>立即注册</span></router-link>
		</p>
			</div>
			
		</div>
		
	</div>
</template>
<script>
import validForm from '../utils/validForm.js'

import tip from '../utils/tip.js'
	export default{
		name:'Thirteen',
		data(){
			return{
       active:0,
       user:[],
       userInfo:{
       	phone:'',
       	pwd:''
       }
			};
				},
			methods:{
      back(){
      	this.$router.push({name:'login'})
      },
      login() {

				//验证手机号
				if (!validForm.validPhone(this.userInfo.phone)) {

					tip.dialogTip('手机号码不正确', true, this.userInfo, 'phone');

				} else if (!validForm.validPwd(this.userInfo.pwd, 8, 16)) {
					//验证密码

					tip.dialogTip('密码只支持!@._字母数字组合', true, this.userInfo, 'pwd');

				} else {

					var userData = localStorage.getItem('users');

					if (userData) {
						//如果存在用户
						this.users = JSON.parse(userData);

						for (var i = 0; i < this.users.length; i++) {

							if (this.users[i].phone == this.userInfo.phone) {
								//如果手机号匹配, 验证密码

								if (this.users[i].pwd == this.userInfo.pwd) {
                   //跳转路由
									// return this.$router.push({name: ''});
									alert("登录成功")
									return

								} else {

									return tip.dialogTip('手机号或者密码不正确');
									
								}


							}
              
						}
             
						//不存该用户
						tip.dialogTip('该用户不存在');

					}

				}

			}
			}
	
	}
</script>
<style lang="less" scoped>
input{
	outline:none;
}
.auto-img{
	display:block;
	width:100%;
	height:100%;
}
.thirteen{
	position:absolute;
	width:100%;
	top:0;
	left:0;
	background:#f5f5f5;
	min-height:100%;
.page-head{
	position:relative;
	z-index:20;
	height:1.1733rem;
	overflow:hidden;
	background:#fff;
	.bar-red{
		border-bottom:1PX solid #d6d6d6;
		position:fixed;
		z-index:20;
		width:100%;
		height:1.1733rem;
		overflow:hidden;
		.bar-back{
    position:absolute;
    width:1.6rem;
    text-align:center;
		.icon{
			width:.4rem;
			height:1.1733rem;
			background:url(../assets/left.png) no-repeat;
			background-size:80%;
			background-repeat:no-repeat;
			background-position:50%;
		}
		i{
			display:inline-block;
			vertical-align:middle;
			font-style:normal;
		}
		}
		
		div{
			width:70%;
			height:100%;
			margin:0 auto;
			line-height:1.1733rem;
			text-align:center;
			font-size:.48rem;
			white-space:nowrap;
			text-overflow:ellipsis;
			overflow:hidden;
			color:#333;
		}
	}
}
.mod-content{
	padding-bottom:2.4rem;
	.form{
		padding:0 .4rem;
		overflow:hidden;
		.img-div{
			width:100%;
			height:2.1333rem;
			margin-top:.9333rem;
			.logo-dom{
				width:5.68rem;
				height:2.2266rem;
				margin:0 auto;
				background:url(../assets/logo.png) no-repeat;
				background-size:100% 100%;
			}
		}
		.form-input-wrapper{
	display: -webkit-box;
    height: 1.28rem;
    padding: 0 .3733rem;
    background: #fff;
    flex: 1;
    height: 1.28rem;
    padding: 0 .3733rem;
    background: #fff;
    border-radius: .0533rem;
    .text-input{
    	border: 0;
    display: block;
    -webkit-box-flex: 1;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: rgba(255,0,0,0);
    font-size: .426666666666667rem;
    height: .48rem;
    padding-top: .4rem;
    padding-bottom: .346666666666667rem;
    color: #333;
    background: transparent;
    }
}
.form-item-username{
	position:relative;
}
.form-input-mobile{
	border:1PX solid #ccc;
}
.form-item-btn{
	border:0;
	width:auto;
	.pass-button-full{
		font-size: .48rem;
    width: 100%;
    line-height: 1.333333333333333rem;
    height: 1.333333333333333rem;
    display: block;
    text-align: center;  
    border: .026666666666667rem solid #3c76ff;
    background: #3c76ff;
    margin: .666666666666667rem 0 .64rem;border: .026666666666667rem solid #3c76ff;
    background: #3c76ff;
    margin: .666666666666667rem 0 .64rem;
	}
	.pass-button-full-disabled{
		color:#90b6ff;
		opacity:1;
	}
	}
}
.f14{
	font-size:.3733rem;
	display:block;
	color:#999;
	.left{
		float:left;
	}
	.type-other-login{
		float:right;
	}
	
}
	.account-login-width{
		width:3.2rem;
		margin:0 auto;
		left:50%;
    margin-left:-1.6rem;
	}
	.account-login{
		color:#367cff;
		font-size:.4266rem;
		position:absolute;
		bottom:.5866rem;
		text-align:center;
		span{
			    color: #367cff;
    width: 2.933333333333333rem;
    height: 1.2rem;
    display: inline-block;
    line-height: 1.173333333333333rem;
    border: .013333333333333rem solid #367cff;
    border-radius: .053333333333333rem;
		}
	}
}

}
</style>