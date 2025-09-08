

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import SingleProduct from './pages/SingleProduct'

function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/product/:productId' element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
