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
.va_cont ::v-deep *,
.va_cont ::v-deep {
  font-size: 14px;
  box-sizing: border-box;
}

a:focus ::v-deep {
  box-shadow: none;
}

.va_cont form ::v-deep,
.va_cont ul ::v-deep,
.va_cont li ::v-deep,
.va_cont dd ::v-deep {
  margin: 0;
}

.va_detail ul ::v-deep {
  list-style-type: none;
}

.va_cont input[type="text"] ::v-deep,
.va_cont input[type="tel"] ::v-deep,
.va_cont input[type="email"] ::v-deep,
.va_cont select ::v-deep {
  display: block;
  height: 40px;
  padding: 0 12px;
  font-size: 13px;
  border: #D6D6D6 1px solid;
  box-shadow: none;
}

.va_cont select ::v-deep {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.va_cont input[type="submit"] ::v-deep {
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


.va_cont input[type="submit"] ::v-deep {
  background: #1E9696;
}

.va_cont ::-webkit-input-placeholder ::v-deep {
  color: #AAA;
}

.va_cont :-ms-input-placeholder ::v-deep {
  color: #AAA;
}

.va_cont ::placeholder ::v-deep {
  color: #AAA
}

.va_cont ::v-deep {
  background: #fff;
  padding: 40px 20px 44px;
  border-radius: 4px;
  box-shadow: 0 0 3px #E6E6E6;
}

.va_cont.tb ::v-deep {
  padding: 32px 10px 26px;
}

.va_cont h2 ::v-deep {
  margin: 0 0 28px;
  font-size: 16px;
}

.va_cont.tb h2 ::v-deep {
  padding: 0 10px;
}

.va_cont h3 ::v-deep {
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
.va_cont select ::v-deep {
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

.va_cont select ::v-deep {
  background-image: url("~@/assets/va_select.png");
  background-repeat: no-repeat;
  background-position: right 90px top 16px;
  background-size: 10px auto !important;
}


.va_cont .scroll ::v-deep {
  max-height: 292px;
  overflow: scroll;
}

.va_cont table ::v-deep {
  width: 100%;
  font-size: 13px;
  border-bottom: #EEE 1px solid;
  border-collapse: collapse;
  border-spacing: 0;
}

.va_cont thead ::v-deep {
  background: #F2F2F2;
  border-bottom: #eee 2px solid;
  border-top: #fff 2px solid;
}

.va_cont th ::v-deep {
  height: 32px;
  font-size: 12px;
  font-weight: normal;
  color: #999;
  text-align: left;
}

.va_cont th ::v-deep,
.va_cont td ::v-deep {
  padding-right: 10px;
}

.va_cont tbody tr ::v-deep {
  border-top: #EEE 1px solid;
}

.va_cont tbody tr:nth-child(even) ::v-deep {
  background: #F5FAFA;
}

.va_cont td ::v-deep {
  height: 40px;
  font-size: 13px;
}

.va_cont thead .va_num ::v-deep {
  width: 20%;
  padding-left: 22px;
}

.va_cont tbody .va_num ::v-deep {
  padding-left: 20px;
}

.va_cont .btn_area ::v-deep {
  width: 20%;
  padding-right: 0;
  overflow: hidden;
}

.va_cont .btn_area a ::v-deep {
  display: block;
  background-size: 11px auto !important;
  width: 24px;
  height: 24px;
  margin: 0 4px;
  float: left;
  border-radius: 4px;
  transition: background 0.3s ease-in-out 0s;
}

.va_cont .btn_area.one a ::v-deep {
  float: none;
  margin-left: 32px;
}

.va_cont .btn_area .edit ::v-deep {
  background: url("~@/assets/va_edit.png") no-repeat center,
  #eee;
}

.va_cont .btn_area .delete ::v-deep {
  background: url("~@/assets/va_delete.png") no-repeat center;
  border: #E62E2E 1px solid;
}


/* spover */
.va_cont .spover table ::v-deep {
  min-width: 350px;
}

.va_cont .spover .btn_area ::v-deep {
  width: 20%;
}

.va_cont .spover_txt ::v-deep {
  display: table;
  margin: 10px auto 0;
  padding: 0 20px;
  position: relative;
}

.va_cont .spover_txt:before ::v-deep {
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

.va_cont .spover_txt span ::v-deep {
  display: inline-block;
  background: #fff;
  padding: 0 8px;
  position: relative;
  font-size: 10px;
}

.va_cont .spover_txt span:before ::v-deep,
.va_cont .spover_txt span:after ::v-deep {
  content: "";
  display: block;
  width: 0;
  height: 0;
  margin-top: -5px;
  position: absolute;
  top: 50%;
  border: 5px solid transparent;
}

.va_cont .spover_txt span:before ::v-deep {
  border-right: 10px solid #222;
  left: -30px;
}

.va_cont .spover_txt span:after ::v-deep {
  border-left: 10px solid #222;
  right: -30px;
}

.va_cont .va_use.on a ::v-deep {
  background: #1E9696;
}

.va_cont .va_use a ::v-deep {
  display: block;
  background: #F2F2F2;
  border-radius: 100px;
}

.va_cont .va_use a:before ::v-deep {
  content: "";
  display: block;
  background: #fff;
  position: absolute;
  top: 3px;
  left: 4px;
  border-radius: 100px;
  box-shadow: 0 0 3px #E6E6E6;
}


#va_code h2 ::v-deep {
  margin-bottom: 18px;
}

.va_cont .va_use ::v-deep {
  display: flex;
}

.va_cont .va_use h2 ::v-deep {
  margin-bottom: 18px;
}

.va_cont .va_use a ::v-deep {
  width: 48px;
  height: 24px;
  margin: -3px 10px 36px 0;
  position: relative;
  transition: background 0.3s ease-in-out 0s;
}

.va_cont .va_use a:before ::v-deep {
  width: 18px;
  height: 18px;
}

.va_cont .va_use.on a:before ::v-deep {
  left: 26px;
}

.va_cont .va_use span ::v-deep {
  font-size: 16px;
}

.va_cont .va_key div:first-of-type h3 ::v-deep {
  margin-top: 0;
}

.va_cont .va_key textarea ::v-deep {
  width: 100%;
  height: 80px;
  padding: 12px 16px;
  font-size: 12px;
  border: #D6D6D6 1px solid;
  resize: none;
}

.va_cont .va_key input[type="text"] ::v-deep {
  width: 100%;
  max-width: 400px;
}

#va_code input[type="submit"] ::v-deep {
  width: 100px;
  height: 32px;
  margin-top: 32px;
}

.va_cont dl ::v-deep {
  margin: 20px 0 0;
}

.va_cont dt ::v-deep {
  margin-bottom: 14px;
  font-size: 12px;
  font-weight: bold;
}

.va_cont dd select ::v-deep {
  width: 56px;
  height: 24px;
}

.va_cont dd input[type="radio"] ::v-deep {
  display: none;
  width: 16px;
  height: 16px;
  margin-right: 8px;
}

.va_cont dd label ::v-deep {
  padding-left: 24px;
  position: relative;
  vertical-align: top;
}

.va_cont dd label:before ::v-deep,
.va_cont dd label:after ::v-deep {
  content: "";
  position: absolute;
  border-radius: 20px;
}

.va_cont dd label:before ::v-deep {
  display: block;
  width: 16px;
  height: 16px;
  top: 0;
  left: 0;
  border: #EEE 1px solid;
}

.va_cont dd label:after ::v-deep {
  display: none;
  background: #fff;
  width: 6px;
  height: 6px;
  top: 6px;
  left: 6px;
}

.va_cont dd input[type="radio"]:checked + label:before ::v-deep {
  background: #1E9696;
  border: #1E9696 1px solid;
}

.va_cont dd input[type="radio"]:checked + label:after ::v-deep {
  display: block;
}

.va_cont dd input[type="submit"] ::v-deep {
  width: 64px;
  height: 24px;
  font-size: 13px;
  line-height: 22px;
}

.va_cont dd ul ::v-deep {
  display: flex;
  margin: 0 -12px 12px 0;
}

.va_cont dd li ::v-deep {
  margin-right: 12px;
  font-size: 13px;
}

.va_cont .va_error dd ::v-deep {
  display: flex;
  margin-top: -4px;
}

.va_cont .va_error .va_select ::v-deep {
  margin-right: 8px;
}

.va_cont .va_select ::v-deep {
  width: 56px;
  height: 24px;
  overflow: hidden;
  border: #D6D6D6 1px solid;
  border-radius: 4px;
}

.va_cont .va_select select ::v-deep {
  background: url("~@/assets/va_select.png") no-repeat 36px 9px;
  width: 70px;
  height: 22px;
  padding: 0 10px;
  border: none;
}

#va_security p ::v-deep {
  margin: 0;
  font-size: 13px;
}

#va_watch .scroll ::v-deep {
  max-height: none;
}

#va_watch .spover table ::v-deep {
  min-width: 764px;
}

