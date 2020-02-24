import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Search from '@/components/Search/Index'
import Details from '@/components/Details/Index'
import Edit from '@/components/Edit/Index';
import NewArticle from '@/components/Edit/Child/NewArticle'
import List from '@/components/Edit/Child/List'
import Default from '@/components/Edit/Child/Default'
import Preview from '@/components/Edit/Child/Preview'
import MyArticle from '@/components/MyArticle/Index'

Vue.use(Router)

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
    }
  ]
})
