import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./slices/userSlise"
export const store = configureStore({
        reducer: {
            user: userReducer,
        }
    }
)