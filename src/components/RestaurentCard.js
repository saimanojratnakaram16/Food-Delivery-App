import React from 'react'
import { CDN_URL } from '../utils/constants'

export default function RestaurentCard({restaurentDetails}) {
  return (
    <div className='w-72 m-2 p-2 h-full cursor-pointer hover:shadow-md shadow-slate-200'>
      <div className='h-40 mb-2 flex justify-center'>
      <img className='h-full rounded-md' src = {CDN_URL + restaurentDetails.cloudinaryImageId} alt={restaurentDetails.name}/>
      </div>
      <div className='p-2'>
        <div className='font-semibold'>{restaurentDetails?.name}</div>
        <div className='font-light text-sm'>{restaurentDetails?.cuisines?.join(', ')}</div>
        <div className='flex justify-between font-light text-xs py-2'>
        <p>{restaurentDetails.avgRating}</p>
        <p>{restaurentDetails.deliveryTime} MINS</p>
        <p>{restaurentDetails.costForTwoString}</p>
        </div>
      </div>
    </div>
  )
}
