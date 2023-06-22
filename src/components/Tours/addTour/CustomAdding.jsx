import s from '../../Hotel/addHotel/addHotel.module.css' 
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Form, Input, Button } from 'antd'; 
const CustomAdding = (handleChange,handleRemove,handleAdd, data,title) =>{   
    console.log(handleChange,handleRemove,handleAdd, data,title); 
    return( 

        <div className={`${s.from__item} ${s.from__item_add}`}>
                    <div className={`${s.from__title}`}>{title}:</div>
                        {data.map((input, index) => (
                            <Form.Item  key={index}> 
                            <div className={s.add__item}> 
                           <Input
                            className={`${s.input} ${s.input_block}`}
                            value={input}
                            onChange={(e) => handleChange(index, e.target.value)}
                            />
                        
                                  
                                {index > 0 && (
                                    <Button className={s.danger__btn} onClick={() => handleRemove(index)}>
                                        <MinusCircleOutlined /> 
                                    </Button>
                                )}
                                </div>
                            </Form.Item>
                        ))} 

                        <Button type="primary" className={s.add__btn} onClick={handleAdd}>
                          <PlusOutlined/>  Добавить поле
                        </Button> 
                    </div> 
)
} 
export default CustomAdding