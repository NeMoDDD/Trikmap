
import Hotel from "./HotelInfo/Hotel" 
import HotelSearch from "./HotelInfo/HotelSearch"  
 

const HotelInfo = (props) => {  
   
    return( 
        <div> 
            <HotelSearch getSerchingCityTC={props.getSerchingCityTC}/> 
            <Hotel {...props}/>
        </div>
    )
} 
export default HotelInfo