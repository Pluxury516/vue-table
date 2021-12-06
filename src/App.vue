<template>
  <div id="app">
    <div>
      <b-button
        class="btn"
        variant="dark"
        @click="getSmallTable">
        Add Small Table
      </b-button>
      <b-button
        class="btn"
        variant="dark"
        @click="getBigTable">
        Add Big Table
      </b-button>
    </div>
    <div
      v-for="(table, tableIndex) in tables"
      :key="tableIndex"
      class="table-container">
      <VueComplexTable
        :fields="fields"
        :rows="table"
        @delete="onDelete(tableIndex)" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import VueComplexTable from './components/VueComplexTable.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
@Component({
  components: {
    VueComplexTable
  }
})
export default class App extends Vue {
  fields:Array<string> = ['id', 'firstName', 'lastName', 'email', 'phone', 'adress.streetAddress', 'adress.city', 'adress.state', 'adress.zip', 'Actions']

  tables:number[] = []

  getSmallTable ():void {
    this.tables.push(32)
  }

  getBigTable ():void {
    this.tables.push(100)
  }

  onDelete (i:number):void {
    this.tables.splice(i, 1)
  }
}
</script>

<style lang="scss">
@import './assets/styles/index.scss';
</style>
