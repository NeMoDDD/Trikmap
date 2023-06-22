import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useForm} from "react-hook-form"
import s from '../../Hotel/addHotel/addHotel.module.css'
import { useState } from "react";
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { getUserEmail } from '../../../Selectors/UserSelecors'; 
import { setNewTour } from '../../../reduxStore/tourReducer'; 
import Error from '../../common/Error'
const AddTour = (props) => {   
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
    const [entire, setEntire] = useState([''])  
    const [data, setData] = useState(['']) 
    const [plan, setPlan] = useState(['']) 
    const [inputs, setInputs] = useState(['']);  
    const [clothes, setClothes] = useState(['']) 
    if(props.email !== 'kenjebekoverbol53@gmail.com'){ 
        return <Error/>
    }
    const handleAddItem = (setState) => {
        setState(prevState => [...prevState, '']);
        };
        
        const handleRemoveItem = (index, setState) => {
        setState(prevState => {
        const newState = [...prevState];
        newState.splice(index, 1);
        return newState;
        });
        };
        
        const handleChangeItem = (index, value, setState) => {
        setState(prevState => {
        const newState = [...prevState];
        newState[index] = value;
        return newState;
        });
        };


        const handleAddData = () => handleAddItem(setData);
        const handleRemoveData = index => handleRemoveItem(index, setData);
        const handleChangeData = (index, value) => handleChangeItem(index, value, setData);
         

        const handleAddPlan = () => handleAddItem(setPlan);
        const handleRemovePlan = index => handleRemoveItem(index, setPlan);
        const handleChangePlan = (index, value) => handleChangeItem(index, value, setPlan);

 
        const handleAddInput = () => handleAddItem(setInputs);
        const handleRemoveInput = index => handleRemoveItem(index, setInputs);
        const handleChangeInput = (index, value) => handleChangeItem(index, value, setInputs);
         

        const handleAddClothes = () => handleAddItem(setClothes);
        const handleRemoveClothes = index => handleRemoveItem(index, setClothes);
        const handleChangeClothes = (index, value) => handleChangeItem(index, value, setClothes);

        
        const handleAddEntire = () => handleAddItem(setEntire);
        const handleRemoveEntire = index => handleRemoveItem(index, setEntire);
        const handleChangeEntire = (index, value) => handleChangeItem(index, value, setEntire);

    const onSubmit = (formData) => {  
        props.setNewTour({...formData, photo: [...inputs],data:[...data], plan:[...plan],clothes:[...clothes], entire:[...entire], rating:0}) 
        reset() 
        setData(['']) 
        setPlan(['']) 
        setEntire(['']) 
        setInputs(['']) 
        setClothes([''])
    }

    return (
        <div className={s.add}>
            <div className={s.add__container}>
                <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={s.from__decription}>Добавение Тура</div>
                    <div className={s.from__item}>

                        <div className={s.from__title}>Название тура: </div>

                        <div className={s.from__inputs}>
                            <input
                                className={s.input}
                                {...register("title", {
                                    required: true,
                                    minLength: {
                                        value: 3,
                                        message: "Минимум 3 символа!"
                                    }
                                })} />
                            {errors.title && <span className={s.errors}>{errors.title?.message || "Это поле обязательное!"}</span>}
                        </div>
                    </div>


                    <div className={s.from__item}>
                        <div className={s.from__title}>Описание тура:</div>
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
                                {...register("book", {
                                    required: true,
                                    minLength: {
                                        value: 5,
                                        message: "Минимум 5 символов! "
                                    }
                                })} />
                            {errors.book && <span className={s.errors}>{errors.book?.message || "Это поле обязательное!"}</span>}
                        </div>
                    </div>

                    <div className={s.from__item}>
                        <div className={s.from__title}>Ссылка на маршрут:</div>
                        <div className={s.from__inputs}>
                            <input
                                className={s.input}
                                {...register("map", {
                                    required: true,
                                })} />
                            {errors.map && <span className={s.errors}>{errors.map?.message || "Это поле обязательное!"}</span>}
                        </div>
                    </div>

                    <div className={s.from__item}>
                        <div className={s.from__title}>Нитка маршрута:</div>
                        <div className={s.from__inputs}>
                            <input
                                className={s.input}
                                {...register("places", {
                                    required: true,
                                    minLength: {
                                        value: 5,
                                        message: "Минимум 5 символов! "
                                    }
                                })} />
                            {errors.places && <span className={s.errors}>{errors.places?.message || "Это поле обязательное!"}</span>}
                        </div>
                    </div>
 

                    <div className={`${s.from__item} ${s.from__item_add}`}>
                    <div className={`${s.from__title}`}>Рекомендуемая одежда:</div>
                        {clothes.map((input, index) => (
                            <Form.Item  key={index}> 
                            <div className={s.add__item}> 
                           <Input
                            className={`${s.input} ${s.input_block}`}
                            value={input}
                            onChange={(e) => handleChangeClothes(index, e.target.value)}
                            />
                        
                                  
                                {index > 0 && (
                                    <Button className={s.danger__btn} onClick={() => handleRemoveClothes(index)}>
                                        <MinusCircleOutlined /> 
                                    </Button>
                                )}
                                </div>
                            </Form.Item>
                        ))} 

                        <Button type="primary" className={s.add__btn} onClick={handleAddClothes}>
                          <PlusOutlined/>  Добавить поле
                        </Button> 
                    </div>   

                    <div className={`${s.from__item} ${s.from__item_add}`}>
                    <div className={`${s.from__title}`}>Входит в стоимость:</div>
                        {entire.map((input, index) => (
                            <Form.Item  key={index}> 
                            <div className={s.add__item}> 
                           <Input
                            className={`${s.input} ${s.input_block}`}
                            value={input}
                            onChange={(e) => handleChangeEntire(index, e.target.value)}
                            />
                        
                                  
                                {index > 0 && (
                                    <Button className={s.danger__btn} onClick={() => handleRemoveEntire(index)}>
                                        <MinusCircleOutlined /> 
                                    </Button>
                                )}
                                </div>
                            </Form.Item>
                        ))} 

                        <Button type="primary" className={s.add__btn} onClick={handleAddEntire}>
                          <PlusOutlined/>  Добавить поле
                        </Button> 
                    </div> 

                    <div className={`${s.from__item} ${s.from__item_add}`}>
                    <div className={`${s.from__title}`}>Даты:</div>
                        {data.map((input, index) => (
                            <Form.Item  key={index}> 
                            <div className={s.add__item}> 
                           <Input
                            className={`${s.input} ${s.input_block}`}
                            value={input}
                            onChange={(e) => handleChangeData(index, e.target.value)}
                            />
                        
                                  
                                {index > 0 && (
                                    <Button className={s.danger__btn} onClick={() => handleRemoveData(index)}>
                                        <MinusCircleOutlined /> 
                                    </Button>
                                )}
                                </div>
                            </Form.Item>
                        ))} 

                        <Button type="primary" className={s.add__btn} onClick={handleAddData}>
                          <PlusOutlined/>  Добавить поле
                        </Button> 
                    </div> 

                    <div className={`${s.from__item} ${s.from__item_add}`}>
                    <div className={`${s.from__title}`}>План тура:</div>
                        {plan.map((input, index) => (
                            <Form.Item  key={index}> 
                            <div className={s.add__item}> 
                           <Input
                            className={`${s.input} ${s.input_block}`}
                            value={input}
                            onChange={(e) => handleChangePlan(index, e.target.value)}
                            />
                        
                                  
                                {index > 0 && (
                                    <Button className={s.danger__btn} onClick={() => handleRemovePlan(index)}>
                                        <MinusCircleOutlined /> 
                                    </Button>
                                )}
                                </div>
                            </Form.Item>
                        ))} 

                        <Button type="primary" className={s.add__btn} onClick={handleAddPlan}>
                          <PlusOutlined/>  Добавить поле
                        </Button> 
                    </div>

                    <div className={`${s.from__item} ${s.from__item_add}`}>
                    <div className={`${s.from__title}`}>Фото тура:</div>
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

                    <button>Добавить Тур</button>
                    </div>
                </form>

            </div>
        </div>
    )
} 
const mapStateToProps = (state) =>{ 
    return{ 
        email: getUserEmail(state)
    }
}
export default connect(mapStateToProps,{setNewTour})(AddTour)
