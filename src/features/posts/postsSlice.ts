import { createSlice } from '@reduxjs/toolkit';

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IPostSlice {
  isLoading: boolean;
  posts: IPost[]
}

const initialState: IPostSlice = {
  isLoading: false,
  posts: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // TODO
  },
});

// Default export is the reducer.
export default postsSlice.reducer;
