import { connect } from "react-redux"
import { getError } from "../Selectors/AppSelecort"
import Error from '../components/common/Error' 
import { setErrorAC } from "../reduxStore/appReducer"
import { useLocation} from 'react-router-dom' 
import { useEffect } from "react" 
const ErrorCatch = ({children,setErrorAC,...props}) =>{   
    const location = useLocation()  
    useEffect(() =>{ 
        setErrorAC(false)
    },[location.pathname, setErrorAC]) 



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