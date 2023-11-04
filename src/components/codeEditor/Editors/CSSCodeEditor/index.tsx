import React, {useState} from 'react'

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";

import "./index.css"


const CSSCodeEditor = () => {
  const [defaultCssCode, setCssCode] = useState("")

  return (
    <AceEditor
      mode="css"
      theme="monokai"
      name="css"
      className='css-web-editor'
      onChange={(value) => setCssCode(value)}
      fontSize={15}
      value={defaultCssCode}
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

export default CSSCodeEditor