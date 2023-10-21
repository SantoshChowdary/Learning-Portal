import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import {dummySchedule} from './dummySchedule'
import { groupScheduleContent } from '../../../../utilities/GroupScheduleContent'
import Loader from '../../../../utilities/loader/loader'
import { AiOutlineFieldTime } from "react-icons/ai";
import "./index.css"

export const ScheduleContent = () => {
  const [scheduleData, setScheduleData] = useState<any>([])
  const [isContentLoaded, setContentLoadingStatus] = useState(false)


  // eslint-disable-next-line
  const selectedDate = useSelector((state: any) => state.schedule.selectedDate)
  const randomSchedule = Math.floor(Math.random() * dummySchedule.length)
  const res = groupScheduleContent(dummySchedule[randomSchedule])
  console.log(res)

    
  useEffect(()=>{
    setScheduleData(res)
    setContentLoadingStatus(true)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate])


  return (
    <div className="schedule-display-section">
        {
          (!isContentLoaded) ? <Loader /> : (
            <>
              <ul className="scheduled-courses-list">
                {scheduleData.map((courseItem : any) => (
                  <li key={courseItem.courseId} className='scheduled-course-item' style={{backgroundImage: `url(courseItem.topicsList.unitsList[0].gradientImageUrl)`, backgroundColor:`{courseItem.topicsList.unitsList[0].unitBackGroundColor}`}}>
                    <p>{courseItem.courseName}</p>
                    {
                      courseItem.topicsList.map((topicItem : any) => (
                        <div className='schedule-topic-item'>
                          <p>{topicItem.topicName}</p>
                          {
                            topicItem.unitsList.map((unitItem: any) => (
                              <div className='schedule-unit-item'>
                                <div>
                                  <p>{unitItem.unitName}</p>
                                  <div>
                                    <AiOutlineFieldTime />
                                    <span>{Math.floor(unitItem.unitDuration/60)} Mins</span>
                                  </div>
                                </div>
                                
                              </div>
                            ))
                          }
                        </div>
                      ))
                    }
                  </li>
                ))}
              </ul>
            </>
          )
        }
    </div>
  )
}

export default ScheduleContent