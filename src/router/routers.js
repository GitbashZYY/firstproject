//导入文件时，如果没有./,默认从node_modules查找文件
import routesComponent from './routerComponent.js'


//路由配置
export default [
      {
        path: '/',
        name: 'login',
        component: routesComponent.First  
        },  
      {
        path: '/third',
        name: 'Third',
        component: routesComponent.Third
       },   
    
      {
        path: '/second',
        name: 'Second',
        component: routesComponent.Second
      },
      {
      	path:'/four',
      	name:'Four',
      	component:routesComponent.Four
      },
      {
      	path:'/five',
      	name:'Five',
      	component:routesComponent.Five,
        meta:{
           keepAlive: true
        }
      },
      {
      	path:'/six',
      	name:'Six',
      	component:routesComponent.Six
      },
      {
      	path:'/seven',
      	name:'Seven',
      	component:routesComponent.Seven
      },
      {
        path:'/eight',
      	name:'Eight',
      	component:routesComponent.Eight
      },
      {
        path:'/nine',
      	name:'Nine',
      	component:routesComponent.Nine
      },
      {
        path:'/ten',
        name:'Ten',
        component:routesComponent.Ten
      },
      {
        path:'/eleven',
        name:'Eleven',
        component:routesComponent.Eleven
      },
      {
        path:'/twelve',
        name:'Twelve',
        component:routesComponent.Twelve
      },
      {
        path:'/thirteen',
        name:'Thirteen',
        component:routesComponent.Thirteen
      },
      {
        path:'/register',
        name:'Register',
        component:routesComponent.Register
      }

]