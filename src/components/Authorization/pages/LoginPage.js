import {NavLink} from "react-router-dom";
import LogIn from "../LogIn";
import {useAuth} from "../hooks/use-auth";
import style from "./Login.module.css"

const LoginPage = () => {
    const {isAuth} = useAuth()

    return (
        <div className={style.main}>
            <div className={style.login__block}>
                <div className={style.title__block}>
                    <h3>Вход</h3>
                </div>
                <div>
                    <LogIn/>
                </div>
                <div className={style.navigate__block}>
                    <p>
                        Нет аккаунта? <NavLink to={"/register"}>Зарегистрироваться</NavLink>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;