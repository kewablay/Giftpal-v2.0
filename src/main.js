/* eslint-disable */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from "./store";
import LoadScript from 'vue-plugin-load-script';
import VueLazyload from 'vue-lazyload'
import  CKEditor from 'ckeditor4-vue';
import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);

// import "bootstrap";


// window.Vue = require("vue");
Vue.use(LoadScript);

Vue.use(CKEditor);


// window.$ = require('jquery');
// window.JQuery = require('jquery')

Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: '../../assets/img/error.png',
    loading: '../../assets/img/loader.gif',
    attempt: 1
});


Vue.config.productionTip = false;
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!store.getters.loggedIn) {
            store
                .dispatch("storeRedirectPath", {
                    path: to
                })
                .then(() => {
                    next({
                        name: "login"
                    });
                });
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.requiresVisitor)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (store.getters.loggedIn) {
            next({
                path: "/"
            });
        } else {
            next();
        }
    } else {
        next(); // make sure to always call next()!
    }
});


new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
