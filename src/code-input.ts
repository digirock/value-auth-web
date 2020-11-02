import {Vue} from "vue-property-decorator";
import {CodeInputView, ValueAuthModule, ValueAuthOptions} from "./index";
import {AccessTokenRole} from "value-auth-js";
// import 'value-auth-web/'

window.onload = (e: Event) => {
    let accessToken: string = document.querySelector('#access_token')!.getAttribute('value')!;
    let apiBaseUrl = document.querySelector('#api_url')?.getAttribute('value');
    let redirect: string = document.querySelector('#redirect')!.getAttribute('value')!;

    let options = <ValueAuthOptions>{
        accessToken,
    }
    if (apiBaseUrl) {
        options.baseUrl = apiBaseUrl
    }

    Vue.use(ValueAuthModule, options);
    const app = new Vue({
        render: h => h(CodeInputView, {
            props: {
                redirect
            }
        }),

    });
    app.$mount('#app_va_console');
}
