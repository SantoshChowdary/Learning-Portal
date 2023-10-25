import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import {dummySchedule} from './dummySchedule'
import { groupScheduleContent } from '../../../../utilities/GroupScheduleContent'
import Loader from '../../../../utilities/loader/loader'
import { AiOutlineFieldTime, AiFillCaretRight } from "react-icons/ai";
import { v4 as uuid } from 'uuid'
import "./index.css"

export const ScheduleContent = () => {
  const [scheduleData, setScheduleData] = useState<any>([])
  const [isContentLoaded, setContentLoadingStatus] = useState(false)


  // eslint-disable-next-line
  const selectedDate = useSelector((state: any) => state.schedule.selectedDate)
  const randomSchedule = Math.floor(Math.random() * dummySchedule.length)
  const res = groupScheduleContent(dummySchedule[randomSchedule])
    
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
                <li key={uuid()} className='scheduled-course-item' 
                  
                >
                  <div className='scheduled-course-item-2' style={{backgroundImage: `url(${courseItem.topicsList[0].unitsList[0].gradientImageUrl})`}}>
                    <p className='schedule-course-name'>{courseItem.courseName}</p>
                  </div>
                    
                    {
                      courseItem.topicsList.map((topicItem : any) => (
                        <div key={uuid()} className='schedule-topic-item' >
                          <p className='schedule-topic-name' >{topicItem.topicName}</p>
                          {
                            topicItem.unitsList.map((unitItem: any) => (
                              <div key={uuid()} className='schedule-unit-item'>
                                <div>
                                  <p className="schedule-unit-name">{unitItem.unitName}</p>
                                  <div className='schedule-timer-icons-div'>
                                    <AiOutlineFieldTime />
                                    <span>{Math.floor(unitItem.unitDuration/60)} Mins</span>
                                  </div>
                                </div>
                                <AiFillCaretRight />
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