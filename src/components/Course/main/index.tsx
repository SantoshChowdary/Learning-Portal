import React from 'react'
import Header from '../../Header/main'
import { AiOutlineDoubleLeft, AiOutlineToTop } from "react-icons/ai";
import "./index.css"

const CourseSection = () => {
  return (
    <div className="course-section">
        <Header />
        <div className="display-main-course">
            <div className='course-units-side-bar'>
                <div className='course-units-side-bar-1'>
                    <div className='course-units-side-bar-1'>
                        
                    </div>
                </div>
            </div>
            <div className="course-content-display-section">
                <div className="display-topic-unit-names">
                    <AiOutlineDoubleLeft />
                    <p>CONTENTS</p>
                    <AiOutlineToTop className='rotated-arrow-icon' />
                </div>
                <div className='course-content-related-section'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default CourseSection
