<template>

</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {Model} from "@/client/ApiResult";

@Component({})
export default class DataRow extends Vue {
  editing: boolean = false;

  get label(): string | undefined {
    //Implement in subclass
    return undefined;
  }

  set label(newLabel: string | undefined) {
    //Implement in subclass
  }

  get id(): number | undefined {
    return this.dataInstance?.id;
  }

  toggleEdit() {
    this.editing = !this.editing;
  }

  get dataInstance(): Model | undefined {
    return undefined;
  }

  askDeletion() {
    this.$emit('delete', this.dataInstance);
  }

  commit() {
    if (this.editing) {
      this.toggleEdit();
    }
    this.$emit('commit', this.dataInstance);
  }


}
</script>

<style scoped>

</style>