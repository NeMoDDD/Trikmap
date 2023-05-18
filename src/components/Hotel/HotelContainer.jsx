import { connect } from "react-redux";
import { compose } from "redux"; 
import { getHotelsTC, toggleFetchingAC, getSerchingCityTC, getSelectedHotelCityTC, getTotalDocsTC,getCurrentPageAC,getSelectedHotelRegionTC } from "../../reduxStore/hotelReducer"; 

import HotelInfo from "./HotelInfo"; 
import React from "react";
import { getCurrentPage, getHotels, getPageSize, getSelectedHotelCity, getSelectedHotelRegion, getTotalDocs, isFetching } from "../../Selectors/HotelSelectors";
class HotelContainer extends React.PureComponent{ 
    componentDidMount() {    
        this.props.getHotelsTC()   
        this.props.getSelectedHotelCityTC()    
        this.props.getSelectedHotelRegionTC()
        this.props.getTotalDocsTC()
    }  
    
    
    render(){ 
        return(  
        <HotelInfo totalDocs={this.props.totalDocs} getCurrentPageAC={this.props.getCurrentPageAC}
        hotels={this.props.hotels}  currentPage={this.props.currentPage}
        selectedHotelCity={this.props.selectedHotelCity} isFetch={this.props.isFetch}  
        getSerchingCityTC={this.props.getSerchingCityTC} pageSize={this.props.pageSize} 
        selectedHotelRegion={this.props.selectedHotelRegion} 
        />    
        )
    }
} 
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
    connect(mapStateToProps, {getHotelsTC, getSerchingCityTC, getSelectedHotelCityTC, getTotalDocsTC, getCurrentPageAC, getSelectedHotelRegionTC})(HotelContainer )
) 
