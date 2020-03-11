import Vue from 'vue'
import Vuex from 'vuex'
/* eslint-disable */
Vue.use(Vuex);
 const store =new Vuex.Store({//store对象
    state:{
        header:{
            IsLogin:false,//是否登录
            LoginModel:false,//登录模态框开关,
            RegisterModel:false,//注册模态框开关
        },
        Edit:{
            NewArticle:{
                title:"",
                content:"",
            }
        }
    },
    mutations:{
        ChangeIsLoginss(state){
            state.header.IsLogin =true;
        },
        ChangeIsLogin(state){
                state.header.IsLogin = !state.header.IsLogin
        },
        ChangeLoginModel(state){
            state.header.LoginModel = !state.header.LoginModel
        },
        ChangeRegisterModel(state){
            state.header.RegisterModel = !state.header.RegisterModel
        },
        ChangeNewArticle(state,obj){
            state.Edit.NewArticle = obj
        }


    }
})
export default store
