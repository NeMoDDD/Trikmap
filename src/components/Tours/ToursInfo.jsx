import ContentTour from "./ContentTour"
import Tours from "./AllTours/Tours" 
import React, { useEffect } from "react" 
import { useRef } from "react"
const TourInfo =React.memo( ({tours,...props}) =>{ 
    const scrollToRef = useRef(); 
    useEffect(() =>{  
        scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
    },[])
    return( 
        <div ref={scrollToRef}> 
            <ContentTour/> 
            <Tours tours={tours}/>
        </div>
    )
} )
export default TourInfo