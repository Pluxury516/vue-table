import axios from 'axios'
import { IRows } from '@/types/interfaces'

export class DataBaseBig {
  async getBigDataBase (rows:number):Promise<IRows[]> {
    try {
      const { data } = await axios.get('http://www.filltext.com/?&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&adress=%7BaddressObject%7D&description=%7Blorem%7C32%7D', {
        params: {
          rows

        }
      })
      console.log(data)
      return data
    } catch (e) {
      console.error(e)
    }
    return this.getBigDataBase(rows)
  }
}