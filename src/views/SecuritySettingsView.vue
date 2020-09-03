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
                  <select v-model="lockThreshold">
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
                  <li v-for="l in levels">
                    <input type="radio" name="level" v-model="level" :value="l" :id="'level' + l"><label
                      :for="'level' + l">{{ l }}</label>
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

@Component({
  components: {ContentWrapper}
})
export default class SecuritySettingsView extends Vue {
  level: number = 0;
  levels: Array<number> = [0, 1, 2, 3, 4, 5,];
  lockThreshold = 5;
  lockThresholds: Array<number> = [5, 10, 15, 20];

  reloadCurrentSetting() {
    //TODO implement
  }

  commitLoginThreshold() {

    //TODO implement
  }

  commitSecurityLevel() {

    //TODO implement
  }
}
</script>

<style scoped>

</style>