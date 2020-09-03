<template>
  <div>
    <slot/>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import {Vue} from "vue-property-decorator";

@Component
export default class ContentWrapper extends Vue {

}
</script>

<style scoped>
/deep/ .va_cont *,
/deep/ .va_cont {
  font-size: 14px;
  box-sizing: border-box;
}

/deep/ a:focus {
  box-shadow: none;
}

/deep/ .va_cont form,
/deep/ .va_cont ul,
/deep/ .va_cont li,
/deep/ .va_cont dd {
  margin: 0;
}

/deep/ .va_detail ul {
  list-style-type: none;
}

/deep/ .va_cont input[type="text"],
/deep/ .va_cont input[type="tel"],
/deep/ .va_cont input[type="email"],
/deep/ .va_cont select {
  display: block;
  height: 40px;
  padding: 0 12px;
  font-size: 13px;
  border: #D6D6D6 1px solid;
  box-shadow: none;
}

/deep/ .va_cont select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

/deep/ .va_cont input[type="submit"] {
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease-in-out 0s;
  -webkit-box-sizing: content-box;
  -webkit-appearance: button;
  appearance: button;
  box-sizing: border-box;
}


/deep/ .va_cont input[type="submit"] {
  background: #1E9696;
}

/deep/ .va_cont ::-webkit-input-placeholder {
  color: #AAA;
}

/deep/ .va_cont :-ms-input-placeholder {
  color: #AAA;
}

/deep/ .va_cont ::placeholder {
  color: #AAA
}

/deep/ .va_cont {
  background: #fff;
  padding: 40px 20px 44px;
  border-radius: 4px;
  box-shadow: 0 0 3px #E6E6E6;
}

/deep/ .va_cont.tb {
  padding: 32px 10px 26px;
}

/deep/ .va_cont h2 {
  margin: 0 0 28px;
  font-size: 16px;
}

/deep/ .va_cont.tb h2 {
  padding: 0 10px;
}

/deep/ .va_cont h3 {
  margin: 30px 0 12px;
  padding: 0 0 8px;
  color: #1E9696;
  border-bottom: #D6D6D6 1px solid;
}

.va_add {
  margin: 0 0 20px;
  padding: 0 10px;
}

.va_add p {
  margin: 0 0 8px;
  font-size: 12px;
  font-weight: bold;
}

.va_add div {
  position: relative;
}

.va_add input[type="text"],
.va_add input[type="email"],
.va_add input[type="tel"],
/deep/ .va_cont select {
  width: 98%;
  margin: 0;
  padding-right: 92px;
  border-radius: 4px 0 0 4px;
}


.va_add input[type="submit"] {
  background: url("~@/assets/va_add.png") no-repeat 12px 12px,
  #1E9696;
  background-size: 14px !important;
  width: 76px;
  height: 40px;
  margin: 0;
  padding-left: 24px;
  position: absolute;
  top: 0;
  right: 0;
  color: #fff;
  font-size: 13px;
  line-height: 38px;
  border: #1E9696 1px solid;
  border-radius: 0 4px 4px 0;
}

/deep/ .va_cont select {
  background-image: url("~@/assets/va_select.png");
  background-repeat: no-repeat;
  background-position: right 90px top 16px;
  background-size: 10px auto !important;
}


/deep/ .va_cont .scroll {
  max-height: 292px;
  overflow: scroll;
}

/deep/ .va_cont table {
  width: 100%;
  font-size: 13px;
  border-bottom: #EEE 1px solid;
  border-collapse: collapse;
  border-spacing: 0;
}

/deep/ .va_cont thead {
  background: #F2F2F2;
  border-bottom: #eee 2px solid;
  border-top: #fff 2px solid;
}

/deep/ .va_cont th {
  height: 32px;
  font-size: 12px;
  font-weight: normal;
  color: #999;
  text-align: left;
}

/deep/ .va_cont th,
/deep/ .va_cont td {
  padding-right: 10px;
}

/deep/ .va_cont tbody tr {
  border-top: #EEE 1px solid;
}

/deep/ .va_cont tbody tr:nth-child(even) {
  background: #F5FAFA;
}

/deep/ .va_cont td {
  height: 40px;
  font-size: 13px;
}

/deep/ .va_cont thead .va_num {
  width: 20%;
  padding-left: 22px;
}

/deep/ .va_cont tbody .va_num {
  padding-left: 20px;
}

/deep/ .va_cont .btn_area {
  width: 20%;
  padding-right: 0;
  overflow: hidden;
}

/deep/ .va_cont .btn_area a {
  display: block;
  background-size: 11px auto !important;
  width: 24px;
  height: 24px;
  margin: 0 4px;
  float: left;
  border-radius: 4px;
  transition: background 0.3s ease-in-out 0s;
}

