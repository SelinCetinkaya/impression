import create from "zustand";

import { getPosts, createPost } from "../services/posts";

export const postsStore = create((set, get) => ({
  posts: [],
  postsFetched: false,
  fetchPosts: async () => {
    if (!get().postsFetched) {
      set({ posts: await getPosts(), postsFetched: true });
    }
  },
  addPost: async (data) => {
    console.log(data);
    const post = await createPost(data);
    set((state) => ({
      posts: [...state.posts, post],
    }));
  },
}));
