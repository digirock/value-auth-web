<template>

</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {parseApiError} from "@/client/ApiError";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VueSimpleAlert from "vue-simple-alert";

Vue.use(Loading);
Vue.use(VueSimpleAlert);
@Component({})
export default class BaseView extends Vue {

  handleErrors(reason: any, loader: any) {
    console.log(reason);
    let error = parseApiError(reason);
    console.log(error);
    loader.hide();
    let message = Object.values(error.errors.message).join('\n');
    this.$alert(message);
  }

}
</script>

<style scoped>

</style>