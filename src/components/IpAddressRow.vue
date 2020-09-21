<template>
  <tr :class="ipAddress.access_kbn === 1 ? 'on' : '' ">
    <td class="va_num">{{ id }}</td>
    <td v-if="!editing">{{ label }}</td>
    <td v-else>
      <form action="#" v-on:submit.prevent="commit">
        <div class="edit_area">
          <input type="text" v-model="label" minlength="7" maxlength="15" size="15"
                 pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$"/>
          <input type="submit" value="保存">
          <a href="#" class="close" v-on:click.prevent="toggleEdit"></a>
        </div>
      </form>
    </td>
    <td class="va_ip" v-if="!editing"><a href="#" v-on:click.prevent="toggleAccess"/>
      {{ ipAddress.access_kbn === 1 ? '許可' : '拒否' }}
    </td>
    <td class="btn_area" v-if="!editing">
      <a href="#" class="edit" v-on:click.prevent="toggleEdit"></a>
      <a href="#" class="delete" v-on:click.prevent="askDeletion"></a>
    </td>
  </tr>
</template>

<script lang="ts">
import DataRow from "./DataRow.vue";
import {Component, Prop} from "vue-property-decorator";
import {IpAddressRestriction, Model} from "value-auth-js";
import {PropType} from "vue";
import {AccessKbn} from "value-auth-js";

@Component
export default class IpAddressRow extends DataRow {
  @Prop({type: Object as PropType<IpAddressRestriction>}) ipAddress!: IpAddressRestriction;

  get label(): string | undefined {
    return this.ipAddress.ip;
  }

  set label(newLabel: string | undefined) {
    this.ipAddress.ip = newLabel!;
  }

  get dataInstance(): Model | undefined {
    return this.ipAddress;
  }

  toggleAccess() {
    this.ipAddress.access_kbn = this.ipAddress.access_kbn == AccessKbn.Allow ? AccessKbn.Deny : AccessKbn.Allow;
    this.commit();
  }

}
</script>

<style scoped>

</style>