import {useDispatch} from "react-redux";
import {setUser, setUserFetching} from "../store/slices/userSlise";
import {getAuth, createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import Form from "./Form";
import {Navigate, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useAuth} from "./hooks/use-auth";

const SignUp = () => {
    const dispatch = useDispatch()
    const push = useNavigate()
    const [isAuthSubmit, setIsAuthSubmit] = useState(true)
    const {isAuth} = useAuth()
    const [errorMessage, setErrorMessage] = useState("")
    const handleSignup = (email, password, nickname) => {
        dispatch(setUserFetching(true))
        const auth = getAuth();
        const nickName = nickname
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                if (user.message === "EMAIL_EXISTS") {

                }
                // await updateProfile(user, {
                //     displayName: nickname
                // })
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                    nickname: nickName
                }))
                const id = user.uid
                const token = user.accessToken
                const userData = {email, password, id, token, nickName};
                const userDataJSON = JSON.stringify(userData);
                localStorage.setItem('user', userDataJSON);
                dispatch(setUserFetching(false))

                push("/personal-account")
            })
            .catch((error) => {
                if (error.code === "auth/email-already-in-use") {
                    setIsAuthSubmit(false)
                    setErrorMessage("Email уже используется!")
                }
            })
    }
    return (
        !isAuth ? <div>
                <Form btnValue="Зарегистрироваться"
                      handleClick={handleSignup}
                      isAuthSubmit={isAuthSubmit}
                      errorMessage={errorMessage}
                />
            </div> : <Navigate to={localStorage.getItem("redirectPath")}/>

    )
}

export default SignUp;