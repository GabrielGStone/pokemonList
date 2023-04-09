import React from 'react'
import List from './screens/List'
import Home from './screens/Home'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import useLocalStorage from 'hooks/useLocalStorage'

function App() {
  useLocalStorage()

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<List />} path="/list" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
