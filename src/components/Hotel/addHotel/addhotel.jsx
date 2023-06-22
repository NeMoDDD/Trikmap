import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useForm} from "react-hook-form"
import s from './addHotel.module.css'
import { useState } from "react";
import { Form, Input, Button } from 'antd';
const Addhotel = (props) => { 
    const {  
        register,
        handleSubmit,
        formState: {
            errors, 
        },
        reset,
    } = useForm({
        mode: 'onBlur',
    })
    const [inputs, setInputs] = useState(['']); 

    const handleAddInput = () => {
        const newInputs = [...inputs, ''];
        setInputs(newInputs);
    };

    const handleRemoveInput = (index) => {
        const newInputs = [...inputs];
        newInputs.splice(index, 1)
        setInputs(newInputs);
    };

    const handleChangeInput = (index, value) => {
        const newInputs = [...inputs];
        newInputs[index] = value;
        setInputs(newInputs);
    };  


    const onSubmit = (formData) => { 
        props.setNewHotel({...formData, photo: [...inputs],rating:0}) 
        reset()
    }



    return (
        <div className={s.add}>
            <div className={s.add__container}>
                <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={s.from__decription}>Добавение Отеля</div>
                    <div className={s.from__item}>

                        <div className={s.from__title}>Название отеля: </div>

                        <div className={s.from__inputs}>
                            <input
                                className={s.input}
                                {...register("name", {
                                    required: true,
                                    minLength: {
                                        value: 3,
                                        message: "Минимум 3 символа!"
                                    }
                                })} />
                            {errors.name && <span className={s.errors}>{errors.name?.message || "Это поле обязательное!"}</span>}
                        </div>
                    </div>


                    <div className={s.from__item}>
                        <div className={s.from__title}>Описание отеля:</div>
                        <div className={s.from__inputs}>
                            <input
                                className={s.input}
                                {...register("subtitle", {
                                    required: true,
                                    minLength: {
                                        value: 5,
                                        message: "Минимум 20 символов! "
                                    }
                                })} />
                            {errors.subtitle && <span className={s.errors}>{errors.subtitle?.message || "Это поле обязательное!"}</span>}
                        </div>
                    </div>

                    <div className={s.from__item}>
                        <div className={s.from__title}>Ссылка на бронирование в Booking:</div>
                        <div className={s.from__inputs}>
                            <input
                                className={s.input}
                                {...register("booking", {
                                    required: true,
                                    minLength: {
                                        value: 5,
                                        message: "Минимум 5 символов! "
                                    }
                                })} />
                            {errors.booking && <span className={s.errors}>{errors.booking?.message || "Это поле обязательное!"}</span>}
                        </div>
                    </div>

                    <div className={s.from__item}>
                        <div className={s.from__title}>Город в котором расположен отель:</div>
                        <div className={s.from__inputs}>
                            <input
                                className={s.input}
                                {...register("city", {
                                    required: true,
                                })} />
                            {errors.city && <span className={s.errors}>{errors.city?.message || "Это поле обязательное!"}</span>}
                        </div>
                    </div>

                    <div className={s.from__item}>
                        <div className={s.from__title}>Регион в котором расположен отель:</div>
                        <div className={s.from__inputs}>
                            <input
                                className={s.input}
                                {...register("region", {
                                    required: true,
                                    minLength: {
                                        value: 5,
                                        message: "Минимум 5 символов! "
                                    }
                                })} />
                            {errors.region && <span className={s.errors}>{errors.region?.message || "Это поле обязательное!"}</span>}
                        </div>
                    </div>

                    <div className={s.from__item}>
                        <div className={s.from__title}>Улица отеля:</div>
                        <div className={s.from__inputs}>
                            <input
                                className={s.input}
                                {...register("street", {
                                    required: true,
                                })} />
                            {errors.street && <span className={s.errors}>{errors.street?.message || "Это поле обязательное!"}</span>}
                        </div>
                    </div>


                    <div className={s.from__item}>
                        <div className={s.from__title}>Плюсы отеля:</div>
                        <div className={s.from__item__checkbox}>
                            <label className={s.form__row}>
                                <input
                                    className={s.form__checkbox}
                                    type="checkbox"
                                    {...register("addvantages.wifi")}
                                /> Wi-Fi
                            </label>
                            <label className={s.form__row}>

                                <input
                                    type="checkbox"
                                    className={s.form__checkbox}
                                    {...register("addvantages.cleaning")}
                                /> Cleaning
                            </label>

                            <label className={s.form__row}>

                                <input
                                    type="checkbox"
                                    className={s.form__checkbox}
                                    {...register("addvantages.freebreakfast")}
                                /> Free breakfast
                            </label>
                        </div>
                    </div>
                    <div className={`${s.from__item} ${s.from__item_add}`}>
                    <div className={`${s.from__title}`}>Фото отеля:</div>
                        {inputs.map((input, index) => (
                            <Form.Item  key={index}> 
                            <div className={s.add__item}> 
                           <Input
                            className={`${s.input} ${s.input_block}`}
                            value={input}
                            onChange={(e) => handleChangeInput(index, e.target.value)}
                            />
                        
                                  
                                {index > 0 && (
                                    <Button className={s.danger__btn} onClick={() => handleRemoveInput(index)}>
                                        <MinusCircleOutlined /> 
                                    </Button>
                                )}
                                </div>
                            </Form.Item>
                        ))} 

                        <Button type="primary" className={s.add__btn} onClick={handleAddInput}>
                          <PlusOutlined/>  Добавить поле
                        </Button> 
                    </div> 
                    <div className={s.add_button}> 

                    <button >Добавить отель</button>
                    </div>
                </form>

            </div>
        </div>
    )
}
export default Addhotel 
