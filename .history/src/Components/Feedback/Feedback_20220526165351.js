import { signOut } from 'firebase/auth';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../Firebase/firebase.init';
import Loading from '../Loading/Loading';

const FeedBack = () => {
  const [user , loading] = useAuthState(auth)
  const navigate = useNavigate()
  const { register, reset , formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch('https://code-house.vercel.app/feedback',{
      method : 'post',
      headers: {
        'content-type': 'application/json',
        'auth' : localStorage.getItem('accessToken')
      },
      body : JSON.stringify({...data , name : user.displayName , email : user.email})
    }).then(res => {
      if (res.status === 401) {
        signOut(auth)
        localStorage.removeItem('accessToken')
        navigate('/login')
      }
      else if (res.status === 200){
        toast.success('Feedback Submited')
        reset()
      }
    })
      
  }
  if (loading) {
    return <Loading />
  }
return (
    <div>
        <div className="hero min-h-screen bg-base-200">
       
            <div style={{ width: '100%' }} className="flex flex-col justify-center items-center">
            <h1 className='text-4xl mb-7'>Feel Free Drop A FeedBack</h1>
                <div className="card w-full max-w-md shadow-2xl bg-base-100">
                
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">subject</span>
                            </label>
                            <input
                                {...register("subject", { required: true })}
                                className="input input-bordered" type='text' />

                            <p className='text-red-500 mt-2 ml-2' >{errors.email?.type === 'required' && "Email is required"} </p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            
                            <textarea type='text' 
                                {...register("message", { required: true})}
                                className="input h-60 input-bordered" />
                            <p className='text-red-500 mt-2 ml-2'>{errors.password?.type === 'required' && "Password Required"} </p>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
)
}

export default FeedBack