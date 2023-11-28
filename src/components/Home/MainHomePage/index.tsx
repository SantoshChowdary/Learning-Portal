import React from 'react'
import SideMenu from '../../SideMenu/Main'
import MainProfileSection from '../ProfileSection/MainPage'
import MainSchedule from '../Schedule/Main'
import MobileViewSideMenu from '../../SideMenu/MobileView'
import './index.css'

const Home = () => {
  return (
    <div className="main-homepage-section">
        <SideMenu />
        <div className="mobile-hamburger-menu">
          <MobileViewSideMenu />
        </div>
        <div className="homepage-section">
          <div className="daily-schedule-page">
              <MainSchedule />
          </div>
          <div className="home-page-profile-section">
            <MainProfileSection />
          </div>
          
        </div>
    </div>
  )
}

export default Home