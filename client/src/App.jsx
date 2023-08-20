import React from "react";
import { BrowserRouter, Link, Routes, Route} from "react-router-dom";

import { CreateProfile, Landing } from "./pages/Index";
import { LoginSuccess } from "./pages/LoginSuccess";
import HackerView from "./pages/HackerView";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/create-profile" element={<CreateProfile />} />
          <Route exact path="/login/success" element={<LoginSuccess />} />
          <Route path="/hacker-view" element={<HackerView />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>

  );
};

export default App;
