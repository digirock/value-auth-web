<template>
  <tr>
    <td class="va_num">{{ id }}</td>

    <td v-if="!editing">{{ label }}</td>
    <td v-else>
      <form action="#" v-on:submit.prevent="commit">
        <div class="edit_area">
          <input :type="contact.send_kbn === 1 ? 'tel' : 'email'" v-model="label"/>
          <input type="submit" value="保存">
          <a href="#" class="close" v-on:click.prevent="toggleEdit"></a>
        </div>
      </form>
    </td>

    <td class="btn_area" v-if="!editing">
      <a href="#" class="edit" v-on:click.prevent="toggleEdit"></a>
      <a href="#" class="delete" v-on:click.prevent="askDeletion"></a>
    </td>
  </tr>
</template>

<script lang="ts">
import {Component, Prop} from "vue-property-decorator";
import {PropType} from "vue";
import DataRow from "./DataRow.vue";
import {Contact, Model} from "value-auth-js";

@Component({})
export default class ContactRow extends DataRow {
  @Prop({type: Object as PropType<Contact>}) contact!: Contact;
  editing: boolean = false;

  get label(): string | undefined {
    return this.contact.address;
  }

  set label(newLabel: string | undefined) {
    this.contact.address = newLabel;
  }

  get dataInstance(): Model | undefined {
    return this.contact;
  }

}
</script>

<style scoped>

</style>