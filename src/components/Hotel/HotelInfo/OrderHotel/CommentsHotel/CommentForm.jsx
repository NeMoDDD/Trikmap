import { Input } from 'antd';
import sendIcon from '../../../../../assets/img/send.png'
import { useForm, Controller } from "react-hook-form" 
import React from 'react'
import s from './Comment.module.css'  
const CommentsForm = React.memo(({name,email,...props}) => {  
    const { TextArea } = Input;
    const { control, handleSubmit, reset,  formState: { errors } } = useForm({
        mode: "onBlur",
    });
    const onSubmit = (data) => {  
        const {title} = data
        props.addCommentTC(props.hotel, { name,email, title})
        reset()
    }
    return (
        <form className={s.add}>
            <div className={s.add__input}>
                <div className={s.item__input}>
                    <Controller
                        name="title"
                        control={control}
                        rules={{
                            required: true, 
                            minLength: {
                                value: 6,
                                message: "Минимум 6 символов!"
                            }, maxLength: {
                                value: 34,
                                message: "Минимум 34 символа!"
                            }
                        }}
                        render={({ field }) => <TextArea className={s.input_comment} {...field}
                        />}
                    />
                    {errors.comment && <div className={s.error}>{errors.comment.message || "Это поле обязательное!"}</div>}
                </div>
            </div>
            <div className={s.add__btn}><img onClick={handleSubmit(onSubmit)} src={sendIcon} alt='Send Button' role='button' className={s.img_send} /></div>
        </form>
    )
})
export default CommentsForm