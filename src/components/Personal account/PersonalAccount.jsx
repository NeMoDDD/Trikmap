import { Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import style from "./PersonalAccount.module.css"
import { useDispatch } from "react-redux";
import { setUserImg } from "../store/slices/userSlise";

import { upload, useAuthh } from "../Authorization/firebase/firebase";
import { useAuth } from "../Authorization/hooks/use-auth";

const PersonalAccount = () => {

    const { nickname, email, isAuth, userImg } = useAuth()
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
    if (!isAuth) {
        return <Navigate to={"/login"} />
    }
    return (

            <div className={style.main}> 
            <div className={style.container}> 
                <div className={style.userInfo}>
                    <div>
                        <div className={style.profileImgBlock__userInfo}>
                            <img
                                src={userImg}
                                className={style.profileImg__userInfo}
                                alt={"avatar"}
                                />
                            <input type={"file"} name="userPhoto" onChange={onUpdateProfileImg} />
                            <button onClick={onClickProfileImg} disabled={loading || !photo}>Загрузить</button>
                        </div>
                    </div>
                    <div className={style.userInfo__summary}>
                        <h3>Имя:  {nickname}</h3>
                        <h3>Почта:  {email}</h3>
                    </div>
                </div>
            </div>
            </div>

    )
}
export default PersonalAccount;

















   // Пропсы для upload
    // const props = {
    //     action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    //     onChange({ file, fileList }) {
    //         if (file.status === 'uploading') {
    //             setPhoto(file[0])
    //             debugger
    //         } else if (file.status === "done") {
    //             console.log(1)
    //             upload(photo, currentUser, setLoading);
    //             dispatch(setUserImg({
    //                 userImg: photoURL
    //             }))
    //         }
    //     },
    //     defaultFileList: [
    //         // {
    //         //     uid: '1',
    //         //     name: 'xxx.png',
    //         //     status: 'uploading',
    //         //     url: 'http://www.baidu.com/xxx.png',
    //         //     percent: 33,
    //         // },
    //         // {
    //         //     uid: '2',
    //         //     name: 'yyy.png',
    //         //     status: 'done',
    //         //     url: 'http://www.baidu.com/yyy.png',
    //         // },
    //         // {
    //         //     uid: '3',
    //         //     name: 'zzz.png',
    //         //     status: 'error',
    //         //     response: 'Server Error 500',
    //         //     // custom error message to show
    //         //     url: 'http://www.baidu.com/zzz.png',
    //         // },
    //     ],
    // };