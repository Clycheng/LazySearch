import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Search from '@/components/Search/Index'
import Details from '@/components/Details/Index'
import Edit from '@/components/Edit/Index'
import NewArticle from '@/components/Edit/Child/NewArticle'
import List from '@/components/Edit/Child/List'
import Intimg from '@/components/Edit/Child/Intimg'
import Default from '@/components/Edit/Child/Default'
import Preview from '@/components/Edit/Child/Preview'
import MyArticle from '@/components/MyArticle/Index'
import auother from '@/components/MyArticle/auother'
import VIP from '@/components/VIP/index'
import Users from '@/components/header/Users'
import logintext from '@/components/VIP/logintext'
// logintext:用于检测用户是否登录，如果没有登录，弹出logintext进行登录。
Vue.use(Router)

/* eslint-disable */
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:"/Search",
      name:"Search",
      component:Search
    },
    {
      path:"/Details/:id?",
      name:"Details",
      component:Details
    },
    {
      path:"/Edit",
      component:Edit,
      children: [
        {
          path:"",
          name:"Default",
          component:Default
        },
        {
          path: 'new',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
          name: 'NewArticle',
          component: NewArticle
        },
        {
          path: 'list',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
          name: 'List',
          component: List
        },
        {
          path: 'Intimg',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
          name: 'Intimg',
          component: Intimg
        }
      ]
    },
    {
      path: '/Preview',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
      name: 'Preview',
      component: Preview
    },
    {
      path: '/MyArticle',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
      name: 'MyArticle',
      component: MyArticle
    },
    {
      path: '/auother',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
      name: 'auother',
      component: auother
    },
    {
      path: '/VIP',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
      name: 'VIP',
      component: VIP
    },
    {
      path: '/logintext',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
      name: 'logintext',
      component: logintext 
    },
    {
      path: '/Users',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
      name: 'Users',
      component: Users
    },
  ]
})
