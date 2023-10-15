import React, {useEffect, useRef} from 'react'
import AdditionalCourse from '../Courses'
import './index.css'

const CourseCategory = (props : any) => {
    const {categoryName, courseList} = props
    const elementRef: any = useRef(null)

    // useEffect(()=> {
    //     console.log(elementRef.current.getBoundingClientRect())
    //     if(elementRef.current){
    //         const elementWidth = elementRef.current.getBoundingClientRect().width;
    //         const parentWidth = elementRef.current.parentElement.getBoundingClientRect().width;
    //         console.log(elementWidth, parentWidth)
    //     }
    // }, [elementRef])

  return (
    <li className="category-section">
        <p className='category-name'>{categoryName}</p>
        <ul className="additional-courses-list" ref={elementRef}>
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
