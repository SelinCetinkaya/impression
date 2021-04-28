import api from "./api-config";

export const getPosts = async () => {
  const resp = await api.get("/posts");
  return resp.data;
};
