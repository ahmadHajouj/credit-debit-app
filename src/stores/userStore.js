import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      login: (userObj) => set(() => ({ user: userObj })),
      logout: () => set(() => ({ user: null })),
    }),
    {
      name: "user",
    }
  )
);

export default useUserStore;
