import React, {useEffect, useState} from 'react'
import { DiHtml5, DiCss3, DiJavascript1 } from "react-icons/di";
import HTMLCodeEditor from '../Editors/HTMLCodeEditor';
import CSSCodeEditor from '../Editors/CSSCodeEditor';
import JAVASCRIPTCodeEditor from '../Editors/JAVASCRIPTCodeEditor';
import WidthResizer from '../../../utilities/WidthResizer';

import "ace-builds/esm-resolver";
import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "./index.css"

const WebCodeEditor = () => {
    const HTML = "HTML";
    const CSS = "CSS";
    const JAVASCRIPT = "JAVASCRIPT";

    const defaultHtmlCode = `<!DOCTYPE html>
<html>
  <head></head>
  <body>
    Your code goes here
  </body>
</html>
`
    // const defaultCssCode = `@import url('https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap');`

    const [currentCodeEditor, setCurrentCodeEditor] = useState<string>("HTML");
    const [htmlCode, setHtmlCode] = useState(defaultHtmlCode);
    const [cssCode, setCssCode] = useState("");
    const [javascriptCode, setJavascriptCode] = useState("");
    const [iFrameCode, setIframeCode] = useState(htmlCode);

    useEffect(()=>{
        if(currentCodeEditor === HTML){
            setIframeCode(htmlCode);
        } else if (currentCodeEditor === CSS){
            setIframeCode(`
            <!DOCTYPE html><html><head><style>${cssCode}</style></head><body>${htmlCode}</body>
            </html>
            `)
        } else if (currentCodeEditor === JAVASCRIPT) {
            setIframeCode(`
            <!DOCTYPE html><html><head><style>${cssCode}</style></head><body>${htmlCode} <script>${javascriptCode}</script></body>
            </html>
            `)
        }

    }, [htmlCode, cssCode, javascriptCode, currentCodeEditor])


   
    return (
        <div className="main-web-code-editor" id="main-web-code-editor">
            <div className="web-code-editor" id="web-code-editor">
                <div className="web-code-editor-header">
                    <div className="web-code-languages-div">
                        <p className={`web-editor-tab ${currentCodeEditor===HTML ? "selected-web-tab" : ""}`} onClick={() => setCurrentCodeEditor(HTML)}><DiHtml5 /> <span>HTML</span></p>
                        <p className={`web-editor-tab ${currentCodeEditor===CSS ? "selected-web-tab" : ""}`} onClick={() => setCurrentCodeEditor(CSS)}><DiCss3 /> <span>CSS</span></p>
                        <p className={`web-editor-tab ${currentCodeEditor===JAVASCRIPT ? "selected-web-tab" : ""}`} onClick={() => setCurrentCodeEditor(JAVASCRIPT)}><DiJavascript1 /> <span>JAVASCRIPT</span></p>
                        {/* <button onClick={changeIframeCode}>Run</button> */}
                    </div>
                    <div className='code-editor-operations-div'>

                    </div>
                </div>
                <div className="react-ace-web-editor">
                    {currentCodeEditor===HTML && <HTMLCodeEditor onChangeHtmlCode={setHtmlCode} code={htmlCode} />}
                    {currentCodeEditor===CSS && <CSSCodeEditor onChangeCssCode={setCssCode} code={cssCode} />}
                    {currentCodeEditor===JAVASCRIPT && <JAVASCRIPTCodeEditor onChangeJsCode={setJavascriptCode} code={javascriptCode} />}    
                </div>
                
            </div>
            <WidthResizer />
            <div className='web-output-display' id="web-output-display">
                <iframe id="web-out-iframe" title="web-out-iframe" srcDoc={iFrameCode} />
            </div>
        </div>
    )
}

export default WebCodeEditor