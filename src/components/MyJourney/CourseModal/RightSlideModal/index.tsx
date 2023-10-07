import React from 'react';

import './index.css'; 

const RightSlideModal = ({ isOpen, onClose, courseDetails } : any) => {
  console.log(courseDetails)
  const modalClass = isOpen ? 'right-slide-modal open-slide' : 'right-slide-modal';
  const {course_id, course_title, completion_percentage,availability_status, course_meta_data} = courseDetails

  return (
    <div className={modalClass}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </div>
      <div>
      <h3>{courseDetails.course_title}</h3>
      </div>
    </div>
  );
};

export default RightSlideModal;
