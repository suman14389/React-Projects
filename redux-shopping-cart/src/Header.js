import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-4 bg-blue-200 shadow-lg sticky top-0 z-50'>
        <p>Store</p>
        <Link to="/cart">Cart</Link>
    </div>
  )
}

export default Header