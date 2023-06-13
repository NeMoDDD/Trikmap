import { Rate } from 'antd'
import s from '../../../../Hotel/HotelInfo/OrderHotel/CommentsHotel/Comment.module.css'
import React from 'react'
const Comment = React.memo(({ name, title, rating }) => {
    return (
        <div className={s.comment_row}>
            <div className={s.row__wrapper}>
                <div className={s.row__item}>
                    <div className={s.row__name}>
                        {name}
                    </div> 
                    <div className={s.row__rate}> 
                        <Rate value={rating}/>
                    </div>
                </div>
                <div className={s.row__title}>
                    {title}
                </div>
            </div>
        </div>
    )
})
export default Comment