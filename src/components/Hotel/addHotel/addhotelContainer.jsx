import React from "react"
import { connect } from "react-redux"
import Addhotel from "./addhotel"
 class addhotelContainer extends React.Component { 
    render(){ 
        return( 
         <Addhotel />   
        )
    }
} 
 
const mapStateToProps =(state) =>{ 
    return{ 

    }
}

export default connect(mapStateToProps, {})(addhotelContainer)