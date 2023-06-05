import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./slices/userSlise"
import attractionReducer from "./slices/attractionsSlice"
export const store = configureStore({
        reducer: {
            user: userReducer,
            attractions: attractionReducer
        }
    }
)