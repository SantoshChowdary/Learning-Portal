import React, {useState} from 'react'
import { supabase } from '../../../supabase/supabase'

import VideoSession from '../UnitTypes/Session';
import CheatSheet from '../UnitTypes/CheatSheet';
import Exam from '../UnitTypes/Exam';
import MCQPractice from '../UnitTypes/Practice';
import CodingPracticeUnit from '../UnitTypes/CodingPractice';

import './index.css'

const CourseUnitResources = (props : any) => {
  const {currentUnit} = props
  const unitType = currentUnit?.unit_type

  const checkUnitType = () => {
    if (unitType === "LEARNING_SET"){
      return <VideoSession unitDetails={currentUnit} />
    } else if (unitType === "CHEAT_SHEET") {
      return <CheatSheet unitDetails={currentUnit} />
    } else if (unitType === "PRACTICE"){
      return <MCQPractice unitDetails={currentUnit} />
    } else if (unitType === "QUESTION_SET"){
      return <CodingPracticeUnit unitDetails={currentUnit} />
    } else if (unitType === "EXAM"){
      return <Exam unitDetails={currentUnit} />
    }
  }

  return (
    <div className="course-unit-content">
        {checkUnitType()}
    </div>
  )
}

export default CourseUnitResources