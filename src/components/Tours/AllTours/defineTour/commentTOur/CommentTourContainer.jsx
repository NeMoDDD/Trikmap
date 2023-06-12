import { connect } from "react-redux"
import CommentsTour from "./Comments"
import React from "react"  
import { addCommentTC } from "../../../../../reduxStore/tourReducer"
import { getTourCommentsSelector } from "../../../../../Selectors/TourSelectors"
import { getUserEmail, getUserName } from "../../../../../Selectors/UserSelecors"

const CommentToursContainer = React.memo(({comments,name,email,...props}) =>{ 
    return( 
        <CommentsTour tour={props.tour} addCommentTC={props.addCommentTC} comments={comments} email={email} name={name} />
    )
}  )
 
const mapStateToProps = (state) =>{ 
    return{ 
        comments: getTourCommentsSelector(state), 
        email: getUserEmail(state), 
        name: getUserName(state), 
    }
}
export default connect(mapStateToProps, {addCommentTC})(CommentToursContainer)