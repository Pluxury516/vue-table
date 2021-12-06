<template>
  <div class="modal-wrapper">
    <div class="modal-window">
      <div class="modal-content">
        <div class="modal-header">
          <h5
            id="exampleModalLongTitle"
            class="modal-title">
            Data Table
          </h5>
          <span
            class="modal-icon"
            @click="close"><b-icon icon="x-circle" /></span>
        </div>
        <div class="modal-body">
          <slot />
        </div>
        <div class="modal-footer">
          <button
            class="btn btn-secondary"
            data-dismiss="modal"
            type="button"
            @click="close">
            Close
          </button>
          <button
            class="btn btn-primary"
            type="button"
            @click="copyTable">
            Copy
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { IRows } from '@/types/interfaces'
import { Component, Vue, Prop } from 'vue-property-decorator'

    @Component({
      components: {

      }
    })
export default class Modal extends Vue {
    @Prop({ type: Array, required: true })users!:Array<IRows>
    close ():void {
      this.$emit('close')
    }

    copyTable ():void{
      this.$emit('copyTable')
    }
}
</script>