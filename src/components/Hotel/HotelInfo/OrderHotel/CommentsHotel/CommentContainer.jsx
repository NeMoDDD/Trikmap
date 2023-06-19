import { connect } from "react-redux"
import Comments from "./Comments"
import React from "react" 
import { addCommentTC } from "../../../../../reduxStore/hotelReducer"
import { getCommentsSelector, isHotelCommentLoadingSelector } from "../../../../../Selectors/HotelSelectors"
import { getUserEmail, getUserName } from "../../../../../Selectors/UserSelecors"

const CommentContainer = React.memo(({...props}) =>{ 
    return( 
        <Comments {...props} />
    )
}  )
 
const mapStateToProps = (state) =>{ 
    return{ 
        comments: getCommentsSelector(state), 
        email: getUserEmail(state), 
        name: getUserName(state),  
        isCommentLoading: isHotelCommentLoadingSelector(state)
    }
}
export default connect(mapStateToProps, {addCommentTC})(CommentContainer)