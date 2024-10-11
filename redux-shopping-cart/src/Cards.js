import React from 'react'
import { data } from './Utils/getData';
import { useDispatch } from 'react-redux';
import { increaseItemQuantity, decreaseItemQuantity } from './Utils/cartSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Card = ({item}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(item.quantity);

  const handleAddToCart = (item) => {
      dispatch(increaseItemQuantity(item));
  }

  const handleDecreaseItemQuantity = (item) => {
    dispatch(decreaseItemQuantity(item));
  }

  const cartItems = useSelector(store => store.carts.items);
  const quantity = cartItems.find(i => i.id === item.id)?.quantity;

  return <div className='shadow-lg cursor-pointer p-2 border-2 border-slate-200 rounded-lg'>
    <img src={item.image} alt={item.name} className='w-72 h-80 object-cover rounded-lg p-2' />
    <div className='flex flex-col gap-2'>
      <p className='text-center font-bold'>{item.name}</p>
      <p className='text-center font-bold'>Rs.{item.price}</p>
      <div className='flex gap-2 items-center justify-center'>
        {
          quantity > 0 && <span className='cursor-pointer bg-blue-400 px-2 rounded-sm' onClick={() => handleDecreaseItemQuantity(item)}> - </span>  
        }
        {
          quantity > 0 && <span className='p-2 rounded-lg'> <span className='font-bold text-xl'> {quantity}</span> in <span className='text-blue-500 underline' onClick={() => navigate('/cart')}>cart</span></span>
        }
        {
          !quantity && <button className='bg-red-200 px-4 py-2 rounded-lg cursor-pointer' onClick={() => handleAddToCart(item)}>Add to Cart</button>
        }
        {
          quantity > 0 && <span className='cursor-pointer bg-blue-400 px-2 rounded-sm' onClick={() => handleAddToCart(item)}> + </span>
        }
      </div>
    </div>
  </div>
}

const Cards = () => {

  return (
    <div className='flex flex-wrap gap-20 my-4 mx-auto w-4/5'>
      {
        data.map((item) => 
          <Card key={item.id} item={item} />
        )
      }
    </div>
  )
}

export default Cards;