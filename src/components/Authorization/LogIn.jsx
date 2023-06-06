import {useDispatch} from "react-redux";
import {setUser} from "../store/slices/userSlise";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import Form from "./Form";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {useAuth} from "./hooks/use-auth";
import Spiner from "../helpers/spiner";

const LogIn = () => {
    const dispatch = useDispatch()
    const push = useNavigate()
    const [isAuthSubmit, setIsAuthSubmit] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")
    const {nickname} = useAuth()


    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                    nickname: user.displayName,
                    userImg: user.photoURL
                }))

                push("/personal-account")
            })
            .catch((error) => {
                if (error.code === "auth/wrong-password") {
                    setIsAuthSubmit(false)
                    setErrorMessage("Неверный email или пароль")
                } else if (error.code === "auth/too-many-requests") {
                    setIsAuthSubmit(false)
                    setErrorMessage("Слишком много запросов. Попробуйте позже!")
                }
            })

    }
    return (
        <div>
            {/*<Spiner isFetching={}/>*/}
            <Form btnValue="Войти"
                  handleClick={handleLogin}
                  isAuthSubmit={isAuthSubmit}
                  errorMessage={errorMessage}
            />
        </div>
    )
}

export default LogIn