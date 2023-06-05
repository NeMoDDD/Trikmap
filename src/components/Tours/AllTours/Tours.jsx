import Tour from './Tour'
import s from './Tours.module.css' 
const Tours = ({tours,...props}) =>{ 
    return( 
        <div className={s.tour}> 
            <div className={s.tour__container}>  
                {tours.map((item, index) => <Tour key={index} title={item.title} />)}
            </div> 
        </div>
    )
} 
export default Tours