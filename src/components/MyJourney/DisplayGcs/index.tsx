import React from 'react'
import DisplayCourses from '../DisplayCourses'

import './index.css'

const DisplayGCs = (props : any) => {
    const {growthCycleData, myJourneyCoursesData} = props
    const {completion_percentage, end_datetime, growth_cycle_name,growth_cycle_id, next_growth_cycle_id, start_datetime, total_days_count} = growthCycleData
    const startDate = new Date(start_datetime);
    const endDate = new Date(end_datetime);
    const sD = startDate.getDate() + "-" + (startDate.getMonth()+1) + "-" + startDate.getFullYear()
    const eD = endDate.getDate() + "-" + (endDate.getMonth()+1) + "-" + endDate.getFullYear()

  return (
    <li className="growth-cycle-display">
        <div className='gc-display-section-1'>
            <div className="gc-display-section-2">
                <h4>{growth_cycle_name}</h4>
                <span>( {sD} to {eD} ) - {total_days_count} days</span>
            </div>
            <div>
                <span className='completion-percentage-bar'></span>
                <span className='completion-percentage'>{Math.round(completion_percentage)}%</span>
            </div>
        </div>
        <ul className="display-journey-courses">
            {
                myJourneyCoursesData.filter((i : any) => i.growth_cycle_id === growth_cycle_id).map( (item: any) => (
                    <DisplayCourses key={item.course_id} courseDetails={item} />
                ) )
            }
        </ul>
    </li>
  )
}

export default DisplayGCs