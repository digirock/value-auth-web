<template>
  <tr :class="loginLog.is_success ? 'ok' : 'ng'">
    <td class="va_check"></td>
    <td>{{ loginLog.date }}</td>
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