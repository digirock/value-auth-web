<template>
  <tr>
    <td class="va_num">{{ id }}</td>
    <td v-if="!editing">{{ label }}</td>
    <td v-else>
      <form action="#" v-on:submit.prevent="commit">
        <select v-model="label">
          <option v-for="prefecture in prefecture_options" :value="prefecture.id">
            {{ prefecture.name }}
          </option>
        </select>
      </form>
    </td>
    <td class="btn_area one"><a href="#" class="delete" v-on:click="askDeletion"></a></td>
  </tr>
</template>

<script lang="ts">
import {Component} from "vue-property-decorator";
import ContactRow from "@/components/ContactRow.vue";
import * as jpPrefecture from 'jp-prefecture';
import {Prefecture} from "@/utils/Prefecture";

@Component
export default class LocationRow extends ContactRow {
  get label(): string | undefined {
    return jpPrefecture.prefFindBy("id", this.contact.state).name;
  }

  set label(newLabel: string | undefined) {
    this.contact.state = newLabel;
  }

  get prefecture_options(): Prefecture[] {
    return jpPrefecture.getAll("pref", ["id", "name"]) as Prefecture[];
  }
}
</script>

<style scoped>

</style>