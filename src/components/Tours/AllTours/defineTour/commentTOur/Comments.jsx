import React from 'react'
import s from '../../../../Hotel/HotelInfo/OrderHotel/CommentsHotel/Comment.module.css'
import CommentsForm from './CommentForm';
import Comment from './Comment';
import { NavLink } from 'react-router-dom';
import style from '../Define.module.css'
const Comments = React.memo(({name,email,...props }) => {
    return (
        <div className={s.comment}>   
            <div className={style.comment__description}> 
            Комментарии
            </div>
        {email ? <div className={s.comment__item_form}>
            <CommentsForm {...props} tour={props.tour}  name={name} email={email}/>
        </div> : <NavLink className={s.comment__link} to={'/login'}>Войдите в аккаунт, чтобы оставить отзыв</NavLink>}
            <div className={s.comment_item_all}>
               {props.comments?.data && props.comments.data.map((item, index) => <Comment key={index} title={item.title} email={item.email} name={item.name} />)} 
            </div>
        </div>
    )
}) 
export default Comments
