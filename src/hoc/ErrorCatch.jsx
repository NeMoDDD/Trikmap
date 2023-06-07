import { connect } from "react-redux"
import { getError } from "../Selectors/AppSelecort"
import Error from '../components/common/Error' 
import { setErrorAC } from "../reduxStore/appReducer"
const ErrorCatch = ({children,...props}) =>{ 
    if(props.isError){ 
        return <Error setError = {props.setErrorAC}  />
    } 
    return children
} 
const mapStateToProps = (state) =>{ 
    return{ 
        isError: getError(state)
    }
}
export default connect(mapStateToProps, {setErrorAC})(ErrorCatch)