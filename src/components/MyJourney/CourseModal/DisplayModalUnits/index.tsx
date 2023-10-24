import React, {useState, useEffect} from 'react'
import { supabase } from '../../../../supabase/supabase'
import { AiFillCaretRight } from "react-icons/ai";
import CompletionCircle from '../../../../utilities/completionCircle';
import Loader from '../../../../utilities/loader/loader';

import "./index.css"

const MyJourneyCourseUnits = (courseId : any) => {
  const [topicsData, setTopicsData] = useState<any>([])
  const [unitsData, setUnitsData] = useState<any>([])
  const [activeTopicTab, setActiveTopicTab] = useState<string>("")
  const [isUnitsOpened, setUnitsDisplayStatus] = useState(false)
  const [isModalResourcesLoaded, setModalResourceLoadingStatus] = useState(true)

  const filteredUnitsData: any = unitsData.filter((unit: any) => unit.parent_id === activeTopicTab)

  const getTopicsData = async () => {
    const {data, error} : any = await supabase.from("topics").select();
    if (data?.length !== 0){
      setModalResourceLoadingStatus(false)
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
      {
        isModalResourcesLoaded ? <Loader /> : 
        <ul className='course-modal-units-list'>
          {
            topicsData.map((topic: any) => (
              <li className='course-modal-topic'>
                <div className="course-modal-topic-2" onClick={() => setActiveTopicStatus(topic.topic_id)}>
                  <div className="course-modal-topic-3">
                    <div className='modal-resource-completion-circle'>
                      <CompletionCircle availability_status={topic.is_topic_locked ? "LOCKED" : ""} completion_percentage={100} />
                    </div>
                    <p>{topic.topic_name}</p>
                  </div>
                  <AiFillCaretRight />
                </div>
              
                {
                  (topic.topic_id === activeTopicTab) ? (
                    <div className="modal-units-list">
                        {
                          filteredUnitsData.map((unitItem : any) => (
                            <div className="modal-unit-item">
                              <div className='modal-unit-completion-circle'>
                                <CompletionCircle availability_status={unitItem.is_unit_locked ? "LOCKED" : ""} completion_percentage={unitItem.completion_status === "COMPLETED" ? 100 : 10} />
                              </div>
                              <span>{unitItem.unit_name}</span>
                            </div>
                          ))
                        }
                    </div>
                  ) : null
                }
              </li>
            ))
          }
        </ul>
      }
    </>
  )
}

export default MyJourneyCourseUnits