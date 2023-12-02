import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './home/Home'
import Cart from './components/Cart'
import Header from './components/Header'
export default function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
    </>
  )
}

