import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import OTPInput from 'react-otp-input';

const VerifyEmail = () => {
    const navigate = useNavigate();

    const Verify = () => {
        navigate('/newpassword')
    }
    const [otp, setOtp] = useState("");

    const handleChange = (otp) => {
        setOtp(otp);
        console.log("Entered OTP:", otp);
    };

    return (
        <div className='login-form container'>
            <div className='right-content'>
                <h4 className='form-head color-txt'>Verify Email</h4>
                <p className='wel-content'>Please enter the Password reset code below <br /> that was sent to <span className='color-txt'>abcxxx@gmail.com</span> </p>

            </div>
            <div className='form-box'>
             <p >Enter Verification Code</p>
                <div style={{ display:"flex",justifyContent: "center" }}>
                    <OTPInput
                        value={otp}
                        onChange={handleChange}
                        numInputs={4} // Number of OTP fields
                        separator={<span style={{ margin: "0 8px" }}>-</span>} // Optional separator
                        renderInput={(props) => <input {...props} />}
                        inputStyle={{
                            width: "40px",
                            height: "40px",
                            margin: "10px 5px",
                            fontSize: "18px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                            justifyContent: 'center'
                        }}
                        focusStyle={{
                            border: "1px solid #007BFF",
                            outline: "none",
                        }}
                    />
                </div>
                <Button variant="primary" onClick={() => Verify()} className='mt-3'>
                    Verify
                </Button>

            </div>

        </div>
    )
}

export default VerifyEmail