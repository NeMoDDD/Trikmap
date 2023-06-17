import { Alert} from 'antd';
import s from '../../../Hotel/HotelInfo/OrderHotel/FormOrder/Form.module.css'
import { useForm, Controller } from "react-hook-form"
import { connect } from "react-redux";

import { getUserEmail, getUserId } from '../../../../Selectors/UserSelecors'; 
import { setBookTC } from '../../../../reduxStore/tourReducer';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { defineTourSelector, isSucceedTOurSelector } from '../../../../Selectors/TourSelectors';

const FormOrderTour = ({name,...props}) => { 
    const { control, handleSubmit, reset, register, formState: { errors } } = useForm({
        mode: "onBlur",
    });   
    const [disabled, setDisabled] = useState(false)
    const navigate = useNavigate() 
    useEffect(()=>{ 
        if(!props.id){ 
            return navigate('/login', {replace:true})
        }
    })

    const onSubmit = (data) => { 
        setDisabled(true)
        props.setBookTC(props.email, name.title, data.number, data.amount) 
        setDisabled(false) 
        reset()
    }
    return (
        <div className={s.order}> 
            <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
                <div className={s.order__wrapper}>
                    <div className={s.order__item_title}><div className={s.order__title}>Бронирование Тура <strong>{name.title}</strong></div></div>
                    <div className={s.order__form}>

                        <div className={s.order__item}>  
                            <div className={s.item__title}>Номер телефона</div>
                            <div className={s.item__input}> 
                             <Controller
                                name="number"
                                control={control}
                                rules={{
                                    required: "Это поле обязательное!",
                                    minLength: {
                                        value: 6,
                                        message: "Минимум 6 символов!"
                                    }
                                }}
                                render={({ field }) => <input className={s.input_num} {...field} type="nubmer"
                                />} />
                                </div>
                            {errors.number && <div className={s.error}>{errors.number.message || "Неверный email"}</div>}
                        </div>
                        

                        <div className={s.order__item}> 
                        <div className={s.item__title}>Количество людей</div>
                            <div className={s.item__input}> 
                            <input  className={s.input_amount} {...register('amount', {
                                required: "Это поле обязательное!",
                            })} />
                            {errors.amount && <div className={s.error}>{errors.amount.message || 'Это поле обязательное!'}</div>}
                        </div>
                        </div>
                        

                        <div className={s.order_btn}> {props.isSucceed ? <Alert message="Вы успешно забронировали!" type="success" showIcon></Alert> :<input disabled={disabled} type="submit" value={'Забронировать'}></input>}</div>
                    </div>
                </div>
            </form>
        </div>
    )
} 
const mapStateToProps = (state) =>{ 
    return{ 
        name: defineTourSelector(state), 
        email: getUserEmail(state), 
        id: getUserId(state), 
        isSucceed: isSucceedTOurSelector(state)
    }
}
export default connect(mapStateToProps, {setBookTC})(FormOrderTour)