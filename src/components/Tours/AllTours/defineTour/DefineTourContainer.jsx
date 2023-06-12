import { connect } from "react-redux"
import React from 'react' 
import DefineTour from "./DefineTour"
import { useEffect } from "react"
import { useParams } from "react-router-dom" 
 
import { setSelectedTourTC } from "../../../../reduxStore/tourReducer"
import { defineTourSelector, isFetchSelector } from "../../../../Selectors/TourSelectors" 
import {Preloader} from '../../../common/Preloader'
const DefineTourContainer = React.memo(({setSelectedTourTC,...props}) =>{ 
    const params = useParams() 
    const tourName = params.tour   
    
    useEffect(() =>{ 
        setSelectedTourTC(tourName)
    },[tourName, setSelectedTourTC])
     
    if(props.isFetch){ 
        return <Preloader/>
    }
    return( 
        <DefineTour tour={props.tour}/>
    )
})  
const mapStateToProps = (state) =>{ 
    return{ 
        tour: defineTourSelector(state), 
        isFetch: isFetchSelector(state)
    }
}
export default connect(mapStateToProps, {setSelectedTourTC})(DefineTourContainer)