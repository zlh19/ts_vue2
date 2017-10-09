import Vue from 'vue'
import VueRouter from 'vue-router'
// import {setWechatTitleFun} from './../public/js/model'

// 实例化VueRouter
Vue.use(VueRouter);

class Meta{
    title:string;
    isLogin:number;
}

class Route{
    path: string;
    name?: string;
    meta?: Meta;
    redirect?:string;
    component?:(resolve:any)=>void
}
// 路由表
const routes:Route[] = [{ //首页
    path: '/',
    name: '/',
    meta: {
        title: '首页',
        isLogin:0
    },
    redirect: '/login'
},{
    path: '/login',
    name: 'login',
    meta: {
        title: '登录',
        isLogin:0
    },
    component:(resolve)=>{
        console.log(resolve,"+++")
        Promise.resolve('../vue/login/login.vue')
        // require(,resolve)
    }
},
{
    path: '*',
    redirect: '/login'
}]




var router = new VueRouter({
    routes:[]
})


export {
    router
}
