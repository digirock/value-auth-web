<template>
  <tr>
    <td class="va_num">{{ id }}</td>

    <td v-if="!editing">{{ label }}</td>
    <td v-else>
      <form action="#" v-on:submit.prevent="commit">
        <input :type="contact.send_kbn === 1 ? 'tel' : 'email'" v-model="label"/></form>
    </td>

    <td class="btn_area">
      <a href="#" class="edit" v-on:click="toggleEdit"></a>
      <a href="#" class="delete" v-on:click="askDeletion"></a>
    </td>
  </tr>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import {PropType} from "vue";
import {Contact} from "@/client/ApiResult";

@Component
export default class ContactRow extends Vue {
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

  toggleEdit() {
    this.editing = !this.editing;
  }

  askDeletion() {
    this.$emit('delete', this.contact);
  }

  commit() {
    this.toggleEdit();
    this.$emit('commit', this.contact);
  }

}
</script>

<style scoped>

</style>