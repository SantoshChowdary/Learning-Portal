import React from 'react'
import HorizontalCalendar from '../HorizontalCalendar'
import ScheduleContent from '../ScheduleContent'
import './index.css'

const MainSchedule = () => {
  const todayDate = new Date()
  return (
    <div>
        <div className="schedule-first-section">
            <div>
                <h1 className='your-schedule'>Your Schedule</h1>
                <span className='date-element'>{todayDate.toLocaleDateString("en-US", {weekday : "short"})}, {todayDate.toLocaleDateString("en-US", {
                  year: "numeric", month: "short", day: "numeric"
                })}</span>
            </div>
            <div className='main-schedule-content-section'>
              <HorizontalCalendar />
              <ScheduleContent />
            </div>
        </div>
    </div>
  )
}

export default MainSchedule