import {Navigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import style from "./PersonalAccount.module.css"
import {connect, useDispatch, useSelector} from "react-redux";
import {setUserFetching, setUserImg, updateEmailRedux, updateNickName} from "../store/slices/userSlise";
import {getBookedHotelTC, getBookedTourTC} from "../../reduxStore/appReducer";
import {upload, useAuthh} from "../Authorization/firebase/firebase";
import {useAuth} from "../Authorization/hooks/use-auth";
import ava from '../../assets/img/userProfile.svg'
import {Modal, Button, Input} from "antd";
import {Spinner} from "@chakra-ui/react";
import {getBookedHotelSelector, getBookedTourSelector, isFetchingAppSelector} from "../../Selectors/AppSelecort";
import {setDisabled} from "../store/slices/personalAccountSlice";
import {Controller, set, useForm} from "react-hook-form";
import {getAuth, updateProfile, updateEmail} from "firebase/auth";


const isValidEmail = email =>
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
const PersonalAccount = React.memo(({getBookedTourTC, bookedHotel, getBookedHotelTC, bookedTour}) => {
    const {control, handleSubmit, formState: {errors}} = useForm({
        mode: "onBlur",
    });
    const [hotel, setHotel] = useState(false)
    const [tour, setTour] = useState(false)
    const {nickname, email, isAuth, userImg} = useAuth()
    const dispatch = useDispatch()
    const currentUser = useAuthh()
    const [photo, setPhoto] = useState(null);
    const [photoURL, setPhotoURL] = useState();
    const [loading, setLoading] = useState(false);
    const [isLoadEmail, setIsLoadEmail] = useState(false);
    const [isLoadNickname, setIsLoadNickname] = useState(false);
    const {isDisabled} = useSelector(state => state.personalAccount)
    const {isFetching} = useSelector(state => state.user)
    const [nicknameState, setNicknameState] = useState(nickname)
    const [emailState, setEmailState] = useState(email)
    const [isLoading, setIsLoading] = useState(true);

    const handleUpdate = (email) => {
        dispatch(setUserFetching({isFetching: true}))
        setIsLoadNickname(false)
        setIsLoadEmail(false)
        dispatch(updateNickName({nickname: nicknameState}))
        dispatch(updateEmailRedux({email: emailState}))
        const auth = getAuth()
        const user = auth.currentUser;
        updateProfile(user, {
            displayName: nicknameState,
        })
            .then(() => {
                const nickname = user.displayName
                const storedUserDataJSON = localStorage.getItem('user');
                const storedUserData = JSON.parse(storedUserDataJSON);
                storedUserData.nickname = nickname;
                const updatedUserDataJSON = JSON.stringify(storedUserData);
                localStorage.setItem('user', updatedUserDataJSON);

                setIsLoadNickname(true)
            })
            .catch((error) => {
                console.log(error)
                // if (error.code === "auth/wrong-password") {
                //     setIsAuthSubmit(false)
                //     setErrorMessage("Неверный email или пароль")
                // } else if (error.code === "auth/too-many-requests") {
                //     setIsAuthSubmit(false)
                //     setErrorMessage("Слишком много запросов. Попробуйте позже!")
                // } else if (error.code === "auth/user-not-found") {
                //     setIsAuthSubmit(false)
                //     setErrorMessage("Аккаунт с таким Email не найден!")
                // }
            })
        updateEmail(user, emailState)
            .then(() => {
                const email = user.email;
                const storedUserDataJSON = localStorage.getItem('user');
                const storedUserData = JSON.parse(storedUserDataJSON);
                storedUserData.email = email;
                const updatedUserDataJSON = JSON.stringify(storedUserData);
                localStorage.setItem('user', updatedUserDataJSON);

                setIsLoadEmail(true)
            })
            .catch((error) => {
                console.error('Ошибка при обновлении адреса электронной почты пользователя', error);
            });
        dispatch(setUserFetching({isFetching: false}))
    }

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


    useEffect(() => {
        const image = new window.Image();
        image.src = userImg || ava;
        image.onload = () => {
            setIsLoading(false);
        };
    }, [userImg || ava]);
    useEffect(() => {
        if (isLoadEmail && isLoadNickname) {
            dispatch(setDisabled({isDisabled: true}))
        }
    }, [isLoadEmail, isLoadNickname])
    // useEffect(() => {
    //     dispatch(updateNickName({nickname: nicknameState}))
    // }, [nicknameState])
    // useEffect(() => {
    //     dispatch(updateEmailRedux({email: emailState}))
    // }, [emailState])

    if (!isAuth) {
        return <Navigate to={"/login"}/>
    }
    const handleFetchTour = () => {
        setTour(true)
    }
    const handleFetchHotel = () => {
        setHotel(true)
    }
    const handleEmailValidation = email => {
        const isValid = isValidEmail(email);

        const validityChanged =
            (errors.email && isValid) || (!errors.email && !isValid);
        if (validityChanged) {
        }
        return isValid
    };

    const handleCancelSave = () => {
        dispatch(setDisabled({isDisabled: true}))
        setNicknameState(nickname)
        setEmailState(email)
    }

    return (

        <div className={style.main}>
            <div className={style.container}>
                <div className={style.wrapper}>
                    <div className={style.profile__item}>
                        <div className={style.profile__img}>{isLoading ? <img src={ava} alt="ProfilePhoto"/> :
                            <img src={userImg || ava} alt="ProfilePhoto"/>}</div>
                        <div className={style.profile__about}>
                            <div className={style.profile__name}>{nickname}</div>
                            <div className={style.profile__add}>
                                <label className={style.profile__file}> <span className={style.profile__plus}>+</span>
                                    <span className={style.profile__title}>Добавить фото</span> <input type={"file"}
                                                                                                       name="userPhoto"
                                                                                                       onChange={onUpdateProfileImg}/>

                                </label>
                                <div className={style.profile__load}>
                                    <button onClick={onClickProfileImg} disabled={loading || !photo}>Сохранить</button>
                                </div>
                            </div>
                        </div>
                        <div><Button type={"link"} onClick={() => {
                            dispatch(setDisabled({isDisabled: false}))
                        }}>Редактировать</Button></div>
                    </div>
                    <div className={style.data__item}>
                        <div className={errors.nickname ? style.data__text__error : style.data__text}>
                            <div className={style.subtitle}>Никнейм</div>
                            <Controller
                                name="nickname"
                                control={control}
                                rules={{
                                    required: "Это поле обязательное!", maxLength: {
                                        value: 15,
                                        message: "Максимум 15 символов!"
                                    },
                                    onChange: (e) => setNicknameState(e.target.value)
                                }}
                                render={({field}) => <Input {...field}
                                                            value={nicknameState}
                                                            disabled={isDisabled}
                                                            className={style.title}
                                />}/>
                        </div>
                        {errors.nickname && <span className={style.error__message}>{errors.nickname.message}</span>}
                        <div className={errors.email ? style.data__text__error : style.data__text}>
                            <div className={style.subtitle}>Почта</div>
                            <Controller
                                name="email"
                                control={control}
                                rules={{
                                    required: "Это поле обязательное!", validate: handleEmailValidation,
                                    onChange: (e) => setEmailState(e.target.value)
                                }}
                                render={({field}) => <Input {...field}
                                                            value={emailState}
                                                            className={style.title}
                                                            disabled={isDisabled}
                                />}/>
                        </div>
                        {errors.email &&
                            <span className={style.error__message}>{errors.email.message || "Неверный email"}</span>}
                        {!isDisabled ? <div>
                            <Controller
                            name="btn-submit"
                            control={control}
                            render={({field}) => <Button {...field}
                                                         className={style.save__btn}
                                                         type="primary"
                                                         onClick={handleSubmit(handleUpdate)}
                                                         disabled={isFetching}
                            >Сохранить</Button>}
                        />
                            <Button className={style.cancel__btn} onClick={handleCancelSave}>Отменить</Button>
                        </div> : null}
                        {isLoadNickname && isLoadEmail ? <div><p>Успешно обновлено!</p></div> : null}
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
                                        <Spinner className={style.modal__spin} color='blue' colorScheme='cyan'/>
                                    </div> : bookedHotel?.data ? bookedHotel.data.map((item, index) => <div key={index}
                                                                                                            className={style.modal__inner}>

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
                                        <Spinner className={style.modal__spin} color='blue' colorScheme='cyan'/>
                                    </div> : bookedTour?.data ? bookedTour.data.map((item, index) => <div key={index}
                                                                                                           className={style.modal__inner}>
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
export default connect(mapStateToProps, {getBookedHotelTC, getBookedTourTC})(PersonalAccount);


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