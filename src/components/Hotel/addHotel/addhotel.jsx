import { useForm } from "react-hook-form"
const Addhotel = (props) =>{ 
    const onSubmit = (formData) => {  
       
        reset()
    } 
    
    const { 
          register, 
          handleSubmit, 
          formState:{ 
              errors, isValid
          }, 
          reset, 
      } = useForm( { 
          mode: 'onBlur'
      })
    return( 
        <div> 
    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email:
            <br />
            <input 
                {...register("email", {
                    required: "This field is requiered.",
                    minLength: {
                        value: 5,
                        message: "Your login must be at least 5 symbols long."
                    }
                })}
                
            />
        </label>
        <br />
        <div>
            {errors.email && <span>{errors.email?.message || "Error!"}</span>}
        </div>
        <label>Password:
            <br />
            <input 
                type="password"
                {...register("password", {
                    required: "This field is requiered."
                })}
                
            />
        </label>
        <br />
        <div >
            {errors.password && <span>{errors.password.message || "Error!"}</span>}
        </div>
        <label>
            <input
                type="checkbox"
                {...register("rememberMe")}
            /> Remember me
        </label>
        <br />
        {errors.server
            &&
            <div >
                <span>{errors.server.message}</span>
            </div>}
        <input type="submit" disabled={!isValid} value="Log in" />
    </form>
    )
        </div>
    )
}  
export default Addhotel