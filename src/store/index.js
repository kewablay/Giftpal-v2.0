import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
/* eslint-disable */


export default new Vuex.Store({
    state: {
        token: localStorage.getItem("company_access_token") || null,
        userInfo: JSON.parse(localStorage.getItem("company_userInfo")) || null,
        redirectPathLink: JSON.parse(localStorage.getItem("redirectPathLink")) || null,
        declaration: localStorage.getItem("company_declaration") || false,
    },
    mutations: {
        retrieveToken(state, token) {
            state.token = token.data.jwt;
            state.userInfo = token.data.info;
            state.type = 'intern'
        },
        companyLogin(state, token) {
            state.token = token.data.token;
            state.userInfo = token.data.data;
        },
        storeRedirectPath(state, data) {
            state.redirectPathLink = data;
        },
        declaration(state, data) {
            state.declaration = data;
        },
        destroyToken(state) {
            state.token = null;
            state.userInfo = null;
            state.redirectPathLink = null;
            state.socketInfo = null;
        }
    },
    getters: {
        loggedIn(state) {
            return state.token !== null;
        }
    },
    actions: {
        destroyToken(context) {
            if (context.getters.loggedIn) {
                return new Promise(resolve => {
                    localStorage.removeItem("company_access_token");
                    localStorage.removeItem("company_userInfo");
                    localStorage.removeItem("redirectPathLink");
                    context.commit("destroyToken");
                    resolve({
                        success: true
                    });
                });
            }
        },
        declaration(context, data) {
            return new Promise((resolve, reject) => {
                axios.get(`https://kc0dn3da9f.execute-api.us-east-1.amazonaws.com/dev/base/application/accept-terms/${data.applicant_id}`).then((res) => {
                    localStorage.setItem(
                        "intern_declaration", data.data
                    );
                    resolve(context.commit("declaration", data.data));
                }).catch((err) => {
                    reject(err);
                })
            });
        },
        storeRedirectPath(context, data) {
            return new Promise((resolve, reject) => {
                localStorage.setItem(
                    "redirectPathLink",
                    JSON.stringify(data)
                );
                resolve(context.commit("storeRedirectPath", data));
            });
        },
        companyLogin(context, credentials) {
            return new Promise((resolve, reject) => {
                axios
                    .post(
                        `${process.env.VUE_APP_COMPANY_URL}/login`, {
                            company_email: credentials.email,
                            company_password: credentials.password
                        }
                    )
                    .then((res) => {
                        let {data, token} = res.data;
                        localStorage.setItem("company_access_token", token);
                        localStorage.setItem(
                            "company_userInfo",
                            JSON.stringify(data)
                        );
                        context.commit("companyLogin", {
                            data: res.data,
                        });
                        resolve(data);
                    }).catch((err) => {
                    reject(err)
                });
            });
        },
        companyRegister(context, credentials) {
            return new Promise((resolve, reject) => {
                axios
                    .post(
                        `${process.env.VUE_APP_COMPANY_URL}/register`, {
                            company_name: credentials.company_name,
                            company_email: credentials.email,
                            company_password: credentials.password
                        }
                    )
                    .then((res) => {
                        console.log(res)
                        let {data, token} = res.data;
                        localStorage.setItem("company_access_token", token);
                        localStorage.setItem(
                            "company_userInfo",
                            JSON.stringify(data)
                        );
                        context.commit("companyLogin", {
                            data: res.data,
                        });
                        resolve(data);
                    }).catch((err) => {
                    reject(err)
                });
            });
        },
        retrieveToken(context, credentials) {
            return new Promise((resolve, reject) => {
                axios
                    .post(
                        "https://doja39ypu6.execute-api.us-east-1.amazonaws.com/prod/auth", {
                            email: credentials.email,
                            rememberme: true,
                            type: "student",
                            password: credentials.password
                        }
                    )
                    .then(res => {
                        const token = res.data.data.jwt;
                        localStorage.setItem("intern_access_token", token);
                        localStorage.setItem("login_type", 'intern');

                        localStorage.setItem(
                            "intern_userInfo",
                            JSON.stringify(res.data.data.info)
                        );
                        context.commit("retrieveToken", {
                            data: res.data.data,
                        });

                        resolve(res.data.data);
                    })
                    .catch(err => {
                        reject(err);
                    });
            });
        },
    },
    modules: {}
});
