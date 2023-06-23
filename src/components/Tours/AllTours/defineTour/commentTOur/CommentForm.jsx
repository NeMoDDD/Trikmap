import { Input, Rate } from 'antd';
import sendIcon from '../../../../../assets/img/send.png'
import { useForm, Controller } from "react-hook-form" 
import React from 'react'
import s from '../../../../Hotel/HotelInfo/OrderHotel/CommentsHotel/Comment.module.css'   
const CommentsForm = React.memo(({name,email,...props}) => {  
    const { TextArea } = Input;
    const { control, handleSubmit, reset,  formState: { errors } } = useForm({
        mode: "onBlur",
    });
    const onSubmit = (data) => {  
        const {title} = data
        props.addCommentTC(props.tour, { name,email, title, rating:data.rating}) 
        reset()
    }
    return (
        <form className={s.add}>
            <div className={s.add__input}>
                <div className={s.item__input}> 
                <Controller
                        name="rating"
                        control={control}
                        rules={{
                            required: true, 
                        }}
                        render={({ field }) => <Rate className={s.custom_rate} defaultValue={0} {...field}/> }
                    /> 
                    {errors.rating && <div className={s.error}>{errors.rating.message || "Поставьте рейтинг отелю!"}</div>} 
                    <Controller
                        name="title"
                        control={control}
                        rules={{
                            required: true, 
                            minLength: {
                                value: 3,
                                message: "Минимум 3 символа!"
                            }, maxLength: {
                                value: 90,
                                message: "Минимум 90 символов!"
                            }
                        }}
                        render={({ field }) => <TextArea className={s.input_comment} {...field}
                        />}
                    />
                    {errors.title && <div className={s.error}>{errors.title.message || "Это поле обязательное!"}</div>}  
                    
                    
                    
                </div>
            </div>
            <div className={s.add__btn}><img onClick={handleSubmit(onSubmit)} src={sendIcon} alt='Send Button' role='button' className={s.img_send} /></div>
        </form>
    )
})
export default CommentsForm