import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './layout/Layout'

function App() {

  return (
   
     <Layout>
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
     </BrowserRouter>
     </Layout>
    
  )
}

export default App
