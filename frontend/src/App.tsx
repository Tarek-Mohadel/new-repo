import { Fragment } from "react";
import { Route, Routes} from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

import Welcome from "./components/Welcome/Welcome";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Chatroom from "./components/Chatroom/Chatroom";
import ErorrModal from "./components/erorr modal/ErorrModal";
import { RootState } from "./redux store";

const App = () => {
  const error = useSelector((state: RootState) => state.error);
  console.log(error)
  return (
    <Fragment>
      {error && <ErorrModal message={error} />}
      <Routes>
        <Route index element={<Welcome />} />
        <Route path="/signup/*" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chatroom" element={<Chatroom />} />
      </Routes>
    </Fragment>
  );
};

export default App;
