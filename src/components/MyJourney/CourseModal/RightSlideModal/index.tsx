import React, { useState } from 'react';

import './index.css'; 

const RightSlideModal = ({ isOpen, onClose, courseDetails } : any) => {
  const [modalPurposeStatus, setModalPurposeStatus] = useState(true)

  const modalClass = isOpen ? 'right-slide-modal open-slide' : 'right-slide-modal';
  const {course_id, course_title, completion_percentage,availability_status, course_meta_data} = courseDetails
  const courseMetaData = JSON.parse(course_meta_data)

  return (
    <div className={modalClass}>
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
              <li>{item}</li>
            ))
          }
        </ul>
        <div className="modal-main-content">
          <div className='modal-tabs'>
            <p>Course Plan</p>
            <p>Cheat Sheets</p>
            <p>Certification</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSlideModal;
