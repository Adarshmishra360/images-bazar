import React from 'react';
import ReactDOM from 'react-dom';

class Searchbar extends React.Component{
    state={text:'' }
    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onrunSubmit(this.state.text)
    }
    render(){
        return (
            <div className='ui segment'>
            <form  onSubmit= {this.onFormSubmit} className='ui form'>
            <div className='fild'>
            <label>Search Images</label>
            <input type='text' value={this.state.text} onChange={(event)=>this.setState({text:event.target.value})} />
            </div>
            </form>
            </div>
        )
    }
}
export default Searchbar;