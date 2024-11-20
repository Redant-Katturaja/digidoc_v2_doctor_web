import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link ,useNavigate} from 'react-router-dom';

const Login = () => {

    const navigate =useNavigate();

    const forgotPassword = () => {
        navigate('/forgotpassword');
    }
    const signIn = () => {
        navigate('/');
    }

    return (
        <div className='login-form container'>
            <div className='right-content'>
                <p className='wel-content'><span className='color-txt'> Hello! there,</span> Welcome Back</p>
                <h4 className='form-head'>Login</h4>
            </div>
            <div className='form-box'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email ID here" name='email' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password </Form.Label>
                    <Form.Control type="password" placeholder="Enter Password here" name='password' />
                </Form.Group>
                <small className='forgot-text'><Link to={'/forgotPassword'}>Forgot Password?</Link></small>
                <Button variant="primary" onClick={() => signIn()}>
                    Sign in
                </Button>
            </Form>
            </div>
          
        </div>

    )
}

export default Login