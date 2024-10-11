import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {

  const cartItems = useSelector(store => store.carts.items);

  return (
    <div className='flex justify-between items-center p-4 bg-blue-200 shadow-lg sticky top-0 z-50'>
        <Link to="/">Store</Link>
        <Link to="/cart" className='text-green-700 rounded-lg px-4 py-2 mx-4'>Cart - {cartItems.length}</Link>
    </div>
  )
}

export default Header