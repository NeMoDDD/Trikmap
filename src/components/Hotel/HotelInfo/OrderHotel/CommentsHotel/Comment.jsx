
import s from './Comment.module.css' 
import React from 'react'
 const Comment = React.memo(({name, title}) =>{ 
    return( 
        <div className={s.comment_row}>  
            <div className={s.row__wrapper}> 
            <div className={s.row__name}> 
                {name}
            </div> 
            <div className={s.row__title}> 
                {title}
            </div>
            </div>
        </div>
    )
}  )
export default Comment