#va_watch th ::v-deep {
  width: 18%;
}

.va_cont .va_check ::v-deep {
  width: 17%;
  background-size: 20px !important;
  padding-left: 20px;
}

.va_cont .ok .va_check ::v-deep {
  background: url("~@/assets/va_ok.png") no-repeat 48px center;
}

.va_cont .ng .va_check ::v-deep {
  background: url("~@/assets/va_ng.png") no-repeat 48px center;
}

.va_cont .va_agent ::v-deep {
  width: 31%;
  padding: 10px 30px 10px 0;
  font-size: 12px;
  line-height: 1.6;
}

.va_cont .va_info ::v-deep {
  width: 16%;
}


@media print, screen and (max-width: 400px) {
  .va_cont .btn_area ::v-deep {
    width: 27%;
  }
}

@media print, screen and (min-width: 641px) {
  .va_cont input[type="text"] ::v-deep,
  .va_cont input[type="tel"] ::v-deep,
  .va_cont input[type="email"] ::v-deep,
  .va_cont select ::v-deep {
    font-size: 14px;
    padding: 0 16px;
  }

  .va_cont input[type="submit"]:hover ::v-deep {
    background: #25B1B1;
  }

  .va_cont ::v-deep {
    min-height: 450px;
    padding: 40px 40px 44px;
  }

  .va_cont.tb ::v-deep {
    padding: 40px 24px 24px;
  }

  .va_cont h2 ::v-deep {
    margin: 0 0 36px;
  }

  .va_cont.tb h2 ::v-deep {
    padding: 0 16px;
  }

  .va_cont h3 ::v-deep {
    margin: 36px 0 12px;
  }

  .va_add ::v-deep {
    margin: 0 0 30px;
    padding: 0 16px;
  }

  .va_add input[type="submit"] ::v-deep {
    width: 80px;
    font-size: 14px;
    transition: background 0.3s ease-in-out 0s,
    border 0.3s ease-in-out 0s;
  }

  .va_add input[type="submit"]:hover ::v-deep {
    background: url("~@/assets/va_add.png") no-repeat 12px 12px,
    #25B1B1;
    border: #25B1B1 1px solid;
  }

  .va_cont td ::v-deep {
    font-size: 14px;
  }

  .va_cont thead .va_num ::v-deep {
    width: 23%;
    padding-left: 44px;
  }

  .va_cont tbody .va_num ::v-deep {
    padding-left: 40px;
  }

  .va_cont .btn_area ::v-deep {
    width: 17% !important;
  }

  .va_cont .btn_area .edit:hover ::v-deep {
    background: url("~@/assets/va_edit.png") no-repeat center,
    #E2E2E2;
  }

  .va_cont .btn_area .delete:hover ::v-deep {
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
  #va_twoset > ul ::v-deep,
  #va_point > ul ::v-deep {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  #va_twoset .va_cont ::v-deep,
  #va_point .va_cont ::v-deep {
    width: 49%;
  }


  /* va_watch
  **********************************************************************/
  .va_cont .va_check ::v-deep {
    padding-left: 40px;
  }

  .va_cont .ok .va_check ::v-deep {
    background: url("~@/assets/va_ok.png") no-repeat 68px center;
  }

  .va_cont .ng .va_check ::v-deep {
    background: url("~@/assets/va_ng.png") no-repeat 68px center;
  }

  .va_cont .va_agent ::v-deep {
    padding: 10px 8% 10px 0;
  }

  /* spover */
  #va_watch .spover_txt ::v-deep {
    display: none;
  }


  /* va_security
  **********************************************************************/
  .va_cont dd li ::v-deep {
    margin-right: 24px;
    font-size: 16px;
  }
}


