import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        name: 'name',
        statOne: 'statOne',
        statTwo: 'statTwo'
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload },
        chooseStatOne: (state, action) => { state.statOne = action.payload },
        chooseStatTwo: (state, action) => { state.statTwo = action.payload }
    }
})

export const reducer = rootSlice.reducer;

export const { chooseName, chooseStatOne, chooseStatTwo } = rootSlice.actions;