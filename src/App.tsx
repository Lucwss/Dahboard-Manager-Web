import './global.css'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { Toaster } from 'sonner'
import { ThemeProvider } from './components/theme/theme-provider'

export function App() {

  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme='dark' storageKey='dashboard-theme'>
        <Helmet titleTemplate='%s | dashboard.manager' />
        <Toaster richColors />
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}