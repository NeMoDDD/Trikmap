import { connect } from "react-redux";
import { useLocation,useNavigate,useParams } from "react-router-dom"; 
import {    getOrderHotelTC, getCommentsTC } from "../../../../reduxStore/hotelReducer";
  import React from "react"; 
  import OrderHotel from "./OrderHotel";
import { isFetching } from "../../../../Selectors/HotelSelectors";
import { Preloader } from "../../../common/Preloader";
class OrderHotelContainer extends React.Component{  
    componentDidMount( ){ 
        let hotelName = this.props.router.params.hotel  
        //this.props.getCommentsTC(hotelName)
        this.props.getOrderHotelTC(hotelName)   
    } 
    render(){  
        if(this.props.isFetch){ 
            return <Preloader/>   
        }
        return( 
            <OrderHotel coordinates={this.props.coordinates} orderingHotel={this.props.orderingHotel}/>
        )
    }
}


function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams(); 
        
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}    

const mapStateToProps = (state) =>{ 
    return{ 
        orderingHotel: state.hotelPage.orderingHotel, 
        isFetch: isFetching(state), 
        coordinates: state.hotelPage.coordinates
    }
}
export default connect(mapStateToProps, {getOrderHotelTC,getCommentsTC})(withRouter(OrderHotelContainer))


