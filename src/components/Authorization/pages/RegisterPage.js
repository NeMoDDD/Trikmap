import {NavLink} from "react-router-dom";

const RegisterPage = () => {
    return (
        <div>
            <h3>Регистрация</h3>
            
            <p>
                или <NavLink to={'/login'}>Войти</NavLink>
            </p>
        </div>
    )
}

export default RegisterPage