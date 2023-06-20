import { connect } from "react-redux";
import { compose } from "redux"; 
import { getHotelsTC,allOptionsFlow, getSerchingCityTC,getCurrentPageAC,getSerchingRegionTC,getSerchingRatingTC } from "../../reduxStore/hotelReducer"; 
import HotelInfo from "./HotelInfo"; 
import React,{ useEffect, useCallback}from "react";
import { getCurrentPage, getHotels, getPageSize, getSelectedHotelCity, getSelectedHotelRatingSelector, getSelectedHotelRegion, getTotalDocs, isFetching, isHotelErrorSelector, isHotelOptionLoadingSelector } from "../../Selectors/HotelSelectors";
import { Preloader } from "../common/Preloader";

const HotelContainer = React.memo(({ allOptionsFlow,getHotelsTC,isFetch,...props}) => {
  const memoizedAllOptionsFlow = useCallback(() => {
    allOptionsFlow();
  }, [allOptionsFlow]);
  
  const memoizedGetHotelsTC = useCallback(() => {
    getHotelsTC();
  }, [getHotelsTC]);
  useEffect(() => {  
    memoizedAllOptionsFlow();
    memoizedGetHotelsTC() 
  }, [memoizedGetHotelsTC, memoizedAllOptionsFlow]);  
  if(isFetch){ 
    return <Preloader/> 
  }      
  return ( 
      <HotelInfo 
      getHotelsTC={getHotelsTC}
      {...props}
      />
  );
}); 
const mapStateToProps = (state) => {  
    return{  
        hotels: getHotels(state),
        isFetch : isFetching(state), 
        totalDocs : getTotalDocs(state), 
        pageSize: getPageSize(state), 
        currentPage: getCurrentPage(state), 
        selectedHotelCity: getSelectedHotelCity(state),
        selectedHotelRegion: getSelectedHotelRegion(state), 
        selectedHotelRating: getSelectedHotelRatingSelector(state),   
        hotelFetch: isHotelOptionLoadingSelector(state), 
        isHotelError: isHotelErrorSelector(state)
    }
}
export default compose( 
    connect(mapStateToProps, {getHotelsTC, allOptionsFlow,getSerchingCityTC,getCurrentPageAC,getSerchingRegionTC,getSerchingRatingTC})(HotelContainer)
) 
