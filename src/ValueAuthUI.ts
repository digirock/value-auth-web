import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import {ValueAuthDebugOptions, ValueAuthModule, ValueAuthOptions} from "@/library";

export default class ValueAuthUI {
    options?: ValueAuthOptions | ValueAuthDebugOptions;

    constructor(options: ValueAuthOptions | ValueAuthDebugOptions) {
        this.options = options;
    }

    build() {
        Vue.use(ValueAuthModule, this.options);
        const app = new Vue({
            router,
            render: h => h(App),
        });
        app.$mount(this.options!.mountTo)
    }
}


