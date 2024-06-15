import {createSlice} from '@reduxjs/toolkit';
import { useMangApi } from '../../hooks/useMangApi';
import { useMangaSearchApi } from '../../hooks/useMangaSearchApi';

const MangaList = useMangApi();
const initialState = {
    manga: MangaList
}

export const mangaSlice = createSlice({
    name: 'manga',
    initialState,
    reducers:{
        getMangabyTitle: (state, action) => {
            const searchList = useMangaSearchApi(action.payload);
            state.manga = searchList;
        },
        getMangaList: (state) => {
            state.manga = MangaList;
        }
    }
})

export const {getMangabyTitle, getMangaList} = mangaSlice.actions
export default mangaSlice.reducer