import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import auth from '../../Firebase/firebase.init'
import Loading from '../../Loading/Loading'
import AddComponent from './AddComponent'

const TailwindComponent = () => {
  const [open, setOpen] = useState(false)
  const url = 'https://code-house.vercel.app/reactComponent/'
  const [user , loading] = useAuthState(auth)
  const { isLoading, data } = useQuery(['react-components'], () =>
    fetch(url).then(res =>
      res.json()
    )
  )
  // console.log(data)
  if (isLoading || loading) {
    return <Loading />
  }
  return (
    <div className='container mx-auto'>
      <div className="flex justify-center mt-5">
        {
          user &&
          <button onClick={() => setOpen(true)} className='btn btn-primary text-white'>Add A Component</button>}
      </div>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 mt-10'>
        {
          data.map(component => <div key={component._id} className="card w-full  bg-base-100 border shadow-2xl">
            <figure><img className='max-h-96 mt-5' src={component.image} alt="Shoes" /></figure>
            <div className="card-body border mt-3">
              <h1 className='text-primary text-3xl mb-3'>{component.compName}</h1>
              <div className='flex'>
              <div className="avatar">
                <div className="w-16 rounded-full">
                  <img src={component.avater} alt='avater'/>
                </div>
              </div>
              <div className='ml-5 p-2'>
                <p>{component.email}</p>
                <p className='text-secondary'>{component.userName}</p>
              </div>
              </div>
              <div className="card-actions justify-end">
                <Link to={`component/${component._id}`} className="btn btn-primary">Get Code</Link>
              </div>
            </div>
          </div>)
        }
      </div>


      <AddComponent open={open} setOpen={setOpen} />
    </div>
  )
}

export default TailwindComponent