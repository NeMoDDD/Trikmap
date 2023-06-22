import React from "react" 
import { setNewHotel } from "../../../reduxStore/hotelReducer"
import { connect } from "react-redux"
import Addhotel from "./addhotel"
import { getUserEmail } from "../../../Selectors/UserSelecors"
import Error from "../../common/Error"
 class addhotelContainer extends React.Component { 
    render(){   
        if(this.props.email !== 'kenjebekoverbol53@gmail.com'){ 
            return <Error />
        }
        return( 
         <Addhotel {...this.props} />   
        )
    }
} 
 
const mapStateToProps =(state) =>{ 
    return{ 
        email: getUserEmail(state)
    }
}

export default connect(mapStateToProps, {setNewHotel})(addhotelContainer)