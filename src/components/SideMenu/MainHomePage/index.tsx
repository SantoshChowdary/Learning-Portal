import React from 'react'
import EnrollPlanIcon from '../PlanIcon'
import MainHomeTabs from '../TabsSection'

import "./index.css"

const SideMenu = (props : any) => {
  return (
    <div className="main-homepage-section">
        <div className='main-home-side-section'>
            <EnrollPlanIcon />
            <MainHomeTabs />
        </div>
    </div>
  )
}

export default SideMenu