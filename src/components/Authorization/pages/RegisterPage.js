import {NavLink} from "react-router-dom";
import SignUp from "../SignUp";
import style from "./Login.module.css"

const RegisterPage = () => {
    return (
        <div className={style.main}>
            <div className={style.login__block}>
                <div className={style.title__block}>
                    <h3>Регистрация</h3>
                </div>
                <div>
                    <SignUp/>
                </div>
                <div className={style.navigate__block}>
                    <p>
                        Уже есть аккаунт? <NavLink to={'/login'}>Войти</NavLink>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage