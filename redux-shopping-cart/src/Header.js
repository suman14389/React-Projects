import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getTotalCardItems } from './Utils/cartSlice'

const Header = () => {

  const cartItems = useSelector(store => store.carts.items);

  return (
    <div className='flex justify-between items-center p-4 bg-blue-200 shadow-lg sticky top-0 z-50'>
        <p>Store</p>
        <Link to="/cart" className='text-green-700 rounded-lg px-4 py-2 mx-4'>Cart - {cartItems.length}</Link>
    </div>
  )
}

export default Header