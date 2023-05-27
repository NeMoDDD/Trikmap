import s from './HotelInfo.module.css' 
const HotelSearch = props => {    
    const selectCity = (e) => {  
        props.getSerchingCityTC(e.target.value) 
    }  
    const selectRegion = (e) => {  
        props.getSerchingRegionTC(e.target.value)
    }   
    const selectRating = (e) => {
        props.getSerchingRatingTC(e.target.value)
    }
    return ( 
        <div className={s.search}> 
            <div className={s.search__container}> 
                <div className={s.search__item}> 
                    <div className={s.search__title}> 
                    Поиск мест размещения для последующего бронирования
                    </div>  
                    <div className={s.search__form}>  
                        <select className={s.search__form_city}defaultValue={"Выберите Город"} onChange={selectCity}>                      
                            <option value="">Все города</option>
                            {props.selectedHotelCity.map(item => (<option value={item}>{item}</option>))}
                        </select> 
                        <select className={s.search__form_region}defaultValue={"Выберите Регион"} onChange={selectRegion}>  
                            <option value="">Все регионы</option>
                            {props.selectedHotelRegion.map(item => (<option value={item}>{item}</option>))}
                        </select> 
                        <select className={s.search__form_rating}onChange={selectRating} defaultValue={"Выберите Рейтинг"}>   
                        {props.selectedHotelRating.map(item => (<option value={item}>{item}</option>))}
                        </select>
                    </div>
                </div> 
            </div>
        </div>
    )
} 
export default HotelSearch