
import s from './HotelInfo.module.css' 

const HotelSearch = props => {   
    console.log(props)
    const selectCity = (e) => {  
        
        props.getSerchingCityTC(e.target.value) 
        console.log(e.target.value);
    }
    return ( 
        <div className={s.search}> 
            <div className={s.search__container}> 
                <div className={s.search__item}> 
                    <div className={s.search__title}> 
                    Поиск мест размещения для последующего бронирования
                    </div>  
                    <div className=''>  
                        <select onChange={selectCity}>  
                            <option value="">CHoose City</option>
                            <option value="Бишкек">Бишкек</option>
                            <option value="Каракол">Каракол</option>
                        </select>
                    </div>
                </div> 
            </div>
        </div>
    )
} 
export default HotelSearch