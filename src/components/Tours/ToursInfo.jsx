import ContentTour from "./ContentTour"
import Tours from "./AllTours/Tours" 
import React from "react"
const TourInfo =React.memo( ({tours,...props}) =>{ 
    return( 
        <div> 
            <ContentTour/> 
            <Tours tours={tours}/>
        </div>
    )
} )
export default TourInfo