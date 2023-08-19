import React from "react";
import { BrowserRouter, Link, Routes, Route} from "react-router-dom";

import { CreateProfile, Landing } from "./pages";
import Login from "./pages/Login";
import { LoginSuccess } from "./pages/LoginSuccess";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/create-profile" element={<CreateProfile />} />
          <Route path="/auth/login" element={<Login />} />
          <Route exact path="/login/success" element={<LoginSuccess />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