/* edit_area */
.va_cont .edit_area ::v-deep {
  display: flex;
  justify-content: space-between;
  z-index: 2;
}

.va_cont .edit_area input[type=text] ::v-deep,
.va_cont .edit_area input[type=tel] ::v-deep,
.va_cont .edit_area input[type=email] ::v-deep,
.va_cont .edit_area input[type=submit] ::v-deep,
.va_cont .edit_area select ::v-deep,
.va_cont .edit_area .close ::v-deep {
  height: 28px;
  margin: 0;
}

.va_cont .edit_area input[type=text] ::v-deep,
.va_cont .edit_area input[type=tel] ::v-deep,
.va_cont .edit_area input[type=email] ::v-deep,
.va_cont .edit_area select ::v-deep {
  width: calc(100% - 92px);
  min-height: auto;
  padding: 0 8px;
  border: #86affe 1px solid;
  border-radius: 4px 0 0 4px;
}

.va_cont .edit_area input[type=submit] ::v-deep {
  width: 60px;
  padding-top: 4px;
  font-size: 13px;
  outline: none;
  border-radius: 0;
}

.va_cont .edit_area .close ::v-deep {
  display: block;
  background: url("~@/assets/va_close.png") no-repeat center 9px, #eee;
  background-size: 10px !important;
  width: 32px;
  border-radius: 0 4px 4px 0;
  transition: background 0.3s ease-in-out 0s;
}


</style>

