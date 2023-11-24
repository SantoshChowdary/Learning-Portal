import React, {useState, useEffect} from 'react'
import JAVASCRIPTCodeEditor from '.'
import { Console, Hook, Unhook } from 'console-feed'
import "./consoleOutput.css"

const JSConsoleOutput = () => {
  const [javascriptCode, setJavascriptCode] = useState("");
  const [logs, setLogs] = useState<any[]>([]);

  useEffect((): any => {
    const hookedConsole = Hook(
      window.console,
      (log) => setLogs((currLogs) => [...currLogs, log]),
      false
    )
    return () => Unhook(hookedConsole)
  }, [javascriptCode])

  const executeCode = () => {
    try{
      setLogs([])
      // eslint-disable-next-line no-eval
      eval(javascriptCode)
    } catch (error){
      console.log(error)
    }
  }

  return (
    <div className="react-ace-js-editor">
      <div className="js-code-editor">
        <JAVASCRIPTCodeEditor onChangeJsCode={setJavascriptCode} code={javascriptCode}  />
      </div>
      <div className='console-output-main'>
      <div className='console-output'>
        <button className='js-run-button' onClick={executeCode}>Execute Code</button>
        <Console logs={logs} variant="dark" styles={{}} />
      </div>
      </div>
    </div>
  )
}

export default JSConsoleOutput