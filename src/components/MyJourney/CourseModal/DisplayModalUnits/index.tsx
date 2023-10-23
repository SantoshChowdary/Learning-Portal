import React, {useState, useEffect} from 'react'
import { supabase } from '../../../../supabase/supabase'
import { AiFillCaretRight } from "react-icons/ai";

import "./index.css"

const MyJourneyCourseUnits = (courseId : any) => {
  const [topicsData, setTopicsData] = useState<any>([])
  const [unitsData, setUnitsData] = useState<any>([])
  const [activeTopicTab, setActiveTopicTab] = useState<string>("")
  const [isUnitsOpened, setUnitsDisplayStatus] = useState(false)

  const filteredUnitsData: any = unitsData.filter((unit: any) => unit.parent_id === activeTopicTab)
   console.log(activeTopicTab)

  const getTopicsData = async () => {
    const {data, error} : any = await supabase.from("topics").select();
    if (data?.length !== 0){
      setTopicsData(data)
    }
  }

  const getUnitsData = async () => {
    const {data, error} : any = await supabase.from("units").select();
    if (data?.length !== 0){
      setUnitsData(data)
    }
  }

  useEffect(()=> {
    getTopicsData()
    getUnitsData()
  }, [])

  const setActiveTopicStatus = (topicId : string) => {
    if(topicId === activeTopicTab){
      setActiveTopicTab("")
    } else {
      setActiveTopicTab(topicId)
    setUnitsDisplayStatus(!isUnitsOpened)
    }
  }

  return (
    <>
      <ul className='course-modal-units-list'>
        {
          topicsData.map((topic: any) => (
            <li className='course-modal-topic'>
              <div className="course-modal-topic-2" onClick={() => setActiveTopicStatus(topic.topic_id)}>
                <p>{topic.topic_name}</p>
                <AiFillCaretRight />
              </div>
             
              {
                (topic.topic_id === activeTopicTab) ? (
                  <div className="modal-units-list">
                      {
                        filteredUnitsData.map((unitItem : any) => (
                          <p className="modal-unit-item">
                            {unitItem.unit_name}
                          </p>
                        ))
                      }
                  </div>
                ) : null
              }
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default MyJourneyCourseUnits