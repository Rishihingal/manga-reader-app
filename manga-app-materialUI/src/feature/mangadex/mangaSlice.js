import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { useMangApi } from '../../hooks/useMangApi';
import { useMangaSearchApi } from '../../hooks/useMangaSearchApi';

export const fetchMangaList = createAsyncThunk('manga/fetchMangaList', async () => {
    const mangaList = await useMangApi();
    return mangaList;
});

export const fetchMangaByTitle = createAsyncThunk('manga/fetchMangaByTitle', async (title) => {
    const searchList = await useMangaSearchApi(title);
    return searchList;
});

const initialState = {
    manga: [],
    mangaItem: {},
    isMangaSelected: false,
    status: 'idle', // to manage loading state
    error: null
};

const mangaSlice = createSlice({
    name: 'manga',
    initialState,
    reducers: {
        setMangaItem: (state, action) => {
            state.mangaItem = action.payload;
            state.isMangaSelected = !state.isMangaSelected;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMangaList.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMangaList.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.manga = action.payload;
            })
            .addCase(fetchMangaList.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchMangaByTitle.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMangaByTitle.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.manga = action.payload;
            })
            .addCase(fetchMangaByTitle.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { setMangaItem } = mangaSlice.actions;

export default mangaSlice.reducer;