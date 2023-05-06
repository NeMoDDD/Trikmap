import { connect } from "react-redux";
import { compose } from "redux"; 
import { getHotelsTC, toggleFetchingAC, getSerchingCityTC } from "../../reduxStore/hotelReducer"; 

import HotelInfo from "./HotelInfo"; 
import React from "react";
class HotelContainer extends React.Component{ 
    componentDidMount() {   
        this.props.toggleFetchingAC(true)
        this.props.getHotelsTC()    
    }  

    
    render(){ 

        return(  
         <HotelInfo hotels={this.props.hotels} isFetch={this.props.isFetch} getSerchingCityTC={this.props.getSerchingCityTC}/>   
        )
    }
} 
const mapStateToProps = (state) => {  
    return{ 
        hotels: state.hotelPage.hotels, 
        isFetch : state.hotelPage.isFetching
    }
}
export default compose( 
    connect(mapStateToProps, {getHotelsTC, toggleFetchingAC, getSerchingCityTC})(HotelContainer )
) 
