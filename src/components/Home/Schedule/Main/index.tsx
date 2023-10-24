import React from 'react'
import HorizontalCalendar from '../HorizontalCalendar'
import ScheduleContent from '../ScheduleContent'
import { useSelector } from 'react-redux'
import './index.css'

const MainSchedule = () => {
  
  const userSelectedDate: any = useSelector((state : any) => state.schedule.selectedDate)
  const todayDate = new Date(userSelectedDate)
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