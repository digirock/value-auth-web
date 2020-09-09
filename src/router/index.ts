import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import SmsAndEmailView from "@/views/SmsAndEmailView.vue";
import LocationAndIpView from "@/views/LocationAndIpView.vue";
import LoginLogsView from "@/views/LoginLogsView.vue";
import SecuritySettingView from "@/views/SecuritySettingsView.vue";
import CodeInputView from "@/views/CodeInputView.vue";

Vue.use(VueRouter)

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
        component: SecuritySettingView
    },
    {
        path: '/code',
        name: 'CodeInput',
        component: CodeInputView
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
