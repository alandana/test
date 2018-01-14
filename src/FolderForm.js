import React, { Component } from 'react'

class FolderForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      folderName : ''
    }
    this.handleChange = (event) => {
      this.setState({
        [event.target.name] : event.target.value
      })
    }
  }
  render() {
    return (
      <div>
        todoform
      </div>
    )
  }
}

export default FolderForm