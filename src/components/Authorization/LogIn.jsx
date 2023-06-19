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
        dispatch(setUserFetching({isFetching: true}))
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
                const id = user.uid
                const token = user.accessToken
                const nickname = user.displayName
                const userImg = user.photoURL
                const userData = { email, password, id, token, nickname, userImg };
                const userDataJSON = JSON.stringify(userData);
                localStorage.setItem('user', userDataJSON);
            })
            .catch((error) => {
                console.log(error)
                if (error.code === "auth/wrong-password") {
                    setIsAuthSubmit(false)
                    setErrorMessage("Неверный email или пароль")
                } else if (error.code === "auth/too-many-requests") {
                    setIsAuthSubmit(false)
                    setErrorMessage("Слишком много запросов. Попробуйте позже!")
                } else if (error.code === "auth/user-not-found") {
                    setIsAuthSubmit(false)
                    setErrorMessage("Аккаунт с таким Email не найден!")
                }
            })
        dispatch(setUserFetching({isFetching: false}))
    }
    return (
        <div>
            {!isAuth ?  <Form btnValue="Войти"
                             handleClick={handleLogin}
                             isAuthSubmit={isAuthSubmit}
                             errorMessage={errorMessage}
            /> : <Navigate to={localStorage.getItem("redirectPath")}/>}

        </div>
    )
}

export default LogIn