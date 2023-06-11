import { connect } from "react-redux"
import React from 'react' 
import DefineTour from "./DefineTour"
import { useEffect } from "react"
import { useParams } from "react-router-dom" 
import { setSelectedTourTC } from "../../../../reduxStore/tourReducer"
import { defineTourSelector } from "../../../../Selectors/TourSelectors"
const DefineTourContainer = React.memo(({setSelectedTourTC,...props}) =>{ 

    const params = useParams() 
    const tourName = params.tour  
    console.log(props);
    useEffect(() =>{ 
        setSelectedTourTC(tourName)
    },[tourName, setSelectedTourTC])
    return( 
        <DefineTour tour={props.tour}/>
    )
})  
const mapStateToProps = (state) =>{ 
    return{ 
        tour: defineTourSelector(state)
    }
}
export default connect(mapStateToProps, {setSelectedTourTC})(DefineTourContainer)