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
            <login-log-row v-for="loginLog in loginLogs" :login-log="loginLog"/>
            <infinite-loading
                ref="infiniteLoading"
                spinner="spiral"
                @infinite="infiniteHandler">
              <div slot="no-results"/>
            </infinite-loading>
            </tbody>
          </table>
        </div>
        <p class="spover_txt"><span>表が見切れている場合、横スクロールできます</span></p>
      </div>
    </div>
  </content-wrapper>
</template>

<script lang="ts">
import {Component} from 'vue-property-decorator'
import {LoginLog} from "@/client/ApiResult";
import LoginLogRow from "@/components/LoginLogRow.vue";
import ContentWrapper from "@/components/ContentWrapper.vue";
import BaseView from "@/views/BaseView.vue";
import InfiniteLoading from "vue-infinite-loading";

@Component({
  components: {LoginLogRow, ContentWrapper, InfiniteLoading}
})
export default class LoginLogsView extends BaseView {
  loginLogs: Array<LoginLog> = [];
  limit: number = 20;
  currentPage = 0;

  loadLoginLog(page: number = 0) {
    //TODO implement

  }

  infiniteHandler() {
    this.loadLoginLog(this.currentPage + 1);
  }
}
</script>

<style scoped>

</style>