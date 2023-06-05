import s from './AllTours/Tours.module.css'  
import { useRef } from 'react'; 
import {DownOutlined } from '@ant-design/icons'
const ContentTour = () =>{  
    const scrollToRef = useRef();

    const handleClick = () => {
    scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
  };
    return( 
        <div className={s.content}>  
             
            <div className={s.main}> 
                <div className={s.content__container}> 
                <div className={s.content__main}> 
                    <div className={s.main__item}>  
                        <div className={s.main__title}>Удивительные путешествия по Кыргызстану</div>  
                        <div className={s.main__subtitle}>Ощутите дух свободы среди неповторимых пейзажей и богатой истории!</div>
                    </div>    
                    <div className={s.arrow_down}> 
                    <DownOutlined onClick={handleClick} className={s.custom__arrow} />
                     </div>      
                </div> 
                </div> 
            </div>

                <div className={s.tour__description} ref={scrollToRef}> 
                    <div className={s.description__container}> 
                        <div className={s.description__title}>  
                        Откройте для себя удивительные пейзажи Кыргызстана в наших турах, посетите кристально чистые горные озера, встретьте редких животных и познакомьтесь с культурой местных жителей.
                        </div> 
                    </div> 
                </div> 
                
        </div>
    )
} 
export default ContentTour