import React, { useState } from 'react'
import { toast } from 'react-toastify'
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import Loading from '../Loading/Loading';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import useUser from '../../Hook/useUser';

const ReactJs = () => {
  const currentUser = useUser()
  console.log('currentUser');
  const [searchValue, setValue] = useState('')

  const { isLoading, data, refetch } = useQuery(['React-codes-sneppet'], () =>
    fetch('https://code-house-server.vercel.app/react').then(res =>
      res.json()
    )
  )

  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
      {
        currentUser.role === "admin" &&
        <CodeAddingForm refetch={refetch} />
      }
      <h1 className='text-4xl font-bold text-center mt-10 my-5'>React Get Started</h1>
      <div className="mockup-code p-7">
        <h1 className='text-left my-3 ml-10 text-2xl'>Create React App With npm</h1>
        <pre data-prefix="$"><code className='text-green-500'>npx create-react-app my-project</code></pre>
        <h1 className='text-left my-3 ml-10 text-2xl'>Create React App With yarn</h1>
        <pre data-prefix="$"><code className='text-green-500'>yarn create react-app my-project</code></pre>

        <h1 className='text-left my-3 ml-10 text-2xl'>Install React Router</h1>
        <pre data-prefix="$"><code className='text-green-500'>npm install react-router-dom</code></pre>
      </div>
    </div>
  )
}

export default ReactJs



const CodeAddingForm = ({ refetch }) => {
  const submitCode = (e) => {
    e.preventDefault()
    const title = e.target.title.value
    const code = e.target.code.value
    fetch('https://code-house-server.vercel.app/react', {
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
    <>
    
    <form onSubmit={submitCode} className='container mx-auto my-10'>
      <h1 className='text-center text-4xl font-bold my-4'>Add Code Here</h1>
      <input type="text" name='title'
        placeholder="Code Title" className="input input-bordered input-primary w-full max-w-full" />
      <textarea name='code' placeholder="Enter Code Here" className="input input-bordered input-primary w-full max-w-full mt-3 h-64" />
      <button type='submit' className='btn px-5 '>Submit</button>
    </form>

    </>
  )
}
