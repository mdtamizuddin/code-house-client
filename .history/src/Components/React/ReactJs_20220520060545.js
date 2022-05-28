import React from 'react'

const ReactJs = () => {
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