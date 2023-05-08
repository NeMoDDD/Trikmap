
import Hotel from "./HotelInfo/Hotel" 
import HotelSearch from "./HotelInfo/HotelSearch"  
import HotelPagination from "./HotelInfo/HotelPagination"

const HotelInfo = (props) => {  
    return( 
        <div> 
            <HotelSearch selectedHotelCity={props.selectedHotelCity} getSerchingCityTC={props.getSerchingCityTC}/> 
            <Hotel {...props}/> 
            <HotelPagination getNextPageTC={props.getNextPageTC} 
                pageSize= {props.pageSize} 
                totalDocs={props.totalDocs} 
                lastVisible={props.lastVisible}
             />
        </div>
    )
} 
export default HotelInfo