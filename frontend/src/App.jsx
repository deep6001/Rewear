import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import MainLayout from './Pages/Layout/MainLayout'
import UserDashboard from './Pages/UserFolder/UserDashboard'
import admin from './Pages/AdminFolder/admin'
import Login from './AuthPages/Login'
import Register from './AuthPages/Register'
import ProtectedPage from './Pages/Layout/ProtectedPage'
import ProductList from './Shared/ProductList'
import UserProfilePage from './Pages/UserFolder/UserProfilePage'


function App() {
  
  const router = createBrowserRouter( [
    {
      path:"/",
      element:<ProtectedPage><MainLayout/></ProtectedPage>,
      children:[
        {
          path:"dashboard",
          index:true,
          element:<UserDashboard/>
      },
      {
        path:"admin",
        element:<admin/>
      },
      {
        path:"productlist",
        element:<ProductList/>
      },
      {
        path:'userProfile',
        element:<UserProfilePage/>
      }
    ]

    },
    {
      path:"/login",
      element:<Login/>
    },{
      path:"/register",
      element:<Register/>
    }
  ])

  return (
    <RouterProvider router={router}>

      
    </RouterProvider>
     )
}

export default App
