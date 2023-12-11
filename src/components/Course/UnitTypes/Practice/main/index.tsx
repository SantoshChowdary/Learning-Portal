import React, {useState} from 'react'
import { MainMcq, RestartPracticeButton, ResumePracticeButton } from '../StyledComponents/styled';
import InstructionsComponent from './InstructionsComponent';
import MCQMainComponent from '../MCQMainComponent';


export const MCQPractice = (props: any) => {

  const [isExamStarted, setIsExamStarted] = useState(false);

  const showInstructionsPage = () => {
    return (
      <>
        <InstructionsComponent />
        <div>
          <RestartPracticeButton onClick={() => setIsExamStarted(!isExamStarted)}>Restart</RestartPracticeButton>
          <ResumePracticeButton onClick={() => setIsExamStarted(!isExamStarted)}>Resume</ResumePracticeButton>
        </div>
    </>
    )
  }

  return (
    <MainMcq>
      {isExamStarted ? <MCQMainComponent setIsExamStarted={setIsExamStarted} /> : showInstructionsPage()}
    </MainMcq>
  )
}

export default MCQPractice
