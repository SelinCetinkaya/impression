import api from "./api-config";

export const getPosts = async () => {
  const resp = await api.get("/posts");
  return resp.data;
};

export const createPost = async (data) => {
  const resp = await api.post("/posts", { post: data });
  return resp.data;
};

export const likePost = async (like) => {
  if (like.id) {
    //update
    const newLike = { ...like, is_liked: !like.is_liked };
    const resp = await api.put(`/post_likes/${like.id}`, {
      post_like: newLike,
    });
    return resp.data;
  } else {
    // create
    const resp = await api.post("/post_likes", { post_like: like });
    return resp.data;
  }
};
