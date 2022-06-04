import React from 'react'
import loader from './loader.gif'
const Loading = () => {
  return (
    <div className='flex justify-center items-center bg-base-100
     h-screen'>
        {
            <img  width={350} height={350} src={'https://i.ibb.co/dgqcf4m/r.gif'} alt="" />
        }
    </div>
  )
}

export default Loading