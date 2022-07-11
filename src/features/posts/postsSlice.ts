import { createSlice } from '@reduxjs/toolkit';
import { performGetPosts } from './postsMethods';

interface IError {
  error: unknown;
}

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IPostSlice {
  isLoading: boolean;
  posts: IPost[]
  error: unknown;
}

const initialState: IPostSlice = {
  isLoading: false,
  posts: [],
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(performGetPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(performGetPosts.fulfilled, (state, { payload }) => {
        state.posts = payload.posts;
        state.isLoading = false;
      })
      .addCase(performGetPosts.rejected, (state, { payload }) => {
        state.error = payload as IError;
        state.isLoading = false;
      })
  },
});

// Default export is the reducer.
export default postsSlice.reducer;
