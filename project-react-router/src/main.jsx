import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'


// Method 1 : Routing

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       }, 
//       {
//         path: "about",
//         element: <About />
//       }, 
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])


// Method 2: Routing
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      < Route path='' element={<Home/>} />
      < Route path='about' element={<About/>} />
      < Route path='contact' element={<Contact/>} />
      < Route path='user/:userId' element={<User />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    < RouterProvider router={router} />
  </React.StrictMode>,
)




