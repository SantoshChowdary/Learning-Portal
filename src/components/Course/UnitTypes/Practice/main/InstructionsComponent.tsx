import React from 'react'
import {
    InstructionsDiv
} from '../StyledComponents/styled'

export const InstructionsComponent = () => {
  return (
    <InstructionsDiv>
        <p>Instructions :</p>
        <ol>
          <li>
            <b>Number of Questions : </b>15
          </li>
          <li>
            <b>Types of Questions : </b>MCQs
          </li>
          <li>
            <b>Marking Scheme : </b>All questions have equal weightage. Every correct response gets +5 marks. If you select show answer option, 1 mark will be deducted
          </li>
          <li>
            <b>Negative Marking : </b>For each incorrect answer, 1 mark will be deducted. No negative marking in case of an unattempted question
          </li>
        </ol>
      </InstructionsDiv>
  )
}


export default InstructionsComponent