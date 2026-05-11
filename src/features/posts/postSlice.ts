import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPostsAPI } from "../../services/api";

const initialState = {
    postList: [],
    loading: false,
    error: null as string | null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const res = await fetchPostsAPI();
    return res;
});

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPosts.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.postList = payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});
export default postSlice.reducer;
