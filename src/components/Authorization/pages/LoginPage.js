import {NavLink} from "react-router-dom";
import RegisterForm from "../RegisterForm";

const LoginPage = () => {
    return (
        <div>
            <h3>Вход</h3>
            <RegisterForm/>
            <p>
                or <NavLink to={"/register"}>Зарегистрироваться</NavLink>
            </p>
        </div>
    )
}

export default LoginPage;