
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Router, RouterProvider, Routes } from 'react-router-dom'
import router from './router'

function App() {
  return (
          
           <RouterProvider router={router}/>

         )
}

export default App

