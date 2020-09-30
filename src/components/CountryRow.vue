<template>
  <tr :class="country.access_kbn === 1 ? 'on' : ''">
    <td class="va_num">{{ id }}</td>

    <td v-if="!editing">{{ countryName }}</td>
    <td v-else>
      <form action="#" v-on:submit.prevent="commit">
        <div class="edit_area">
          <select v-model="label">
            <option v-for="code in Object.keys(country_options)" v-bind:value="code"
                    v-bind:key="code">
              {{ country_options[code] }}
            </option>
          </select>
          <input type="submit" value="保存">
          <a href="#" class="close" v-on:click.prevent="toggleEdit"></a>
        </div>
      </form>
    </td>
    <td class="va_ip " v-if="!editing"><a href="#" v-on:click.prevent="toggleAccess"/>
      {{ country.access_kbn === 1 ? '許可' : '拒否' }}
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
import * as i18nCountries from "i18n-iso-countries";
import {LocalizedCountryNames} from "i18n-iso-countries";
import {PropType} from "vue";
import {CountryRestriction, Model} from "value-auth-js";
import {AccessKbn} from "value-auth-js";

@Component({})
export default class CountryRow extends DataRow {
  @Prop({type: Object as PropType<CountryRestriction>}) country!: CountryRestriction;

  get countryName(): string | undefined {
    return i18nCountries.getName(this.country.country!, 'ja');
  }

  get label(): string | undefined {
    return this.country.country;
  }

  set label(newLabel: string | undefined) {
    this.country.country = newLabel!;
  }


  get country_options(): LocalizedCountryNames {
    return i18nCountries.getNames('ja');
  }

  get dataInstance(): Model | undefined {
    return this.country;
  }

  toggleAccess() {
    this.country.access_kbn = this.country.access_kbn == AccessKbn.Allow ? AccessKbn.Deny : AccessKbn.Allow;
    this.commit();
  }

}
</script>

<style scoped>

</style>