/*import React, { Component } from 'react'

class Folder extends Component {
  constructor(props){
    super(props)
    this.state = {
      isEditing : false,
      folderName :''
    }
    this.handleChange = (event) => {
      this.setState({
        [event.target.name] : event.target.value
      })
    } 
  }
  componentDidMount(){
    this.setState({
      authorName : this.props.folder.name 
    })
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      isEditing : false
    })
  }
  render() {
    if (!this.state.isEditing){
      return (
        <div>
          I am {this.props.folder.name}  
          <input type="button" value="delete" onClick={() => this.props.onDelete(this.props.folder.id)}/>
          <input type="button" value="edit" onClick={() => this.setState({isEditing : true})} />
        </div>
      )
    }
    else{
      return (
        <div>
          I am 
          <input type="text" name="folderName" onChange={this.handleChange} value={this.state.folderName} />  
          <input type="button" value="cancel" onClick={() => this.setState({isEditing : false})} />
          <input type="button" value="save" onClick={() => this.props.onSave(this.props.folder.id, {name : this.state.folderName})} />
        </div>  
      )
    }
  }
}

export default Folder
*/