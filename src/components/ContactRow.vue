<template>
  <tr>
    <td class="va_num">{{ id }}</td>

    <td v-if="!editing">{{ label }}</td>
    <td v-else>
      <form action="#" v-on:submit.prevent="commit">
        <input :type="contact.send_kbn === 1 ? 'tel' : 'email'" v-model="label"/>
      </form>
    </td>

    <td class="btn_area">
      <a href="#" class="edit" v-on:click="toggleEdit"></a>
      <a href="#" class="delete" v-on:click="askDeletion"></a>
    </td>
  </tr>
</template>

<script lang="ts">
import {Component, Prop} from "vue-property-decorator";
import {PropType} from "vue";
import {Contact, Model} from "@/client/ApiResult";
import DataRow from "@/components/DataRow.vue";

@Component({})
export default class ContactRow extends DataRow{
  @Prop({type: Object as PropType<Contact>}) contact!: Contact;
  editing: boolean = false;

  get label(): string | undefined {
    return this.contact.address;
  }

  set label(newLabel: string | undefined) {
    this.contact.address = newLabel;
  }

  get id(): string {
    return this.contact.id.toString();
  }

  get dataInstance(): Model | undefined {
    return this.contact;
  }

}
</script>

<style scoped>

</style>