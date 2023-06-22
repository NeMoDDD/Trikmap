
import Hotels from "./HotelInfo/Hotels" 
import HotelSearch from "./HotelInfo/HotelSearch"  
import HotelPagination from "./HotelInfo/HotelPagination"
import React from "react"
import s from './HotelInfo/HotelInfo.module.css' 
import { useRef,useEffect } from "react"
const HotelInfo = React.memo((props) => {    
    const scrollToRef = useRef(); 
    useEffect(() =>{  
        scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
    },[])
    return( 
        <div ref={scrollToRef} className={s.wrapper}> 
            <HotelSearch      
            getHotelsTC={props.getHotelsTC}
            getSerchingRatingTC={props.getSerchingRatingTC} 
            selectedHotelRating={props.selectedHotelRating}
            getSerchingRegionTC={props.getSerchingRegionTC} 
            selectedHotelRegion={props.selectedHotelRegion} 
            selectedHotelCity={props.selectedHotelCity} 
            getSerchingCityTC={props.getSerchingCityTC} 
            /> 
            <Hotels {...props}/> 
            <HotelPagination   
                getCurrentPageAC={props.getCurrentPageAC}
                currentPage={props.currentPage}
                pageSize= {props.pageSize} 
                totalDocs={props.totalDocs} 
             />
        </div>
    )
} )
export default HotelInfo