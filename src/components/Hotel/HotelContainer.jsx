import { connect } from "react-redux";
import { compose } from "redux"; 
import { getHotelsTC,allOptionsFlow,toggleFetchingAC, getSerchingCityTC,getCurrentPageAC,getSerchingRegionTC,getSerchingRatingTC  } from "../../reduxStore/hotelReducer"; 
import { Spinner } from "@chakra-ui/react"; 
import s from './HotelInfo/HotelInfo.module.css'
import HotelInfo from "./HotelInfo"; 
import React,{ useEffect, useCallback}from "react";
import { getCurrentPage, getHotels, getPageSize, getSelectedHotelCity, getSelectedHotelRatingSelector, getSelectedHotelRegion, getTotalDocs, isFetching } from "../../Selectors/HotelSelectors";


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
    return(  
      <div className={s.spinner} > 
            <Spinner className={s.spin} color='blue' colorScheme='cyan'/>
            </div> 
            )}  
            console.log('render'); 
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
        selectedHotelRating: getSelectedHotelRatingSelector(state)
    }
}
export default compose( 
    connect(mapStateToProps, {getHotelsTC, allOptionsFlow,getSerchingCityTC,toggleFetchingAC,getCurrentPageAC,getSerchingRegionTC,getSerchingRatingTC})(HotelContainer)
) 

        // class HotelContainer extends React.PureComponent{ 
        //     componentDidMount() {    
        //         this.props.getHotelsTC()   
        //         this.props.getSelectedHotelCityTC()    
        //         this.props.getSelectedHotelRegionTC()
        //         this.props.getTotalDocsTC()
        //     }  
            
            
        //     render(){  
        //         console.log('render');
        //         return(  
        //         <HotelInfo totalDocs={this.props.totalDocs} getCurrentPageAC={this.props.getCurrentPageAC}
        //         hotels={this.props.hotels}  currentPage={this.props.currentPage}
        //         selectedHotelCity={this.props.selectedHotelCity} isFetch={this.props.isFetch}  
        //         getSerchingCityTC={this.props.getSerchingCityTC} pageSize={this.props.pageSize} 
        //         selectedHotelRegion={this.props.selectedHotelRegion} 
        //         />    
        //         )
        //     }
        // } 