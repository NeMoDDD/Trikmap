import {useDispatch} from "react-redux";
import {setUser} from "./store/slices/userSlise";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from "./Form";
import {useNavigate} from "react-router-dom";
const LogIn = () => {
    const dispatch = useDispatch()
    const push = useNavigate()

    const handleLogin = (email, password)=> {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken
                }))
                push("/")
            })
            .catch(console.error)
    }
    return (
        <div>
            <Form btnValue="Войти"
                  handleClick={handleLogin}
            />
        </div>
    )
}

export default LogIn