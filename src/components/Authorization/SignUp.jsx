import {useDispatch} from "react-redux";
import {setUser} from "../store/slices/userSlise";
import {getAuth, createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import Form from "./Form";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const SignUp = () => {
    const dispatch = useDispatch()
    const push = useNavigate()
    const [userIsAlreadyReg, setUserIsAlreadyReg] = useState(false)
    const handleSignup = (email, password, nickname) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async({user}) => {
                if (user.message === "EMAIL_EXISTS") {
                    console.log("1")
                }
                await updateProfile(user, {
                    displayName: nickname
                })
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                    nickname: user.displayName
                }))
                push("/personal-account")
            })
            .catch((error) => {
                if (error.code === "auth/email-already-in-use") {
                    setUserIsAlreadyReg(true)
                }
            })
    }
    return (
        <div>
            <Form btnValue="Зарегистрироваться"
                  handleClick={handleSignup}
                  isAuthSubmit={true}
            />
            {userIsAlreadyReg && <span>Email уже используется!</span>}
        </div>
    )
}

export default SignUp;