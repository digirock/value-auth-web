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
                <select>
                  <option value="test">test</option>
                  <option value="test">test</option>
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
              <tr>
                <td class="va_num">10</td>
                <td>沖縄県</td>
                <td class="btn_area one"><a href="#" class="delete"></a></td>
              </tr>
              <tr>
                <td class="va_num">10</td>
                <td>沖縄県</td>
                <td class="btn_area one"><a href="#" class="delete"></a></td>
              </tr>
              <tr>
                <td class="va_num">10</td>
                <td>沖縄県</td>
                <td class="btn_area one"><a href="#" class="delete"></a></td>
              </tr>
              <tr>
                <td class="va_num">10</td>
                <td>沖縄県</td>
                <td class="btn_area one"><a href="#" class="delete"></a></td>
              </tr>
              <tr>
                <td class="va_num">10</td>
                <td>沖縄県</td>
                <td class="btn_area one"><a href="#" class="delete"></a></td>
              </tr>
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
              <tr class="on">
                <td class="va_num">10</td>
                <td>172.217.26.99</td>
                <td class="va_ip"><a href="#"></a>許可</td>
                <td class="btn_area">
                  <a href="#" class="edit"></a>
                  <a href="#" class="delete"></a>
                </td>
              </tr>
              <tr>
                <td class="va_num">10</td>
                <td>172.217.26.99</td>
                <td class="va_ip"><a href="#"></a>許可</td>
                <td class="btn_area">
                  <a href="#" class="edit"></a>
                  <a href="#" class="delete"></a>
                </td>
              </tr>
              <tr class="on">
                <td class="va_num">10</td>
                <td>172.217.26.99</td>
                <td class="va_ip"><a href="#"></a>許可</td>
                <td class="btn_area">
                  <a href="#" class="edit"></a>
                  <a href="#" class="delete"></a>
                </td>
              </tr>
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
                <select>
                  <option value="test">test</option>
                  <option value="test">test</option>
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
              <tr class="on">
                <td class="va_num">10</td>
                <td>コロンビア</td>
                <td class="va_ip"><a href="#"></a>許可</td>
                <td class="btn_area">
                  <a href="#" class="edit"></a>
                  <a href="#" class="delete"></a>
                </td>
              </tr>
              <tr>
                <td class="va_num">10</td>
                <td>コロンビア</td>
                <td class="va_ip"><a href="#"></a>許可</td>
                <td class="btn_area">
                  <a href="#" class="edit"></a>
                  <a href="#" class="delete"></a>
                </td>
              </tr>
              <tr class="on">
                <td class="va_num">10</td>
                <td>コロンビア</td>
                <td class="va_ip"><a href="#"></a>許可</td>
                <td class="btn_area">
                  <a href="#" class="edit"></a>
                  <a href="#" class="delete"></a>
                </td>
              </tr>
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

@Component({
  components: {ContentWrapper}
})
export default class LocationAndIpView extends Vue {

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