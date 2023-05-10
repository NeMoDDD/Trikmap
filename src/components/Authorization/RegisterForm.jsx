import {useForm} from "react-hook-form";
import "./style.css"
import {useState} from "react";

const isValidEmail = email =>
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );

export default function RegisterForm() {
    const {register, handleSubmit, reset, formState: {errors}} = useForm({
        mode: "onBlur",
    });
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleEmailValidation = email => {
        const isValid = isValidEmail(email);

        const validityChanged =
            (errors.email && isValid) || (!errors.email && !isValid);
        if (validityChanged) {
        }
        return isValid
    };
    const onSubmit = (data) => {
        reset()
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={"register-form"}>
            <input className="register-form__input" onChange={(e) => {setEmail(e.target.value)}} placeholder="Email" {...register("email", {
                required: "Это поле обязательное!", validate: handleEmailValidation
            })} />
            {errors.email && <span>{errors.email.message || "Неверный email"}</span>}
            <input className="register-form__input" onChange={(e) => {setPassword(e.target.value)}} placeholder="Пароль" {...register("password", {
                required: true, minLength: {
                    value: 6,
                    message: "Минимум 6 символов!"
                }
            })} />
            {errors.password && <span>{errors.password.message || "Это поле обязательное!"}</span>}
            <input className="register-form__btn" type="submit"/>
        </form>
    );
}