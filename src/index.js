/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { useQuery, useMutation, QueryClientProvider } from '@tanstack/react-query'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App'
import { Signup } from './components/Pages/Signup/Signup'
import { SigninMemo as Signin } from './components/Pages/Signin/Signin'
import { MainMemo as Main } from './components/Main/Main'
import { ProductsMemo as Products } from './components/Pages/Products/Products'
import { AppTokenContextProvider } from './components/contexts/AppTokenContextProvider'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'signin',
        element: <Signin />,
      },
      {
        path: 'products',
        element: <Products />,
      },
    ],
  },
])

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppTokenContextProvider>
        <RouterProvider router={router} />
      </AppTokenContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
