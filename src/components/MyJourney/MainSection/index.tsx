import React, {useState, useEffect} from 'react'
import SideMenu from '../../SideMenu/Main'
import { supabase } from '../../../supabase/supabase'
import DisplayGCs from '../DisplayGcs'
import Loader from '../../../utilities/loader/loader'
import MobileViewSideMenu from '../../SideMenu/MobileView'

import './index.css'

const MyJourney = (props : any) => {
  const [myJourneyGCsData, setMyJourneyGCsData] = useState<any>([])
  const [myJourneyCoursesData, setMyJourneyCoursesData] = useState<any>([])
  const [isLoadingMyJourneyData, setMyJourneyLoadingStatus] = useState(true)

  const getMyJourneyGCsData = async () => {
    const {data, error} = await supabase.from("growth_cycles").select();
    if (data?.length !== 0){
      setMyJourneyGCsData(data)
    }
  }

  const getMyJourneyCoursesData = async () => {
    const {data, error} = await supabase.from("main_courses").select();
    if (error?.code) {
      alert(error.message)
      setMyJourneyLoadingStatus(true)
    } else if (data?.length !== 0){
      setMyJourneyCoursesData(data)
      setMyJourneyLoadingStatus(false)
    }
  }

  useEffect(()=> {
      getMyJourneyGCsData();
      getMyJourneyCoursesData()
  }, [])

  return (
    <div className="my-journey-main-section">
        <SideMenu />
        <div className="mobile-hamburger-menu">
          <MobileViewSideMenu />
        </div>
        <div className="my-journey-section">
          {
            isLoadingMyJourneyData ? <Loader /> : 
            <>
              <p className='my-journey-heading'>My Journey</p>
              <ul className="my-journey-gcs">
                {
                  myJourneyGCsData.map( (growthCycleData : any) => (
                    <DisplayGCs key={growthCycleData.growth_cycle_id} growthCycleData={growthCycleData} myJourneyCoursesData={myJourneyCoursesData} />
                  ))
                }
              </ul>
            </>
          }
        </div>
    </div>
  )
}


export default MyJourney
