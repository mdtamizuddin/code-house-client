
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'
import auth from '../Firebase/firebase.init';
import Loading from '../Loading/Loading';
import Social from './Social'

const Login = () => {
    const navigate = useNavigate()
    const [error, setError] = useState()
    const { reset, register, formState: { errors }, handleSubmit } = useForm();
    const [loading , setLoading] = useState(false)
    const onSubmit = (data) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                fetch(`https://code-house-server.vercel.app/users/${user.email}`, {
                    method: "put",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ name: user.displayName, email: user.email, photoURL: user.photoURL })
                })
                    .then(res => res.json())
                    .then(json => {
                        reset()
                        localStorage.setItem('accessToken', json.token)
                        navigate('/')
                        setLoading(false)
                    })
            })
            .catch((error) => {
                const errorCode = error.code;
                setError(errorCode)
                setLoading(false)
            });


    }

    if (loading) {
        return <Loading />
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div style={{ width: '100%' }} className="hero-content">

                    <div className="card w-full max-w-md shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    {...register("email", { pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i }, { required: true })}
                                    className="input input-bordered" type='email' />

                                <p className='text-red-500 mt-2 ml-2' >{errors.email?.type === 'required' && "Email is required"} </p>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type='password'
                                    {...register("password", { required: true, maxLength: 20 })}
                                    className="input input-bordered" />
                                <p className='text-red-500 mt-2 ml-2'>{errors.password?.type === 'required' && "Password Required"} </p>
                            </div>
                            <p className='text-red-500'>{error}</p>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                            <p className='mt-3'> Not a user
                                <Link to='/register' className="ml-3 text-blue-600 link link-hover">Sign Up</Link>
                            </p>

                        </form>
                        <Social />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login