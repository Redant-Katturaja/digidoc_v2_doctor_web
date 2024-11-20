
import React from "react";

const LoginView = React.lazy(() =>import("../Pages/LoginFlowView/LoginView"));
const ForgotPassword = React.lazy(() =>import("../Pages/LoginFlowView/ForgotPasswordView"));
const VerificationCodeSent = React.lazy(() =>import("../Pages/LoginFlowView/VerificationCodeSentView"));
const VerifyEmail =React.lazy(()=>import("../Pages/LoginFlowView/VerifyEmailView"));
const NewPassword =React.lazy(()=>import("../Pages/LoginFlowView/NewPasswordView"));


const LoginRoutes = [
    { path: "/", name: "login", Element:LoginView },
    { path: "/forgotpassword", name: "Forgot", Element: ForgotPassword },
    {path: "verificationcodesent", name: "VerificationCodeSent", Element: VerificationCodeSent},
    {path: "verifyemail", name: "VerifyEmail", Element: VerifyEmail},
    {path: "newpassword", name: "NewPassword", Element: NewPassword},

  ]

export default LoginRoutes;