import React from 'react'
import SideMenu from '../../SideMenu/SideBar'
import MainProfileSection from '../ProfileSection/MainPage'
import './index.css'

const Home = () => {
  return (
    <div className="main-homepage-section">
        <SideMenu />
        <div className="homepage-section">
          <div className="daily-schedule-page">
              <h1>Your Schedule</h1>
          </div>
          <div className="home-page-profile-section">
          <MainProfileSection />
          </div>
          
        </div>
    </div>
  )
}

export default Home