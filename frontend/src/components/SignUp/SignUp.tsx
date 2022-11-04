import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import ProgressBar from "./utils/TermsAndConditions/ProgressBar/ProgressBar";
import Form from "./utils/Form/From";
import Terms from "./utils/TermsAndConditions/Terms";
import Congrats from "./utils/Congrats/Congrats";

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
