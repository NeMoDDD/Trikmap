import Tour from './Tour'
import s from './Tours.module.css' 
const Tours = ({tours,...props}) =>{ 
    return( 
        <div className={s.tour}> 
            <div className={s.tour__container}>  

                <div className={s.tour__main}> 
                    <div className={s.main__item}> 
                        <div className={s.main__title}>Удивительные путешествия по Кыргызстану</div>  
                        <div className={s.main__subtitle}>Незабываемые приключения среди вершин и культурных сокровищ Кыргызстана</div>
                    </div> 
                </div>        


                <div className={s.tour__description}> 
                    <div className={s.description__item}> 
                        <div className={s.description__title}>  
                        Откройте для себя удивительные пейзажи Кыргызстана в наших турах, посетите кристально чистые горные озера, встретьте редких животных и познакомьтесь с культурой местных жителей.
                        </div> 
                    </div> 
                </div>
             
                {tours.map((item, index) => <Tour key={index} title={item.title} />)}
            </div> 
        </div>
    )
} 
export default Tours