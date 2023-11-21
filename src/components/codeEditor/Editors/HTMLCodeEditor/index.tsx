import React, {useState, useEffect} from 'react'

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

  useEffect(()=>{
    const htmlEditorId: any = document.getElementById("html-web-editor");
    htmlEditorId.style.width = "inherit";
    htmlEditorId.style.height = "inherit";
    
    const aceCursor: any = document.getElementsByClassName("ace_cursor");
    aceCursor[0].style.marginLeft = "1px";
  })

  return (
    <AceEditor
      mode="html"
      theme="monokai"
      name="html-web-editor"
      className='html-web-editor'
      onChange={(value) => changeHtmlCode(value)}
      fontSize={16}
      tabSize={4}
      focus={true}
      value={defaultHtmlCode}
      showPrintMargin={false}
      showGutter={true}
      highlightActiveLine={false}
      readOnly={false}
      setOptions={{
      useWorker : false,
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      enableSnippets: true,
      showLineNumbers: true,
      enableEmmet: true
      }}/>
  )
}

export default HTMLCodeEditor