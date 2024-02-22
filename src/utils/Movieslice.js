import { createSlice } from "@reduxjs/toolkit";

export const Movieslice= createSlice({
    name: 'Movies',
    initialState: {
        nowplayingmovies: null,
        maintrailer: null,
        popularmovies: null,
        toprated: null,
        upcoming: null,
    },
    reducers: {
    addnowplayingmovies: (state,action)=>{
         state.nowplayingmovies = action.payload;
         console.log("dataset")
    },
    addtrailer: (state,action)=>{
        state.maintrailer = action.payload;
    },
    addpopularmovies: (state,action)=>{
        state.popularmovies = action.payload;
    },
    addtoprated:(state,action)=>{
        state.toprated = action.payload;
    },
    addupcoming:(state,action)=>{
        state.upcoming = action.payload;
    },
    }
})
export const {addnowplayingmovies,addtrailer,addpopularmovies,addtoprated,addupcoming} = Movieslice.actions;
export default Movieslice.reducer;