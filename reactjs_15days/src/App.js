import React from 'react';
import './App.css';
import 'tachyons';
import robots from './users';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      robots : robots
    }
  }
  handleSearchChange = (e) => {
    let keyword = e.target.value.toLowerCase();
    
    this.setState({
      robots : robots.filter(robot => robot.name.toLowerCase().includes(keyword))
    })
  }


  render(){
        if(!true){ 
          return <h1> Loading... </h1>}
        else{
          return (
            <React.Fragment>
              <SearchBox onChange={(e) => {this.handleSearchChange(e)}}/>
              <Scroll>
                <CardList users={this.state.robots} />
              </Scroll>
            </React.Fragment>
          )
        }
  }
  
}
export default App;
