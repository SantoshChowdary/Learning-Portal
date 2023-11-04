import React, {useState} from 'react'

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";

import "./index.css"

const JAVASCRIPTCodeEditor = (props : any) => {
  const [defaultJSCode, setJSCode] = useState("")

  return (
    <AceEditor
      mode="javascript"
      theme="monokai"
      name="javascript"
      className='javascript-web-editor'
      onChange={(value) => setJSCode(value)}
      fontSize={15}
      value={defaultJSCode}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      setOptions={{
      useWorker : false,
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      enableSnippets: true,
      showLineNumbers: true,
      tabSize: 2,
      }}/>
  )
}
export default JAVASCRIPTCodeEditor