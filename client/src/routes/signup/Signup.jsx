import { SignUp } from "@clerk/clerk-react";
import React from "react";

import "./signup.css";

function Signup() {
  return (
    <div className="signUp">
      <SignUp path="/sign-up" signInUrl="/sign-in" />
    </div>
  );
}

export default Signup;
