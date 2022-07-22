import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// TODO: Add a type for `Post` based on the API data (https://jsonplaceholder.typicode.com/posts)
// TODO: Add a type for the state structure and also use it in reducers.
export interface PostsType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface StateType {
  isLoading: boolean;
  posts: PostsType[];
}

const initialState = {
  isLoading: false,
  posts: [],
} as StateType;

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (thunkAPI) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts').then(
      (data) => data.json()
    );
    return response
  });

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getPosts.pending, (state: { isLoading: boolean; }) => {
        state.isLoading = true
      })
      .addCase(getPosts.rejected, (state: { isLoading: boolean; }) => {
        state.isLoading = false
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false
        state.posts = action.payload
      })
  },
});

// Default export is the reducer.
export default postsSlice.reducer;
