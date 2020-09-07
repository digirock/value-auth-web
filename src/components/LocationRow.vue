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
import {Component, Prop} from "vue-property-decorator";
import * as jpPrefecture from 'jp-prefecture';
import {Prefecture} from "@/utils/Prefecture";
import DataRow from "@/components/DataRow.vue";
import {LocationRestriction, Model} from "@/client/ApiResult";
import {PropType} from "vue";

@Component({})
export default class LocationRow extends DataRow {
  @Prop({type: Object as PropType<LocationRestriction>}) location!: LocationRestriction;

  get label(): string | undefined {
    return jpPrefecture.prefFindBy("id", parseInt(this.location.state!))?.name;
  }

  set label(newLabel: string | undefined) {
    this.location.state = newLabel;
  }

  get id(): string {
    return this.location.id.toString();
  }

  get dataInstance(): Model | undefined {
    return this.location;
  }

  get prefecture_options(): Prefecture[] {
    return jpPrefecture.getAll("pref", ["id", "name"]) as Prefecture[];
  }
}
</script>

<style scoped>

</style>