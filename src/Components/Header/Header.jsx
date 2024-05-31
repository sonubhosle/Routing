import React from 'react'
import './Style.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
     <div className="logo">LOGO</div>
     <div className="menus">
      <Link to='/'>Home</Link>
      <Link to={'/products'}>Products</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/about'>About</Link>
      <Link to='/new'>New</Link>
     </div>
    </header>
  )
}

export default Header