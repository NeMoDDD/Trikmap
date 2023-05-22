import s from './common.module.css'
const Advantages = ({value, img}) =>{ 
    return ( 
        <div className={s.advantages}><img className={s.advantages__img} src={img} alt="Icon of Advantage" /> <span>{value}</span> </div>
    )
} 
export default Advantages