import React, { useState, useRef, useEffect } from 'react';
import MyJourneyCourseUnits from '../DisplayModalUnits';
import './index.css'; 

const RightSlideModal = ({ isOpen, onClose, courseDetails } : any) => {
  const [modalPurposeStatus, setModalPurposeStatus] = useState(true)
  // let COURSE_PLAN = "COURSE_PLAN", CHEAT_SHEETS = "CHEAT_SHEETS", CERTIFICATION = "CERTIFICATION"
  const [activeModalTab, setActiveModalTab] = useState<number>(0);
  const modalRef : any = useRef(null)

  const modalTabsList = ["Course Plan", "Cheat Sheets", "Certification"]
  

  const modalClass = isOpen ? 'right-slide-modal open-slide' : 'right-slide-modal';
  // eslint-disable-next-line
  const {course_id, course_title, completion_percentage,availability_status, course_meta_data} = courseDetails
  const courseMetaData = JSON.parse(course_meta_data)

  const handleModalActiveTab = (index : number) => {
    setActiveModalTab(index)
  }

  useEffect(()=> {
    const handleClickOutside = (event : React.MouseEvent) => {
      if(modalRef.current && !modalRef.current.contains(event.target)){
        onClose();
      }  
    }
    document.addEventListener("mousedown", (e: any) => handleClickOutside(e))
    return ()=> {
      document.removeEventListener("mousedown", (e: any) => handleClickOutside(e))
    }

  }, [isOpen, onClose])


  return (
    <div className={modalClass} ref={modalRef}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </div>
      <div className='course-modal-content'>
        <p className="modal-course-name">{courseDetails.course_title}</p>
        <div className='course-completion-percentage-div'>
            <div className='completion-percentage-bar'><span style={{width : `${completion_percentage}%`}}></span></div>
            <span className='completion-percentage'>{Math.round(completion_percentage)}%</span>
        </div>
        <p className='modal-course-outcome'>Outcome</p>
        <span className="modal-outcome-content">
          {courseMetaData.outcome}
        </span>
        <p className='modal-course-purpose' onClick={()=> setModalPurposeStatus(!modalPurposeStatus) }>Purpose of the course {modalPurposeStatus ? <span>&rarr;</span> : <span>&darr;</span>}</p>
        <ul className="modal-course-purpose-content" style={{display: (modalPurposeStatus ? "none" : "block")}}>
          {
            courseMetaData.why_this_course.map( (item : any) => (
              <li key={item}>{item}</li>
            ))
          }
        </ul>
        <div className="modal-main-content">
          <div className='modal-tabs'>
            {
              modalTabsList.map( (item: string, index) => (
                <p key={index} onClick={() => handleModalActiveTab(index)}
                  className={(activeModalTab===index) ? "active-modal-tab modal-tab" : "modal-tab"}
                >
                  {item}
                </p>
              ))
            }
          </div>
        </div>
        <div className='modal-resource-display'>
          <MyJourneyCourseUnits courseId={course_id} />
        </div>
      </div>
    </div>
  );
};

export default RightSlideModal;
