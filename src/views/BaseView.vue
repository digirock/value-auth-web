<template>

</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import * as Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import * as VueSimpleAlert from "vue-simple-alert";
import * as VueCookies from 'vue-cookies'
import {ApiClient, parseApiError} from "value-auth-js";

Vue.use(VueCookies);
Vue.use(Loading);
Vue.use(VueSimpleAlert);
@Component({})
export default class BaseView extends Vue {
  protected processing = false;
  protected handleErrors(reason: any, loader: any) {
    let error = parseApiError(reason);
    if (loader) {
      loader.hide();

    }
    let message = Object.values(error.errors.message).join('\n');
    this.$alert(message);
    this.processing = false;
  }

  protected get apiClient(): ApiClient {
    return this.$vaApiClient as ApiClient;
  }

  protected get isApiClientInitialized(): boolean {
    return this.apiClient.accessToken != undefined;
  }

  protected reload() {
    //Override this
  }

  protected created() {
    this.$vaEventBus.$once('value-auth-api-client-initialized', () => {
          this.reload();
        }
    );
  }

  protected mounted() {
    if (this.isApiClientInitialized) {
      this.reload();
    }
  }

  protected showLoading(): any {
    this.processing = true;
    return (this as any).$loading.show();
  }
}
</script>

<style scoped>

</style>