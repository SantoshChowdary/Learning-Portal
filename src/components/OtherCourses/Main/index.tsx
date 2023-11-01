import React, {useEffect, useState} from 'react'
import SideMenu from '../../SideMenu/Main'
import Loader from '../../../utilities/loader/loader'
import { supabase } from '../../../supabase/supabase'
import CourseCategory from '../CourseCategory'
import './index.css'

const OtherCourses = () => {
    const [otherCoursesData, setOtherCoursesData] = useState<any>([])
    const [isOtherCoursesLoading, setOtherCoursesLadingStatus] = useState(true)
    const [courseCategoryList, setCourseCategoryList] = useState<any>([])

    const getOtherCoursesData = async () => {
        const {data, error} = await supabase.from("other_courses").select()
        if (error?.code) {
            alert(error.message)
            // setOtherCoursesLadingStatus(true)
          } else if (data?.length !== 0){
            setOtherCoursesData(data)
            setOtherCoursesLadingStatus(false)
          }
    }

    const getCourseCategoryList = async () => {
        const {data, error} = await supabase.from("coursecategory").select()
        if (error?.code) {
            alert(error.message)
            setOtherCoursesLadingStatus(true)
          } else if (data?.length !== 0){
            setCourseCategoryList(data)
            setOtherCoursesLadingStatus(false)
          }
    }

    useEffect(()=> {
        getOtherCoursesData()
        getCourseCategoryList()
    }, [])


  return (
    <div className="other-courses-tab">
        <SideMenu />
        <div className="other-courses-section">
            {
                isOtherCoursesLoading ? <Loader /> : (
                    <ul className="course-category-main-section">
                        {courseCategoryList.map((item : any) => (
                            <CourseCategory key={item.course_program_name} categoryName={item.course_program_name} courseList={otherCoursesData.filter((course: any) => course.course_program_name === item.course_program_name)} />  
                        ))}
                    </ul>
                )
            }
        </div>
    </div>
  )
}

export default OtherCourses