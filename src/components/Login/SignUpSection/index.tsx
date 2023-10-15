import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {addUserToDB,updateUserLoggedStatus} from '../../../store/slices/userSlice'
import { BiArrowBack } from "react-icons/bi";
import { PhoneNumberValidator } from '../../../utilities/phoneNumberValidator';
import {supabase} from '../../../supabase/supabase'


import './index.css'
import '../SignInSection/main.css'

const SignUp = (props: any) => {
    const [newUserData, setNewUserData] = useState({
        userName : "",
        phoneNumber : "",
        email : "",
        userPassword : ""
    })
    const [TNCStatus, setTNCStatus] = useState(false)
    const history = useHistory()
    const dispatch = useDispatch()
    // const useSelect = useSelector((state: any) => state.user.userData)

    const changeTNCStatus = (e : React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked){
            setTNCStatus(true)
        } else {
            setTNCStatus(false)
        }
    }

    const verifyButtonDisable = () : boolean => {
        const { userName, email, userPassword, phoneNumber } = newUserData
        if (userName.length > 0 && email && PhoneNumberValidator(phoneNumber) && userPassword && TNCStatus){
            return false
        } return true
    }
    const verifyButtonStatus = verifyButtonDisable()

    const submitUserDetails = async (e : React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()

        const {error} = await supabase.from("user_authentication").insert({
                                    user_name : newUserData.userName,
                                    mobile_number : newUserData.phoneNumber,
                                    email : newUserData.email,
                                    password : newUserData.userPassword
                                })
        if (error === null){
            // dispatch(addUserToDB(newUserData))
            // dispatch(updateUserLoggedStatus(true))
            history.push("/login")
        } else if (error.details) {
            alert(error.details + "in data base")
        }

    }

  return (
    <div className="sign-in-section">
        <div className="sign-in-section-1">
            <div>
                <img src="https://nxtwave.imgix.net//logos/Nxtwave_90_48.png" alt="nxtwave-logo" className="nxtwave-logo" />
            </div>
            <div className="sign-in-section-2">
                <form className="sign-up-form-section" onSubmit={submitUserDetails}>
                    <div className="sign-up-section-1">
                        <button type="button" className="sign-up-back-button" onClick={()=>history.goBack()}>
                            <BiArrowBack />
                        </button>
                        <div className='sign-up-heading'>
                            <p>Sign Up</p>
                        </div>
                    </div>
                    {/* <p className="number-display">Please create a password for <br /> number <span>+91 5000000000</span>.</p> */}
                    <label htmlFor="setup-account-name" className='password-label'>Your name</label>
                    <input
                        autoComplete='off'
                        id="setup-account-name"
                        className='setup-account-details'
                        onChange={(e)=> setNewUserData({...newUserData, userName: e.target.value})}
                    />

                    <label htmlFor="setup-account-email" className='password-label'>Email address</label>
                    <input
                        autoComplete='off'
                        id="setup-account-email"
                        className='setup-account-details'
                        onChange={(e)=> setNewUserData({...newUserData, email: e.target.value})}
                    />

                    <label htmlFor="setup-account-number" className='password-label'>Your 10 digit mobile number</label>
                    <input
                        type='digit'
                        autoComplete='off'
                        id="setup-account-number"
                        className='setup-account-details'
                        onChange={(e)=> setNewUserData({...newUserData, phoneNumber: e.target.value})}
                    />

                    <label htmlFor="setup-account-password" className='password-label'>Password</label>
                    <input
                        type='text'
                        minLength={6}
                        maxLength={10}
                        autoComplete='off'
                        id="setup-account-password"
                        className='setup-account-details'
                        onChange={(e)=> setNewUserData({...newUserData, userPassword: e.target.value})}
                    />
                    <div className="TNC-div">
                        <input
                            type='checkbox'
                            id="agreeTNC"
                            checked={TNCStatus}
                            onChange={changeTNCStatus}
                        />
                        <label htmlFor="agreeTNC">
                            I agree to Terms & Conditions and Privacy Policy
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="verify-submit-button"
                        disabled={verifyButtonStatus}
                    >
                        Verify & Sign up
                    </button>

                    <a 
                        href="http://www.google.com" 
                        rel="noreferrer" 
                        target='_blank' 
                        className='trouble-login-form'>
                        Trouble logging in?
                    </a>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignUp