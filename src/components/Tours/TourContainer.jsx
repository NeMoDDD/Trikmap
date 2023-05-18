import { connect } from "react-redux";
import Tour from "./Tours";
import React from "react";
class TourContainer extends React.Component{
    render(){ 
        return( 
            <Tour/>
        )
    }
}  
const mapStateToProps = (state) =>{ 
    return{ 

    }
}
export default connect(mapStateToProps, {})(TourContainer)