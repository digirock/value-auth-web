<template>
  <div class="va_menu">
    <ul>
      <router-link tag="li" id="va_twoset" to="/"><a>2段階認証設定</a></router-link>
      <router-link tag="li" id="va_point" to="/location_and_ip"><a>位置情報 / IP制限設定</a></router-link>
      <router-link tag="li" id="va_watch" to="/login_log"><a>ログインの監視</a></router-link>
    </ul>a
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class MenuBar extends Vue {
  @Prop({default: '/va_contact'}) smsPath!: string;
  @Prop({default: '/va_location'}) locationPath!: string;
  @Prop({default: '/va_login_log'}) loginLogPath!: string;
  @Prop({default: '/va_security'}) securityPath!: string;
}
</script>

<style scoped>

a :focus {
  box-shadow: none;
}

.va_menu * {
  font-size: 14px;
  box-sizing: border-box;
}

.va_menu {
  overflow: scroll;
  margin: 30px 0 20px;
}

.va_menu ul {
  display: table;
  min-width: 600px;
  max-width: 1232px;
  padding: 10px;
  margin: 0 auto;
  border: #D6D6D6 1px solid;
  border-radius: 100px;
  list-style-type: none;
}

.va_menu li {
  margin: 0;
  float: left;
}

.va_menu a {
  display: block;
  padding: 16px 14px;
  font-size: 12px;
  color: #1E9696;
  text-align: center;
  text-decoration: none;
  border-radius: 24px;
}

.va_menu .router-link-exact-active > a {
  background: #1E9696;
  color: #fff;
}

@media print, screen and (min-width: 641px) {
  .va_menu a {
    transition: background 0.3s ease-in-out 0s, color 0.3s ease-in-out 0s;
  }

  .va_menu a:hover {
    background: #1E9696;
    color: #fff;
  }
}

@media print, screen and (min-width: 800px) {
  .va_menu a {
    font-size: 13px;
  }
}

@media print, screen and (min-width: 980px) {
  .va_menu {
    margin: 40px 0 32px;
  }

  .va_menu a {
    padding: 16px;
    font-size: 14px;
  }
}

@media print, screen and (min-width: 1200px) {
  .va_menu ul {
    width: 100%;
  }

  .va_menu li {
    width: 20%;
  }

  .va_menu a {
    font-size: 16px;
  }
}
</style>