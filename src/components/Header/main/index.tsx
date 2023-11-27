import React from 'react'
import "./index.css"
import { Link } from 'react-router-dom'

const Header = () => {

  const setLocalTabNull = () => {
    localStorage.setItem("activeTabId", "");
  }

  return (
    <div className="header-section">
        <div>
          <Link to="/" onClick={setLocalTabNull}>
            <img src="https://media-content.ccbp.in/website/ccbp_website_logos/nxtwave_header_logo.png" alt="nxtwave-header-logo" className="nxtwave-header-logo" />
          </Link>
        </div>
        <div className='header-left-div'>
            <Link to="/"><p>Home</p></Link>
            <p>Testing</p>
            <img src="https://media-content.ccbp.in/ccbp_prod/media/profile_pic/edd3cfcb-5b42-42fd-a45d-c4211955291d.jpeg" alt="header-profile-pic" className="header-profile-pic" />
        </div>
    </div>
  )
}

export default Header