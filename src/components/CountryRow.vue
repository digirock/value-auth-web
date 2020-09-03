<template>
  <tr class="on">
    <td class="va_num">{{ id }}</td>

    <td v-if="!editing">{{ label }}</td>
    <td v-else>
      <form action="#" v-on:submit.prevent="commit">
        <select v-model="country">
          <option v-for="code in Object.keys(country_options)" v-bind:value="code"
                  v-bind:key="code">
            {{ country_options[code] }}
          </option>
        </select>
      </form>
    </td>
    <td class="va_ip"><a href="#"></a>許可</td>
    <td class="btn_area">
      <a href="#" class="edit" v-on:click="toggleEdit"></a>
      <a href="#" class="delete" v-on:click="askDeletion"></a>
    </td>
  </tr>
</template>

<script lang="ts">
import DataRow from "@/components/DataRow.vue";
import {Component, Prop} from "vue-property-decorator";
import * as i18nCountries from "i18n-iso-countries";
import {LocalizedCountryNames} from "i18n-iso-countries";
import {PropType} from "vue";
import {CountryRestriction, Model} from "@/client/ApiResult";

@Component
export default class CountryRow extends DataRow {
  @Prop({type: Object as PropType<CountryRestriction>}) countryRestriction!: CountryRestriction;

  get country_options(): LocalizedCountryNames {
    return i18nCountries.getNames('ja');
  }

  get dateInstance(): Model {
    return this.countryRestriction;
  }

}
</script>

<style scoped>

</style>