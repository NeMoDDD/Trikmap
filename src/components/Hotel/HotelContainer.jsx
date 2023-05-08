import { connect } from "react-redux";
import { compose } from "redux"; 
import { getHotelsTC, toggleFetchingAC, getSerchingCityTC, getSelectedHotelCityTC, getTotalDocsTC, getNextPageTC } from "../../reduxStore/hotelReducer"; 

import HotelInfo from "./HotelInfo"; 
import React from "react";
class HotelContainer extends React.Component{ 
    componentDidMount() {   
        //this.props.toggleFetchingAC(true)
        this.props.getHotelsTC()   
        this.props.getSelectedHotelCityTC()   
        this.props.getTotalDocsTC()
        console.log(this.props)
    }  
    
    
    render(){ 

        return(  
        <HotelInfo totalDocs={this.props.totalDocs} lastVisible={this.props.lastVisible}  
        getNextPageTC={this.props.getNextPageTC} hotels={this.props.hotels}  
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
        lastVisible: state.hotelPage.lastVisible, 
        totalDocs : state.hotelPage.totalDocs, 
        pageSize: state.hotelPage.pageSize
    }
}
export default compose( 
    connect(mapStateToProps, {getHotelsTC, toggleFetchingAC, getSerchingCityTC, getSelectedHotelCityTC, getTotalDocsTC, getNextPageTC})(HotelContainer )
) 
