import React from 'react'
import { useNavigate } from 'react-router-dom'

const Billing = ({cartItems}) => {

    const navigate = useNavigate();

    const calculateTotalPrice = () => {
        return cartItems.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
    }
    
  return (
    <div>
        <p className='font-bold text-xl text-center py-2'>Price Details</p>
        <hr className="w-full border-t border-gray-300 my-2" />
        <div className='flex justify-between px-4 py-2'>
            <span>Items</span>
            <span>{cartItems.length} </span>
        </div>

        <div className='flex justify-between px-4 py-2'>
            <span>Total Price</span>
            <span>Rs. {calculateTotalPrice().toFixed(2)}</span>
        </div>

        <div className='flex justify-between px-4 py-2' >
            <span>Delivery charges</span>
            <span className='text-green-500'><span className='text-gray-500 line-through'>Rs. 120</span> Free</span>
        </div>

        <hr className="w-full border-t border-gray-300 my-2" />

        <div className='flex justify-between px-4 font-bold text-xl'>
            <span>Total Amount</span>
            <span>Rs. {calculateTotalPrice().toFixed(2)}</span>
        </div>

        <p className='text-blue-500 underline text-center py-2 cursor-pointer' onClick={() => navigate('/')}> Back to store</p>

    </div>
  )
}

export default Billing