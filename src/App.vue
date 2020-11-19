<template>
  <div>
    <menu-bar
        sms-path="/"
        location-path="/location_and_ip"
        login-log-path="/login_log"
    ></menu-bar>
    <router-view/>
  </div>
</template>

<script lang="ts">
import MenuBar from "./components/MenuBar.vue";
import SmsAndEmailView from "./views/SmsAndEmailView.vue";
import {Component, Vue} from "vue-property-decorator";

@Component({
  components: {MenuBar, SmsAndEmailView}
})
export default class App extends Vue {
}
</script>