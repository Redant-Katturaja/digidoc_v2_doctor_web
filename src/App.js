import logo from "./logo.svg";
import "./App.css";
import React, { Suspense, useEffect, useReducer, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "./Layout/DefaultLayout";
import Login from "./Pages/LoginLayout/LoginFlowForm/Login";
import LoginLayout from "./Pages/LoginLayout/LoginLayout";
import LoginRoutes from "./Routes/LoginRoutes";
import LoginView from "./Pages/LoginFlowView/LoginView";

function App() {
  return (
    <div className="App">
      <Router basename="/digidoc">
        <Suspense fallback={<div>Loading...</div>}>
          {/* <Routes>          
            <Route path="/" name="login" element={<LoginView />} />
            <Route path="/*" name="defaultLayout" element={<DefaultLayout />} />
          </Routes> */}
        </Suspense>
        {LoginRoutes.map((data, i) => (
          <Suspense>
            <Routes key={i}>
              <Route
                path={data.path}
                name={data.name}
                element={<data.Element />}
              />
            </Routes>
          </Suspense>
        ))}
      </Router>
    </div>
  );
}

export default App;
