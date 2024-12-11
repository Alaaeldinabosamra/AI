import { SignIn } from "@clerk/clerk-react";
import React from "react";
import "./signin.css";

function Signin() {
  return (
    <div className="signIn">
      <SignIn
        path="/sign-in"
        signUpUrl="/sign-up"
        forceRedirectUrl="/dashboard"
      />
    </div>
  );
}

export default Signin;
