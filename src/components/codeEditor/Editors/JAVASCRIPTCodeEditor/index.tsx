import React, {useState} from 'react'

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/esm-resolver";
import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/mode-javascript";

import "./index.css"

const JAVASCRIPTCodeEditor = (props : any) => {
  const {onChangeJsCode, code} = props;
  const [defaultJSCode, setJSCode] = useState(code)

  const changeJsCode = (value : string) => {
    onChangeJsCode(value);
    setJSCode(value)
  }

  return (
    <AceEditor
      mode="javascript"
      theme="monokai"
      name="javascript"
      className='javascript-web-editor'
      onChange={(value) => changeJsCode(value)}
      fontSize={14.7}
      value={defaultJSCode}
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
export default JAVASCRIPTCodeEditor