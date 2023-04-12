import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './views/Home/Home'
import AddCard from './views/AddCard/AddCard'

import './App.css'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/AddCard',
      element: <AddCard />
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
