import React from 'react'
import { data } from './Utils/getData';

const Card = ({item}) => {
  return <div className='shadow-lg cursor-pointer p-2 border-2 border-slate-200 rounded-lg'>
    <img src={item.image} alt={item.name} className='w-72 h-80 object-cover rounded-lg p-2' />
    <div className='flex flex-col gap-2'>
      <p className='text-center font-bold'>{item.name}</p>
      <p className='text-center font-bold'>Rs.{item.price}</p>
      <button className='bg-red-200 rounded-lg p-2 mx-auto block cursor-pointer'>Add to Cart</button>
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