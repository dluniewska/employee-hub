import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import AppProvider from '~providers/AppProvider'
import { RouterProvider } from '~providers/RouterProvider'
import { AuthProvider } from './providers/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <AuthProvider>
        <RouterProvider />
      </AuthProvider>
    </AppProvider>
  </React.StrictMode>,
)
