import React ,{ Fragment } from 'react';
import './App.css';
import 'tachyons';
import Navbar from './components/Navbar';
import ImageContainer from './components/ImageContainer';
import axios from 'axios';

const pexels = axios.create({
  baseURL:'https://api.pexels.com/',
  headers:{
    Authorization:'563492ad6f91700001000001693c5ff87c43454dbaf1e1a5c041c6d3'
  }
})





class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      images : []
    }
  }
  onSearchSubmit = async (term) => {
    const response = await pexels.get(`/v1/search`, {
        params: {
            query: term,
            per_page: 15,
            page: 1
        }
    });
    this.setState({ images: response.data.photos });
  }
  componentDidMount(){
    this.onSearchSubmit("nature");
  }
  
  render(){
    return (
      <Fragment>
        <Navbar onSearchSubmit={this.onSearchSubmit}/>
        <ImageContainer images={this.state.images} />
      </Fragment>
    )
  }
}
export default App;
