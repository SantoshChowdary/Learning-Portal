import React, {useEffect, useState} from 'react'
import { DiHtml5, DiCss3, DiJavascript1 } from "react-icons/di";
import HTMLCodeEditor from '../Editors/HTMLCodeEditor';
import CSSCodeEditor from '../Editors/CSSCodeEditor';
import JAVASCRIPTCodeEditor from '../Editors/JAVASCRIPTCodeEditor';

import AceEditor from "react-ace";
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
    const JAVASCRIPT = "JAVASCRIPT"

    const [currentCodeEditor, setCurrentCodeEditor] = useState<string>("HTML");
    const [htmlCode, setHtmlCode] = useState("");
    const [cssCode, setCssCode] = useState("");
    const [javascriptCode, setJavascriptCode] = useState("");


    return (
        <div className="main-web-code-editor">
            <div className="web-code-editor">
                <div className="web-code-editor-header">
                    <div className="web-code-languages-div">
                        <p className={`web-editor-tab ${currentCodeEditor===HTML ? "selected-web-tab" : ""}`} onClick={() => setCurrentCodeEditor(HTML)}><DiHtml5 /> <span>HTML</span></p>
                        <p className={`web-editor-tab ${currentCodeEditor===CSS ? "selected-web-tab" : ""}`} onClick={() => setCurrentCodeEditor(CSS)}><DiCss3 /> <span>CSS</span></p>
                        <p className={`web-editor-tab ${currentCodeEditor===JAVASCRIPT ? "selected-web-tab" : ""}`} onClick={() => setCurrentCodeEditor(JAVASCRIPT)}><DiJavascript1 /> <span>JAVASCRIPT</span></p>
                    </div>
                    <div className='code-editor-operations-div'>

                    </div>
                </div>
                <div className="react-ace-web-editor">
                    {currentCodeEditor===HTML && <HTMLCodeEditor />}
                    {currentCodeEditor===CSS && <CSSCodeEditor />}
                    {currentCodeEditor===JAVASCRIPT && <JAVASCRIPTCodeEditor />}
                    
                </div>
            </div>
        </div>
    )
}

export default WebCodeEditor