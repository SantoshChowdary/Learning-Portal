import React, {useState} from 'react'

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";

import "./index.css"

const PythonCodeEditor = ({onChangePythonCode, code} : any) => {
  const [defaultPythonCode, setPythonCode] = useState(code)

  const changePythonCode = (value : string) => {
    setPythonCode(value);
    onChangePythonCode(value)
  }

  return (
    <AceEditor
      mode="python"
      theme="monokai"
      name="Python"
      className='python-web-editor'
      onChange={(value) => changePythonCode(value)}
      fontSize={14.7}
      value={defaultPythonCode}
      showPrintMargin={false}
      showGutter={true}
      highlightActiveLine={false}
      setOptions={{
      useWorker : false,
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      enableSnippets: true,
      showLineNumbers: true,
      }}/>
  )
}

export default PythonCodeEditor