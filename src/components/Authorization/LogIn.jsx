import {useDispatch, useSelector} from "react-redux";
import {setUser, setUserFetching} from "../store/slices/userSlise";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import Form from "./Form";
import {Navigate, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useAuth} from "./hooks/use-auth";

const LogIn = () => {
    const dispatch = useDispatch()
    const push = useNavigate()
    const [isAuthSubmit, setIsAuthSubmit] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")
    const {isAuth} = useAuth()

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUserFetching(true))
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                    nickname: user.displayName,
                    userImg: user.photoURL
                }))
                const id = user.uid
                const token = user.accessToken
                const nickname = user.displayName
                const userImg = user.photoURL
                const userData = { email, password, id, token, nickname, userImg };
                const userDataJSON = JSON.stringify(userData);
                localStorage.setItem('user', userDataJSON);
                dispatch(setUserFetching(false))

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
            {!isAuth ?  <Form btnValue="Войти"
                             handleClick={handleLogin}
                             isAuthSubmit={isAuthSubmit}
                             errorMessage={errorMessage}
            /> : <Navigate to={"/"}/>}

        </div>
    )
}

export default LogIn