import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import WithTitle from "./Components/WithTitle";
import { Login, Register } from './Pages';

// Adding title
const LoginComponent =  WithTitle({ component: Login, title: 'Login' });
const RegisterComponent =  WithTitle({ component: Register, title: 'Cadastro' });

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/signup" element={<RegisterComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
