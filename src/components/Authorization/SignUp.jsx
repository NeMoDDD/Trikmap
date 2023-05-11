import {useDispatch} from "react-redux";
import {setUser} from "./store/slices/userSlise";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from "./Form";
import {useNavigate} from "react-router-dom";
const SignUp = () => {
    const dispatch = useDispatch()
    const push = useNavigate()

    const handleSignup = (email, password)=> {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
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
            <Form btnValue="Зарегистрироваться"
                  handleClick={handleSignup}
            />
        </div>
    )
}

export default SignUp;