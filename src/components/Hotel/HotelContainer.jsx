import { connect } from "react-redux";
import { compose } from "redux"; 
import { getHotelsTC, toggleFetchingAC, getSerchingCityTC, getSelectedHotelCityTC, getTotalDocsTC,getCurrentPageAC } from "../../reduxStore/hotelReducer"; 

import HotelInfo from "./HotelInfo"; 
import React from "react";
class HotelContainer extends React.Component{ 
    componentDidMount() {   
        //this.props.toggleFetchingAC(true)
        this.props.getHotelsTC()   
        this.props.getSelectedHotelCityTC()   
        this.props.getTotalDocsTC()
    }  
    
    
    render(){ 

        return(  
        <HotelInfo totalDocs={this.props.totalDocs} getCurrentPageAC={this.props.getCurrentPageAC}
        hotels={this.props.hotels}  currentPage={this.props.currentPage}
        selectedHotelCity={this.props.selectedHotelCity} isFetch={this.props.isFetch}  
        getSerchingCityTC={this.props.getSerchingCityTC} pageSize={this.props.pageSize}/>    
        )
    }
} 
const mapStateToProps = (state) => {  
    return{ 
        hotels: state.hotelPage.hotels,  
        selectedHotelCity: state.hotelPage.selectedHotelCity,
        isFetch : state.hotelPage.isFetching, 
        totalDocs : state.hotelPage.totalDocs, 
        pageSize: state.hotelPage.pageSize, 
        currentPage: state.hotelPage.currentPage
    }
}
export default compose( 
    connect(mapStateToProps, {getHotelsTC, toggleFetchingAC, getSerchingCityTC, getSelectedHotelCityTC, getTotalDocsTC, getCurrentPageAC})(HotelContainer )
) 
