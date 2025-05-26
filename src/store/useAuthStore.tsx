import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";

// Cria a store 'auth' usando o zustand
export const useAuthStore = create<any>()(
  devtools(
    persist(
      (set: any) => ({
        auth: {},

        setAuth: (auth: any) => set(() => ({ auth })),
      }),
      { name: "@auth" }
    )
  )
);
