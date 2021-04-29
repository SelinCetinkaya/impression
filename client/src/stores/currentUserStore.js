import create from "zustand";

import { loginUser, verifyUser, removeToken } from "../services/auth";

export const useCurrentUserStore = create((set, get) => ({
  currentUser: {},
  login: async (userData) => {
    const user = await loginUser(userData);
    if (user.id) {
      set({ currentUser: user });
    }
    return user;
  },
  verify: async () => {
    const user = await verifyUser();
    if (user.id) {
      set({ currentUser: user });
    }
    return user;
  },
  logout: () => {
    removeToken();
    set({ currentUser: {} });
  },
}));
