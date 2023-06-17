import { connect } from "react-redux";
import React from "react"; 
import { getTourTC } from "../../reduxStore/tourReducer";
import { getToursSelector, isFetchSelector } from "../../Selectors/TourSelectors";
import TourInfo from "./ToursInfo";
import { Preloader } from "../common/Preloader";
class TourContainer extends React.PureComponent{
    componentDidMount(){ 
        this.props.getTourTC()
    } 
    render(){  
        if(this.props.isFetch){ 
            return <Preloader/>
        }
        return( 
            <TourInfo {...this.props}/>
        )
    }
}  
const mapStateToProps = (state) =>{ 
    return{ 
        tours: getToursSelector(state), 
        isFetch: isFetchSelector(state)
    }
}
export default connect(mapStateToProps, {getTourTC})(TourContainer)