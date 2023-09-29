import{createBrowserRouter, RouterProvider} from 'react-router-dom'
import { GlobalStyles } from "./globalStyles"
import { Home } from "./pages/Home"
import { EventDetail } from "./pages/EventDetail"
import { Profile } from './pages/Profile'
import { Confirmation } from './pages/Confirmation'
import { Login } from './pages/Login'
import {Registration} from './pages/Registration'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Home/>
  },
  {path: '/detail/:id',  //detail//
    element:<EventDetail/>
    },

 {
  path : '/profile/',
  element: <Profile/>
  },

  {
    path:'/confirmation',
    element: <Confirmation/>
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path:'/registration',
    element: <Registration/>
  }
])

export const App = () => {



  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router}/>
    </>
  )
}
