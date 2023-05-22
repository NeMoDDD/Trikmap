
import s from './HotelInfo.module.css' 

const HotelSearch = props => {   
    const selectCity = (e) => {  
        props.getSerchingCityTC(e.target.value) 
    }  
    const selectRegion = (e) => {  
        props.getSerchingRegionTC(e.target.value)
    } 
    return ( 
        <div className={s.search}> 
            <div className={s.search__container}> 
                <div className={s.search__item}> 
                    <div className={s.search__title}> 
                    Поиск мест размещения для последующего бронирования
                    </div>  
                    <div className={s.search__form}>  
                        <select className={s.search__form_city} onChange={selectCity}>  
                            <option value="">Выберите Город</option>
                            {props.selectedHotelCity.map(item => (<option value={item}>{item}</option>))}
                        </select> 
                        <select className={s.search__form_region} onChange={selectRegion}>  
                            <option value="" >Выберите Регион</option>
                            {props.selectedHotelRegion.map(item => (<option value={item}>{item}</option>))}
                        </select> 
                        <select className={s.search__form_rating} >  
                            <option value="" >Выберите звезды</option>
                        </select>
                    </div>
                </div> 
            </div>
        </div>
    )
} 
export default HotelSearch