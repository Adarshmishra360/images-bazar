import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Searchbar from './Searchbar';
import Imagelist from './imagelist'

class App extends React.Component{
    state={images:[]};
     onsearchsubmit=async (text)=>  {
       const response=await axios.get(
            'https://api.unsplash.com/photos',{
                params:{query:text},
                headers:{
                    Authorization: 'Client-ID kVwK9rP8jgAYG3kpwIVxSHktN1Pvo2B5r2FFdVtg4YY'
                }
            })
            this.setState({images:response.data});
    }
    render(){
        return(
            <div className='ui container' style={{marginTop:'10px'}}>
            <Searchbar onrunSubmit={this.onsearchsubmit} /> 
            <Imagelist images= {this.state.images} />
             </div>
        )
    }
}
export default App;