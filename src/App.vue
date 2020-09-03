<template>
  <div>
    <menu-bar></menu-bar>
    <router-view/>
  </div>
</template>

<script>
import MenuBar from "@/components/MenuBar";
import SmsAndEmailView from "@/views/SmsAndEmailView";
import {Component, Vue} from "vue-property-decorator";

@Component({
  components: {MenuBar, SmsAndEmailView}
})
export default class App extends Vue {
}
</script>