import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, NavLink } from 'react-router-dom'
import auth from './Firebase/firebase.init'
import Loading from './Loading/Loading'

const Navbar = () => {
    const [user, loading] = useAuthState(auth)

    if (loading) {
        return <Loading />
    }
    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Navigations />
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-2xl">Code House</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <Navigations />
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-24 rounded-full border ">
                                <img className='w-full' src={user ? 
                                    user.photoURL 
                                    : 'https://www.pngitem.com/pimgs/m/236-2369728_unknown-person-hd-png-download.png'} alt='imageddf' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <button className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </button>
                            </li>
                            <li><button>Settings</button></li>
                            {
                                user ?
                                    <li><button onClick={() => {
                                        signOut(auth)
                                        localStorage.removeItem('accessToken')
                                    }}>Log Out</button></li>
                                    :
                                    <li><Link to='/login'>Login</Link></li>
                            }
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Navbar

const Navigations = () => {
    const [user, loading] = useAuthState(auth)

    if (loading) {
        return <Loading />
    }
    return (
        <>
            <li tabIndex="1">
                <Link to='/react'>
                    React Js
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                </Link>
                <ul className="p-2 bg-base-200 z-20">
                    <li>
                        <Link to='/react'>Get Started With React</Link>
                    </li>
                    <li>
                    <Link to='/react/tailwind'>Tailwind With Daisyui</Link>
                    </li>
                    <li>
                    <Link to='/tailwind/rady-conponent'>Tailwind Rady Component</Link>
                    </li>

                </ul>
            </li>
            <li tabIndex="0">
                <Link to='/node'>
                    Node Js
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                </Link>
                <ul className="p-2 bg-base-200 z-20">
                    <li>
                        <Link to='/node'>Express</Link>
                        <Link to='/node/mongodb'>Mongodb</Link>
                        <Link to='/node/mongoose'>Mongoose</Link>
                        <Link to='/node/nodemailer'>Node Mailer</Link>
                    </li>

                </ul>
            </li>
            <li className='mx-2'><NavLink to='/javascript'>Javascript</NavLink></li>
            <li className='mx-2'><NavLink to='/html'>Html</NavLink></li>
            <li className='mx-2'><NavLink to='/css'>Css</NavLink></li>
            <li className='mx-2'><NavLink to='/feedback'>Feedback</NavLink></li>
            {/* <li className='mx-2'><NavLink to='/codemirroe'>Code Mirror</NavLink></li> */}
            {user && <li className='mx-2'><NavLink to='/feedback'>FeedBack</NavLink></li>}
            <li className='mx-2'><NavLink to='/blogs'>Blogs</NavLink></li>
        </>
    )
}