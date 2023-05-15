import {useAuth} from "../Authorization/hooks/use-auth";
import {Navigate} from "react-router-dom";
import React from "react";
import profileStaticImg from "./assets/images/666201.png"
import style from "./PersonalAccount.module.css"
import { getAuth, updateProfile } from "firebase/auth";
import {useDispatch} from "react-redux";
import {removeUser, setUserImg} from "../Authorization/store/slices/userSlise";
import {Button} from "antd";

const PersonalAccount = () => {
    const {nickname, email, isAuth, profileImg} = useAuth()
    const auth = getAuth();
    const user = auth.currentUser;
    const dispatch = useDispatch()

    const onUpdateProfileImg = (e) => {
        debugger
        updateProfile(user, {
            photoURL: ""
        }).then(() => {
            dispatch(setUserImg({
                userImg: user.photoURL
            }))
        }).catch(() => {

        })
        console.log(1)
    }
    return (
        <div>
            {
                isAuth ? <div className={style.main}>
                        <div className={style.userInfo}>
                            <div>
                                {profileImg ? <img alt="profile-img"/> : <div className={style.profileImgBlock__userInfo}><img className={style.profileImg__userInfo}
                                                                                   src={profileStaticImg}/>
                                    <input type={"file"} name="userPhoto" onChange={onUpdateProfileImg}/>
                                </div>
                                }
                            </div>
                            <div>
                                <h3>{nickname}</h3>
                                <h3>{email}</h3>
                            </div>
                            <div>
                                <Button block onClick={() => {dispatch(removeUser())}}>Выйти</Button>
                            </div>
                        </div>
                    </div> :
                    <Navigate to={"/login"}/>
            }
        </div>

    )
}
export default PersonalAccount;