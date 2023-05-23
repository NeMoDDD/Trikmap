import { connect } from "react-redux";
import { compose } from "redux"; 
import { getHotelsTC,  getSerchingCityTC, getSelectedHotelCityTC, getTotalDocsTC,getCurrentPageAC,getSelectedHotelRegionTC,getSerchingRegionTC } from "../../reduxStore/hotelReducer"; 
import { Spinner } from "@chakra-ui/react"; 
import s from './HotelInfo/HotelInfo.module.css'
import HotelInfo from "./HotelInfo"; 
import React,{ useEffect}from "react";
import { getCurrentPage, getHotels, getPageSize, getSelectedHotelCity, getSelectedHotelRegion, getTotalDocs, isFetching } from "../../Selectors/HotelSelectors";


const HotelContainer = React.memo(({ getHotelsTC,
    getSelectedHotelCityTC,
    getSelectedHotelRegionTC,
    getTotalDocsTC,...props}) => {
   
      useEffect(() => {
        getHotelsTC();
        getSelectedHotelCityTC();
        getSelectedHotelRegionTC();
        getTotalDocsTC();
      },[]);
     

    
    if(props.isFetch){ 
        return(  
            <div className={s.spinner} > 
            <Spinner className={s.spin} color='blue' colorScheme='cyan'/>
            </div>
        )
    }
  return (
    <HotelInfo
      {...props}
    />
  );
}); 
const mapStateToProps = (state) => {  
    return{  
        hotels: getHotels(state),
        selectedHotelCity: getSelectedHotelCity(state),
        isFetch : isFetching(state), 
        totalDocs : getTotalDocs(state), 
        pageSize: getPageSize(state), 
        currentPage: getCurrentPage(state), 
        selectedHotelRegion: getSelectedHotelRegion(state) 
    }
}
export default compose( 
    connect(mapStateToProps, {getHotelsTC, getSerchingCityTC, getSelectedHotelCityTC, getTotalDocsTC, getCurrentPageAC, getSelectedHotelRegionTC,getSerchingRegionTC})(HotelContainer )
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