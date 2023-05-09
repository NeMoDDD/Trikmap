
import Hotel from "./HotelInfo/Hotel" 
import HotelSearch from "./HotelInfo/HotelSearch"  
import HotelPagination from "./HotelInfo/HotelPagination"

const HotelInfo = (props) => {   
    return( 
        <div> 
            <HotelSearch selectedHotelCity={props.selectedHotelCity} getSerchingCityTC={props.getSerchingCityTC}/> 
            <Hotel {...props}/> 
            <HotelPagination   
                getCurrentPageAC={props.getCurrentPageAC}
                currentPage={props.currentPage}
                pageSize= {props.pageSize} 
                totalDocs={props.totalDocs} 
             />
        </div>
    )
} 
export default HotelInfo