import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const AdditionalCourse = (props: any) => {
    const {courseData} = props
    console.log(courseData)
  return (
    <Link to={`/course?c_id=${courseData.course_id}`} className="additional-course">
        <img src={courseData.course_thumbnail_url} alt={courseData.course_name} className="other-course-image" />
        <p className="course-name">{courseData.course_name}</p>
        <p className='course-description'>{courseData.course_description}</p>
    </Link>
  )
}

export default AdditionalCourse