import React from 'react'
import List from './screens/List'
import Home from './screens/Home'
import { Route, Routes, HashRouter } from 'react-router-dom'
import useLocalStorage from 'hooks/useLocalStorage'

function App() {
  useLocalStorage()

  return (
    <HashRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<List />} path="/list" />
      </Routes>
    </HashRouter>
  )
}

export default App
