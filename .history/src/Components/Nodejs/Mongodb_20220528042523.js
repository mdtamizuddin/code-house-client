import React, { useState } from 'react'
import useUser from '../../Hook/useUser'
import { toast } from 'react-toastify'
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import Loading from '../Loading/Loading';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';


const Mongodb = () => {
    const currentUser = useUser()
    const [searchValue, setValue] = useState('')
    const { isLoading, data, refetch } = useQuery(['mongodb-codes'], () =>
        fetch('https://code-house-server.vercel.app/mongodb').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='container mx-auto mb-20'>
            {
                currentUser.role === "admin" &&
                <CodeAddingForm refetch={refetch} />
            }
            <div className="search-feild flex mt-5 justify-center">
                <input type="text" onChange={(e) => setValue(e.target.value)} placeholder="Search here" className="rounded-none input input-bordered w-full max-w-xs" />
                <button className='btn btn-primary rounded-none'>Search</button>
            </div>
            <Link className='btn bg-md' to='/node'>Installetion</Link>
            {
                data.filter((val) => {
                    if (searchValue === "") {
                        return val
                    }
                    else if (val.title.toLowerCase().includes(searchValue.toLowerCase())) {
                        return val
                    }
                }).map(examp => <div key={examp._id}>
                    <h1 className='text-3xl my-5 text'>{examp.title}</h1>
                    <CodeMirror
                        value={examp.code}
                        height="auto"
                        theme={oneDark}
                        extensions={[javascript({ jsx: true })]}
                        onChange={(value, viewUpdate) => {

                        }}
                    />
                </div>)
            }
        </div>
    )
}

export default Mongodb


const CodeAddingForm = ({ refetch }) => {
    const submitCode = (e) => {
        e.preventDefault()
        const title = e.target.title.value
        const code = e.target.code.value
        fetch('https://code-house-server.vercel.app/mongodb', {
            method: 'post',
            headers: {
                "content-type": "application/json",
                auth: localStorage.getItem('accessToken')
            },
            body: JSON.stringify({ title, code })
        }).then(res => {
            if (res.status === 200) {
                e.target.reset()
                toast.success('Code Added')
                refetch()
            }
        })
    }
    return (
        <form onSubmit={submitCode} className='container mx-auto my-10'>
            <h1 className='text-center text-4xl font-bold my-4'>Add Code Here</h1>
            <input type="text" name='title'
                placeholder="Code Title" className="input input-bordered input-primary w-full max-w-full" />
            <textarea name='code' placeholder="Enter Code Here" className="input input-bordered input-primary w-full max-w-full mt-3 h-64" />
            <button type='submit' className='btn px-5 '>Submit</button>
        </form>
    )
}
