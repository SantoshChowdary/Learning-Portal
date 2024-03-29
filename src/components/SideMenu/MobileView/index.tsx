import React, {useState} from 'react';
import './index.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import MainHomeTabs from '../TabsSection';


const MobileViewSideMenu = () => {
    const [isMobileModalOpen, setMobileModalStatus] = useState(false)
    

  return (
    <div className="mobile-side-modal">
        { !isMobileModalOpen && <GiHamburgerMenu className='mobile-sidebar-hamburger' onClick={()=> setMobileModalStatus(!isMobileModalOpen)} />}
        <div style={{display : isMobileModalOpen ? "block" : "none", width: "45vw"}}>
            <button onClick={()=> setMobileModalStatus(!isMobileModalOpen)} className='hamburger-close-button'><RxCross2 /></button>
            <MainHomeTabs />
        </div>
    </div>
  )
}

export default MobileViewSideMenu