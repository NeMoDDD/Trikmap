import { connect } from "react-redux"
import { getError } from "../Selectors/AppSelecort"
import Error from '../components/common/Error'
const ErrorCatch = ({children,...props}) =>{ 
    if(props.isError){ 
        return <Error/>
    } 
    return children
} 
const mapStateToProps = (state) =>{ 
    return{ 
        isError: getError(state)
    }
}
export default connect(mapStateToProps, {})(ErrorCatch)