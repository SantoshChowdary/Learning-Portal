import React, { useState } from 'react';
import {useHistory, Redirect, Link} from 'react-router-dom'
import {supabase} from '../../../supabase/supabase'
import Loader from '../../../utilities/loader/loader';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserLoggedStatus, addUserToDB } from '../../../store/slices/userSlice';
import './main.css';
import { PhoneNumberValidator } from '../../../utilities/phoneNumberValidator';


const SignIn = (props: any) => {
  const [phoneNumber, setPhoneNumber] = useState("9866021291");
  const [password, setPassword] = useState("santosh")
  const [isLoading, setLoadingStatus] = useState(false)
  const history = useHistory()
  const dispatch = useDispatch()
  const isUserAuthenticated = useSelector((state:any) => state.user.isUserLoggedIn) 

  const handlePassword = async (e : React.ChangeEvent<HTMLFormElement>) => {
        setLoadingStatus(true)
        e.preventDefault()
        const apiCall = await supabase.from('user_authentication').select().eq('mobile_number', phoneNumber).eq("password", password)
        const checkValidUserInDB = await supabase.from('user_authentication').select().eq('mobile_number', phoneNumber)
        if ( apiCall.status === 200 ){
            setLoadingStatus(false)
            if (apiCall.data?.length === 0 && checkValidUserInDB.data?.length === 0){
                history.push("/signup")
            } else if (apiCall.data?.length === 0 && checkValidUserInDB.data?.length !== 0){
                alert("Invalid Password")
            } else if (apiCall.data?.length !== 0 && checkValidUserInDB.data?.length !== 0){
                dispatch(updateUserLoggedStatus(true))
                dispatch(addUserToDB(apiCall.data))
                history.replace("/")
            }
        }

  };

  if (isUserAuthenticated){
    return <Redirect to="/" />
  }

  return (
    <div className="sign-in-section">
        <div className="sign-in-section-1">
            <div>
                <img src="https://nxtwave.imgix.net//logos/Nxtwave_90_48.png" alt="nxtwave-logo" className="nxtwave-logo" />
            </div>
            <div className="sign-in-section-2">
                <form className="sign-in-form-section" onSubmit={handlePassword}>
                    <p className="login-heading">Login / Sign Up</p>
                    <div className='input-div'>
                        <label htmlFor="phoneNumber">Please enter a valid mobile number</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            autoComplete='off'
                            value={phoneNumber}
                            onChange={e => setPhoneNumber(e.target.value)}
                        />

                        <label htmlFor="UserPassword">Your password</label>
                        <input
                            type="password"
                            id="UserPassword"
                            name="password"
                            autoComplete='off'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="get-otp-button"
                            disabled={ (PhoneNumberValidator(phoneNumber)) && (password.length>0) ? undefined : true }
                        >
                            {isLoading ? <Loader /> : "Continue"}
                        </button>
                    </div>
                    <span><Link to="signup">First time! SignUp</Link></span>
                </form>
            </div>
        </div>
    </div>
  );
}

export default SignIn;
