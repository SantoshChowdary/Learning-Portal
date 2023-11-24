import React, {useState} from 'react';
import PythonCodeEditor from '.';
import { PythonProvider, usePython  } from 'react-py'
import "./main.css"

const PythonOutput = () => {
  const [pythonInput, setPythonInput] = useState('')
  const { runPython, stdout, stderr } = usePython()

  const runPythonCode = () => {
    runPython(pythonInput)
  }

  const enableRunButton = () => {
    if (pythonInput !== ""){
      return "block"
    }

    return "none"
  }


  return (
    <div className="python-ace-editor-main">
        <div className="python-editor-section">   
            <PythonCodeEditor onChangePythonCode={setPythonInput} code={pythonInput} />
        </div>
        <div className="python-output-main">
            <button className='python-run-button' onClick={runPythonCode} style={{display : enableRunButton()}}>Run</button>
            <PythonProvider>
            <p style={{marginBottom: "10px"}}>Output</p>
            <pre>
              <code>{stdout}</code>
            </pre>
            {/* <p>Error</p> */}
            <pre>
              <code>{stderr}</code>
            </pre>
            </PythonProvider>
        </div>
    </div>
  )
}

export default PythonOutput