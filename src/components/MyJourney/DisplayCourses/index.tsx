import React, {useState} from 'react'
import CompletionCircle from '../../../utilities/completionCircle';
import RightSlideModal from '../CourseModal/RightSlideModal';
import  './index.css'



const DisplayCourses = (props : any) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(!modalOpen);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

    
  return (
    <div>
      <div className="journey-course" role="button" onClick={openModal}>
          <span className="journey-course-name">{props.courseDetails.course_title}</span>
          <div className='journey-course-completion'>
            <CompletionCircle availability_status={props.courseDetails.availability_status} completion_percentage={props.courseDetails.completion_percentage} />
          </div>
      </div>
      <RightSlideModal isOpen={modalOpen} onClose={closeModal} courseDetails={props.courseDetails} />
    </div>
  )
}

export default DisplayCourses