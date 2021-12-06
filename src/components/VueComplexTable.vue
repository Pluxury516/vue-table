<template>
  <div>
    <Modal
      v-if="showModalWindow"
      :users="users"
      @click="showModal"
      @close="closeModal"
      @copyTable="onCopyTable">
      <pre>
       <code>
          {{ users }}
       </code>
     </pre>
    </Modal>
    <div class="table-size">
      <table class="table table-bordered table-dark table-hover table-responsive-sm">
        <thead>
          <tr>
            <th
              v-for="(field,index) in fields"
              :key="index"
              scope="col"
              @click="sortTable(field)">
              <span>{{ field }}</span>
            </th>
          </tr>
        </thead>
        <VueTableRows
          v-for="(user, rowIndex) in paginationUsers"
          :key="rowIndex"
          :fields="fields"
          :user="user"
          @change="(fieldName,fieldValue)=> onChange(rowIndex, fieldName, fieldValue)"
          @newCopyRows="displayCopyRows(user,rowIndex)"
          @newEndRows="displayNewEndRows(user)"
          @newRows="displayNewRows(rowIndex)" />
      </table>
      <div class="pages-container">
        <div
          v-for="(page, indexPage) in pages"
          :key="indexPage"
          class="page"
          :class="{'page-selected': page === pageNumber}"
          @click="pageClick(page)">
          {{ page }}
        </div>
      </div>
      <div
        v-if="isVisible"
        class="button-container">
        <b-button
          class="table-button"
          @click="clearUser">
          Clear Table
        </b-button>
        <b-button
          class="table-button"
          @click="deleteTable">
          Delete Table
        </b-button>
        <b-button
          class="table-button"
          @click="showModal">
          Copy Table
        </b-button>
        <b-button
          class="table-button"
          @click="restoreTable">
          Restore Table
        </b-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { TableClient } from '@/http/TableClient'
import { IRows } from '@/types/interfaces'
import { Component, Prop, Vue } from 'vue-property-decorator'
import VueTableRows from './VueTableRows.vue'
import { flattenObject, clearObject } from '@/utils'
import Modal from '@/components/app/Modal.vue'
import _ from 'lodash'

const tableClient = new TableClient()

@Component({
  components: {
    VueTableRows,
    Modal
  }
})
export default class VueComplexTable extends Vue {
  isVisible = true
  users:IRows[] = []
  pageNumber = 1
  pageSize = 10
  showModalWindow = false
  currentSortDir = 'asc'
  @Prop({ type: Number, default: 32 })rows!:number
  @Prop({ type: Array, required: true })fields!:Array<string>

  async mounted ():Promise<void> {
    this.users = await tableClient.getData(this.rows)
    this.users = this.users.map(a => {
      return flattenObject(a)
    })
  }

  onChange (rowIndex:number, fieldName:string, fieldValue:string):void{
    this.$set(this.users[rowIndex], fieldName, fieldValue)
  }

  pageClick (page:number):void {
    this.pageNumber = page
  }

  displayCopyRows (copyRows:IRows, i:number):void {
    this.users.splice(i, 0, copyRows)
  }

  displayNewRows (i:number):void{
    const createRow = (i:number) => {
      const row = this.users[i]
      this.users.splice(i, 0, clearObject(row))
    }
    createRow(i + 1)
  }

  displayNewEndRows (newEndRows:IRows):void {
    this.users.push(clearObject(newEndRows))
  }

  clearUser ():void {
    this.users = this.users.map(a => {
      return clearObject(a)
    })
  }

  deleteTable ():void {
    this.$emit('delete')
  }

  showModal ():void {
    this.showModalWindow = true
    JSON.stringify(this.users, null, 2)
  }

  closeModal ():void {
    this.showModalWindow = false
  }

  onCopyTable ():void {
    navigator.clipboard.writeText(JSON.stringify(this.users)).catch(error => {
      throw new Error(error)
    })
  }

  restoreTable ():void {
    navigator.clipboard
      .readText()
      .then(text => {
        this.users = JSON.parse(text)
        this.pageNumber = 1
      })
      .catch(error => {
        throw new Error(error)
      })
  }

  sortTable (f:string):void {
    if (f) {
      this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc'
      this.users = _.orderBy(this.users, f, this.currentSortDir)
    }
  }

  get pages ():number {
    return Math.ceil(this.users.length / 10)
  }

  get paginationUsers ():Array<IRows> {
    const from = (this.pageNumber - 1) * this.pageSize
    const to = from + this.pageSize
    return this.users.slice(from, to)
  }
}
</script>
