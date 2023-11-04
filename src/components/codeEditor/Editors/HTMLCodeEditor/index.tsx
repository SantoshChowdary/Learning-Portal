import React, {useState} from 'react'

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";

import "./index.css"

const defaultCode = `<!DOCTYPE html>
<html>
  <head></head>
  <body>
    Your code goes here
  </body>
</html>
`

const HTMLCodeEditor = (props : any) => {
  const [defaultHtmlCode, setHTMLCode] = useState(defaultCode)

  return (
    <AceEditor
      mode="html"
      theme="monokai"
      name="html"
      className='html-web-editor'
      onChange={(value) => setHTMLCode(value)}
      fontSize={15}
      value={defaultHtmlCode}
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

export default HTMLCodeEditor