import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from 'react-router-dom'

  import Admin from './components/Admin'
  import Contact from './components/Contact'
  import Home from './components/Home'
  import Management from './components/Management'
  import Login from './login/Login'
  import Register from './register/Register'
  import AddRes from './components/ManageForm/AddRes'
  import UpRes from './components/ManageForm/UpRes'
  import DelRes from './components/ManageForm/DelRes'
  import ViewRestaurant from './components/ViewRestaurant'

  
  const elements = createRoutesFromElements(
    <>

      <Route path="/" element={<Login/>} />
      <Route path="home" element={<Home/>} />
      <Route path="contact" element={<Contact/>} />
      <Route path="management" element={<Management/>} />
      <Route path="admin" element={<Admin/>} />
      <Route path="login" element={<Login/>} />
      <Route path="register" element={<Register/>} />
      <Route path="addres" element={<AddRes/>} />
      <Route path="upres" element={<UpRes/>} />
      <Route path="delres" element={<DelRes/>} />
      <Route path="viewrestaurant" element={<ViewRestaurant/>} />
      
      
      
    </>
  )
  const router = createBrowserRouter(elements)
export default router
  