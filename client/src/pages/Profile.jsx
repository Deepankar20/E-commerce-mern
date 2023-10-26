import React from 'react'
import { Link } from 'react-router-dom'

export const Profile = () => {
  return (
    <div>
    <div className='flex flex-col items-center'>
       
        <div className='flex flex-col gap-0 mx-auto'>
        <img src="https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png" className='object-contain h-20 sm:h-48 rounded-full m-9 ' />
        <button className='bg-yellow-500 p-2 border rounded-xl'>Update Profile</button>
        <button className='bg-yellow-500 p-2 my-4 border rounded-xl'><Link to={'/addproduct'}>Sell your products</Link></button>
        </div>
    </div>
    </div>
  )
}
