import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPosts } from "../../api/api";
import { RootState } from "../../app/store";

export const performGetPosts = createAsyncThunk<
  any,
  null,  { state: RootState }
>('posts/performGetPosts', async () => {
  try {
    const posts = await getPosts();

    return posts;
  } catch (err) {
    console.log(err);
  }
});