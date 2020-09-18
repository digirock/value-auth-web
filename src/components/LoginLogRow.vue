<template>
  <tr :class="loginLog.login_status === 'logged_in' ? 'ok' : 'ng'">
    <td class="va_check"></td>
    <td>{{ loginLog.logged_in_at}}</td>
    <td>{{ loginLog.ip }}</td>
    <td class="va_agent">{{ loginLog.user_agent }}
    </td>
    <td>{{ loginLog.address }}</td>
  </tr>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import {LoginLog} from "@/client/ApiResult";
import {PropType} from "vue";

@Component
export default class LoginLogRow extends Vue {
  @Prop({type: Object as PropType<LoginLog>}) loginLog!: LoginLog;

}
</script>

<style scoped>

</style>