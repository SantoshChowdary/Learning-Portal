import React, {useState} from 'react';
import './index.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import MainHomeTabs from '../TabsSection';
import ProfileSection from '../SideProfileSection'


const MobileViewSideMenu = () => {
    const [isMobileModalOpen, setMobileModalStatus] = useState(false)
    
  return (
    <div className="mobile-side-modal">
        { !isMobileModalOpen && <GiHamburgerMenu className='mobile-sidebar-hamburger' onClick={()=> setMobileModalStatus(!isMobileModalOpen)} />}
        <div style={{display : isMobileModalOpen ? "block" : "none", width: "45vw", height: "70vh"}}>
            <button onClick={()=> setMobileModalStatus(!isMobileModalOpen)} className='hamburger-close-button'><RxCross2 /></button>
            <MainHomeTabs />
            <ProfileSection />
        </div>
    </div>
  )
}

export default MobileViewSideMenu