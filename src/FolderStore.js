/*import axios from 'axios'
const SERVER = 'https://tw-faza2-cloned-dananeagu.c9users.io'

class FolderStore{
  constructor(ee){
    this.ee = ee
    this.content = []
  }
  getAll(){
    axios(SERVER + '/folders')
      .then((response) => {
        this.content = response.data
        this.ee.emit('FOLDER_LOAD')
      })
      .catch((error) => console.warn(error))
  }
  addOne(folder){
    axios.post(SERVER + '/folders', folder)
      .then(() => this.getAll())
      .catch((error) => console.warn(error))
  }
  deleteOne(id){
    axios.delete(SERVER + '/folders/' + id)
      .then(() => this.getAll())
      .catch((error) => console.warn(error))
  }
  saveOne(id, folder){
    axios.put(SERVER + '/folders/' + id, folder)
      .then(() => this.getAll())
      .catch((error) => console.warn(error))
  }
}

export default FolderStore
*/