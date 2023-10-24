import React from 'react'
import AdditionalCourse from '../Courses'
import './index.css'

const CourseCategory = (props : any) => {
    const {categoryName, courseList} = props

  return (
    <li className="category-section">
        <p className='category-name'>{categoryName}</p>
        <ul className="additional-courses-list">
            {
                courseList.map((course : any) => (
                    <AdditionalCourse key={course.course_id} courseData={course} />
                ))
            }
        </ul>
    </li>
  )
}

export default CourseCategory
