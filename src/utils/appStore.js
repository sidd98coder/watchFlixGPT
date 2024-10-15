import userReducer from '../utils/userSlice';
import moviesReducer from '../utils/movieSlice';
import { configureStore } from '@reduxjs/toolkit';
const appStore  = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
    }
})

export default appStore;