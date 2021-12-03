<template>
  <div class="popup-wrapper">
    <div class="v-popup">
      <div class="modal-content">
        <div class="modal-header">
          <h5
            id="exampleModalLongTitle"
            class="modal-title">
            Data Table
          </h5>
          <span @click="closePopup"><b-icon icon="x-circle" /></span>
        </div>
        <div class="modal-body">
          <slot />
        </div>
        <div class="modal-footer">
          <button
            class="btn btn-secondary"
            data-dismiss="modal"
            type="button"
            @click="closePopup">
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
    closePopup ():void {
      this.$emit('closePopup')
    }

    copyTable ():void{
      this.$emit('copyTable')
    }
}
</script>

<style lang="scss" scoped>

.popup-wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  top:0;
  bottom:0;
}
.v-popup{
  position: fixed;
  top:50px;
  width: 400px;
  background: #ffffff;

  z-index: 100;
  overflow-y: auto;
  overflow-x: hidden;
}

  .modal-body{
    height: 600px;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
  width: 10px;
  background-color: #f9f9fd;
}

&::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #ccc;
}

&::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);
  box-shadow: inset 0 0 6px rgba(0,0,0,0.2);
  border-radius: 10px;
  background-color: #f9f9fd;
}
  }

span{
  font-size: 1.5rem;
}

.modal-icons{
  width: 25px;
  height: 25px;
  position: absolute;
  top:20px;
  right:10px;
}
</style>