<template>
  <div>
    <menu-bar
        sms-path="/"
        location-path="/location_and_ip"
        login-log-path="/login_log"
        security-path="/security_setting"
    ></menu-bar>
    <router-view/>
  </div>
</template>

<script>
import MenuBar from "@/components/MenuBar";
import {Component, Vue} from "vue-property-decorator";

@Component({
  components: {MenuBar}
})
export default class ManagementConsole extends Vue {
}
</script>