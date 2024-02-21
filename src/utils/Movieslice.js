import { createSlice } from "@reduxjs/toolkit";

export const Movieslice= createSlice({
    name: 'Movies',
    initialState: {
        nowplayingmovies: null,
        maintrailer: null,
    },
    reducers: {
    addnowplayingmovies: (state,action)=>{
         state.nowplayingmovies = action.payload;
         console.log("dataset")
    },
    addtrailer: (state,action)=>{
        state.maintrailer = action.payload;
    }
    }
})
export const {addnowplayingmovies,addtrailer} = Movieslice.actions;
export default Movieslice.reducer;