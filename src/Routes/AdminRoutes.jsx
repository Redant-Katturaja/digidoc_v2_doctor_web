
import React from "react";

const DashboardView = React.lazy(() =>import("./Pages/Home/Home"));
const ForgotPassword = React.lazy(() =>import("./Pages/LoginLayout/LoginFlowForm/ForgotPassword"))


const AdminRoutes = [
    { path: "/", name: "Home", Element: DashboardView },
    // { path: "/forgotpassword", name: "Forgot", Element: ForgotPassword }

  ]

export default AdminRoutes;