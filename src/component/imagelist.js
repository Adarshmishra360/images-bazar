import './imagelist.css';
import Imagecard from './imagrcard';
import React from 'react';

const Imagelist=(props)=>{

    const images=props.images.map(image=>{
        
       return <Imagecard key= {image.id} SameSite='Secure' image={image} />
       
    });
        
    
    return(
        <div className='image-list' >{images}</div>
        
    )
}
export default Imagelist;