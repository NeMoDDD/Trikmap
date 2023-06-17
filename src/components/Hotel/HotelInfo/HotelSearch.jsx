
import React from 'react'
import s from './HotelInfo.module.css'  
import { useForm } from 'react-hook-form' 
import {SearchOutlined} from '@ant-design/icons';
const HotelSearch =  React.memo((props) => {     
    const { 
        register, 
        handleSubmit,  
        resetField
    } = useForm( { 
        mode: 'onBlur', 
    },) 
    const onSubmit = (data) =>{ 
        if(data.city && (data.rating !== '')){ 
            return props.getSerchingCityTC(data.city, data.rating)
        } else if (data.region && (data.rating !== '')){  
            return props.getSerchingRegionTC(data.region, data.rating)
        }   
        if(data.city){  
            return props.getSerchingCityTC(data.city)
        }else if (data.region){  
            return props.getSerchingRegionTC(data.region)
        } else if (data.rating){ 
            return props.getSerchingRatingTC(data.rating)
        }   

        props.getHotelsTC()
    }
    return ( 
        <div className={s.search}> 
            <div className={s.search__container}> 
                <div className={s.search__item}> 
                    <div className={s.search__title}> 
                    Поиск мест размещения для последующего бронирования
                    </div>   
                    
                   
                    <form className={s.search__form} onSubmit={handleSubmit(onSubmit)} >  
                        <div className={s.search__form_selects}> 
                        <select className={s.search__form_city} {...register('city')} 
                          onChange={() => resetField('region')}
                         >                      
                            <option value="">Все города</option>
                            {props.selectedHotelCity.map((item, index) => (<option key={index} value={item}>{item}</option>))}
                        </select>  

                        <select 
                        className={s.search__form_region} {...register('region')}defaultValue={"Выберите Регион"} 
                        onChange={() => resetField('city')}
                        >  
                            <option value="">Все регионы</option>
                            {props.selectedHotelRegion.map((item,index) => (<option key={index} value={item}>{item}</option>))}
                        </select> 
                        
                        <select className={s.search__form_rating} {...register('rating')} defaultValue={"Выберите Рейтинг"}> 
                        <option value="">Все рейтинги</option>   
                        {props.selectedHotelRating.map((item,index) => (<option key={index} value={item}>{item}</option>))}
                        </select>
                        </div> 
                    <div className={s.form__btn}><button  className={s.form__button} type='submit'>Найти <SearchOutlined/></button></div>
                    </form> 
                </div> 
            </div>
        </div>
    )
})

export default HotelSearch