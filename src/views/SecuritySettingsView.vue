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
            <dd>
              <div class="va_select">
                <select>
                  <option value="10">10</option>
                  <option value="11">11</option>
                </select>
              </div>
              <input type="submit" value="登録">
            </dd>
          </dl>
        </div>
        <div>
          <h3>自動セキュリティ制限</h3>
          <dl class="va_level">
            <dt>セキュリティレベル</dt>
            <dd>
              <ul>
                <li><input type="radio" name="level" id="level01"><label for="level01">0</label></li>
                <li><input type="radio" name="level" id="level02"><label for="level02">1</label></li>
                <li><input type="radio" name="level" id="level03"><label for="level03">2</label></li>
                <li><input type="radio" name="level" id="level04"><label for="level04">3</label></li>
                <li><input type="radio" name="level" id="level05"><label for="level05">4</label></li>
                <li><input type="radio" name="level" id="level06"><label for="level06">5</label></li>
              </ul>
              <input type="submit" value="登録">
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </content-wrapper>
</template>

<script>
import ContentWrapper from "@/components/ContentWrapper";
import {Component, Vue} from 'vue-property-decorator'

@Component({
  components: {ContentWrapper}
})
export default class SecuritySettingsView extends Vue {
}
</script>

<style scoped>

</style>