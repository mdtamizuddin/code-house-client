import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div>
            <Header />
        </div>
    )
}

export default Home

const Header = () => {
    return (
        <div  className="hero min-h-screen bg-slate-800">
            <div className="hero-content text-center">
                <div className="max-w-lg">
                    <h1 className="text-6xl text-white font-bold">WellCome To Codeing House</h1>
                    <p className="py-6 text-white" >Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</p>
                    <label htmlFor="my-modal-4" className="btn btn-primary">Get Started</label>

                </div>
            </div>

                <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                <label htmlFor="my-modal-4" className="modal cursor-pointer">
                    <label className="modal-box relative" htmlFor="">
                        <h1 className='text-3xl'>Choose Your Topic</h1>
                        <ul className='mt-5'>
                            <li><Link className='btn w-full mt-3' to='/react'>React js</Link></li>
                            <li><Link className='btn w-full mt-3' to='/tailwind/rady-conponent'>React Component</Link></li>
                            <li><Link className='btn w-full mt-3' to='/node'>Node js</Link></li>
                            <li><Link className='btn w-full mt-3' to='/node/jwt'>JWT -jsonwebtoken</Link></li>
                            <li><Link className='btn w-full mt-3' to='/node/mongodb'>Node With MongoDb</Link></li>
                            <li><Link className='btn w-full mt-3' to='/jsvascript'>Javascript </Link></li>
                            <li><Link className='btn w-full mt-3' to='/html'>Html</Link></li>
                            <li><Link className='btn w-full mt-3' to='/css'>Css</Link></li>
                        </ul>
                    </label>
                </label>


            </div>
            )
}