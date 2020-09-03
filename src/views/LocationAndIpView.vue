<template>
  <content-wrapper>
    <div id="va_point" class="va_detail">
      <ul>
        <li class="va_cont tb">
          <h2>都道府県ごとの認証設定</h2>
          <div class="va_add select">
            <p>新規追加</p>
            <form action="#">
              <div>
                <select v-model="prefecture">
                  <option v-for="prefecture_option in prefecture_options" v-bind:value="prefecture_option.id"
                          v-bind:key="prefecture_option.id">
                    {{ prefecture_option.name }}
                  </option>
                </select>
                <input type="submit" value="追加">
              </div>
            </form>
          </div>
          <div class="scroll">
            <table>
              <thead>
              <tr>
                <th class="va_num">#</th>
                <th>登録済都道府県</th>
                <th>&nbsp;</th>
              </tr>
              </thead>
              <tbody>
              <location-row v-for="restriction in locationRestrictions" :contact="restriction"
                            v-on:commit="onCommit"
                            v-on:delete="onDelete" v-bind:key="restriction.id"/>
              </tbody>
            </table>
          </div>
        </li>

        <li class="va_cont tb">
          <h2>IPアドレス制限の設定</h2>
          <div class="va_add">
            <p>新規追加</p>
            <form action="#">
              <div>
                <input type="text" placeholder="IPアドレスを入力">
                <input type="submit" value="追加">
              </div>
            </form>
          </div>
          <div class="scroll spover">
            <table>
              <thead>
              <tr>
                <th class="va_num">#</th>
                <th>登録済IPアドレス</th>
                <th class="va_ip">制限</th>
                <th>&nbsp;</th>
              </tr>
              </thead>
              <tbody>
              <ip-address-row v-for="restriction in ipAddressRestrictions" v-bind:key="restriction.id"
                              :restriction="restriction"/>
              </tbody>
            </table>
          </div>
        </li>

        <li class="va_cont tb">
          <h2>国別制限の設定</h2>
          <div class="va_add select">
            <p>新規追加</p>
            <form action="#">
              <div>
                <select v-model="country">
                  <option v-for="code in Object.keys(country_options)" v-bind:value="code"
                          v-bind:key="code">
                    {{ country_options[code] }}
                  </option>
                </select>
                <input type="submit" value="追加">
              </div>
            </form>
          </div>
          <div class="scroll spover">
            <table>
              <thead>
              <tr>
                <th class="va_num">#</th>
                <th>登録済の国</th>
                <th class="va_ip">制限</th>
                <th>&nbsp;</th>
              </tr>
              </thead>
              <tbody>
              <country-row v-for="restriction in countryRestrictions" v-bind:key="restriction.id"
                           :restriction="restriction"/>
              </tbody>
            </table>
          </div>
        </li>
      </ul>
    </div>
  </content-wrapper>
</template>


<script lang="ts">

import {Component, Vue} from "vue-property-decorator";
import ContentWrapper from "@/components/ContentWrapper.vue";
import BaseView from "@/views/BaseView.vue";
import {Prefecture} from "@/utils/Prefecture";
import * as i18nCountries from "i18n-iso-countries";
import * as jpPrefecture from 'jp-prefecture';
import {LocalizedCountryNames} from "i18n-iso-countries";
import LocationRow from "@/components/LocationRow.vue";
import {Contact, CountryRestriction, IpAddressRestriction} from "@/client/ApiResult";
import IpAddressRow from "@/components/IpAddressRow.vue";
import CountryRow from "@/components/CountryRow.vue";

@Component({
  components: {CountryRow, IpAddressRow, LocationRow, ContentWrapper}
})
export default class LocationAndIpView extends BaseView {
  prefecture: string = '';
  country: string = '';

  locationRestrictions: Array<Contact> = [];
  countryRestrictions: Array<CountryRestriction> = [];
  ipAddressRestrictions: Array<IpAddressRestriction> = [];

  created() {
    this.$eventBus.$once('api-client-initialized', () => {
          this.reloadCountryRestrictions();
          this.reloadIpAddressRestrictions();
          this.reloadLocationRestrictions();
        }
    );
  }

  reloadLocationRestrictions(loader?: any) {

  }

  reloadIpAddressRestrictions(loader?: any) {

  }

  reloadCountryRestrictions(loader?: any) {

  }


  get country_options(): LocalizedCountryNames {
    return i18nCountries.getNames('ja');
  }

  get prefecture_options(): Prefecture[] {
    return jpPrefecture.getAll("pref", ["id", "name"])
  }
}
</script>

<style>


#va_point > ul {
  margin-top: -2%;
}


#va_point .va_cont {
  margin-top: 2%;
}

.va_cont thead .va_ip {
  width: 26%;
  padding-left: 20px;
}

.va_cont tbody .va_ip {
  padding-left: 38px;
  position: relative;
}

.va_cont .va_ip a {
  display: block;
  background: #F2F2F2;
  border-radius: 100px;
}

.va_cont .va_ip a:before {
  content: "";
  display: block;
  background: #fff;
  position: absolute;
  top: 3px;
  left: 4px;
  border-radius: 100px;
  box-shadow: 0 0 3px #E6E6E6;
}

.va_cont .va_ip a {
  width: 32px;
  height: 16px;
  position: absolute;
  top: 11px;
  left: 0;
  transition: background 0.3s ease-in-out 0s;
}

.va_cont .va_ip a:before {
  width: 10px;
  height: 10px;
}

.va_cont tr.on .va_ip a {
  background: #1E9696;
}

.va_cont tr.on .va_ip a:before {
  left: 18px;
  box-shadow: none;
}


@media print, screen and (min-width: 980px) {
  #va_point > ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  #va_point .va_cont {
    width: 49%;
  }
}
</style>