import { Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import style from "./PersonalAccount.module.css"
import { connect, useDispatch } from "react-redux";
import { setUserImg } from "../store/slices/userSlise";
import { getBookedHotelTC, getBookedTourTC } from "../../reduxStore/appReducer";
import { upload, useAuthh } from "../Authorization/firebase/firebase";
import { useAuth } from "../Authorization/hooks/use-auth";
import ava from '../../assets/img/userProfile.svg'
import { Modal } from "antd";
import { Spinner } from "@chakra-ui/react";
import { getBookedHotelSelector, getBookedTourSelector, isFetchingAppSelector } from "../../Selectors/AppSelecort";
const PersonalAccount = React.memo(({ getBookedTourTC, bookedHotel, getBookedHotelTC, bookedTour, isFetching }) => {
    const [hotel, setHotel] = useState(false)
    const [tour, setTour] = useState(false)
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
    useEffect(() => {
        getBookedTourTC(email)
        getBookedHotelTC(email)
    }, [getBookedTourTC, getBookedHotelTC, email])
    if (!isAuth) {
        return <Navigate to={"/login"} />
    }
    const handleFetchTour = () => {
        setTour(true)
    }
    const handleFetchHotel = () => {
        setHotel(true)
    }

    return (

        <div className={style.main}>
            <div className={style.container}>
                <div className={style.wrapper}>
                    <div className={style.profile__item}>
                        <div className={style.profile__img}><img src={userImg || ava} alt="ProfilePhoto" /></div>
                        <div className={style.profile__about}>
                            <div className={style.profile__name}>{nickname}</div>
                            <div className={style.profile__add}>
                                <label className={style.profile__file}> <span className={style.profile__plus}>+</span> <span className={style.profile__title}>Добавить фото</span> <input type={"file"} name="userPhoto" onChange={onUpdateProfileImg} />

                                </label>
                                <div className={style.profile__load}><button onClick={onClickProfileImg} disabled={loading || !photo} >Сохранить</button></div>
                            </div>
                        </div>
                    </div>
                    <div className={style.data__item}>
                        <div className={style.data__text}>
                            <div className={style.subtitle}>Никнейм</div>
                            <div className={style.title}>{nickname}</div>
                        </div>
                        <div className={style.data__text}>
                            <div className={style.subtitle}>Почта</div>
                            <div className={style.title}>{email}</div>
                        </div>
                    </div>

                    <div className={style.ordering}>
                        <div className={style.ordering__hotel}>
                            <button onClick={handleFetchHotel} className={style.booked_btn}>
                                Забронированные отели
                            </button>

                            <Modal
                                footer={null}
                                confirmLoading
                                onCancel={() => setHotel(false)}
                                className={style.modal}
                                open={hotel}>
                                <div className={style.modal__wrapper}>

                                    {isFetching ? <div className={style.modal__loader}>
                                        <Spinner className={style.modal__spin} color='blue' colorScheme='cyan' />
                                    </div> : bookedHotel?.data ? bookedHotel.data.map((item, index) => <div key={index} className={style.modal__inner}>
                                         
                                        <div className={style.modal__descrip}>{item.name}</div>
                                        <div className={style.modal__item}>
                                            <div className={style.modal__title}>Название Отеля:</div>
                                            <div className={style.modal__subtitle}>{item.name}</div>
                                        </div>
                                        <div className={style.modal__item}>
                                            <div className={style.modal__title}>Тип Отеля:</div>
                                            <div className={style.modal__subtitle}>{item.type}</div>
                                        </div>
                                        <div className={style.modal__item}>
                                            <div className={style.modal__title}>Ваш номер:</div>
                                            <div className={style.modal__subtitle}>{item.num}</div>
                                        </div>
                                        <div className={style.modal__item}>
                                            <div className={style.modal__title}>Количество людей:</div>
                                            <div className={style.modal__subtitle}>{item.amount}</div>
                                        </div>
                                        <div className={style.modal__item}>
                                            <div className={style.modal__title}>Дата въезда:</div>
                                            <div className={style.modal__subtitle}>{item.inner}</div>
                                        </div>
                                        <div className={style.modal__item}>
                                            <div className={style.modal__title}>Дата выезда:</div>
                                            <div className={style.modal__subtitle}>{item.out}</div>
                                        </div>
                                    </div>) : <div className={style.modal__empty}>
                                        Вы еще ничего не бронировали
                                    </div>}

                                </div>
                            </Modal>
                        </div>
                        <div className={style.ordering__tour}>
                            <button onClick={handleFetchTour} className={style.booked_btn}>
                                Забронированные туры
                            </button>
                            <Modal
                                footer={null}
                                confirmLoading={isFetching}
                                onCancel={() => setTour(false)}
                                open={tour}>
                                <div className={style.modal__wrapper}>

                                    {isFetching ? <div className={style.modal__loader}>
                                        <Spinner className={style.modal__spin} color='blue' colorScheme='cyan' />
                                    </div> : bookedHotel?.data ?  bookedTour.data.map((item, index) => <div key={index} className={style.modal__inner}>
                                        <div className={style.modal__descrip}>{item.name}</div>
                                        <div className={style.modal__item}>
                                            <div className={style.modal__title}>Название Тура:</div>
                                            <div className={style.modal__subtitle}>{item.name}</div>
                                        </div>
                                        <div className={style.modal__item}>
                                            <div className={style.modal__title}>Ваш номер:</div>
                                            <div className={style.modal__subtitle}>{item.num}</div>
                                        </div>
                                        <div className={style.modal__item}>
                                            <div className={style.modal__title}>Количество людей:</div>
                                            <div className={style.modal__subtitle}>{item.amount}</div>
                                        </div>
                                    </div>) : <div className={style.modal__empty}>
                                        Вы еще ничего не бронировали
                                    </div>}

                                </div>
                            </Modal>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
})
const mapStateToProps = (state) => {
    return {
        bookedHotel: getBookedHotelSelector(state),
        bookedTour: getBookedTourSelector(state),
        isFetching: isFetchingAppSelector(state)
    }
}
export default connect(mapStateToProps, { getBookedHotelTC, getBookedTourTC })(PersonalAccount);









// <div className={style.userInfo}>
//                         <div>
//                             <div className={style.profileImgBlock__userInfo}>
//                                 <img
//                                     src={userImg}
//                                     className={style.profileImg__userInfo}
//                                     alt={"avatar"}
//                                 />
//                                 <input type={"file"} name="userPhoto" onChange={onUpdateProfileImg} />
//                                 <button onClick={onClickProfileImg} disabled={loading || !photo}>Загрузить</button>
//                             </div>
//                         </div>
//                         <div className={style.userInfo__summary}>
//                             <h3>Имя:  {nickname}</h3>
//                             <h3>Почта:  {email}</h3>
//                         </div>
//                     </div>







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