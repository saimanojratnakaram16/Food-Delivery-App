import React from 'react'
import { CDN_URL } from '../utils/constants'

export default function RestaurentCard({restaurentDetails}) {
  const {avgRating, name,cuisines, cloudinaryImageId, costForTwo} = restaurentDetails;
  const ratingGradeColor = avgRating === '--' ? 'bg-slate-600':(avgRating >=4 ? 'bg-green-600': (avgRating >=3 ? 'bg-orange-500' : 'bg-red-500'));
  
  return (
    <div className='w-72 m-2 p-2 h-full cursor-pointer hover:shadow-md shadow-slate-200'>
      <div className='h-40 mb-2 flex justify-center'>
      <img className='h-full rounded-md' src = {CDN_URL + cloudinaryImageId} alt={name}/>
      </div>
      <div className='p-2'>
        <div className='font-semibold'>{name}</div>
        <div className='font-light text-sm'>{cuisines?.join(', ')}</div>
        <div className='flex items-center justify-between font-light text-xs py-2'>
        {avgRating && <div className={`text-white flex p-1 ${ratingGradeColor}`}>
        <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            {avgRating} </div>}
        <div>{restaurentDetails?.sla?.deliveryTime} MINS</div>
        <div>{costForTwo}</div>
        </div>
      </div>
    </div>
  )
}

export const withPromotedLabel = () =>{
  return (props)=>{
    return (
      <>
        <label className='bg-slate-600 text-white m-1 p-1 rounded-e-md absolute text-xs'>Promoted</label>
        <RestaurentCard {...props} />
      </>
    );
  }
}
