import React from 'react'
import ReactPlayer from 'react-player'

const MongooseC = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl pt-5 text-primary '>Learn Mongoose Full CRUD Oparetion in One Video</h1>
            <h1 className='text-xl py-5 text-secondary'>Learn With Sumith</h1>
            <ReactPlayer
                height={720}
                width='100%'
                controls={true}
                url='https://youtu.be/BtCGiEHzdfk' />
        </div>
    )
}

export default MongooseC