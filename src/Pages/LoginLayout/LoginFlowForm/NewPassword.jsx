import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Assets from '../../../Assets/Assets';
const NewPassword = () => {

    const [eyeOpen, setEyeOpen] = useState(false);

    const [eyeOpenTwo, setEyeOpenTwo] = useState(false);

    const [show, setShow] = useState(false);

    const PasswordSet = (e) => {
        setShow(true)
    }

    const handleClose = () => setShow(false);
    const resetPassword = () => {

    }
    return (
        <div className='login-form container'>
            <div className='right-content'>
                <h4 className='form-head color-txt'>Reset Password</h4>
                <h4 className='form-head'>Set your New Password</h4>
            </div>
            <div className='form-box'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>New Password</Form.Label>
                        <div className='eye-setup'>
                            <Form.Control type={eyeOpen ? 'text' : 'password'} placeholder="Enter New Password" />
                            <img src={eyeOpen ? Assets.eyeOpen : Assets.eyeClose} alt="eye-image" className='eye-img' onClick={() => setEyeOpen(!eyeOpen)} />
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Confirm New Password</Form.Label>
                        <div className='eye-setup'>
                            <Form.Control type={eyeOpenTwo ? 'text' : 'password'} placeholder="Enter Confirm Password" />
                            <img src={eyeOpenTwo ? Assets.eyeOpen : Assets.eyeClose} alt="eye-image" className='eye-img' onClick={() => setEyeOpenTwo(!eyeOpenTwo)} />
                        </div>
                    </Form.Group>
                    <Button variant="primary" onClick={() => resetPassword()} className='mb-3'>
                        Confirm
                    </Button>
                </Form>
            </div>

        </div>
    )
}

export default NewPassword