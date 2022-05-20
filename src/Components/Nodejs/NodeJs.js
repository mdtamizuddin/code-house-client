import React from 'react'
import { Link } from 'react-router-dom'

const NodeJs = () => {
    return (
        <div>
            <h1 className="text-4xl mt-10 text-center font-bold">
               Express Js
            </h1> 
            <div className='flex justify-center mt-5'>
            <Link className='btn' to='mongodb'>
            Mongodb With Express
            </Link>
            <Link className='btn ml-5' to='jwt'>
            JWT Nodejs
            </Link>
            <Link className='btn ml-5' to='nodemailer'>
            Node Mailer
            </Link>
            </div>
            <div className='mt-10 p-7 mockup-window border bg-base-300'>
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
                <h1 className='text-3xl text-neutral my-5'>Express Hello World </h1>
                <ExpressHello />
            </div>
        </div>
    )
}

export default NodeJs

const ExpressHello = () => {
    const code = `
    const express = require('express')
    const app = express()
    require('dotenv').config()

    const PORT = process.env.PORT || 5000

        app.get('/', (req, res) => {
        res.send('Hello World!')
        })

        app.get('/home' , (req , res) =>{
            res.sendfile(__dirname + '/index.html');
        })
        
        app.listen(PORT, () => {
        console.log('Example app listening')
        }) 
    `
    return (
        <div className="mockup-code mt-5">
            <pre data-prefix="##"><code className='text-green-500'>
                {
                  code  
                }
            </code>
            </pre>
        </div>
    )
}

