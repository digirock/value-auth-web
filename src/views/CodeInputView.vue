<template>
  <div id="two_stage">
    <div>
      <h1>２段階認証コードを入力</h1>
      <p>SMSまたはメールに届いた認証コードを入力してください。</p>
      <form action="#" v-on:submit.prevent="onSubmit">
        <input type="text" placeholder="認証コードを入力" v-model="code">
        <input type="submit" class="btn" value="認証">
      </form>
      <a href="#" class="txt_link" v-on:click.prevent="resendCode">２段階認証コードを再送信</a>
    </div>
    <p class="attention">端末の紛失、メールアドレスの削除等で認証コードが受け取れなくなった場合は、WordPress管理者にご連絡いただき、２段階認証の解除依頼を行って下さい。</p>
  </div>
</template>

<script lang="ts">
import BaseView from "./BaseView.vue";
import {Component} from "vue-property-decorator";
import {Post2FACodeInput} from "@/client/ApiInput";
import {Get2FACodeEndpoint, Post2FACodeEndpoint} from "@/client/ApiEndpoint";
import ContentWrapper from "@/components/ContentWrapper.vue";

@Component({
  components: {ContentWrapper}
})
export default class CodeInputView extends BaseView {
  code: string = '';

  onSubmit() {
    let input = <Post2FACodeInput>{
      number: this.code
    };
    let loader = this.showLoading();
    this.apiClient.process(input, Post2FACodeEndpoint).then(result => {
      console.log(result);
      this.$cookies.set('2fa-jwt', result.results.auth_token);
      loader.hide();
    }).catch(reason => {
      this.handleErrors(reason, loader);
    });
  }

  resendCode() {
    let loader = this.showLoading();
    this.apiClient.process({}, Get2FACodeEndpoint).then(result => {
      console.log(result);
      loader.hide();
    }).catch(reason => {
      this.handleErrors(reason, loader);
    })
  }
}
</script>

<style scoped>
#two_stage * {
  font-size: 14px;
  box-sizing: border-box;
}

#two_stage h1,
#two_stage form {
  margin: 0;
}

#two_stage input[type="text"] {
  display: block;
  height: 40px;
  padding: 0 12px;
  font-size: 13px;
  border: #D6D6D6 1px solid;
  box-shadow: none;
}

#two_stage ::-webkit-input-placeholder {
  color: #AAA;
}

#two_stage :-ms-input-placeholder {
  color: #AAA;
}

#two_stage ::placeholder {
  color: #AAA
}

#two_stage {
  max-width: 480px;
  margin: 0 auto;
}

#two_stage > div {
  background: #fff;
  padding: 40px 20px 36px;
  text-align: center;
  border: #CCD0D4 1px solid;
  box-shadow: 0 3px 6px #E6E6E6;
}

#two_stage h1 {
  font-size: 20px;
}

#two_stage > div p {
  margin: 30px 0 24px;
}

#two_stage input[type="text"] {
  width: 100%;
  max-width: 340px;
  margin: 0 auto;
}

#two_stage input[type="submit"] {
  background: #007CBA;
  width: 120px;
  height: 40px;
  margin: 40px 0 26px;
}

#two_stage .txt_link {
  color: #007CBA;
  text-decoration: none;
}

#two_stage .attention {
  margin-top: 10px;
  padding-left: 1rem;
  position: relative;
  font-size: 12px;
  color: #444;
  font-weight: normal;
}

#two_stage .attention:before {
  content: "※";
  display: block;
  position: absolute;
  top: -1px;
  left: 2px;
}

@media print, screen and (min-width: 641px) {

  #two_stage input[type="text"] {
    font-size: 14px;
    padding: 0 16px;
  }

  /* two_stage
  **********************************************************************/
  #two_stage > div {
    padding: 40px;
  }

  #two_stage > div p {
    margin: 36px 0 28px;
  }

  #two_stage input[type="submit"] {
    margin: 50px 0 36px;
  }

  #two_stage input[type="submit"]:hover {
    background: #009BE8;
  }

  #two_stage .txt_link:hover {
    text-decoration: underline;
  }

  #two_stage .attention {
    margin-top: 20px;
  }
}
</style>