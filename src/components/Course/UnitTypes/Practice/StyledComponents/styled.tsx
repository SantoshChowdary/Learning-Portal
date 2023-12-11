import {styled, css} from "styled-components"

export const MainMcq = styled.div`
    width : inherit;
    min-height : calc(100vh - 90px);
    // background-color : #edf9fa;
`
export const InstructionsDiv = styled.div`
    width : 80%;
    padding : 20px;
    background-color : white;
    border-radius : 10px;
`
export const RestartPracticeButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 186px;
    height: 36px;
    border-radius: 4px;
    padding: 6px 20px;
    background-color: rgb(204, 248, 255);
    margin-right: 20px;
    color: rgb(0, 200, 255);
    font-weight: 600;
    cursor: pointer;
`
export const ResumePracticeButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 186px;
    height: 36px;
    border-radius: 4px;
    box-shadow: rgba(239, 199, 169, 0.5) 0px 0px 5px 0px;
    background-color: rgb(255, 131, 35);
    color: white;
    font-weight: 600;
    cursor: pointer;
`
export const McqOptionLabel = styled.label`
    margin-left : 10px;
    font-size : 14px;
`
export const OptionContent = styled.p`
    font-size : 16px;
`
export const QuestionBreakLine = styled.div`
    margin-top: 10px;
    width: 100%;
    border: 1px solid rgb(221, 234, 244);
`
export const McqQuestionButton = styled.div`
    width: 218px;
    height: 34px;
    background-color: rgb(22, 101, 216);
    border-radius: 5.4px;
    box-shadow: rgba(0, 0, 0, 0.36)
`

export {}