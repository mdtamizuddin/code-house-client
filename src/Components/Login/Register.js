import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../Firebase/firebase.init';
import Social from './Social'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import Loading from '../Loading/Loading';

const Register = () => {    
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating] = useUpdateProfile(auth);
    const { register, formState: { errors }, reset, handleSubmit } = useForm();

    const onSubmit = async (data) => {
      
        const formData = new FormData();
        formData.append('image', data.image[0]);

        const  url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGEBB_KEY}`
        const displayName = data.name
        const email = data.email
        const password = data.password
       
        fetch(url ,{
            method: "POST",
            body : formData
        })
        .then(res => res.json())
        .then(async (result) => {
            const photoURL = result.data.url
            await createUserWithEmailAndPassword(email, password)
            await updateProfile({ displayName , photoURL })
           
            fetch(`https://code-house420.herokuapp.com/user/${email}` ,{
                method: "put",
                headers: {
                    'content-type': 'application/json'
                },
                body : JSON.stringify({displayName , email , 
                photoURL})
            })
            .then(res => res.json())
            .then(json => {
                localStorage.setItem('accessToken' , json.accessToken)
                reset()
                navigate('/')
            })
        })
    };
    if (loading || updating) {
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
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    {...register("name", { required: true, maxLength: 20 })}

                                    className="input input-bordered" />
                                <p className='text-red-500 mt-2 ml-2'>{errors.name?.type === 'required' && "Name is required"} </p>
                            </div>
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

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Avatar</span>
                                </label>
                                <input type='file'
                                    {...register("image", { required: true, maxLength: 20 })}
                                    className="input p-2 input-bordered" />
                                <p className='text-red-500 mt-2 ml-2'>{errors.image?.type === 'required' && "Your Image"} </p>
                            </div>

                            <p className='text-red-500 mt-3'>{error?.code}</p>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Register</button>
                            </div>
                            <p className='mt-3'>Alrady user
                                <Link to='/login' className="ml-3 text-blue-600 link link-hover">Login</Link>
                            </p>
                            
                        </form>
                        <Social />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register