import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import ProgressBar from "./ProgressBar/ProgressBar";
import Form from "./Form/From";
import Terms from "./TermsAndConditions/Terms";
import Congrats from "./Congrats/Congrats";

import styles from "./SignUp.module.css";

const SignUp: React.FC = () => {
  const [state, setState] = useState({ stepOne: false, stepTwo: false });

  return (
    <div className={styles.main}>
      <ProgressBar progress={state} />
      <Routes>
        <Route index element={<Form setProgress={setState} />} />
        <Route path="terms" element={<Terms setProgress={setState} />} />
        <Route path="congratulations" element={<Congrats setProgress={setState} />} />
      </Routes>
    </div>
  );
};

export default SignUp;
