import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
 const store =new Vuex.Store({//store对象
    state:{
        header:{
            IsLogin:true,//是否注册
            LoginModel:false,//登录模态框开关,
            RegisterModel:false,//注册模态框开关
        },
        Edit:{
            NewArticle:{
                title:"标题："+new Date().getTime(),
                content:"",
            }
        }
    },
    mutations:{
        ChangeIsLogin(state){
            state.header.IsLogin = !state.header.IsLogin
        },
        ChangeLoginModel(state){
            console.log(state)
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
