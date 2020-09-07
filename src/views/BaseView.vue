<template>

</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {parseApiError} from "@/client/ApiError";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VueSimpleAlert from "vue-simple-alert";
import ApiClient from "@/client/ApiClient";

Vue.use(Loading);
Vue.use(VueSimpleAlert);
@Component({})
export default class BaseView extends Vue {
  protected handleErrors(reason: any, loader: any) {
    console.log(reason);
    let error = parseApiError(reason);
    console.log(error);
    loader.hide();
    let message = Object.values(error.errors.message).join('\n');
    this.$alert(message);
  }

  protected get apiClient(): ApiClient {
    return this.$apiClient as ApiClient;
  }

  protected isApiClientInitialized(): boolean {
    return this.apiClient.accessToken != undefined;
  }

  protected reload() {
    //Override this
  }

  protected created() {
    this.$eventBus.$once('api-client-initialized', () => {
          this.reload();
        }
    );
  }

  protected mounted() {
    if (this.isApiClientInitialized()) {
      this.reload();
    }
  }

  protected showLoading(): any {
    return this.$loading.show();
  }
}
</script>

<style scoped>

</style>