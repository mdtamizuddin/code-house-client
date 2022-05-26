import React from 'react'
import { useQuery } from 'react-query'
import useUser from '../../Hook/useUser'
import Loading from '../Loading/Loading'
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { toast } from 'react-toastify';

const NodeJs = () => {
    const currentUser = useUser()

    const { isLoading, data, refetch } = useQuery(['express-codes'], () =>
        fetch('http://localhost:5000/express').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h1 className="text-4xl mt-10 text-center font-bold">
                Express Js
            </h1>
            {
                currentUser.role === "admin" &&
                <CodeAddingForm refetch={refetch}/>
            }
            <div className='mt-10 p-7 mockup-window border bg-base-100'>
                <h1 className='text-2xl text-primary'> Get Started With Node Js</h1>
                <h1 className='text-3xl text-neutral mt-5'>Installation </h1>
                <div className="mockup-code mt-5">
                    <pre data-prefix="$"><code>npm i express</code></pre>
                    <pre data-prefix="$"><code>npm i mongodb</code></pre>
                    <pre data-prefix="$"><code>npm i nodemon</code></pre>
                    <pre data-prefix="$"><code>npm i cors</code></pre>
                    <pre data-prefix="$"><code>npm i body-parser</code></pre>
                    <pre data-prefix="$"><code>npm i dotenv</code></pre>
                    <pre data-prefix="$"><code>npm i jsonwebtoken</code></pre>
                    <div className="divider">OR</div>
                    <pre data-prefix="$"><code>npm i express cors mongodb nodemon body-parser jsonwebtoken dotenv</code></pre>
                </div>
                {/* installetion End Here  */}

                {/* express Hello World  */}
                <div>
                    {
                        data.map(examp => <div key={examp._id}>
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

export default NodeJs


const CodeAddingForm = ({refetch}) => {
    const submitCode = (e) => {
        e.preventDefault()
        const title = e.target.title.value
        const code = e.target.code.value
        fetch('http://localhost:5000/express', {
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
