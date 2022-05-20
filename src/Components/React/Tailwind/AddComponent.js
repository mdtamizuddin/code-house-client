import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';

const AddComponent = ({open , setOpen}) => {
    const [user, loading] = useAuthState(auth)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        const compName = data.name 
        const code = data.code
        const userName = user.displayName
        const email = user.email 
        const avater = user.photoURL
        const  url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGEBB_KEY}`
        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(url ,{
            method: "POST",
            body : formData
        })

        .then(res => res.json())
        .then(async (result) => {
            const image = result.data.url
            const myData = { type : "tailwind",compName , code , image , userName , email , avater}
            fetch('https://code-house420.herokuapp.com/react-component', {
                method: 'post',
                headers :{
                    'content-type': 'application/json',
                    'auth' : localStorage.getItem('accessToken')
                },
                body: JSON.stringify(myData)
            })
            .then(res => res.json())
            .then(json => console.log(json))
        }
        )



       
    }

    return (
        <div className={`${open? 'flex' : 'hidden'} justify-center items-center h-screen w-screen absolute z-10 top-20  bg-slate-200`}>
            <div className="card w-full max-w-3xl bg-base-100 shadow-xl">
                <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Component Name</span>
                                </label>
                                <input
                                    {...register("name", { required: true })}
                                    className="input input-bordered" type='text' />

                                <p className='text-red-500 mt-2 ml-2' >{errors.name?.type === 'required' && "Insert A Name of Component"} </p>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Component Codes</span>
                                </label>
                                <textarea {...register("code", { required: true})} className="input input-bordered h-80" />
                                <p className='text-red-500 mt-2 ml-2'>{errors.code?.type === 'required' && "Apnar Code Koi"} </p>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Component Image</span>
                                </label>
                                <input type='file'
                                    {...register("image", { required: true, maxLength: 20 })}
                                    className="input p-2 input-bordered" />
                                <p className='text-red-500 mt-2 ml-2'>{errors.image?.type === 'required' && "Your Image"} </p>
                            </div>
                            {/* <p className='text-red-500'>{error?.code}</p> */}
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Add Component</button>
                            </div>
                        </form>
                    <div className="card-actions justify-end">
                        <button onClick={()=> setOpen(false)} className="btn btn-primary">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddComponent