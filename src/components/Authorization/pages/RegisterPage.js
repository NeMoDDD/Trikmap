import {NavLink} from "react-router-dom";
import SignUp from "../SignUp";

const RegisterPage = () => {
    return (
        <div>
            <h3>Регистрация</h3>
            <SignUp/>
            <p>
                или <NavLink to={'/login'}>Войти</NavLink>
            </p>
        </div>
    )
}

export default RegisterPage