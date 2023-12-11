import React from 'react'
import EnrollPlanIcon from '../PlanIcon'
import MainHomeTabs from '../TabsSection'
import ProfileSection from '../SideProfileSection'

import "./index.css"

const SideMenu = (props : any) => {

  return (

      <div className="main-homepage-section">
          <div className='main-home-side-section'>
              <EnrollPlanIcon />
              <MainHomeTabs />
              <ProfileSection />
          </div>
      </div>
  )
}

export default SideMenu