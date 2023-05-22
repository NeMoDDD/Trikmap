
import Hotels from "./HotelInfo/Hotels" 
import HotelSearch from "./HotelInfo/HotelSearch"  
import HotelPagination from "./HotelInfo/HotelPagination"

const HotelInfo = (props) => {   
    return( 
        <div> 
            {/* <HotelSearch    
            getSerchingRegionTC={props.getSerchingRegionTC} 
            selectedHotelRegion={props.selectedHotelRegion} 
            selectedHotelCity={props.selectedHotelCity} 
            getSerchingCityTC={props.getSerchingCityTC}/>  */}
            <Hotels {...props}/> 
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