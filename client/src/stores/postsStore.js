import create from "zustand";

import {
  getPosts,
  createPost,
  likePost,
  createComment,
  deleteComment,
  updatePost,
  deletePost,
} from "../services/posts";
import { useCurrentUserStore } from "./currentUserStore";

export const usePostsStore = create((set, get) => ({
  posts: [],
  postsFetched: false,
  fetchPosts: async () => {
    console.log("fetch");
    if (!get().postsFetched) {
      const posts = await getPosts();
      console.log(posts);
      set({ posts: formatPosts(posts), postsFetched: true });
    }
  },
  clearPosts: () => {
    set({ posts: [], postsFetched: false });
  },
  addPost: async (data) => {
    const post = await createPost(data);
    const newPost = formatPosts([post]);
    set((state) => ({
      posts: [...state.posts, ...newPost],
    }));
  },
  editPost: ({ post, content }) => {
    const posts = [...get().posts];
    const index = posts.indexOf(post);
    updatePost({ ...post, content });
    posts[index] = {
      ...post,
      content,
    };
    set((state) => ({
      ...state,
      posts,
    }));
  },
  removePost: (post) => {
    const posts = [...get().posts];
    const index = posts.indexOf(post);
    deletePost(post.id);
    posts.splice(index, 1);
    set((state) => ({
      ...state,
      posts,
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
  addComment: async ({ post, content }) => {
    const { currentUser } = useCurrentUserStore.getState();
    const posts = [...get().posts];
    const index = posts.indexOf(post);
    console.log(post);
    const newComment = await createComment({
      content,
      user_id: currentUser.id,
      post_id: post.id,
    });
    posts[index] = {
      ...post,
      comments: [...post.comments, newComment],
      commentsCount: post.commentsCount + 1,
    };
    set((state) => ({
      ...state,
      posts,
    }));
  },
  removeComment: async ({ post, comment }) => {
    const posts = [...get().posts];
    const index = posts.indexOf(post);
    deleteComment(comment.id);
    const comments = [...post.comments];
    const commentIndex = comments.indexOf(comment);
    comments.splice(commentIndex, 1);
    posts[index] = {
      ...post,
      comments,
      commentsCount: post.commentsCount - 1,
    };
    set((state) => ({
      ...state,
      posts,
    }));
  },
}));

const formatPosts = (posts) => {
  const { currentUser } = useCurrentUserStore.getState();
  return posts.map((post) => {
    const likesCount = post.post_likes.filter((like) => like.is_liked).length;
    const like = post.post_likes.find((like) => {
      return like.user_id === currentUser.id;
    }) || { post_id: post.id, user_id: currentUser.id };
    return { ...post, like, likesCount, commentsCount: post.comments.length };
  });
};
