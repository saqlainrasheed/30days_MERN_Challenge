import React ,{ Fragment } from 'react';
import './App.css';
import 'tachyons';
import Navbar from './components/Navbar';
import ImageContainer from './components/ImageContainer';
import { createClient } from 'pexels';

let client = createClient('563492ad6f91700001000001693c5ff87c43454dbaf1e1a5c041c6d3');
const query = 'Nature';
let photos = client
    .photos
    .search({query, per_page: 20})
    .then(photos => photos.photos.forEach(photo => {
      console.log(photo.url)
    })
  )

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      query : '',
      images : []
    }
  }

  componentDidMount(){
    this.setState({
      images:photos
    })
  }
  render(){
    return (
      <Fragment>
        <Navbar />
        <ImageContainer images={this.state.images}/>
      </Fragment>
    )
  }
}
export default App;
