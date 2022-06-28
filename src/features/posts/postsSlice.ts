import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { AppThunk } from 'app/store';

type Post = {
  userId: number,
  id: number,
  title: string,
  body: string,
}

type State = {
  isLoading: boolean,
  posts: Array<Post>,
}

const fetchPostsAsync = createAsyncThunk<AppThunk>(
  'posts/fetchPosts',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
  }
)

const initialState: State = {
  isLoading: false,
  posts: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPostsAsync.pending, (state) => {
      state.isLoading = true;
    });
    // I am aware the "any" is not desirable, but I didn't manage to understand how to incorporate AppThunk at best
    builder.addCase(fetchPostsAsync.fulfilled, (state, action: any) => {
      state.isLoading = false;
      state.posts = action.payload;
    });
    builder.addCase(fetchPostsAsync.rejected, (state) => {
      state.isLoading = false;
      state.posts = [];
    });
  }
});

export { fetchPostsAsync };
export default postsSlice.reducer;
