import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import * as i18nCountries from "i18n-iso-countries";
import {AccessTokenRole, ApiClient, DebugClient} from "value-auth-js";

export interface ValueAuthOptions {
    accessToken: string,
    mountTo: string,
    baseUrl: string,
    xdebug?: string,
    role: AccessTokenRole
}

export interface ValueAuthDebugOptions {
    apiKey: string,
    customerKey: string,
    authCode: string,
    mountTo: string,
    baseUrl: string,
    xdebug?: string,
    role: AccessTokenRole
}


export default class ValueAuthUI {
    options?: ValueAuthOptions | ValueAuthDebugOptions;

    constructor(options: ValueAuthOptions | ValueAuthDebugOptions) {
        this.options = options;
    }

    build() {
        Vue.config.productionTip = false
        const eventBus = new Vue();
        Vue.prototype.$vaEventBus = eventBus;
        let apiClient: ApiClient;
        if ((this.options as any)?.apiKey) {
            let {authCode, customerKey, apiKey, xdebug, baseUrl, role} = this.options as ValueAuthDebugOptions;
            apiClient = new DebugClient({
                authCode, customerKey, apiKey, xdebug, baseUrl, role, initializationCallback: client => {
                    if (client.accessToken) {
                        eventBus.$emit('api-client-initialized');
                    }
                    return client;
                }
            });
        } else {
            let {accessToken, baseUrl, xdebug, role} = this.options as ValueAuthOptions;
            apiClient = new ApiClient({
                accessToken, xdebug, baseUrl, role, initializationCallback: client => {
                    eventBus.$emit('api-client-initialized');
                    return client;
                }
            })
        }
        Vue.prototype.$vaApiClient = apiClient;

        i18nCountries.registerLocale(require("i18n-iso-countries/langs/ja.json"))
        const app = new Vue({
            router,
            render: h => h(App),
        });


        app.$mount(this.options!.mountTo)
    }
}


