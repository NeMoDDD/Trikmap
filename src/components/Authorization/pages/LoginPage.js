import {NavLink} from "react-router-dom";
import LogIn from "../LogIn";
import {useAuth} from "../hooks/use-auth";

const LoginPage = () => {
    const {isAuth} = useAuth()

    return (
        <div>
            <h3>Вход</h3>
            <LogIn/>
            <p>
                or <NavLink to={"/register"}>Зарегистрироваться</NavLink>
            </p>
        </div>
    )
}

export default LoginPage;