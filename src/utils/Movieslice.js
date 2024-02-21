import { createSlice } from "@reduxjs/toolkit";

export const Movieslice= createSlice({
    name: 'Movies',
    initialState: {
        nowplayingmovies: null,
    },
    reducers: {
    addnowplayingmovies: (state,action)=>{
         state.nowplayingmovies =action.payload;
    },
    
    }
})
export const {addnowplayingmovies} = Movieslice.actions;
export default Movieslice.reducer;