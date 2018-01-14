/*global React*/
var App = React.createClass({
  getInitialState : function() {
    return (
      {
        folders : {
          'folder-1' : 'Toate documentele' 
        }
      }
     )
    },
    addFolder : function(folder) { 
     var timestamp = (new Date()).getTime(); 
     this.state.folders['folder-' + timestamp ] = folder;
     // set the state
     this.setState({ folders : this.state.folders });
    },
    render: function() {
      return (
        <div className="component-wrapper">
          <FolderList folders={this.state.folders} />
          <AddFolderForm addFolder={this.addFolder} />
        </div>
      );
     }
    });

    var FolderList = React.createClass({
      render : function() {
        return (
          <div className="container">
            <ul className="list-group text-center">
              {
                Object.keys(this.props.folders).map(function(key) {
                  return <li className="list-group-item list-group-item-info">{this.props.folders[key]}</li>
                }.bind(this))
              }
            </ul>
           </div>
         );
       }
     });

    var AddFolderForm = React.createClass({
      createFolder : function(e) {
        e.preventDefault();
        //get the fruit object name from the form
        var folder = this.refs.folderName.value;
        //if we have a value
        //call the addFolder method of the App component
        //to change the state of the fruit list by adding an new item
        if(typeof folder === 'string' && folder.length > 0) {
          this.props.addFolder(folder);
          //reset the form
          this.refs.folderForm.reset();
        }
       },
       render : function() {
        return(
          <form className="form-inline" ref="folderForm" onSubmit={this.createFolder}>
          <div className="form-group">
            <label for="folderItem">
              Folder Name
              <input type="text" id="folderItem" placeholder="e.x.lemmon" ref="folderName" className="form-control" />
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Add Folder</button>
         </form>
        )
       }
      });

      React.render(
        <App />,
        document.getElementById('app')
      );