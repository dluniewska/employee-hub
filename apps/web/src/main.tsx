import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import AppProvider from '@providers/AppProvider'
import { RouterProvider } from '@providers/RouterProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider />
    </AppProvider>
  </React.StrictMode>,
)
