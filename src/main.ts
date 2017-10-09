import Vue from 'vue'

import App from './App.vue'

// import {router} from './router/router'

// import './public/css/reset.scss'

console.log(App)

// 创建一个空组件
Vue.extend({});

new Vue({
    // router,
    // store,
    render:function(h){
        return h(App)
    } //h => h(App)
}).$mount('#app')

// new Vue({
//     el: "#app",
//     template: `
//         <div>
//             <router-view></router-view>
//         </div>`,
//     router
//     // render: function(h){
//     //     console.log(h(App))
//     //     return h(App)
//     // }
// })
