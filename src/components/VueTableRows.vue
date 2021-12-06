<template>
  <tbody>
    <tr>
      <template v-for="(u, indexField) in fields">
        <td
          v-if="u === 'Actions'"
          :key="`actions-${indexField}`">
          <div class="icon-container">
            <b-icon
              icon="back"
              @click="copyRows" />
            <b-icon
              icon="plus-circle"
              @click="addNewRows" />
            <b-icon
              icon="plus-circle-fill"
              @click="addNewEndRows" />
          </div>
        </td>
        <VueTableCell
          v-else
          :key="indexField"
          :r="user[u]"
          @change="(value) => onChange(u,value)" />
      </template>
    </tr>
  </tbody>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import VueTableCell from './VueTableCell.vue'
import { IRows } from '@/types/interfaces'

    @Component({
      components: {
        VueTableCell
      }
    })
export default class VueTableRows extends Vue {
@Prop({ type: Object, required: true })user!:Array<IRows>
@Prop({ type: Array, required: true })fields!:any

copyRows ():void {
  const copyRows = this.user
  this.$emit('newCopyRows', copyRows)
}

onChange (index:number, value:string):void{
  this.$emit('change', index, value)
}

addNewRows ():void{
  const newRows = this.user
  this.$emit('newRows', newRows)
}

addNewEndRows ():void{
  const newRowsEnd = this.user
  this.$emit('newEndRows', newRowsEnd)
}
}

</script>
