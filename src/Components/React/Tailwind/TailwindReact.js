import React from 'react'

const TailwindReact = () => {
  return (
    <div >
      <div className="mockup-code p-7">
        <h3 className="text-3xl text-center">Tailwind With Daisyui Installetion</h3>

        <pre data-prefix="$"><code className='text-green-500'>npm install -D tailwindcss</code></pre>
        <pre data-prefix="$"><code className='text-green-500'>npx tailwindcss init</code></pre>
        <pre data-prefix="$"><code className='text-green-500'>npm i daisyui</code></pre>
        <h3 className="text-3xl text-center">Replace into tailwind.config.js file by thats Code</h3>
        <pre data-prefix="$"><code className='text-green-500'>
          {
            `
    module.exports = {
    content: ["./src/**/*.{html,js}"],
    daisyui: {
      themes: [
        {
          mytheme: {

            "primary": "#570DF8",

            "secondary": "#F000B8",

            "accent": "#00FFFF",

            "neutral": "#3D4451",

            "base-100": "#FFFFFF",

            "info": "#3ABFF8",

            "success": "#36D399",

            "warning": "#FBBD23",

            "error": "#F87272",
          },
        },
      ],
      },
      plugins: [require("daisyui")],
      }
            `
          }
        </code></pre>
        <h3 className="text-3xl text-center">Import codes On Your Css File</h3>
        <pre data-prefix="$"><code className='text-green-500'>
          {
            `
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
            `
          }
        </code></pre>

      </div>
    </div>
  )
}

export default TailwindReact