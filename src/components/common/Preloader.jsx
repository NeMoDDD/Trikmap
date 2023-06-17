import { Spinner } from "@chakra-ui/react"; 
import s from './common.module.css' 
export const Preloader = () =>{ 
    return( 
        <div> 
            <div className={s.spinner} > 
            <Spinner className={s.spin} color='blue' colorScheme='cyan'/>
            </div> 
        </div>
    )
}