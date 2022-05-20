import React from 'react'
import loader from './loader.gif'
const Loading = () => {
  return (
    <div className='flex justify-center'>
        {
            <img className='w-full max-w-xs' src={loader} alt="" />
        }
    </div>
  )
}

export default Loading