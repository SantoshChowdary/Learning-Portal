import React, {useState, useEffect} from 'react'
import SideMenu from '../../SideMenu/MainHomePage'
import { supabase } from '../../../supabase/supabase'
import DisplayGCs from '../DisplayGcs'

import './index.css'

const MyJourney = (props : any) => {
  const [myJourneyGCsData, setMyJourneyGCsData] = useState<any>([])
  const [myJourneyCoursesData, setMyJourneyCoursesData] = useState<any>([])

  const getMyJourneyGCsData = async () => {
    const {data, error} = await supabase.from("growth_cycles").select();
    if (data?.length !== 0){
      setMyJourneyGCsData(data)
    }
  }

  const getMyJourneyCoursesData = async () => {
    const {data, error} = await supabase.from("main_courses").select();
    if (data?.length !== 0){
      setMyJourneyCoursesData(data)
    }
  }

  useEffect(()=> {
      getMyJourneyGCsData();
      getMyJourneyCoursesData()
  }, [])

  return (
    <div className="my-journey-main-section">
        <SideMenu />
        <div className="my-journey-section">
            <h1>My Journey</h1>
            <ul className="my-journey-gcs">
              {
                myJourneyGCsData.map( (growthCycleData : any) => (
                  <DisplayGCs key={growthCycleData.growth_cycle_id} growthCycleData={growthCycleData} myJourneyCoursesData={myJourneyCoursesData} />
                ))
              }
            </ul>
            
        </div>
    </div>
  )
}


export default MyJourney
