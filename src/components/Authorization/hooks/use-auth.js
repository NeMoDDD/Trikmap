import {useSelector} from "react-redux";

export const useAuth = () => {
    const {email, token, id, nickname} = useSelector(state => state.user)
    return {
        isAuth: !!email,
        email,
        token,
        id,
        nickname,
    }
}