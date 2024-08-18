import './global.css'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { Toaster } from 'sonner'

export function App() {

  return (
    <HelmetProvider>
      <Helmet titleTemplate='%s | dashboard.manager' />
      <Toaster richColors />
      <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
  )
}