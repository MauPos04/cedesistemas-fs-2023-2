import{createBrowserRouter, RouterProvider} from 'react-router-dom'
import { GlobalStyles } from "./globalStyles"
import { Home } from "./pages/Home"
import { EventDetail } from "./pages/EventDetail"
import { Profile } from './pages/Profile'
import { Confirmation } from './pages/Confirmation'
import { Login } from './pages/Login'
import { Signup } from './pages/Registration'
import { UserContextStore } from './contexts/UserContext'

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
    path:'/signup',
    element: <Signup/>
  }
])

export const App = () => {



  return (
    <>
      <GlobalStyles />

      <UserContextStore>
        <RouterProvider router={router}/>
      </UserContextStore>
    </>
  )
}
