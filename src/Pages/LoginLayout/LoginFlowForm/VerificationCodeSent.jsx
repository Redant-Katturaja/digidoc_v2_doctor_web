import React from 'react'
import { Button } from 'react-bootstrap';
import Assets from '../../../Assets/Assets';
import { useNavigate } from 'react-router-dom';

const VerificationCodeSent = () => {
    const navigate = useNavigate();
    const CodeSent = () =>{
      navigate('/verifyemail');
    }

    return (
        <div className='login-form container'>
            <div className='top-content txt-center mt-3'>
                <img src={Assets.tick_icon} alt="Tick" />
            </div>
            <div className='form-box mt-3' style={{textAlign:"center"}}>
                <p  className='wel-content forgot-ps'>Verification code sent successfully!</p>
                <p className='wel-content '>Please check <span className='color-txt'>test@email.com </span>for Verification Code</p>
                <Button variant="primary" onClick={() => CodeSent()} className=''>
                Enter Verification Code
                </Button>
            </div>

        </div>
    )
}

export default VerificationCodeSent