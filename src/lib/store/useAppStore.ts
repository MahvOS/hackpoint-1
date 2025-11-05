import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AppState {
  theme: 'dark' | 'light' | 'system'
  user: {
    id: string | null
    name: string | null
    email: string | null
    isAuthenticated: boolean
  }
  isLoading: boolean
  setTheme: (theme: 'dark' | 'light' | 'system') => void
  setUser: (user: Partial<AppState['user']>) => void
  setLoading: (loading: boolean) => void
  logout: () => void
}

export const useAppStore = create<AppState>()(
  persist(
    set => ({
      theme: 'dark',
      user: {
        id: null,
        name: null,
        email: null,
        isAuthenticated: false,
      },
      isLoading: false,
      setTheme: theme => set({ theme }),
      setUser: userData =>
        set(state => ({
          user: { ...state.user, ...userData },
        })),
      setLoading: loading => set({ isLoading: loading }),
      logout: () =>
        set({
          user: {
            id: null,
            name: null,
            email: null,
            isAuthenticated: false,
          },
        }),
    }),
    {
      name: 'hackpoint-storage',
      partialize: state => ({ theme: state.theme, user: state.user }),
    }
  )
)
