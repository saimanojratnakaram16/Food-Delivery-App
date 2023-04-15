import React from 'react'
import { CDN_URL } from '../utils/constants'

export default function RestaurentCard({restaurentDetails}) {
  return (
    <div className='restaurent-card'>
      <div className='restaurent-img'>
      <img src = {CDN_URL + restaurentDetails.cloudinaryImageId} alt={restaurentDetails.name}/>
      </div>
      <div className='restaurent-info'>
        <div className='restaurent-name'>{restaurentDetails.name}</div>
        <div className='restaurent-cuisine'>{restaurentDetails.cuisines.join(', ')}</div>
        <div className='restaurent-dynamicDetails'>
        <p>{restaurentDetails.avgRating}</p>
        <p>{restaurentDetails.deliveryTime} MINS</p>
        </div>
      </div>
    </div>
  )
}
