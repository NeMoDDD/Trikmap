import { connect } from "react-redux";
import { compose } from "redux"; 
import { getHotelsTC, toggleFetchingAC, getSerchingCityTC, getSelectedHotelCityTC } from "../../reduxStore/hotelReducer"; 

import HotelInfo from "./HotelInfo"; 
import React from "react";
class HotelContainer extends React.Component{ 
    componentDidMount() {   
        this.props.toggleFetchingAC(true)
        this.props.getHotelsTC()   
        this.props.getSelectedHotelCityTC()  
    }  

    
    render(){ 

        return(  
         <HotelInfo hotels={this.props.hotels} selectedHotelCity={this.props.selectedHotelCity} isFetch={this.props.isFetch} getSerchingCityTC={this.props.getSerchingCityTC}/>   
        )
    }
} 
const mapStateToProps = (state) => {  
    return{ 
        hotels: state.hotelPage.hotels,  
        selectedHotelCity: state.hotelPage.selectedHotelCity,
        isFetch : state.hotelPage.isFetching
    }
}
export default compose( 
    connect(mapStateToProps, {getHotelsTC, toggleFetchingAC, getSerchingCityTC, getSelectedHotelCityTC})(HotelContainer )
) 
