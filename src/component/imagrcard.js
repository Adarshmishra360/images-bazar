import React from 'react';

class Imagecard extends React.Component{
    constructor(props){
        super(props);
        this.imageRef=React.createRef();
    }
    componentDidMount(){
        
    }
    render(){
        return (
            <div>
            <img ref={this.imageRef} alt={this.props.image.description}  src ={this.props.image.urls.regular}/>
            </div>
        )
    }
}
export default Imagecard;