import { createSlice } from "@reduxjs/toolkit";

export const Movieslice= createSlice({
    name: 'Movies',
    initialState: {
        nowplayingmovies: null,
        maintrailer: null,
        popularmovies: null,
        toprated: null,
        upcoming: null,
        recommendedmovies: null,
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
    addrecommendedmovies:(state,action)=>{
        state.recommendedmovies = action.payload;
    }
    }
})
export const {addnowplayingmovies,addtrailer,addpopularmovies,addtoprated,addupcoming,addrecommendedmovies} = Movieslice.actions;
export default Movieslice.reducer;