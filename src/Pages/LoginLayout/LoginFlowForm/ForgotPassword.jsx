import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = ({ }) => {
    const navigate = useNavigate();
    const sendCode = () => {
      navigate('/verificationcodesent');
    }
    const signIn = () => {
     navigate('/');
    }
    return (
        <div className='login-form container'>
            <div className='right-content'>
                <h4 className='form-head forgot-ps'>Forgot Password ?</h4>
                <p className='wel-content'>Enter you Email ID to reset it!</p>
            </div>
            <div className='form-box'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email ID here" name='email' />
                    </Form.Group>
                    <Button variant="primary" onClick={() => sendCode()} className='mb-3'>
                        Send Code
                    </Button>
                    <Button variant="primary" onClick={() => signIn()} className='back-sgin-btn'>
                        Back to Signin
                    </Button>
                </Form>
            </div>

        </div>
    )
}

export default ForgotPassword