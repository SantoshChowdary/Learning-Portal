import React, {useState, useEffect} from 'react'
import { supabase } from '../../../supabase/supabase'
import SingleTab from './SingleTab'

import './index.css'

const localSavedTabsList : any  = localStorage.getItem("mainHomeTabs");

const MainHomeTabs = (props : any) => {
    const [tabsList, setTabsList] = useState<any>(JSON.parse(localSavedTabsList) || [])
    const activeTabId = localStorage.getItem("activeTabId")
    const [activeMainTabId, setActiveMainTabId] = useState(activeTabId || "31e498c4-e06c-4372-9e20-ac8ebf743a0b")

    const getTabsList = async () => {
        const apiCallForTabs = await supabase.from("main_home_tabs").select()
        if (apiCallForTabs.data?.length !== 0){
            setTabsList(apiCallForTabs.data)
            localStorage.setItem("mainHomeTabs", JSON.stringify(apiCallForTabs.data))
        }
    }

    const makeActiveTab = (id: string) => {
        setActiveMainTabId(id)
    }

    useEffect(() => {
        getTabsList()
    }, [])


  return (
    <div className='main-home-tabs'>
        <ul className="tabs-list">
            {
                tabsList.map( (tab : any) => (
                    <SingleTab key={tab.tabId} tab={tab} activeMainTabId={activeMainTabId} makeActiveTab={makeActiveTab} />
                ))
            }
        </ul>
    </div>
  )
}

export default MainHomeTabs
