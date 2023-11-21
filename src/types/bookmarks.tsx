export type bookmarkType = {
    bookmark_id : string,
    completion_status : "COMPLETED" | "IN_PROGRESS",
    course_id : string,
    course_name : string,
    topic_id : string,
    topic_name : string,
    unit_id : string,
    unit_name : string,
    unit_type : "LEARNING_SET" | "CHEAT_SHEET" | "PRACTICE" | "QUESTION_SET"
}

export type bookmarkProps = {
    
}

export default {}