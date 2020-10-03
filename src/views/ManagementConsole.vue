<template>
  <div>
    <menu-bar
        sms-path="smsPath"
        location-path="locationPath"
        login-log-path="loginLogPath"
        security-path="securityPath"
    ></menu-bar>
    <router-view/>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import MenuBar from '../components/MenuBar.vue';

@Component({
  components: {MenuBar}
})
export default class ManagementConsole extends Vue {
  @Prop({default: '/va_contact'}) smsPath!: string;
  @Prop({default: '/va_location'}) locationPath!: string;
  @Prop({default: '/va_login_log'}) loginLogPath!: string;
  @Prop({default: '/va_security'}) securityPath!: string;
}
</script>