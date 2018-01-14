import axios from 'axios'
const SERVER = 'https://tw-faza2-cloned-dananeagu.c9users.io'

class MessageStore{
  constructor(ee){
    this.ee = ee
    this.content = []
  }
  getAll(folderId){
    axios(SERVER + '/authors/' + folderId + '/messages')
      .then((response) => {
        this.content = response.data
        this.ee.emit('MESSAGE_LOAD')
      })
      .catch((error) => console.warn(error))
  }
  addOne(folderId, message){
    axios.post(SERVER + '/folders/' + folderId + '/messages', message)
      .then(() => this.getAll(folderId))
      .catch((error) => console.warn(error))
  }
  deleteOne(folderId, messageId){
    axios.delete(SERVER + '/authors/' + folderId + '/messages/' + messageId)
      .then(() => this.getAll(folderId))
      .catch((error) => console.warn(error))
  }
  saveOne(folderId, messageId, message){
    axios.put(SERVER + '/authors/' + folderId + '/messages/' + messageId, message)
      .then(() => this.getAll(folderId))
      .catch((error) => console.warn(error))
  }
}

export default MessageStore
