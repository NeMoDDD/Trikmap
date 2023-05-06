import React from "react" 
import { setNewHotel } from "../../../reduxStore/hotelReducer"
import { connect } from "react-redux"
import Addhotel from "./addhotel"
 class addhotelContainer extends React.Component { 
    render(){ 
        return( 
         <Addhotel {...this.props} />   
        )
    }
} 
 
const mapStateToProps =(state) =>{ 
    return{ 

    }
}

export default connect(mapStateToProps, {setNewHotel})(addhotelContainer)