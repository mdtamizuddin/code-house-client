import React from 'react'
import ReactPlayer from 'react-player'

const MailerC = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl py-5 text-primary '>Node Mailer Tutorial</h1>
            <ReactPlayer 
            height={720}
            width='100%'
            controls={true}
            url='https://youtu.be/-nazR-yxaSk' />
        </div>
    )
}

export default MailerC