import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ButtonExample } from './pages/button-example.tsx'
import { Home } from './pages/home.tsx'

const router = createBrowserRouter(
  [
    {
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/button',
          element: <ButtonExample />
        }
      ]
    }
  ],
  {
    basename: '/frontend-ui'
  }
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