/deep/ .va_cont .btn_area.one a {
  float: none;
  margin-left: 32px;
}

/deep/ .va_cont .btn_area .edit {
  background: url("~@/assets/va_edit.png") no-repeat center,
  #eee;
}

/deep/ .va_cont .btn_area .delete {
  background: url("~@/assets/va_delete.png") no-repeat center;
  border: #E62E2E 1px solid;
}


/* spover */
/deep/ .va_cont .spover table {
  min-width: 350px;
}

/deep/ .va_cont .spover .btn_area {
  width: 20%;
}

/deep/ .va_cont .spover_txt {
  display: table;
  margin: 10px auto 0;
  padding: 0 20px;
  position: relative;
}

/deep/ .va_cont .spover_txt:before {
  content: "";
  display: block;
  background: #222;
  width: 100%;
  height: 2px;
  margin: -1px 0 0;
  position: absolute;
  top: 50%;
  left: 0;
}

/deep/ .va_cont .spover_txt span {
  display: inline-block;
  background: #fff;
  padding: 0 8px;
  position: relative;
  font-size: 10px;
}

/deep/ .va_cont .spover_txt span:before,
/deep/ .va_cont .spover_txt span:after {
  content: "";
  display: block;
  width: 0;
  height: 0;
  margin-top: -5px;
  position: absolute;
  top: 50%;
  border: 5px solid transparent;
}

/deep/ .va_cont .spover_txt span:before {
  border-right: 10px solid #222;
  left: -30px;
}

/deep/ .va_cont .spover_txt span:after {
  border-left: 10px solid #222;
  right: -30px;
}

/deep/ .va_cont .va_use.on a {
  background: #1E9696;
}

/deep/ .va_cont .va_use a {
  display: block;
  background: #F2F2F2;
  border-radius: 100px;
}

/deep/ .va_cont .va_use a:before {
  content: "";
  display: block;
  background: #fff;
  position: absolute;
  top: 3px;
  left: 4px;
  border-radius: 100px;
  box-shadow: 0 0 3px #E6E6E6;
}


/deep/ #va_code h2 {
  margin-bottom: 18px;
}

/deep/ .va_cont .va_use {
  display: flex;
}

/deep/ .va_cont .va_use h2 {
  margin-bottom: 18px;
}

/deep/ .va_cont .va_use a {
  width: 48px;
  height: 24px;
  margin: -3px 10px 36px 0;
  position: relative;
  transition: background 0.3s ease-in-out 0s;
}

/deep/ .va_cont .va_use a:before {
  width: 18px;
  height: 18px;
}

/deep/ .va_cont .va_use.on a:before {
  left: 26px;
}

/deep/ .va_cont .va_use span {
  font-size: 16px;
}

/deep/ .va_cont .va_key div:first-of-type h3 {
  margin-top: 0;
}

/deep/ .va_cont .va_key textarea {
  width: 100%;
  height: 80px;
  padding: 12px 16px;
  font-size: 12px;
  border: #D6D6D6 1px solid;
  resize: none;
}

/deep/ .va_cont .va_key input[type="text"] {
  width: 100%;
  max-width: 400px;
}

/deep/ #va_code input[type="submit"] {
  width: 100px;
  height: 32px;
  margin-top: 32px;
}

/deep/ .va_cont dl {
  margin: 20px 0 0;
}

/deep/ .va_cont dt {
  margin-bottom: 14px;
  font-size: 12px;
  font-weight: bold;
}

/deep/ .va_cont dd select {
  width: 56px;
  height: 24px;
}

/deep/ .va_cont dd input[type="radio"] {
  display: none;
  width: 16px;
  height: 16px;
  margin-right: 8px;
}

/deep/ .va_cont dd label {
  padding-left: 24px;
  position: relative;
  vertical-align: top;
}

/deep/ .va_cont dd label:before,
/deep/ .va_cont dd label:after {
  content: "";
  position: absolute;
  border-radius: 20px;
}

/deep/ .va_cont dd label:before {
  display: block;
  width: 16px;
  height: 16px;
  top: 0;
  left: 0;
  border: #EEE 1px solid;
}

/deep/ .va_cont dd label:after {
  display: none;
  background: #fff;
  width: 6px;
  height: 6px;
  top: 6px;
  left: 6px;
}

/deep/ .va_cont dd input[type="radio"]:checked + label:before {
  background: #1E9696;
  border: #1E9696 1px solid;
}

/deep/ .va_cont dd input[type="radio"]:checked + label:after {
  display: block;
}

/deep/ .va_cont dd input[type="submit"] {
  width: 64px;
  height: 24px;
  font-size: 13px;
  line-height: 22px;
}

/deep/ .va_cont dd ul {
  display: flex;
  margin: 0 -12px 12px 0;
}

