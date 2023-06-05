import { connect } from "react-redux";
import React from "react"; 
import { getTourTC } from "../../reduxStore/tourReducer";
import { getToursSelector } from "../../Selectors/TourSelectors";
import TourInfo from "./ToursInfo";
class TourContainer extends React.PureComponent{
    componentDidMount(){ 
        this.props.getTourTC()
    } 
    render(){  
        console.log('render');
        return( 
            <TourInfo {...this.props}/>
        )
    }
}  
const mapStateToProps = (state) =>{ 
    return{ 
        tours: getToursSelector(state)
    }
}
export default connect(mapStateToProps, {getTourTC})(TourContainer)