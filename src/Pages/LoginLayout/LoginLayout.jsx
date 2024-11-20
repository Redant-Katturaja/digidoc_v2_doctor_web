import React, { useState } from 'react'
import Assets from '../../Assets/Assets'
import Login from './LoginFlowForm/Login'
import './LoginLayout.css';
import ForgotPassword from './LoginFlowForm/ForgotPassword';
import VerificationCodeSent from './LoginFlowForm/VerificationCodeSent';
import VerifyEmail from './LoginFlowForm/VerifyEmail';
import NewPassword from './LoginFlowForm/NewPassword';

const LoginLayout = ({data}) => {


 console.log("login View------",data)
  return (
    <section className='login-related-layouts row'>
      <div className='col-lg-6 col-md-6 col-sm-12 left-image-bg'>
        <div className='left-image'>
          <img src={Assets.login_logo} alt="Login-left-image" />
        </div>
      </div>
      <div className='col-lg-6 col-md-6 col-sm-12'>
        <div className='right-sec'>
          <div className='login-top-text'>
            <div className='login-logo '>
              <img src={Assets.stethoscope} alt="Logo-section" />
            </div>
          </div>
          <section className='login-form-sec'>
            {data ==='login' ?
              <Login /> : data === 'forgot' ?
              <ForgotPassword /> : data === 'verificationCodeSent' ?
              <VerificationCodeSent /> : data === 'verifyEmail' ? 
              <VerifyEmail /> :
              <NewPassword />
            }
         
          </section>
        </div>
      </div>
    </section>
  )
}

export default LoginLayout