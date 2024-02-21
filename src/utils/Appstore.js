import {configureStore} from '@reduxjs/toolkit';
import  useReducer1  from './Userslice';
import useReducer2 from './Movieslice';
export const store =configureStore({
    reducer:{
        user: useReducer1,
        Movies: useReducer2
    },
})