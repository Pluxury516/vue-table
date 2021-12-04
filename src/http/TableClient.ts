
import { IRows } from '@/types/interfaces'
import axios from 'axios'

export class TableClient {
  private readonly apiUri = 'http://www.filltext.com/'
  async getData (rows:number):Promise<IRows[]> {
    try {
      const { data } = await axios.get(this.apiUri, {
        params: {
          rows,
          id: '{number|1000}',
          firstName: '{firstName}',
          lastName: '{lastName}',
          email: '{email}',
          phone: '{phone|(xxx)xxx-xx-xx}',
          adress: '{addressObject}'
        }
      })

      return data
    } catch (e) {
      console.error(e)
    }
    return []
  }
}