import React, { useState } from 'react';
import './main.css';

function SignIn() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value)
  };

  const key = process.env.REACT_APP_API_KEY
  console.log(key)
  
  const checkValidPhoneNumber = (number = "" ) : boolean => {
    if ( typeof(number) === "string" &&  number.length === 10){
        const firstDigit = parseInt(number[0]);
        if ( firstDigit >= 5 && firstDigit<=9){
            for (let i=1; i<number.length; i++){
                const char = number.charAt(i);
                if (isNaN(parseInt(char))){
                    return false
                }
            }
            return true
        }
    }


    return false
  }
  let isValidPhoneNumber = checkValidPhoneNumber(phoneNumber);

  const handlePassword = () => {
    
  };

  return (
    <div className="sign-in-section">
        <div className="sign-in-section-1">
            <div>
                <img src="https://nxtwave.imgix.net//logos/Nxtwave_90_48.png" alt="nxtwave-logo" className="nxtwave-logo" />
            </div>
            <div className="sign-in-section-2">
                <form className="sign-in-form-section">
                    <p className="login-heading">Login / Sign Up</p>
                    <div className='input-div'>
                        <label htmlFor="phoneNumber">Please enter a valid mobile number</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            autoComplete='off'
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                            // onBlur={()=>alert("npd")}
                        />
                        <button
                            type="button"
                            className="get-otp-button"
                            onClick={handlePassword}
                            disabled={phoneNumber.length !== 10 || !isValidPhoneNumber}
                        >
                            Continue
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
}

export default SignIn;
