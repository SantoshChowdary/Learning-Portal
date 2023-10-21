
export const groupScheduleContent = (contentArr : any) => {
    // console.log(contentArr)

    // const courseItems: any = {};
    // const topicItems: any = {};

    // for (let item of contentArr) {
    //     const topicId = item.unit_details.topics[0].topic_id
    //     const courseId = item.unit_details.topics[0].courses[0].course_id

    //     if (Object.keys(topicItems).includes(topicId)){
    //         topicItems[topicId].push(item)
    //     } else {
    //         topicItems[topicId] = [item]
    //     }

    //     if (Object.keys(courseItems).includes(courseId)){
    //         courseItems[courseId].push(item)
    //     } else {
    //         courseItems[courseId] = [item]
    //     }        
    // }

    const result : any = [];

    const findCourse = (courseId : any) => {
        return result.find((c : any) => c.courseId === courseId)
    }

    const findTopic = (topicsList: any ,topicId : any) => {
        return topicsList.find((t: any) => t.topicId === topicId)
    }

    contentArr.forEach((item : any) => {
        const course: any = findCourse(item.unit_details.topics[0].courses[0].course_id)
        
        if (!course){
            result.push({
                courseId : item.unit_details.topics[0].courses[0].course_id,
                courseName : item.unit_details.topics[0].courses[0].course_name,
                topicsList : []
            })
        }

        const currentCourse : any = findCourse(item.unit_details.topics[0].courses[0].course_id);
        const currentTopicsList: any = currentCourse.topicsList;

        const currentTopic: any = findTopic(currentTopicsList ,item.unit_details.topics[0].topic_id)
        

        if (!currentTopic) {
            currentTopicsList.push({
                topicId : item.unit_details.topics[0].topic_id,
                topicName : item.unit_details.topics[0].topic_name,
                unitsList : []
            })
        }

        const currentUnitsList: any = findTopic(currentTopicsList, item.unit_details.topics[0].topic_id).unitsList

        currentUnitsList.push({
            unitId : item.unit_details.unit_id,
            unitName : item.unit_name,
            unitCompletionPercentage : item.completion_percentage,
            unitCompletionStatus : item.completion_status,
            gradientImageUrl : item.gradient_image_url,
            unitBackGroundColor : item.tag_background_colour,
            unitTagColor : item.tag_colour,
            unitDuration : item.unit_duration_in_seconds,
            unitType : item.unit_type
        })
    })


    return result
}

// date structure
// eslint-disable-next-line
const c = [{
    courseId : "",
    courseName : "",
    topicsList : [
        {
            topicId : "",
            topicName : "",
            topicCompletionPercentage : "",
            numberOfCompletedUnitsInThatTopic : 0,
            unitsList : [
                {
                    unitId : "",
                    unitName : "",
                    unitCompletionPercentage : "",
                    unitType : ""
                }
            ]
        }
    ]
}]


export {}