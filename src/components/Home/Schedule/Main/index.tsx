import React from 'react'
import HorizontalCalendar from '../HorizontalCalendar/Main'
import './index.css'

const MainSchedule = () => {
  return (
    <div>
        <div className="schedule-first-section">
            <div>
                <h1 className='your-schedule'>Your Schedule</h1>
                <span className='date-element'>Fri, 12 May 2023</span>
            </div>
            <div>
              <HorizontalCalendar />
            </div>
        </div>
    </div>
  )
}

export default MainSchedule