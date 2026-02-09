import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface PortfolioState {
  activeCategory: string
  activeNav: string
  theme: 'light' | 'dark'
}

// Get initial theme from localStorage or default to dark
const getInitialTheme = (): 'light' | 'dark' => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('portfolio-theme')
    if (saved === 'light' || saved === 'dark') {
      return saved
    }
  }
  return 'dark'
}

const initialState: PortfolioState = {
  activeCategory: 'dev-tools',
  activeNav: 'about',
  theme: getInitialTheme(),
}

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setActiveCategory: (state, action: PayloadAction<string>) => {
      state.activeCategory = action.payload
    },
    setActiveNav: (state, action: PayloadAction<string>) => {
      state.activeNav = action.payload
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload
      if (typeof window !== 'undefined') {
        localStorage.setItem('portfolio-theme', action.payload)
      }
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light'
      if (typeof window !== 'undefined') {
        localStorage.setItem('portfolio-theme', state.theme)
      }
    },
  },
})

export const { setActiveCategory, setActiveNav, setTheme, toggleTheme } = portfolioSlice.actions
export default portfolioSlice.reducer