/deep/ .va_cont dd li {
  margin-right: 12px;
  font-size: 13px;
}

/deep/ .va_cont .va_error dd {
  display: flex;
  margin-top: -4px;
}

/deep/ .va_cont .va_error .va_select {
  margin-right: 8px;
}

/deep/ .va_cont .va_select {
  width: 56px;
  height: 24px;
  overflow: hidden;
  border: #D6D6D6 1px solid;
  border-radius: 4px;
}

/deep/ .va_cont .va_select select {
  background: url("~@/assets/va_select.png") no-repeat 36px 9px;
  width: 70px;
  height: 22px;
  padding: 0 10px;
  border: none;
}

/deep/ #va_security p {
  margin: 0;
  font-size: 13px;
}

/deep/ #va_watch .scroll {
  max-height: none;
}

/deep/ #va_watch .spover table {
  min-width: 764px;
}

/deep/ #va_watch th {
  width: 18%;
}

/deep/ .va_cont .va_check {
  width: 17%;
  background-size: 20px !important;
  padding-left: 20px;
}

/deep/ .va_cont .ok .va_check {
  background: url("~@/assets/va_ok.png") no-repeat 48px center;
}

/deep/ .va_cont .ng .va_check {
  background: url("~@/assets/va_ng.png") no-repeat 48px center;
}

/deep/ .va_cont .va_agent {
  width: 31%;
  padding: 10px 30px 10px 0;
  font-size: 12px;
  line-height: 1.6;
}

/deep/ .va_cont .va_info {
  width: 16%;
}


@media print, screen and (max-width: 400px) {
  /deep/ .va_cont .btn_area {
    width: 27%;
  }
}

@media print, screen and (min-width: 641px) {
  /deep/ .va_cont input[type="text"],
  /deep/ .va_cont input[type="tel"],
  /deep/ .va_cont input[type="email"],
  /deep/ .va_cont select {
    font-size: 14px;
    padding: 0 16px;
  }

  /deep/ .va_cont input[type="submit"]:hover {
    background: #25B1B1;
  }

  /deep/ .va_cont {
    min-height: 450px;
    padding: 40px 40px 44px;
  }

  /deep/ .va_cont.tb {
    padding: 40px 24px 24px;
  }

  /deep/ .va_cont h2 {
    margin: 0 0 36px;
  }

  /deep/ .va_cont.tb h2 {
    padding: 0 16px;
  }

  /deep/ .va_cont h3 {
    margin: 36px 0 12px;
  }

  .va_add {
    margin: 0 0 30px;
    padding: 0 16px;
  }

  .va_add input[type="submit"] {
    width: 80px;
    font-size: 14px;
    transition: background 0.3s ease-in-out 0s,
    border 0.3s ease-in-out 0s;
  }

  .va_add input[type="submit"]:hover {
    background: url("~@/assets/va_add.png") no-repeat 12px 12px,
    #25B1B1;
    border: #25B1B1 1px solid;
  }

  /deep/ .va_cont td {
    font-size: 14px;
  }

  /deep/ .va_cont thead .va_num {
    width: 23%;
    padding-left: 44px;
  }

  /deep/ .va_cont tbody .va_num {
    padding-left: 40px;
  }

  /deep/ .va_cont .btn_area {
    width: 17% !important;
  }

  /deep/ .va_cont .btn_area .edit:hover {
    background: url("~@/assets/va_edit.png") no-repeat center,
    #E2E2E2;
  }

  /deep/ .va_cont .btn_area .delete:hover {
    background: url("~@/assets/va_delete.png") no-repeat center,
    #FFF0F0;
  }
}

/*************************************************************************************************************************
* 980px以上用の記述
*************************************************************************************************************************/
@media print, screen and (min-width: 980px) {

  /* va_menu
  **********************************************************************/
  /* va_point
  **********************************************************************/
  /deep/ #va_twoset > ul,
  /deep/ #va_point > ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  /deep/ #va_twoset .va_cont,
  /deep/ #va_point .va_cont {
    width: 49%;
  }


  /* va_watch
  **********************************************************************/
  /deep/ .va_cont .va_check {
    padding-left: 40px;
  }

  /deep/ .va_cont .ok .va_check {
    background: url("~@/assets/va_ok.png") no-repeat 68px center;
  }

  /deep/ .va_cont .ng .va_check {
    background: url("~@/assets/va_ng.png") no-repeat 68px center;
  }

  /deep/ .va_cont .va_agent {
    padding: 10px 8% 10px 0;
  }

  /* spover */
  /deep/ #va_watch .spover_txt {
    display: none;
  }


  /* va_security
  **********************************************************************/
  /deep/ .va_cont dd li {
    margin-right: 24px;
    font-size: 16px;
  }
}

</style>

