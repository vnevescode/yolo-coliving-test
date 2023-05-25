import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './styles/index.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePageMainContainer from './Pages/Home/HomePageMainContainer.jsx'
import MyPropertiesPage from './Pages/MyProperties/MyPropertiesPage.jsx'
import ErrorPage from './Pages/Error/ErrorPage.jsx'
import AddNewPropertyPage from './Pages/AddNewProperty/AddNewPropertyPage.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path:"/",
        element:<HomePageMainContainer/>,
      },
      {
        path:"property",
        element: <MyPropertiesPage/>,
      },
      {
        path:"add-new-property",
        element: <AddNewPropertyPage/>,
      },

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <GlobalStyle />
  </React.StrictMode>,
)
