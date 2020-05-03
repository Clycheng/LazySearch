import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Search from '@/components/Search/Index'
import Details from '@/components/Details/Index'
import Edit from '@/components/Edit/Index'
import NewArticle from '@/components/Edit/Child/NewArticle'
import List from '@/components/Edit/Child/List'
import Intimg from '@/components/Edit/Child/Intimg'
import upload from '@/components/Edit/Child/upload'
import imgtable from '@/components/Edit/Child/imgtable'
import Default from '@/components/Edit/Child/Default'
import MyArticle from '@/components/MyArticle/Index'
import auother from '@/components/MyArticle/auother'
import VIP from '@/components/VIP/index'
import Users from '@/components/header/Users'
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
        },
        {
          path: 'upload',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
          name: 'upload',
          component: upload
        },
        {
          path: 'imgtable',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
          name: 'imgtable',
          component: imgtable
        },
      ]
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
      path: '/Users',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
      name: 'Users',
      component: Users
    },
  ]
})
