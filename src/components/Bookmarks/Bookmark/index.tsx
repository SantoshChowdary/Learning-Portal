import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineDelete } from "react-icons/ai";
import { supabase } from '../../../supabase/supabase';
import './index.css'

const Bookmark = (props : any) => {
    const {bookmarkData, updateBookmarkData} = props
    // eslint-disable-next-line
    const {bookmark_id,unit_id, topic_id, topic_name, course_id, course_name, unit_type, completion_status, unit_name} = bookmarkData
    const unitCompletionStatus = (completion_status === "IN_PROGRESS") ? "In Progress" : "Completed"
    const completionColor = (completion_status === "IN_PROGRESS") ? "blue" : "green"
    // COMPLETED or IN_PROGRESS

    const deleteBookmark = async () => {
        // eslint-disable-next-line
        const {error} = await supabase.from("bookmarks").delete().eq("bookmark_id", bookmark_id)
        updateBookmarkData(bookmark_id)
    }

  return (
    <div className="single-bookmark-section">
        <Link to="/course" className="bookmark-data-div">
            <p className="bookmark-unit-name">{unit_name}</p>
            <p className="bookmark-unit-name bookmark-parent-name">{course_name} - {topic_name}</p>
            <p style={{color: completionColor}} className="unit-status-display">{unitCompletionStatus}</p>
        </Link>
        <div className='bookmark-delete-button-div' onClick={deleteBookmark}>
            <AiOutlineDelete />
        </div>
    </div>
  )
}

export default Bookmark