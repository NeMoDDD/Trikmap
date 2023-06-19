import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isDisabled: true
}

const personalAccountSlice = createSlice({
    name: "personalAccount",
    initialState,
    reducers: {
        setDisabled(state, action) {
            state.isDisabled = action.payload.isDisabled
        }
    }
})

export const {setDisabled} = personalAccountSlice.actions


export default personalAccountSlice.reducer