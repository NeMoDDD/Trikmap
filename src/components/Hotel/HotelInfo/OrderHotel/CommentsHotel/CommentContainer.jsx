import { connect } from "react-redux"
import Comments from "./Comments"
import React from "react" 
import { addCommentTC } from "../../../../../reduxStore/hotelReducer"
import { getCommentsSelector } from "../../../../../Selectors/HotelSelectors"
import { getUserEmail, getUserName } from "../../../../../Selectors/UserSelecors"

const CommentContainer = React.memo(({comments,name,email,...props}) =>{ 
    return( 
        <Comments hotel={props.hotel} addCommentTC={props.addCommentTC} comments={comments} email={email} name={name} />
    )
}  )
 
const mapStateToProps = (state) =>{ 
    return{ 
        comments: getCommentsSelector(state), 
        email: getUserEmail(state), 
        name: getUserName(state)
    }
}
export default connect(mapStateToProps, {addCommentTC})(CommentContainer)