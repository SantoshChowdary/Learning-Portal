import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineCrown, AiOutlineSlack } from "react-icons/ai";

import "./SingleTab.css"

const SingleTab = (props : any) => {
    const {tabId,slug, tabName} = props.tab

    const changeActiveTabId = () => {
        props.makeActiveTab(tabId)
        localStorage.setItem("activeTabId", tabId)
    }
    const ActiveTabClass = (tabId === props.activeMainTabId) ? "active-tab" : ""

  return (
    <Link to={slug} className="tab-link" onClick={changeActiveTabId}>
        <li className={`tab-list-item ${ActiveTabClass}`}>
            {
                (tabId === props.activeMainTabId) ? <AiOutlineCrown className='tab-icon' /> : <AiOutlineSlack className='tab-icon' />
            }
            <span className="tab-name">{tabName}</span>
        </li>
    </Link>
  )
}

export default SingleTab