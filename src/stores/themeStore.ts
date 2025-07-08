import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ThemeStoreType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

// export const useThemeStore = create<ThemeStoreType>((set) => ({
//   theme: 'light',
//   toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' }))
// }));

export const useThemeStore = create(
  persist<ThemeStoreType>(
    (set) => ({
      theme: 'light',
      toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' }))
    }),
    { name: 'theme-storage' }
  )
);
