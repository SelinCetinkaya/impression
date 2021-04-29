import create from "zustand";

import { getPosts, createPost, likePost } from "../services/posts";
import { currentUserStore } from "./currentUserStore";

export const postsStore = create((set, get) => ({
  posts: [],
  postsFetched: false,
  fetchPosts: async () => {
    if (!get().postsFetched) {
      const posts = await getPosts();
      set({ posts: formatPosts(posts), postsFetched: true });
    }
  },
  addPost: async (data) => {
    console.log(data);
    const post = await createPost(data);
    set((state) => ({
      posts: [...state.posts, post],
    }));
  },
  togglePostLiked: async (post) => {
    const posts = [...get().posts];
    const index = posts.indexOf(post);
    const newLike = await likePost(post.like);
    posts[index] = {
      ...post,
      like: newLike,
      likesCount: newLike.is_liked ? post.likesCount + 1 : post.likesCount - 1,
    };
    set((state) => ({
      ...state,
      posts,
    }));
  },
}));

const formatPosts = (posts) => {
  const { currentUser } = currentUserStore.getState();
  return posts.map((post) => {
    const likesCount = post.post_likes.filter((like) => like.is_liked).length;
    const like = post.post_likes.find((like) => {
      return like.user_id === currentUser.id;
    }) || { post_id: post.id, user_id: currentUser.id };
    return { ...post, like, likesCount, commentsCount: post.comments.length };
  });
};
