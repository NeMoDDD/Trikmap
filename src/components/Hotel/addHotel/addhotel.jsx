import { useForm, useFieldArray } from "react-hook-form" 
import s from './addHotel.module.css' 


const Addhotel = (props) =>{ 
    const onSubmit = (formData) => {      
        reset() 
        // props.setNewHotel(formData)
        console.log(formData)
    }  

    const {   
        control,
        register, 
        handleSubmit, 
        formState:{ 
            errors, isValid
        }, 
        reset, 
    } = useForm( { 
        mode: 'onBlur', 
        defaultValues: { 
            cart: []
        }
    })
    const { fields, append, prepend } = useFieldArray({
        control,
        name: "cart"
      });
    return( 
        <div> 
   
        <form className={s.form}  onSubmit={handleSubmit(onSubmit)}>
        <label>Название отеля:
            <input 
                {...register("name", {
                    required: "This field is requiered.",
                    minLength: {
                        value: 1,
                        message: "Ваше название должно иметь более 1 символа!"}})}/>
            {errors.name && <span>{errors.name?.message || "Это поле обязательно для заполнения!"}</span>}
        </label>   

         <label>Оглавление отеля:
            <input 
                {...register("title", {
                    required: "This field is requiered.",
                    minLength: {
                        value: 5,
                        message: "Ваше описание должно иметь более 5 символов! "}})}/>
            {errors.title && <span>{errors.title?.message || "Это поле обязательно для заполнения!"}</span>}
        </label>              

        <label>Описание отеля:
            <input 
                {...register("subtitle", {
                    required: "This field is requiered.",
                    minLength: {
                        value: 20,
                        message: "Ваше описание должно иметь более 20 символов! "}})}/>
            {errors.subtitle && <span>{errors.subtitle?.message || "Это поле обязательно для заполнения!"}</span>}
        </label>  
          
        <label>Ссылка на бронирование отеля:
            <input 
                {...register("booking", {
                    required: "This field is requiered.",
                    minLength: {
                        value: 10,
                        message: "Ваше описание должно иметь более 10 символов! "}})}/>
            {errors.booking && <span>{errors.booking?.message || "Это поле обязательно для заполнения!"}</span>}
        </label>  


        <label>Рейтинг отеля:
            <input 
                {...register("rating", {
                    required: "Это поле обязательно!"})}/>
            {errors.rating && <span>{errors.rating?.message || "Это поле обязательно для заполнения!"}</span>}
        </label>  
  
        <label>Адрес отеля:
            <input   
             placeholder="Введите город"
             {...register("city", {
                    required: "Это поле обязательно!", 
                    minLength: {
                        value: 1,
                        message: "Ваше название должно иметь более 1 символа!"}
                     })}/>
            {errors.city && <span>{errors.city?.message || "Это поле обязательно для заполнения!"}</span>} 
             
            <input  
            placeholder="Введите регион "
                {...register("region", {
                    required: "Это поле обязательно!", 
                    minLength: {
                        value: 11,
                        message: "Ваше название должно иметь более 11 символов!"}
                     })}/>
            {errors.region && <span>{errors.region?.message || "Это поле обязательно для заполнения!"}</span>} 
             
            <input  
            placeholder="Введите улицу"
                {...register("street", { 
                    required: "Это поле обязательно!"})}/>
            {errors.street && <span>{errors.street?.message || "Это поле обязательно для заполнения!"}</span>}
        </label>  
        

        <label> Плюсы отеля
            <input
                type="checkbox"
                {...register("addvanatages.wifi")}
            /> Wi-Fi
             <input
                type="checkbox"
                {...register("addvanatages.cleaning")}
            /> Cleaning
             <input
                type="checkbox"
                {...register("addvanatages.freebreakfast")}
            /> Free breakfast 
 
         </label> 
      
                    {fields.map((field, index)=>{ 
                        return <section key={field.id}> 
                        <input type="text" {...register(`photo[${index}]`)}  />
                        
                        </section>
                    })}
    <button onClick={()=>append()}>Append</button>
        {errors.server && <div>{errors.server.message}</div>}
<input type="submit" value="Зарегестрировать отель" />
    </form>
    
        </div>
    )
}  
export default Addhotel 
//disabled={!isValid}