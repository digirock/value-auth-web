<template>
  <tr class="on">
    <td class="va_num">{{ id }}</td>
    <td>{{ label }}</td>
    <td class="va_ip"><a href="#"></a>許可</td>
    <td class="btn_area">
      <a href="#" class="edit" v-on:click="toggleEdit"></a>
      <a href="#" class="delete" v-on:click="askDeletion"></a>
    </td>
  </tr>
</template>

<script lang="ts">
import DataRow from "./DataRow.vue";
import {Component, Prop} from "vue-property-decorator";
import {IpAddressRestriction} from "@/client/ApiResult";
import {PropType} from "vue";

@Component
export default class IpAddressRow extends DataRow {
  @Prop({type: Object as PropType<IpAddressRestriction>}) restriction!: IpAddressRestriction;
}
</script>

<style scoped>

</style>