import React, {useState, useEffect} from 'react'
import JAVASCRIPTCodeEditor from '.'
import "./consoleOutput.css"

const JSConsoleOutput = () => {
  const [javascriptCode, setJavascriptCode] = useState("");
  const [jsCodeForEval, setJSCodeForEval] = useState("");
  const [jsCodeError, setJSCodeError] = useState<any>({
    isError : false,
    errorText : ""
  })

  

  const capturedLogs: any = [];
  const originalConsoleLog : any = console.log;
  console.log = function (message){
    capturedLogs.push(message);
    originalConsoleLog.apply(console, arguments);
  }

  useEffect(() => {
    return () => {
      console.log = originalConsoleLog;
    };
  }, []);

  useEffect(() => {
    console.log('This message will be captured');
    console.log('Another captured message');

    // Access the captured logs
    console.log('Captured logs:', capturedLogs);
  }, []); 

  const runJSCode = () => {
    setJSCodeForEval(javascriptCode)
    console.log(javascriptCode)
  }


  return (
    <div className="react-ace-js-editor">
      <div className="js-code-editor">
        <JAVASCRIPTCodeEditor  onChangeJsCode={setJavascriptCode} code={javascriptCode}  />
      </div>
      <div className='console-output'>
        <p>Output</p>
      </div>
    </div>
  )
}

export default JSConsoleOutput