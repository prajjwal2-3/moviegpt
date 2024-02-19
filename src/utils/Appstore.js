import {configureStore} from '@reduxjs/toolkit';
import  useReducer  from './Userslice';
export const store =configureStore({
    reducer:{
        user: useReducer,
    },
})