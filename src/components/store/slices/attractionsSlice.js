import {createSlice} from "@reduxjs/toolkit";
import data from "../../../json/kyrgyzstanPlaces.json"


const initialState = {
    attractionsList: data,
    pageSize: 5,
    portionSize: 10,
    currentPage: 1,
    isFetching: false,
    type: "all",
    totalCountChuy: data.chuy.length,
    totalCountBatken: data.batken.length,
    totalCountIssykkol: data.issykkol.length,
    totalCountJalabad: data.jalalabad.length,
    totalCountNaryn: data.naryn.length,
    totalCountOsh: data.osh.length,
    totalCountTalas: data.talas.length,
    totalCountAll: (data.chuy.length + data.batken.length + data.issykkol.length + data.jalalabad.length + data.naryn.length + data.osh.length + data.talas.length),
}

const attractionsSlice = createSlice({
    name: "attractions",
    initialState,
    reducers: {
        setCurrentPage(state, action) {
            state.currentPage = action.payload.currentPage
        },
        setType(state, action) {
            state.type = action.payload.type
        }
    }
})

export const {setCurrentPage, setType} = attractionsSlice.actions

export default attractionsSlice.reducer