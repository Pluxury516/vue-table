<template>
  <th>
    <td
      v-if="isActive"
      scope="row"
      @click="changeCell">
      {{ r }}
    </td>
    <td
      v-else
      scope="row">
      <input
        type="text"
        :value="r"
        @change="onChange($event.target.value)"
        @keyup.enter="changeCell">
    </td>
  </th>
</template>

<script lang="ts">

import { Component, Model, Vue } from 'vue-property-decorator'

    @Component({
      components: {

      }
    })
export default class VueTableCell extends Vue {
  @Model('change', { type: [String, Number], required: true })r!: string | number

  isActive=true

  changeCell ():void {
    this.isActive = !this.isActive
  }

  onChange (value:string):void {
    this.$emit('change', value)
  }
}
</script>