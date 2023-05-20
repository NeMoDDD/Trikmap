import { connect } from "react-redux";
import Tours from "./AllTours/Tours";
import React from "react"; 
import { getTourTC } from "../../reduxStore/tourReducer";
import { getToursSelector } from "../../Selectors/TourSelectors";
class TourContainer extends React.PureComponent{
    componentDidMount(){ 
        this.props.getTourTC()
    } 
    render(){  
        console.log('render');
        return( 
            <Tours tours={this.props.tours}/>
        )
    }
}  
const mapStateToProps = (state) =>{ 
    return{ 
        tours: getToursSelector(state)
    }
}
export default connect(mapStateToProps, {getTourTC})(TourContainer)