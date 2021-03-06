import './registerServiceWorker'
import {AccessTokenRole} from "value-auth-js";
import {ValueAuthModule, ManagementConsole} from "@/index";
import {Vue} from "vue-property-decorator";
import router from "@/router";
import CodeInputView from "@/views/CodeInputView.vue";

const authCode = "f684f2c89fdea6ad4fa4b23d59bcaafe"
const customerKey = "1";
const accessToken = "";
const apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQ0NzNiYWYzZDU2ZWI5ZjBjNjA0MDcyYmY0MjZkMzUyODBiYWY4YTUzMjM2ZGRlOWJlOTIzNzlmMmUzZGZkNzBjZjliYzdhZTJhOTM3ZTliIn0.eyJhdWQiOiIxIiwianRpIjoiNDQ3M2JhZjNkNTZlYjlmMGM2MDQwNzJiZjQyNmQzNTI4MGJhZjhhNTMyMzZkZGU5YmU5MjM3OWYyZTNkZmQ3MGNmOWJjN2FlMmE5MzdlOWIiLCJpYXQiOjE2MDAwNjE4NjIsIm5iZiI6MTYwMDA2MTg2MiwiZXhwIjozMzEyNTM0ODI2Miwic3ViIjoiOCIsInNjb3BlcyI6W119.vmSQo3tHGxspB11TxXyqH-p527KiocihBXVsaJ4gZt1CRQbfptp3eWEr4eYrWTP0sXmnQSQ1VWUF4wy9Rsbza3cD4vaqffczfQ5UkXguIppgWbYHq6DQoRkKXfMnov8RbydGH5XoZ-eFEdLN-oplN4JCPPGdqZPNBmfdy3VFYb5fZu7NgO9hR1P0zW-lCAh5RIRqAHn3DEEBF83ebI_bmNOJXwsKMYqD8y6OoVToYUCUsnrmAkzaJ10-pcj139cvGzcwcosva93ngVWXSFwRtOAdjoQoa5dzrlnmWdWAWlFJ95JHa7ERPzg1MDh8PLBrC7muqtIbwF1oVgQ4Ea7KGss13ZLIQZyVMIg1_DxHNBrYDHRamrTJpnANPngxCtYbzy9uxClJQCa5-ySSQWhkC6UZNBuCbmryfjRknItgrEH3d19uWopEhR8XTufgudHJqx-mdO3VIZmtzrP9LhLg8AaizklSZJoPOlQMUXzWatF0Pcjwe8HMzyhyV7hMSq4GP4lqA9uuDReSQDiP1IE_ee0RFZ_VlRPtAvQSvpKVF7aQVhE7E2YMqpGhEhxiivBax9ORgcCJmAb6oZ5VHbahsKRbItDWIX0XiFirJZqMmPdVcmwcUOscPLbgZybZO6l91Urrgtasm_kv20Ep28LvQ-rydALzc67U9eomsnx-pzY"

let options = {
    apiKey,
    accessToken,
    customerKey,
    authCode,
    xdebug: 'PHPSTORM',
    baseUrl: 'https://api-test.homestead.test',
    mountTo: '#app_va_console',
    role: AccessTokenRole.Auth
}

Vue.use(ValueAuthModule, options);

const app = new Vue({
    router,
    render: h=> h(CodeInputView),
});
app.$mount("#app_va_console");