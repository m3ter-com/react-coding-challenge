import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts' as const;

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostSliceState {
  posts: Post[];
  isLoading: boolean;
  error?: string;
}

const initialState: PostSliceState = {
  isLoading: false,
  posts: [],
  error: undefined,
};

export const getPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(POSTS_URL, {
        method: 'get',
      });

      if (response.ok) {
        const data = (await response.json()) as Post[];
        return data;
      } else {
        console.log(`error: ${response.status}: ${response.statusText}`);
        return rejectWithValue(response.statusText);
      }
    } catch (error) {
      console.log(error + `${typeof error}`);
      return rejectWithValue(error);
    }
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPosts.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.posts = payload;
    });
    builder.addCase(getPosts.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
  },
});

export const selectAllPosts = ({ posts }: RootState): PostSliceState => posts;

export const selectPostById = (
  { posts }: RootState,
  postId: string
): Post | undefined => {
  return posts.posts.find(({ id }) => id === Number(postId));
};

export default postsSlice.reducer;
