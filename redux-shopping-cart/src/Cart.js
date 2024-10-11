import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { increaseItemQuantity, decreaseItemQuantity, removeItem } from './Utils/cartSlice'
import Billing from './Billing'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const dispatch = useDispatch()
  const navigate= useNavigate();


  const cartItems = useSelector(store => store.carts.items)

  if(cartItems.length === 0) return <div className='text-center py-8'>
    <h1>No items in cart. Please add some items to the cart from our <span className='text-blue-500 underline cursor-pointer' onClick={() => navigate('/')}>store</span></h1>
  </div>


  return (
    <div className='flex mx-32 items-start'>
      <div className='w-2/3 mx-10 py-4 my-12 shadow-lg border-2 border-black-500 rounded-lg'>
          <h1 className='font-bold text-2xl p-2 text-center underline'>Cart Items</h1>
          <div className='flex w-full'>
              <ul className='w-full' >
                {
                  cartItems.map((item, index) => {
                    return (
                      <div key={item.id}>
                        <li key={item.id} className="w-full flex p-4">
                        <div className="flex flex-col items-center">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-32 h-28 object-cover rounded-lg"
                              />
                              <div className="flex items-center pt-4">
                                <span
                                  className="bg-red-400 px-2 rounded-full mx-2 cursor-pointer"
                                  onClick={() =>
                                    dispatch(decreaseItemQuantity(item))
                                  }
                                >
                                  -
                                </span>
                                <span>{item.quantity}</span>
                                <span
                                  className="bg-green-500 py-0 px-2 rounded-full cursor-pointer mx-2"
                                  onClick={() =>
                                    dispatch(increaseItemQuantity(item))
                                  }
                                >
                                  +
                                </span>
                              </div>
                            </div>

                            <div className="px-8 ps-20 relative">
                              <span className="font-bold">{item.name}</span>
                              <br />
                              <span className="text-gray-500 text-sm">
                                {item.description}
                              </span>
                              <br />
                              <span className="font-bold block pt-6 text-lg">
                                Rs. {item.price}{" "}
                                <span className="text-gray-500 text-sm">
                                  {" "}
                                  x {item.quantity}
                                </span>
                              </span>
                              <br/>
                              <span className="text-red-500 absolute bottom-0 cursor-pointer" onClick={() => dispatch(removeItem(item))}>Remove</span>
                            </div>
                        </li>
                        {index !== cartItems.length - 1 && (
                          <hr className="w-full border-t border-gray-300 my-2" />
                        )}
                      </div>
                    );
                  }
                )
                }
              </ul>
            </div>
          
      </div>
      {
        cartItems.length > 0 && (
          <div className='w-1/3 mx-10 my-12 shadow-lg border-2 border-black-500 rounded-lg sticky top-28'>
            <Billing cartItems={cartItems} />
          </div>
        )
      }
    </div>
  )
}

export default Cart