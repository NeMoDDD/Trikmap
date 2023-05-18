
import s from './HotelInfo.module.css' 

const HotelSearch = props => {   
    const selectCity = (e) => {  
        props.getSerchingCityTC(e.target.value) 
    } 
    return ( 
        <div className={s.search}> 
            <div className={s.search__container}> 
                <div className={s.search__item}> 
                    <div className={s.search__title}> 
                    Поиск мест размещения для последующего бронирования
                    </div>  
                    <div>  
                        <select onChange={selectCity}>  
                            <option value="">CHoose City</option>
                            {props.selectedHotelCity.map(item => (<option value={item}>{item}</option>))}
                        </select> 
                        <select >  
                            <option value="">Выберите Регион</option>
                            {props.selectedHotelRegion.map(item => (<option value={item}>{item}</option>))}
                        </select>
                    </div>
                </div> 
            </div>
        </div>
    )
} 
export default HotelSearch