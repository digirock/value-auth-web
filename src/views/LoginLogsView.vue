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
            <login-log-row v-for="loginLog in loginLogs" :login-log="loginLog" v-bind:key="loginLog.id"/>
            <infinite-loading
                ref="infiniteLoading"
                spinner="spiral"
                @infinite="infiniteHandler" v-if="hasNextPage">
              <div slot="no-results"/>
            </infinite-loading>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </content-wrapper>
</template>

<script lang="ts">
import {Component} from 'vue-property-decorator'
import LoginLogRow from "../components/LoginLogRow.vue";
import ContentWrapper from "../components/ContentWrapper.vue";
import BaseView from "./BaseView.vue";
import InfiniteLoading from "vue-infinite-loading";
import {GetLoginLogEndpoint, GetLoginLogInput, LoginLog} from "value-auth-js";

@Component({
  components: {LoginLogRow, ContentWrapper, InfiniteLoading}
})
export default class LoginLogsView extends BaseView {
  loginLogs: Array<LoginLog> = [];
  limit: number = 20;
  currentPage = 1;
  lastPage: number = Number.MAX_SAFE_INTEGER;
  total: number = Number.MAX_SAFE_INTEGER;

  get hasNextPage(): boolean {
    return this.lastPage > this.currentPage;
  }

  reset() {
    this.currentPage = 1;
    this.lastPage = Number.MAX_SAFE_INTEGER;
    this.total = Number.MAX_SAFE_INTEGER;
    this.loginLogs = [];
  }

  reload() {
    this.reset();
    this.loadLoginLog();
  }

  loadLoginLog(page: number = 0, loader?: any) {
    let input = <GetLoginLogInput>{
      page: page,
      limit: this.limit,
    }
    loader = loader ?? this.showLoading();
    this.apiClient.process(input, GetLoginLogEndpoint).then(result => {
      this.loginLogs = this.loginLogs.concat(result.results.customer_login_log);
      this.lastPage = result.results.last_page;
      this.currentPage = result.results.page;
      this.total = result.results.total;
      loader.hide();
    }).catch(reason => {
      this.handleErrors(reason, loader);
    });
  }

  infiniteHandler() {
    if (this.hasNextPage && this.isApiClientInitialized) {
      this.loadLoginLog(this.currentPage + 1);
    }
  }
}
</script>

<style scoped>

</style>