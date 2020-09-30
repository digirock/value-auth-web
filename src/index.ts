import Vue, {PluginObject} from "vue";
import MenuBar from "./components/MenuBar.vue";
import BaseView from "./views/BaseView.vue";
import ContactRow from "./components/ContactRow.vue";
import ContentWrapper from "./components/ContentWrapper.vue";
import CountryRow from "./components/CountryRow.vue";
import DataRow from "./components/DataRow.vue";
import IpAddressRow from "./components/IpAddressRow.vue";
import LocationRow from "./components/LocationRow.vue";
import LoginLogRow from "./components/LoginLogRow.vue";
import CodeInputView from "./views/CodeInputView.vue";
import LocationAndIpView from "./views/LocationAndIpView.vue";
import LoginLogsView from "./views/LoginLogsView.vue";
import SecuritySettingsView from "./views/SecuritySettingsView.vue";
import SmsAndEmailView from "./views/SmsAndEmailView.vue";
import ManagementConsole from "./views/ManagementConsole.vue";
import {AccessTokenRole, ApiClient, DebugClient} from "value-auth-js";
import * as i18nCountries from "i18n-iso-countries";

const Components: { [name: string]: any } = {
    'menu-bar': MenuBar,
    'base-view': BaseView,
    'contact-row': ContactRow,
    'content-wrapper': ContentWrapper,
    'country-row': CountryRow,
    'data-row': DataRow,
    'ip-address-row': IpAddressRow,
    'location-row': LocationRow,
    'login-log-row': LoginLogRow,
    'code-input-view': CodeInputView,
    'location-and-ip-view': LocationAndIpView,
    'login-logs-view': LoginLogsView,
    'security-settings-view': SecuritySettingsView,
    'sms-and-email-view': SmsAndEmailView,
    'management-console': ManagementConsole
}

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

export const ValueAuthModule: PluginObject<any> = {
    install(vue: typeof Vue, options?: any): void {
        const eventBus = new Vue();
        Vue.prototype.$vaEventBus = eventBus;
        let apiClient: ApiClient;
        if ((options as any)?.apiKey) {
            let {authCode, customerKey, apiKey, xdebug, baseUrl, role} = options as ValueAuthDebugOptions;
            apiClient = new DebugClient({
                authCode, customerKey, apiKey, xdebug, baseUrl, role, initializationCallback: client => {
                    if (client.accessToken) {
                        eventBus.$emit('value-auth-api-client-initialized');
                    }
                    return client;
                }
            });
        } else {
            let {accessToken, baseUrl, xdebug, role} = options as ValueAuthOptions;
            apiClient = new ApiClient({
                accessToken, xdebug, baseUrl, role, initializationCallback: client => {
                    eventBus.$emit('value-auth-api-client-initialized');
                    return client;
                }
            })
        }
        Vue.prototype.$vaApiClient = apiClient;
        Object.keys(Components).forEach(name => {
            vue.component('value-auth-' + name, Components[name]);
        })
        i18nCountries.registerLocale(require("i18n-iso-countries/langs/ja.json") as any)
    }
}

export {
    MenuBar,
    BaseView,
    ContactRow,
    ContentWrapper,
    CountryRow,
    DataRow,
    IpAddressRow,
    LocationRow,
    LoginLogRow,
    CodeInputView,
    LocationAndIpView,
    LoginLogsView,
    SecuritySettingsView,
    SmsAndEmailView,
    ManagementConsole
};