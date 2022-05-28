import React from 'react'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import Loading from '../../Loading/Loading'
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";

const FullView = () => {
    const location = useLocation()
    const path = location.pathname.split('/')
    const url = `https://code-house-server.vercel.app/reactComponent/${path[4]}`

    const { isLoading, data } = useQuery(['react-component'], () =>
        fetch(url).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h1 className='text-4xl font-bold text-secondary text-center my-5'>{data.compName}</h1>
            <img className='mt-5 mx-auto border mb-5 shadow-2xl px-5' src={data.image} alt={data.image} />
            <CodeMirror
                value={data.code}
                height="auto"
                theme={oneDark}
                extensions={[javascript({ jsx: true })]}
                onChange={(value, viewUpdate) => {
                    console.log("value:", value);
                }}
            />
        </div>
    )
}

export default FullView