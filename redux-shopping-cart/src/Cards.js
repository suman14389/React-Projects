import React from 'react'
import { data } from './Utils/getData';
import { useDispatch } from 'react-redux';
import { increaseItemQuantity, decreaseItemQuantity } from './Utils/cartSlice';
import { useSelector } from 'react-redux';

const Card = ({item}) => {

  const dispatch = useDispatch();
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
          quantity > 0 && <span className='cursor-pointer' onClick={() => handleDecreaseItemQuantity(item)}> - </span>  
        }
        {
          quantity > 0 && <span className='px-4 py-2 bg-slate-100 rounded-lg'>{quantity}</span>
        }
        {
          !quantity && <button className='bg-red-200 rounded-lg p-2 cursor-pointer' onClick={() => handleAddToCart(item)}>Add to Cart</button>
        }
        {
          quantity > 0 && <span className='cursor-pointer' onClick={() => handleAddToCart(item)}> + </span>
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