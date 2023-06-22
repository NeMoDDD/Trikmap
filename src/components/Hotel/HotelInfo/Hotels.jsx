import s from './HotelInfo.module.css'    
import Hotel from './Hotel';
import React from 'react';
import { Preloader } from '../../common/Preloader';
import CustomError from '../../common/CustomError'; 
import img from '../../../assets/img/secondError.svg'
 const Hotels = React.memo((props) => { 
    const lastPostIndex = props.currentPage * props.pageSize; 
    const firstPostIndex = lastPostIndex - props.pageSize
    const data = props.hotels.slice( firstPostIndex, lastPostIndex) 
    if(props.hotelFetch){  
      return <Preloader/>
    } 
    if(props.isHotelError){  
      return <CustomError title={'Отель не найден или отель не существует.'} text={'Ой!'} img={img}/>
    }
    return( 
       <div className={s.hotel}> 
        <div className={s.hotel__container}> 
        {data.map((item, index) => <Hotel key={index} item={item}/>)}
        </div>   
       </div>  
    )
} )
export default Hotels
            