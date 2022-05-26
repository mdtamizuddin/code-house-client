import React, { useState } from 'react'
import 'codemirror/mode/javascript/javascript';
import { Controlled as CodeMirror } from 'react-codemirror2'
const Codemirror = () => {
    const [code, setCode] = useState('')

    const handleChange = (editor, data, value) => {
        onchange = { value }
    }
    return (
        <div>
            <CodeMirror
                value={code}
                options={{
                    mode: 'javascript',
                    theme: 'material',
                    lineNumbers: true
                }}
                onBeforeChange={(editor, data, value) => {
                    setCode(value)
                }}
                onChange={(editor, data, value) => {
                    setCode(value)
                }}
            />

        </div>
    )
}

export default Codemirror