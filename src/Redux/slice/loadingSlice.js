import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    progress: 0,
};

export const loadingSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        setLoadingProgress: (state, action) => {
            state.progress = action.payload;
        }
    }
});

export const {setLoadingProgress} = loadingSlice.actions;
export default loadingSlice.reducer;