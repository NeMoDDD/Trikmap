import React from 'react'
import s from './Comment.module.css'
import CommentsForm from './CommentForm';
import Comment from './Comment';

const Comments = React.memo(({ addCommentTC,name,email,...props }) => {

    return (
        <div className={s.comment}>   
            <div className={s.comment__description}> 
            Комментарии
            </div>
            <div className={s.comment__item_form}>
                <CommentsForm addCommentTC={addCommentTC} hotel={props.hotel}  name={name} email={email}/>
            </div>
            <div className={s.comment_item_all}>
               {props.comments?.data && props.comments.data.map((item, index) => <Comment key={index} title={item.title} email={item.email} name={item.name} />)} 
            </div>
        </div>
    )
}) 
export default Comments


