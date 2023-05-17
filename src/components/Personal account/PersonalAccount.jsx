import {Navigate, NavLink} from "react-router-dom";
import React, {useEffect, useState} from "react";
import style from "./PersonalAccount.module.css"
import {useDispatch} from "react-redux";
import {removeUser, setUserImg} from "../store/slices/userSlise";
import {Button} from "antd";
import {upload, useAuthh} from "../Authorization/firebase/firebase";
import {useAuth} from "../Authorization/hooks/use-auth";

const PersonalAccount = () => {
    const {nickname, email, isAuth, userImg} = useAuth()
    const dispatch = useDispatch()
    const currentUser = useAuthh()
    const [photo, setPhoto] = useState(null);
    const [photoURL, setPhotoURL] = useState();
    const [loading, setLoading] = useState(false);
    const onUpdateProfileImg = (e) => {
        if (e.target.files[0]) {
            setPhoto(e.target.files[0])
        }
    }

    const onClickProfileImg = () => {
        upload(photo, currentUser, setLoading);
        dispatch(setUserImg({
            userImg: photoURL
        }))
    }
    useEffect(() => {
        if (currentUser?.photoURL) {
            setPhotoURL(currentUser.photoURL);
        }
    }, [currentUser])
    return (
        <div>
            {
                isAuth ? <div className={style.main}>
                        <div className={style.userInfo}>
                            <div>
                                <div className={style.profileImgBlock__userInfo}>
                                    <img
                                        src={userImg}
                                        className={style.profileImg__userInfo}
                                        alt={"avatar"}
                                    />
                                    <input type={"file"} name="userPhoto" onChange={onUpdateProfileImg}/>
                                    <button onClick={onClickProfileImg} disabled={loading || !photo}>Загрузить</button>
                                </div>
                            </div>
                            <div>
                                <h3>{nickname}</h3>
                                <h3>{email}</h3>
                            </div>
                            <div>
                                <Button block onClick={() => {
                                    dispatch(removeUser())
                                }}>Выйти</Button>
                            </div>
                        </div>
                        <NavLink to={"/"}>Home</NavLink>
                    </div> :
                    <Navigate to={"/login"}/>
            }
        </div>

    )
}
export default PersonalAccount;