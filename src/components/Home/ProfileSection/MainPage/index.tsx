import React from 'react'
import './index.css'

const MainProfileSection = () => {

  const d : Date = new Date()
  const todayDate: string = d.getDate() + "-" + (d.getMonth()+1) + "-" + d.getFullYear()

  return (
    <div className="main-profile-section">
        <div className="profile-first-section">
          <img src="https://media-content.ccbp.in/ccbp_prod/media/profile_pic/edd3cfcb-5b42-42fd-a45d-c4211955291d.jpeg" alt="profile" className='main-profile-image' />
          <div className="profile-second-section">
            <p className="profile-name">Testing</p>
            {/* <p className='daily-rank'>Daily Rank</p> */}
            {/* <p className="profile-date">{todayDate}</p> */}
          </div>
        </div>
        {/* <div className="coins-section">
          <div className="coins-sub-section">
            <img src="" alt="star" className='score-star-image' />
            <div>
              <p>5000</p>
              <p>Points</p>
            </div>
          </div>
        </div> */}
        <div className="store-section">
          <p>Store</p>
          <span>Coming Soon...</span>
        </div>
    </div>
  )
}

export default MainProfileSection