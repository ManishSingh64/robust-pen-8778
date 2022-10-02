import React from "react";
import SignupForm from "./SignupForm";
import SignupHeader from "./SignupHeader";

const Signup = () => {
  return (
    <div
      style={{
        backgroundColor: "#f2f6f8",
        height: "100vh",
        marginTop: "-20px",
        paddingTop: "20px",
      }}
    >
      <SignupHeader />
      <SignupForm />
    </div>
  );
};

export default Signup;
