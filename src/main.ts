import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import DebugClient from "@/debug/DebugClient";
import * as i18nCountries from "i18n-iso-countries";

const authCode = "f684f2c89fdea6ad4fa4b23d59bcaafe"
const customerKey = "test";
const accessToken = "";
const apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQ4OGZiYWRmMTM1MjNjNTI2MTI1NDFjYzA5ZGJlMDEyOWM1N2QyZTYxYWZmMjlkMzFiYWViOTI3MGFiZDI3ZmY5ZWFmMzY0YWRhY2RiMTg3In0.eyJhdWQiOiIxIiwianRpIjoiZDg4ZmJhZGYxMzUyM2M1MjYxMjU0MWNjMDlkYmUwMTI5YzU3ZDJlNjFhZmYyOWQzMWJhZWI5MjcwYWJkMjdmZjllYWYzNjRhZGFjZGIxODciLCJpYXQiOjE1OTg1ODYxNjEsIm5iZiI6MTU5ODU4NjE2MSwiZXhwIjozMzEyMzg3MjU2MSwic3ViIjoiOCIsInNjb3BlcyI6W119.F8gqpNo_a05manarPETiA66Qa8IA8B3W1JrQnJnkhra-0_cG3sLzO-jG-R-JAUcxYp_9MrZl11NBT0ihBeMqdKcJycK1IwO-_u32ee6kx6ayIQYPFYi-LArz0u-IVuouDqUuJjXvaEd1jn0RKnMiPh4H6hylwQbRJjp1gE9Jea2_NndPsYBQ68ozmXv6vBNliSXqMaBZkSMRK-HgDoogcAEx4XkaPmIh8KYtwPOnkoReZGehZ5f3GFJTBCl9AxHTOFgZiwk3X5eqjE353059LbuzSFLvk39uSLH8owZNWmqnChtiu7hHypkiL79vdXaheVccR_TPYI8hhDskFPp-bfh8FP7MiD7R3lRb46CYoCd62ELlRlFH4KkTgZyMloAPsEkbeJBhNjMwWi88mpbKvKty3n9smNrR8dPHWaSSyWxmZ4A0B-b9uluOOXOh4zg20tWPF1rX0UDx0ReEONaA_wsxJxgDRHRZZkxqREKWUxqu51uPm0RP-BhqfAzMOYais64bhYFUG-shwVMZ_YxVso1_S4LykjVTFsK71hP_30g5FS2Wfq7brUf21Qz5G0TPoCbuVMcmgTPk1xnpyTi8pIBy-V2Dltixt0CqLVGhT65xhFpLPXAS9ntQJxqTvTb4LKsiFd5O7fJzU3O6wBdPpOA0GqDEJokPZaVb9867DLI";
Vue.config.productionTip = false
const eventBus = new Vue();
Vue.prototype.$eventBus = eventBus;
let apiClient = new DebugClient({
    authCode, customerKey, apiKey, xdebug: 'PHPSTORM', initializationCallback: client => {
        if (client.accessToken) {
            eventBus.$emit('api-client-initialized');
        }
    }
});
Vue.prototype.$apiClient = apiClient;

i18nCountries.registerLocale(require("i18n-iso-countries/langs/ja.json"))
const app = new Vue({
    router,
    store,
    render: h => h(App),
});

app.$mount('#app')
