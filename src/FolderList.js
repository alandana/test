import React, { Component } from 'react'

class FolderForm extends Component {  

  render() {
    
    return (
      <ul>
        {
        this.props.folders.map(folder => {
          return <li folder={folder} key={folder.id}>{folder.denumire}</li>
        })
        }
      </ul>
    )
  }
}

export default FolderForm