import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
////////// RUTAS //////////
import agregarProveedores from "./components/agregarProveedores";

Vue.config.productionTip = false

const routes = [
    {path : "/agregarProveedores", component : agregarProveedores}
]

const router = new VueRouter({
    routes,
    mode: "history"
});
Vue.use(VueRouter)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
