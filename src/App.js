/*global render*/
/*global ReactDOM*/
import React, { Component } from 'react'; 
import './style.css';
import FolderList from './FolderList' 
import FolderForm from './FolderForm' 

class App extends Component {
  
  
  render(){
       let folders = [{
           id: 1, denumire:"sd"},
        
         {id:2, denumire:"ds"}];
      
      return(
      <div class="row">
      
      <div class="col-md-3 no-float">  
      
          <FolderList folders={ folders}/>
          <FolderForm/>
     </div>
      
    
    <div class="col-md-9 no-float "> 
    
     <h1>Documente</h1>
     <button type="button" class="btn" data-toggle="modal" data-target="#myModal" id="butonAdaugare">adauga document</button>
         <h1></h1>
         <table id="articles" class="table table-bordered table-striped">
            <tr>
               <th>Titlu</th>
               <th>Autor</th>
               <th>Anul publicarii</th>
               <th>Nr. pagini</th>
               <th>Editor(publisher)</th>
            </tr>
         </table>
     </div>
     
    </div>)
  }
  
} 
 
export default App;
