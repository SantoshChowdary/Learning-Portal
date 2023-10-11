import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logOutUserFromSite } from '../../../store/slices/userSlice';
import { BsPersonCheck, BsPauseFill, BsXOctagon, BsFillCaretRightFill } from "react-icons/bs";

import "./index.css"


export const ProfileSection = () => {
  const [profileModalStatus, setProfileModalStatus] = useState(false)
  const userData = useSelector((state : any) => state.user.userData)
  const dispatch = useDispatch()
  const user_name = "test"
  const profileModalDisplayStatus = profileModalStatus ? "block" : "none"

  const displayProfileModal = () => {
    setProfileModalStatus(!profileModalStatus)
  }

  const getLogOutUser = () => {
    dispatch(logOutUserFromSite(false))
  }

  return (
    <div className="user-profile-section" onClick={displayProfileModal}>
        <p className="user-name-letter">{user_name[0]}</p>
        <p className="user-name">{user_name}</p>
        <span className="span-arrow"><BsFillCaretRightFill /></span>
        <ul className="profile-modal" style={{display : profileModalDisplayStatus}}>
            <li><Link to="/edit-profile"><BsPersonCheck /> <span className="profile-option">Profile</span></Link></li>
            {/* <li onClick={()=> alert("")}><BsPauseFill /> <span className="profile-option">Pause Learning</span></li> */}
            <li onClick={getLogOutUser}><BsXOctagon /> <span className="profile-option">Log Out</span></li>
        </ul>
    </div>
  )
}

export default ProfileSection
