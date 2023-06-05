import {useForm, Controller} from "react-hook-form";
import "./style.css"
import {useState} from "react";
import {Button, Input} from "antd";
import {EyeTwoTone, EyeInvisibleOutlined} from '@ant-design/icons';

const isValidEmail = email =>
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
const Form = ({btnValue, handleClick, isAuthSubmit, errorMessage}) => {
    const { control, handleSubmit, reset, formState: {errors}} = useForm({
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
                { btnValue === "Зарегистрироваться" ? <Controller
                    name="nickname"
                    control={control}
                    rules={{
                        required: "Это поле обязательное!",
                        onChange: (e) => setNickname(e.target.value)
                    }}
                    render={({field}) => <Input {...field}
                                                placeholder="Имя"
                                                className="register-form__input"
                    />}/> : null }
                {errors.nickname && <span>{errors.nickname.message}</span>}

                <Controller
                    name="email"
                    control={control}
                    rules={{
                        required: "Это поле обязательное!", validate: handleEmailValidation,
                        onChange: (e) => setEmail(e.target.value)
                    }}
                    render={({field}) => <Input {...field}
                                                placeholder="Email"
                                                className="register-form__input"
                    />}/>
                {errors.email && <span>{errors.email.message || "Неверный email"}</span>}
                <Controller
                    name="password"
                    control={control}
                    rules={{
                        required: true, minLength: {
                            value: 6,
                            message: "Минимум 6 символов!"
                        }, onChange: (e) => setPassword(e.target.value)
                    }}
                    render={({field}) => <Input.Password {...field}
                                                         iconRender={(visible) => (visible ? <EyeTwoTone/> :
                                                             <EyeInvisibleOutlined/>)}
                                                         placeholder="Пароль"
                                                         className="register-form__input"
                    />}
                />
                {errors.password && <span>{errors.password.message || "Это поле обязательное!"}</span>}
                {!isAuthSubmit && <span>{errorMessage}</span>}
                <Controller
                    name="btn-submit"
                    control={control}
                    render={({field}) => <Button {...field}
                                                 className="register-form__btn"
                                                 type="primary"
                                                 htmlType="submit"
                    >{btnValue}</Button>}
                />
            </form>
        </>
    );
}

export default Form;