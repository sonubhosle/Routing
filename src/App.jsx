import React from 'react'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'
import Contact from './Pages/Contact/Contact'
import About from './Pages/About/About'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import './App.css'
import NotFound from './Components/NotFound/NotFound'

const App = () => {
  return (
   <BrowserRouter>

    <Header />
    <Routes>
      <Route path='/' element={  <Home />}/>
      <Route path='/products' element={ <Products />}/>
      <Route path='/contact' element={  <Contact />}/>
      <Route path='/about' element={  <About />}/>
      <Route path='*' element={  <NotFound />}/>
    </Routes>
     <Footer />
   </BrowserRouter>
  )
}

export default App