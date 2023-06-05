import { DatePicker} from 'antd';
import s from './Form.module.css'
import { useForm, Controller } from "react-hook-form"
const FormOrderHotel = () => {
    const { RangePicker } = DatePicker;
    const { control, handleSubmit, reset, register, formState: { errors } } = useForm({
        mode: "onBlur",
    });
    const onSubmit = (data) => {
        console.log(data);
        reset()
    }
    return (
        <div className={s.order}>
            <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
                <div className={s.order__wrapper}>
                    <div className={s.order__item_title}><div className={s.order__title}>Бронирование Отеля <strong>Aurum Hotel</strong></div></div>
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
                                name="data"
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                render={({ field }) => <RangePicker  className={s.input_range} {...field}
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
                                <option value="eco">Эконом</option>
                                <option value={'comfort'}>Комфорт</option>
                                <option value="pre-lux">Полу-Люкс</option>
                                <option value='lux'>Люкс</option>
                                <option value="extra-lux">Президентский</option>
                            </select>
                            {errors.type && <div className={s.error}>{errors.type.message || 'Это поле обязательное!'}</div>}
                        </div> 
                        </div>

                        <div className={s.order_btn}> <input type="submit" value={'Забронировать'}></input></div>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default FormOrderHotel