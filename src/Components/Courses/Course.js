import React from 'react'

import { Link } from 'react-router-dom'

const Course = () => {
    return (
        <div style={{ backgroundSize: 'cover', backgroundPosition: 'center',backgroundImage: `url(${'https://i.ibb.co/TPjzZKY/1-4-Isometric-sample-2.png'})` }} className='container mx-auto '>
            <div className='flex h-screen w-full flex justify-center items-center'>
                <label htmlFor="my-modal-4" className="btn btn-secondary">Choose Topic</label>
                <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                <label htmlFor="my-modal-4" className="modal cursor-pointer">
                    <label className="modal-box relative" htmlFor="">
                        <h1 className='text-3xl'>Choose Your Topic</h1>
                        <ul className='mt-5'>
                            <li><Link className='btn bg-secondary border-none text-white w-full mt-3' to='node-mailer'>Node Mailer</Link></li>
                            
                        </ul>
                    </label>
                </label>
            </div>
        </div>
    )
}

export default Course


//     < ReactPlayer
// controls = { true}
// width = '100%'
// height = { '720px'}
// url = 'https://youtu.be/-nazR-yxaSk'
// config = {{
//     vimeo: {
//         playerVars: { showinfo: 1 }
//     }
// }}
// />