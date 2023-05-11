import {NavLink} from "react-router-dom";
import LogIn from "../LogIn";

const LoginPage = () => {
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