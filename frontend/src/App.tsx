import { Route, Routes, Navigate } from "react-router-dom";

import Welcome from "./components/Welcome/Welcome";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="/welcome" />} /> */}
      <Route index element={<Welcome />} />
      <Route path="/signup/*" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
