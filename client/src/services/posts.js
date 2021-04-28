import api from "./api-config";

export const getPosts = async () => {
  const resp = await api.get("/posts");
  return resp.data;
};

export const createPost = async (data) => {
  const resp = await api.post("/posts", { post: data });
  return resp.data;
};
