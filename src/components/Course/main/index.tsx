import React, {useState, useEffect} from 'react'
import Header from '../../Header/main'
import { supabase } from '../../../supabase/supabase';
import { AiOutlineDoubleLeft, AiOutlineToTop } from "react-icons/ai";
import CompletionCircle from '../../../utilities/completionCircle';
import { AiFillCaretRight, AiOutlineSend } from "react-icons/ai";
import Loader from '../../../utilities/loader/loader';
import { useHistory } from 'react-router-dom';
import "./index.css"
import CourseUnitResources from '../CourseResources';

const localTopicId = localStorage.getItem("localTopicID");
const localUnitId = localStorage.getItem("localUnitID");

const CourseSection = () => {
    const [mainTopicsData, setMainTopicsData] = useState<any>([])
    const [mainUnitsData, setMainUnitsData] = useState<any>([])
    const [activeTopicTab, setActiveTopicTab] = useState<string | null>(localTopicId)
    const [activeUnitId, setActiveUnitId] = useState<string | null>(localUnitId)
    const [isUnitsOpened, setUnitsDisplayStatus] = useState(false)
    const [isCourseResourcesLoaded, setCourseResourceLoadingStatus] = useState(false)
    const [shouldDisplaySideMenu, setDisplaySideMenuStatus] = useState(true)
    const [activeResourceNames, setActiveResourceNames] = useState({
        topicName : "", unitName : ""
    })
    const filteredMainUnitsData: any = mainUnitsData.filter((unit: any) => unit.parent_id === activeTopicTab)
    const history = useHistory();

    const getTopicsData = async () => {
        const {data, error} : any = await supabase.from("topics").select();
        if (data?.length !== 0){
            setCourseResourceLoadingStatus(false)
            setMainTopicsData(data.sort((a : any,b : any) => a.topic_order-b.topic_order))
        }
      }
    
      const getUnitsData = async () => {
        const {data, error} : any = await supabase.from("units").select();
        if (data?.length !== 0){
            setMainUnitsData(data.sort((a : any,b : any) => a.unit_order-b.unit_order))
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
          localStorage.setItem("localTopicID", JSON.stringify(topicId))
          setUnitsDisplayStatus(!isUnitsOpened)
        }
      }

      const setActiveUnitStatues = (unitId : string, unitAvailabilityStatus : string, unitName : string, topicName: string) => {
        if(unitAvailabilityStatus === "LOCKED"){
            setActiveUnitId("")
        } else {
            setActiveUnitId(unitId)
            localStorage.setItem("localUnitID", JSON.stringify(unitId))
            setActiveResourceNames({topicName : topicName, unitName : unitName})
        }
        
      }

      const setSideMenuDisplayStatus = () => {
        setDisplaySideMenuStatus(!shouldDisplaySideMenu)
      }

      const sideMenuDisplay = shouldDisplaySideMenu ? "" : "hide-side-menu";
      const currentUnit = mainUnitsData.find((item : any)=> item.unit_id===activeUnitId)

  return (
    <div className="course-section">
        <Header />
        {
            isCourseResourcesLoaded ? <Loader /> :
            <div className="display-main-course">
                <div className="course-units-side-bar" style={{display : shouldDisplaySideMenu ? "block" : "none"}}>
                    <div className={`course-units-side-bar-1 ${sideMenuDisplay}`}>
                        <div className="course-units-side-bar-2">
                            <AiOutlineDoubleLeft className="course-back-button" onClick={()=>history.goBack()} />
                            <p>CONTENTS</p>
                            <AiOutlineToTop className='rotated-arrow-icon' onClick={setSideMenuDisplayStatus} />
                        </div>
                        <ul className='course-topics-units-list'>
                            {
                                mainTopicsData.map((topic: any) => (
                                <li key={topic.topic_id} className='course-topic-item'>
                                    <div className={`course-topic-2 ${activeTopicTab===topic.topic_id ? "active-topic" : ""}`} onClick={() => setActiveTopicStatus(topic.topic_id)}>
                                        <div className="course-topic-3">
                                            <div className='course-resource-completion-circle'>
                                            </div>
                                            <p className='course-topic-name'>{topic.topic_name}</p>
                                        </div>
                                        {/* {
                                            <CompletionCircle availability_status={topic.is_topic_locked ? "LOCKED" : ""} completion_percentage={0} />
                                        } */}
                                        <AiFillCaretRight className={`${activeTopicTab===topic.topic_id ? "active-topic-arrow" : ""}`} />
                                    </div>
                                    {
                                    (topic.topic_id === activeTopicTab) ? (
                                        <div className="course-units-list">
                                            {
                                            filteredMainUnitsData.map((unitItem : any) => (
                                                <div className={`course-unit-item ${unitItem.unit_id===activeUnitId ? "active-unit-item" : ""}`} onClick={()=>setActiveUnitStatues(unitItem.unit_id, unitItem.is_unit_locked, unitItem.unit_name, topic.topic_name)}>
                                                    <div className='course-unit-completion-circle'>
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
                    </div> 
                </div>
                <div className="course-content-display-section" style={{marginLeft : shouldDisplaySideMenu ? "300px": "0px"}}>
                    <div className="course-content-display-section-2">
                        <div className='course-content-related-section'>
                            {
                                shouldDisplaySideMenu ? null : <AiOutlineSend className="display-side-menu-icon" style={{display : shouldDisplaySideMenu ? "none" : "block"}} onClick={()=>setDisplaySideMenuStatus(!shouldDisplaySideMenu)}  />
                            }
                            <p> {activeResourceNames.topicName} - {activeResourceNames.unitName}</p>
                        </div>
                        <CourseUnitResources currentUnit={currentUnit} />
                    </div>
                </div>
            </div>
        }
    </div>
  )
}

export default CourseSection
