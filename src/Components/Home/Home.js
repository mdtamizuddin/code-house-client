import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div>
            <HeaderHome />
        </div>
    )
}

export default Home

function HeaderHome() {
    return (
        <>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/DQbP1S6/Coding-For-Kids-2.jpg" className="max-w-xl rounded-lg shadow-2xl" />
                    <div className='lg:pr-10'>
                        <h1 className="text-6xl text-neutral font-bold">WellCome To Codeing House</h1>
                        <p className="py-6 text-neutral" >Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</p>
                        <label htmlFor="my-modal-4" className="btn btn-primary">Get Started</label>
                        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                        <label htmlFor="my-modal-4" className="modal cursor-pointer">
                            <label className="modal-box relative" htmlFor="">
                                <h1 className='text-3xl'>Choose Your Topic</h1>
                                <ul className='mt-5'>
                                    <li><Link className='btn w-full mt-3' to='/react'>React js</Link></li>
                                    <li><Link className='btn w-full mt-3' to='/tailwind/rady-conponent'>React Component</Link></li>
                                    <li><Link className='btn w-full mt-3' to='/node'>Node js</Link></li>
                                    <li><Link className='btn w-full mt-3' to='/node/mongoose'>Mongoose</Link></li>
                                    <li><Link className='btn w-full mt-3' to='/node/mongodb'>MongoDb</Link></li>
                                    <li><Link className='btn w-full mt-3' to='/jsvascript'>Javascript </Link></li>
                                    <li><Link className='btn w-full mt-3' to='/html'>Html</Link></li>
                                    <li><Link className='btn w-full mt-3' to='/css'>Css</Link></li>
                                </ul>
                            </label>
                        </label>

                    </div>
                </div>
            </div>

        </>
    )
}