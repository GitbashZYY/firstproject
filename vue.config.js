 module.exports={
 	configureWebpack:{
 		devServer:{
 			proxy:{
 				"api":{
 					target:"http://novel.juhe.im",
 					pathRewrite:{'^/api': ''},
 					changeOrigin:true
 				}
 			}
 		}
 	}
 }
 // http://api.zhuishushenqi.com