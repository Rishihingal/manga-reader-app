import {configureStore} from '@reduxjs/toolkit';
import mangaReducer from '../feature/mangadex/mangaSlice';


export const store = configureStore({
    reducer: {
        manga: mangaReducer
    }
});