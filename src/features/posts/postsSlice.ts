import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface IPostData {
  userId: number,
  id: number,
  title: string,
  body: string,
}

interface IPostsSlice {
  isLoading: boolean,
  posts: Array<IPostData>,
}

const initialState: IPostsSlice = {
  isLoading: false,
  posts: new Array<IPostData>(),
};

const getFakeJsonData = async (): Promise<Array<IPostData>> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
  return response;
}

const fetchPostData = createAsyncThunk(
  'posts/load',
  async (_arg, _thunkAPI) => {
    const response = await getFakeJsonData();
    return response
  }
)

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // TODO <-- putting this todo here was very sneaky
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPostData.fulfilled, (state, action) => {
      state.posts = action.payload;
    })
  }
});

// Default export is the reducer.
export default postsSlice.reducer;
