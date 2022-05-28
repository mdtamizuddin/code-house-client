import React, { useState } from 'react'
import useUser from '../../Hook/useUser'
import { toast } from 'react-toastify'
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import Loading from '../Loading/Loading';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const ReactJs = () => {
  const currentUser = useUser()
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