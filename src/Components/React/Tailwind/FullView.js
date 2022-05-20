import React from 'react'
import { useQuery } from 'react-query'
import { useLocation, useParams } from 'react-router-dom'
import Loading from '../../Loading/Loading'

const FullView = () => {
    const location = useLocation()
    const path = location.pathname.split('/')
    const url = `https://code-house420.herokuapp.com/react-component/${path[4]}`


    console.log()
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
            <img className='mt-5 mx-auto border shadow-2xl px-5' src={data.image} alt={data.image} />

            <div className="mockup-code p-7 mt-5">
                <pre data-prefix="$"><code className='text-green-500'>{data.code}</code></pre>
            </div>
        </div>
    )
}

export default FullView