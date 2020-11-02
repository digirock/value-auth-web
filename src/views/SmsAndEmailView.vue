<template>
  <content-wrapper>
    <div id="va_twoset" class="va_detail">
      <ul>
        <li class="va_cont tb"><h2>SMS認証番号設定</h2>
          <div class="va_add">
            <p>新規追加</p>
            <form action="#" v-on:submit.prevent="addPhoneNumber">
              <div>
                <input type="tel" placeholder="電話番号を入力" v-model="phoneNumber" pattern="\d{2,4}-?\d{2,4}-?\d{3,4}">
                <input type="submit" value="追加">
              </div>
            </form>
          </div>
          <div class="scroll">
            <table>
              <thead>
              <tr>
                <th class="va_num">#</th>
                <th>登録済電話番号</th>
                <th>&nbsp;</th>
              </tr>
              </thead>
              <tbody>
              <contact-row v-for="contact in smsContacts" :contact="contact" v-on:commit="onCommit"
                           v-on:delete="onDelete" v-bind:key="contact.id"/>
              </tbody>
            </table>
          </div>
        </li>

        <li class="va_cont tb">
          <h2>メール認証設定</h2>
          <div class="va_add">
            <p>新規追加</p>
            <form action="#" v-on:submit.prevent="addEmail">
              <div>
                <input type="email" placeholder="メールアドレスを入力" v-model="email">
                <input type="submit" value="追加">
              </div>
            </form>
          </div>
          <div class="scroll">
            <table>
              <thead>
              <tr>
                <th class="va_num">#</th>
                <th>登録済メールアドレス</th>
                <th>&nbsp;</th>
              </tr>
              </thead>
              <tbody>
              <contact-row v-for="contact in emailContacts" :contact="contact" v-on:commit="onCommit"
                           v-on:delete="onDelete" v-bind:key="contact.id"/>
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
import ContentWrapper from "../components/ContentWrapper.vue";
import {DeleteContactInput, GetContactInput, PostContactInput, PutContactInput, SendKbn} from "value-auth-js";
import {DeleteContactEndpoint, GetContactEndpoint, PostContactEndpoint, PutContactEndpoint} from "value-auth-js";
import {Contact} from "value-auth-js";
import BaseView from "./BaseView.vue";
import 'vue-loading-overlay/dist/vue-loading.css';
import VueSimpleAlert from "vue-simple-alert";
import ContactRow from "../components/ContactRow.vue";

Vue.use(VueSimpleAlert);
@Component({
  components: {ContentWrapper, ContactRow}
})
export default class SmsAndEmailView extends BaseView {
  phoneNumber: string = '';
  email: string = '';
  smsContacts: Array<Contact> = [];
  emailContacts: Array<Contact> = [];

  reload() {
    this.reloadPhoneNumbers();
    this.reloadEmails();
  }

  addPhoneNumber() {
    let input = <PostContactInput>{
      customer_key: this.apiClient.currentCustomerKey!,
      address: this.phoneNumber,
      send_kbn: SendKbn.Sms
    }
    let loader = this.showLoading();
    this.apiClient.process(input, PostContactEndpoint).then(result => {
      this.reloadPhoneNumbers(loader);
      this.phoneNumber = '';
    }).catch(reason => {
      this.handleErrors(reason, loader);
    })
  }


  reloadPhoneNumbers(loader?: any) {
    let input = <GetContactInput>{
      send_kbn: SendKbn.Sms
    }
    loader = loader ?? this.showLoading();
    this.apiClient.process(input, GetContactEndpoint).then(result => {
      this.smsContacts = result.results.customer_contacts;
      loader.hide();
    }).catch(reason => {
      this.handleErrors(reason, loader);
    });
  }

  addEmail() {
    let input = <PostContactInput>{
      address: this.email,
      send_kbn: SendKbn.Email
    }
    let loader = this.showLoading();
    this.apiClient.process(input, PostContactEndpoint).then(result => {
      this.reloadEmails(loader);
      this.email = ''
    }).catch(reason => {
      this.handleErrors(reason, loader);
    })
  }

  reloadEmails(loader?: any) {
    let input = <GetContactInput>{
      send_kbn: SendKbn.Email
    }

    loader = loader ?? this.showLoading();
    this.apiClient.process(input, GetContactEndpoint).then(result => {
      this.emailContacts = result.results.customer_contacts;
      loader.hide();
    }).catch(reason => {
      this.handleErrors(reason, loader);
    })
  }

  onCommit(contact: Contact) {
    let input = <PutContactInput>{
      id: contact.id,
      address: contact.address,
      send_kbn: contact.send_kbn
    }

    let loader = this.showLoading();
    this.apiClient.process(input, PutContactEndpoint).then(result => {
      if (contact.send_kbn == SendKbn.Email) {
        this.reloadEmails(loader);
      } else {
        this.reloadPhoneNumbers(loader);
      }
    }).catch(reason => {
      this.handleErrors(reason, loader);
    })
  }

  onDelete(contact: Contact) {
    this.$confirm(`${contact.address} を削除してよろしいですか?`).then(confirmed => {
      if (confirmed) {
        let input = <DeleteContactInput>{
          id: contact.id,
        }
        let loader = this.showLoading();
        this.apiClient.process(input, DeleteContactEndpoint).then(result => {
          if (contact.send_kbn == SendKbn.Email) {
            this.reloadEmails(loader);
          } else {
            this.reloadPhoneNumbers(loader);
          }
        }).catch(reason => {
          this.handleErrors(reason, loader);
        })
      }
    });
  }

}
</script>
<style scoped>

#va_twoset > ul {
  margin-top: -2%;
}

#va_twoset .va_cont {
  margin-top: 2%;
}

@media print, screen and (min-width: 980px) {
  #va_twoset > ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  #va_twoset .va_cont {
    width: 49%;
  }
}

</style>