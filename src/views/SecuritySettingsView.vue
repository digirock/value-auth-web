<template>
  <content-wrapper>
    <div id="va_security" class="va_detail">
      <div class="va_cont">
        <h2>セキュリティ設定</h2>
        <div>
          <h3>ログインロック</h3>
          <p>規定回数の連続ログイン失敗でログインをロックします</p>
          <dl class="va_error">
            <dt>ログイン失敗許容回数</dt>
            <form action="#" v-on:submit.prevent="commitLoginThreshold">
              <dd>
                <div class="va_select">
                  <select v-model.number="lockThreshold">
                    <option v-for="thresh in lockThresholds" :value="thresh">{{ thresh }}</option>
                  </select>
                </div>
                <input type="submit" value="登録">
              </dd>
            </form>
          </dl>
        </div>
        <div>
          <h3>自動セキュリティ制限</h3>
          <dl class="va_level">
            <dt>セキュリティレベル</dt>
            <form action="#" v-on:submit.prevent="commitSecurityLevel">
              <dd>
                <ul>
                  <li v-for="level in levels">
                    <input type="radio" name="level" v-model.number="securityLevel" :value="level"
                           :id="'level' + level"><label
                      :for="'level' + level">{{ level }}</label>
                  </li>
                </ul>
                <input type="submit" value="登録">
              </dd>
            </form>
          </dl>
        </div>
      </div>
    </div>
  </content-wrapper>
</template>

<script lang="ts">
import ContentWrapper from "@/components/ContentWrapper.vue";
import {Component, Vue} from 'vue-property-decorator'
import {CustomerSetting} from "@/client/ApiResult";
import BaseView from "@/views/BaseView.vue";
import {GetCustomerSettingEndpoint, PutCustomerSettingEndpoint} from "@/client/ApiEndpoint";
import {PutCustomerSettingInput} from "@/client/ApiInput";

@Component({
  components: {ContentWrapper}
})
export default class SecuritySettingsView extends BaseView {
  levels: Array<number> = [0, 1, 2, 3, 4, 5,];
  lockThresholds: Array<number> = [5, 10, 15, 20];
  _lockThreshold?: number;
  _securityLevel?: number;

  setting: CustomerSetting = {};

  reload() {
    this.reloadCurrentSetting();
  }

  reloadCurrentSetting(loader?: any) {
    loader = loader ? loader : this.showLoading();
    this.apiClient.process({}, GetCustomerSettingEndpoint).then(result => {
      this.setting = result.results.customer_setting;
      this.lockThreshold = this.setting.max_attempts;
      this.securityLevel = this.setting.security_level;
      loader.hide();
    }).catch(reason => {
      this.handleErrors(reason, loader);
    })
  }

  get lockThreshold(): number | undefined {
    return this.setting?.max_attempts;
  }

  set lockThreshold(val: number | undefined) {
    this._lockThreshold = val;
  }

  get securityLevel(): number | undefined {
    return this.setting?.security_level;
  }

  set securityLevel(val: number | undefined) {
    this._securityLevel = val;
  }


  commitLoginThreshold() {
    if (this._lockThreshold) {
      let input = <PutCustomerSettingInput>{
        max_attempts: this._lockThreshold,
        security_level: this.setting.security_level
      }
      let loader = this.showLoading();
      this.apiClient.process(input, PutCustomerSettingEndpoint).then(result => {
        this.setting = result.results.customer_setting;
        this.reloadCurrentSetting(loader);
      }).catch(reason => {
        this.handleErrors(reason, loader);
      })
    }
  }

  commitSecurityLevel() {
    if (this._securityLevel) {
      let input = <PutCustomerSettingInput>{
        max_attempts: this.setting.max_attempts,
        security_level: this._securityLevel
      }
      let loader = this.showLoading();
      this.apiClient.process(input, PutCustomerSettingEndpoint).then(result => {
        this.setting = result.results.customer_setting;
        this.reloadCurrentSetting(loader);
      }).catch(reason => {
        this.handleErrors(reason, loader);
      })
    }
  }
}
</script>

<style scoped>

</style>