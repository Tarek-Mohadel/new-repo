import { Fragment } from "react";
import { Route, Routes} from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

import Welcome from "./components/Welcome/Welcome";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Users from "./components/Chat/Users/Users";
import ErorrModal from "./components/erorr modal/ErorrModal";
import ChatModal from "./components/Chat/ChatModal/ChatModal";
import { RootState } from "./redux store";

const App = () => {
  const error = useSelector((state: RootState) => state.error);
  const chat = useSelector((state: RootState)=> state.chat)

  return (
    <Fragment>
      {error && <ErorrModal message={error} />}
      {chat.show && <ChatModal name={chat.user.name} />}
      <Routes>
        <Route index element={<Welcome />} />
        <Route path="/signup/*" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Fragment>
  );
};

export default App;
