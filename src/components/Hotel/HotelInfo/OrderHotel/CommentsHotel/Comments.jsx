import React from 'react'
import s from './Comment.module.css'
import CommentsForm from './CommentForm';
import Comment from './Comment';
import { NavLink } from 'react-router-dom';

const Comments = React.memo(({name,email,...props }) => {
    return (
        <div className={s.comment}>   
            <div className={s.comment__description}> 
            Комментарии
            </div>
        {email ? <div className={s.comment__item_form}>
            <CommentsForm {...props} hotel={props.hotel}   name={name} email={email}/>
        </div> : <NavLink className={s.comment__link} to={'/login'}>Войдите в аккаунт, чтобы оставить отзыв</NavLink>}
            <div className={s.comment_item_all}>
               {props.comments?.data && props.comments.data.reverse().map((item, index) => <Comment key={index} title={item.title} email={item.email} name={item.name} rating={item.rating}/>)} 
            </div>
        </div>
    )
}) 
export default Comments


