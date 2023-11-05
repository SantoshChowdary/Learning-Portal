import React, {useState} from 'react'

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";

import "./index.css"



const HTMLCodeEditor = (props : any) => {
  const {onChangeHtmlCode, code} = props;
  const [defaultHtmlCode, setHTMLCode] = useState(code)

  const changeHtmlCode = (value : string) => {
    onChangeHtmlCode(value);
    setHTMLCode(value)
  }

  return (
    <AceEditor
      mode="html"
      theme="monokai"
      name="html"
      className='html-web-editor'
      onChange={(value) => changeHtmlCode(value)}
      fontSize={15}
      value={defaultHtmlCode}
      showPrintMargin={false}
      showGutter={true}
      highlightActiveLine={false}
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