import React from "react";
import { BrowserRouter, Link, Routes, Route} from "react-router-dom";

import { CreateProfile, Landing } from "./pages";

const App = () => {

  return (
    <BrowserRouter>
      <body>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/create-profile" element={<CreateProfile />} />
        </Routes>
      </body>
    </BrowserRouter>
  );
};

export default App;
