import { Alert, DatePicker} from 'antd';
import s from './Form.module.css'
import { useForm, Controller } from "react-hook-form"
import { connect } from "react-redux";
import { getOrderingHotelOptions, isSucceedSelector } from '../../../../../Selectors/HotelSelectors';
import { getUserEmail, getUserId } from '../../../../../Selectors/UserSelecors'; 
import { setBookTC } from '../../../../../reduxStore/hotelReducer';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

const FormOrderHotel = ({name,...props}) => { 
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
        let inner = data.date[0].$d.toString()
        let out =data.date[1].$d.toString() 
        setDisabled(true)
        props.setBookTC(inner.split(' ').slice(0,4).join(' '), out.split(' ').slice(0,4).join(' '), props.email, props.id, name.name, data.number, data.amount, data.type) 
        setDisabled(false) 
        reset()
    }
    return (
        <div className={s.order}> 
            <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
                <div className={s.order__wrapper}>
                    <div className={s.order__item_title}><div className={s.order__title}>Бронирование Отеля <strong>{name.name}</strong></div></div>
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
                        <div className={s.item__title}>Дата въезда-выезда</div>
                            <div className={s.item__input}> 
                            <Controller
                                name="date"
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                render={({ field }) => <DatePicker.RangePicker  className={s.input_range} {...field}
                                />}
                            />
                            {errors.data && <div className={s.error}>{errors.data.message || "Это поле обязательное!"}</div>}
                        </div>  
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
                        <div className={s.order__item}> 
                        <div className={s.item__title}>Тип номера</div>
                            <div className={s.item__input}> 
                            <select  className={s.input_select} {...register('type', {
                                required: "Это поле обязательное!",
                            })}>
                                <option value="Эконом">Эконом</option>
                                <option value={'Комфорт'}>Комфорт</option>
                                <option value="Полу-Люкс">Полу-Люкс</option>
                                <option value='Люкс'>Люкс</option>
                                <option value="Президентский">Президентский</option>
                            </select>
                            {errors.type && <div className={s.error}>{errors.type.message || 'Это поле обязательное!'}</div>}
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
        name: getOrderingHotelOptions(state), 
        email: getUserEmail(state), 
        id: getUserId(state), 
        isSucceed: isSucceedSelector(state)
    }
}
export default connect(mapStateToProps, {setBookTC})(FormOrderHotel)