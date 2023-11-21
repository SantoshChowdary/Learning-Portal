import React, {useState} from 'react'
import Header from '../../Header/main'
import WebCodeEditor from '../WebEditor'
import JSConsoleOutput from '../Editors/JAVASCRIPTCodeEditor/consoleOutput'
import Select from 'react-select'
import "./index.css"

export const ReactAceEditor = () => {
  

  const options = [
    {
      value : "Web", label : "Web", id : "WEB"
    },
    {
      value : "JAVASCRIPT", label : "JAVASCRIPT", id : "JAVASCRIPT"
    }
  ]

  const [activeTabId, setActiveTabId] = useState<string | undefined>(options[0].id);

  const getCodeEditor = () => {
    switch (activeTabId) {
      case options[0].id:
        return <WebCodeEditor />
      case options[1].id:
        return <JSConsoleOutput />
      default:
        return <WebCodeEditor />
    }
  }

  return (
    <div>
        <Header />
        {
          getCodeEditor()
        }

        <div className='select-lang-block'>
          <Select
            onChange={e => setActiveTabId(e?.id)}
            options={options}
            defaultValue={options[0]} 
            isSearchable={false}
            styles={{
              menu : (provided, state) => ({
                ...provided,
                top : "auto",
                bottom : 30,
              })
            }}
          />
          <button className='run-button' onClick={()=>console.log("clicked")}>
            Run
          </button>
        </div>
    </div>
  )
}

export default ReactAceEditor