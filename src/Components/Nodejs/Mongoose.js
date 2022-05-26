import React, { useState } from 'react'
import { useQuery } from 'react-query'
import useUser from '../../Hook/useUser'
import Loading from '../Loading/Loading'
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { toast } from 'react-toastify';

const Mongoose = () => {
    const currentUser = useUser()
    const [searchValue, setValue] = useState('')
    const { isLoading, data, refetch } = useQuery(['mongoose-codes'], () =>
        fetch('http://localhost:5000/mongoose').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='container mx-auto'>
            <h1 className="text-4xl mt-10 text-center font-bold">
                Mongoose
            </h1>
            {
                currentUser.role === "admin" &&
                <CodeAddingForm refetch={refetch} />
            }
            <div className="search-feild flex justify-center mt-5">
                <input type="text" onChange={(e) => setValue(e.target.value)} placeholder="Search here" className="rounded-none input input-bordered w-full max-w-xs" />
                <button className='btn btn-primary rounded-none'>Search</button>
            </div>
            <div className='mt-10 p-7 mockup-window border bg-base-100'>

                <div>
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
            </div>

        </div>
    )
}

export default Mongoose


const CodeAddingForm = ({ refetch }) => {
    const submitCode = (e) => {
        e.preventDefault()
        const title = e.target.title.value
        const code = e.target.code.value
        fetch('http://localhost:5000/mongoose', {
            method: 'post',
            headers: {
                "content-type": "application/json"
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
