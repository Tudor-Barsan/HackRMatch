import React from "react";
import { BrowserRouter, Link, Routes, Route} from "react-router-dom";

import { CreateProfile, Landing } from "./pages";
import { LoginSuccess } from "./pages/LoginSuccess";
import HackerView from "./pages/HackerView";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/create-profile" element={<CreateProfile />} />
          <Route exact path="/login/success" element={<LoginSuccess />} />
          <Route path="/hacker-view" element={<HackerView />} />
        </Routes>
    </BrowserRouter>

  );
};

export default App;
