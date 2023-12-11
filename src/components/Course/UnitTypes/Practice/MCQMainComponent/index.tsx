import React, {useState} from 'react';
import { McqDummyData } from '../main/MCQDummyData';
import { McqQuestionButton } from '../StyledComponents/styled';

export const MCQMainComponent = (props: any) => {

    const [mcqData, setMcqData] = useState(McqDummyData);
    const [mcqScore, setMcqScore] = useState(0);
    const [noOfQuestionsAttempted, setNoOfQuestionsAttempted] = useState(0);
    const [currentMcqQuestion, setCurrentMcqQuestion] = useState(0);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isSkipped, setIsSkipped] = useState(false);
    const [isAnswerShown, setIsAnswerShown] = useState(false);

    const handleOptionChange = (e : any) => {
        setIsAnswerShown(true);
        if (Math.ceil(Math.random()*10) / 2 === 0) {
            setMcqScore(mcqScore + 1);
        }
        setNoOfQuestionsAttempted(noOfQuestionsAttempted + 1);
        if (currentMcqQuestion < McqDummyData.length){
            setCurrentMcqQuestion(currentMcqQuestion + 1);
        } else {
            props.setIsExamStarted(false);
        }

    }

    const handleShowAnswer = () => {
        setIsAnswerShown(true);
    }


  return (
    <div>
        <div>
            <div>
                <button onClick={() => props.setIsExamStarted(false)}>Back</button>
                <div>
                    <p>Unit Name</p>
                    <p>Practice Instructions</p>
                </div>
            </div>
            <div>
                <p>Score:</p>
                <p>{mcqScore}</p>
            </div>
            <div>
                <p>Questions Attempted: <span>{noOfQuestionsAttempted}</span></p>
                <p>End Practice</p>
            </div>
        </div>
        <p></p>
        <div>
            <div>
                <p>{McqDummyData[currentMcqQuestion].question.content}</p>
                <p></p>
               {
                   McqDummyData[currentMcqQuestion].options.map((option: any) => {
                       return (
                           <div>
                                <input 
                                    type="radio" 
                                    name="mcq" 
                                    id={option.option_id} 
                                    onClick={handleOptionChange} />
                                <label htmlFor={option.option_id}>{option.content}</label>
                           </div>
                       )
                   })
               }
            </div>
            <div>
                <McqQuestionButton onClick={handleShowAnswer}>SHOW ANSWER</McqQuestionButton>
                <McqQuestionButton>SUBMIT</McqQuestionButton>
            </div>
        </div>
    </div>
  )
}


export default MCQMainComponent