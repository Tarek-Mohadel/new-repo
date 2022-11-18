import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

import { RootState } from "./redux store";

const Welcome = React.lazy(()=> import("./components/Welcome/Welcome"));
const SignUp = React.lazy(()=> import("./components/SignUp/SignUp"));
const Login = React.lazy(()=> import("./components/Login/Login"));
const Users = React.lazy(()=> import("./components/Chat/Users/Users"));
const ErorrModal = React.lazy(()=> import("./components/erorr modal/ErorrModal"));
const ChatModal = React.lazy(()=> import("./components/Chat/ChatModal/ChatModal"));

const App = () => {
  const error = useSelector((state: RootState) => state.error);
  const chat = useSelector((state: RootState) => state.chat);

  return (
    <Suspense fallback={<h1>loading</h1>}>
      {error && <ErorrModal message={error} />}
      {chat.show && <ChatModal name={chat.user.name} email={chat.user.email} />}
      <Routes>
        <Route index element={<Welcome />} />
        <Route path="/signup/*" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Suspense>
  );
};

export default App;
