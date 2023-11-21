import React, {useState} from 'react'

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

import "./index.css"


const CSSCodeEditor = (props: any) => {
  const {onChangeCssCode, code} = props;
  const [defaultCssCode, setCssCode] = useState(code)

  const changeCssCode = (value : string) => {
    onChangeCssCode(value);
    setCssCode(value)
  }

  return (
    <AceEditor
      mode="css"
      theme="monokai"
      name="css"
      className='css-web-editor'
      onChange={(value) => changeCssCode(value)}
      fontSize={14.5}
      value={defaultCssCode}
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

export default CSSCodeEditor