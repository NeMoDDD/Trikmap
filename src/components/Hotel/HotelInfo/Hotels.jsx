import s from './HotelInfo.module.css'    
import Hotel from './Hotel';
import React from 'react';
 const Hotels = React.memo((props) => { 
    const lastPostIndex = props.currentPage * props.pageSize; 
    const firstPostIndex = lastPostIndex - props.pageSize
    const data = props.hotels.slice( firstPostIndex, lastPostIndex)
    return( 
       <div className={s.hotel}> 
        <div className={s.hotel__container}> 
        {data.map((item, index) => <Hotel key={index} item={item}/>)}
        </div>   
       </div>  
    )
} )
export default Hotels
            