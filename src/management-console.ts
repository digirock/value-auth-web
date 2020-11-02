import {Vue} from "vue-property-decorator";
import VueRouter, {RouteConfig} from 'vue-router'
import {
    LocationAndIpView,
    LoginLogsView,
    ManagementConsole,
    SecuritySettingsView,
    SmsAndEmailView,
    ValueAuthModule,
    ValueAuthOptions
} from "./index";
import {AccessTokenRole} from "value-auth-js";
// import 'value-auth-web/'

window.onload = (e: Event) => {

    const routes: Array<RouteConfig> = [
        {
            path: '/',
            name: 'SmsAndEmail',
            component: SmsAndEmailView
        },
        {
            path: '/location_and_ip',
            name: 'LocationAndIp',
            component: LocationAndIpView
        },
        {
            path: '/login_log',
            name: 'LoginLogs',
            component: LoginLogsView
        },
        {
            path: '/security_setting',
            name: 'SecuritySetting',
            component: SecuritySettingsView
        },

    ]
    let accessToken: string = document.querySelector('#access_token')!.getAttribute('value')!;
    let historyBaseUrl: string = document.querySelector('#base_url')!.getAttribute('value')!;

    let apiBaseUrl = document.querySelector('#api_url')!.getAttribute('value');

    let options = <ValueAuthOptions>{
        accessToken,
    }

    if (apiBaseUrl) {
        options.baseUrl = apiBaseUrl
    }

    Vue.use(ValueAuthModule, options);
    Vue.use(VueRouter)

    const router = new VueRouter({
        mode: 'history',
        base: historyBaseUrl,
        routes
    })
    const app = new Vue({
        router,
        render: h => h(ManagementConsole),
    });
    app.$mount('#app_va_console');
    router.replace('/');
}
