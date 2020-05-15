import React from 'react';


class Testing extends React.Component{
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  constructor(props){
    super(props);
    this.state = {
      date:new Date(),
    }
  }
  
  render(){
    return (  
      <div>
        <h1>Hello world {this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}


export default Testing;