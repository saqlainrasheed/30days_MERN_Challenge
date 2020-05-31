import React from 'react';
import './App.css';
import 'tachyons';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      newItem:"",
      list:[]
    }
  }

  updateInput(input){
    this.setState({newItem:input});
  }

  addItem(todoValue){
    if(todoValue){
      const newItem = {
        id:Date.now(),
        value: todoValue,
        isDone:true
      }
      const list = [...this.state.list];
      list.push(newItem);
      this.setState({
        list:list,
        newItem:""
      })
    } 
  }


  deleteItem(id){
    const list = [...this.state.list];
    const updateList = list.filter(item => item.id !== id);
    this.setState({
      list:updateList,
      newItem:""
    })
  }


  render(){
    return(
      <div>
        {/* input todo */}
        <div className="container">
          <h1>Add todo...</h1>
          <br />
          <input 
            type="text"
            className="input-text"
            placeholder="Write todo here..." 
            required
            value = {this.state.newItem}
            onChange={e => this.updateInput(e.target.value)}
          />
          <button 
            className="add-btn"
            onClick={() => this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length}
          >Add todo</button>
        </div>
        {/* todolist items */}
        <div className="list">
          <ul>
            {this.state.list.map(item => {
              return(
                <li key={item.id}>
                  <input 
                    type="checkbox"
                    name="isDone"
                    checked={item.isDone}
                    onChange={()=>{}}
                  />
                  {item.value}
                  <button 
                    className="btn"
                    onClick={()=>this.deleteItem(item.id)}>Delete</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    )
  } 
}
export default App;
