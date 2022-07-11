import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPosts } from "api/api";

export const performGetPosts = createAsyncThunk('posts/performGetPosts', async () => {
  try {
    const posts = await getPosts();

    return posts;
  } catch (err) {
    console.log(err);
  }
});