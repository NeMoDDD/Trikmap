import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    email: null,
    token: null,
    id: null,
    nickname: null,
    userImg: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    isFetching: false,
}

// const storage = getStorage();

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email
            state.token = action.payload.token
            state.id = action.payload.id
            state.nickname = action.payload.nickname
            state.userImg = action.payload.userImg
        },
        removeUser(state) {
            state.email = null
            state.token = null
            state.id = null
            state.nickname = null
        },
        setUserImg(state, action) {
            state.userImg = action.payload.userImg
        },
        setUserFetching(state, action) {
            state.isFetching = action.payload.isFetching
        },
        updateNickName(state, action) {
            state.nickname = action.payload.nickname
        },
        updateEmailRedux(state, action) {
            state.email = action.payload.email
        }
    }
})

export const {setUser, removeUser, setUserImg, setUserFetching, updateNickName, updateEmailRedux} = userSlice.actions


export default userSlice.reducer