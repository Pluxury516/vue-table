<template>
  <div id="app">
    <div>
      <b-button
        class="btnSmall"
        variant="dark"
        @click="getSmallTable">
        Add Small Table
      </b-button>
      <b-button
        class="btnBig"
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
        :rows="rows" />
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
  rows = 0
  tables = 0

  getSmallTable ():void {
    this.rows = 32
    this.tables++
  }

  getBigTable ():void {
    this.rows = 100
    this.tables++
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 20px;
}

.btnBig{
  margin-left: 20px;
}
.table-container{
  padding-top: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
