<template>
  <content-wrapper>
    <div id="va_watch" class="va_detail">
      <div class="va_cont tb">
        <h2>ログインの監視</h2>
        <div class="scroll spover">
          <table>
            <thead>
            <tr>
              <th class="va_check">2段階認証成否</th>
              <th>ログイン日時</th>
              <th>ログインIP</th>
              <th>ユーザーエージェント</th>
              <th class="va_info">認証情報</th>
            </tr>
            </thead>
            <tbody>
            <login-log-row :login-log="{
              ip: '172.217.26.99',
              is_success: true,
              date: '2020.06.16 13:24',
              user_agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36',
              address: '09076342727'
            }"/>
            </tbody>
          </table>
        </div>
        <p class="spover_txt"><span>表が見切れている場合、横スクロールできます</span></p>
      </div>
    </div>
  </content-wrapper>
</template>

<script>
import ContentWrapper from "@/components/ContentWrapper";
import {Component, Vue} from 'vue-property-decorator'
import LoginLogRow from "@/components/LoginLogRow";

@Component({
  components: {LoginLogRow, ContentWrapper}
})
export default class LoginLogsView extends Vue {

}
</script>

<style scoped>

</style>