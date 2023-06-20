import {useForm, Controller} from "react-hook-form";
import "./style.css"
import {useState} from "react";
import {Button, Input} from "antd";
import {EyeTwoTone, EyeInvisibleOutlined} from '@ant-design/icons';
import style from "./Form.module.css"
import {useSelector} from "react-redux";

const isValidEmail = email =>
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
const Form = ({btnValue, handleClick, isAuthSubmit, errorMessage, isFetching}) => {
    // const {isFetching} = useSelector(state => state.user)
    const {control, handleSubmit, reset, formState: {errors}} = useForm({
        mode: "onBlur",
    });
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [nickname, setNickname] = useState("")
    const handleEmailValidation = email => {
        const isValid = isValidEmail(email);

        const validityChanged =
            (errors.email && isValid) || (!errors.email && !isValid);
        if (validityChanged) {
        }
        return isValid
    };
    const onSubmit = () => {
        if (btnValue === "Зарегистрироваться") {
            handleClick(email, password, nickname)
        } else {
            handleClick(email, password)
        }

    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={"register-form"}>
                {btnValue === "Зарегистрироваться" ? <Controller
                    name="nickname"
                    control={control}
                    rules={{
                        required: "Это поле обязательное!", maxLength: {
                            value: 15,
                            message: "Максимум 15 символов!"
                        },
                        onChange: (e) => setNickname(e.target.value)
                    }}
                    render={({field}) => <Input {...field}
                                                placeholder="Имя"
                                                className={errors.nickname ? style.registerForm__input__error : style.registerForm__input}
                    />}/> : null}
                {errors.nickname && <span className={style.error__message}>{errors.nickname.message}</span>}

                <Controller
                    name="email"
                    control={control}
                    rules={{
                        required: "Это поле обязательное!", validate: handleEmailValidation,
                        onChange: (e) => setEmail(e.target.value)
                    }}
                    render={({field}) => <Input {...field}
                                                placeholder="Email"
                                                className={errors.email ? style.registerForm__input__error : style.registerForm__input}
                    />}/>
                {errors.email &&
                    <span className={style.error__message}>{errors.email.message || "Неверный email"}</span>}
                { btnValue === "Зарегистрироваться" ? <Controller
                    name="password"
                    control={control}
                    rules={{
                        required: "Это поле обязательное!", minLength: {
                            value: 6,
                            message: "Минимум 6 символов!"
                        }, onChange: (e) => setPassword(e.target.value)
                    }}
                    render={({field}) => <Input.Password {...field}
                                                         iconRender={(visible) => (visible ? <EyeTwoTone/> :
                                                             <EyeInvisibleOutlined/>)}
                                                         placeholder="Пароль"
                                                         className={errors.password ? style.registerForm__input__error : style.registerForm__input}
                    />}
                /> : <Controller
                    name="password"
                    control={control}
                    rules={{
                        required: "Это поле обязательное!", onChange: (e) => setPassword(e.target.value)
                    }}
                    render={({field}) => <Input.Password {...field}
                                                         iconRender={(visible) => (visible ? <EyeTwoTone/> :
                                                             <EyeInvisibleOutlined/>)}
                                                         placeholder="Пароль"
                                                         className={errors.password ? style.registerForm__input__error : style.registerForm__input}
                    />}
                />}

                {errors.password &&
                    <span className={style.error__message}>{errors.password.message || "Это поле обязательное!"}</span>}
                {!isAuthSubmit && <span className={style.error__message}>{errorMessage}</span>}
                <Controller
                    name="btn-submit"
                    control={control}
                    render={({field}) => <Button {...field}
                                                 className={style.registerForm__btn}
                                                 type="primary"
                                                 htmlType="submit"
                                                 disabled={isFetching}
                    >{btnValue}</Button>}
                />
            </form>
        </>
    );
}
export default Form;