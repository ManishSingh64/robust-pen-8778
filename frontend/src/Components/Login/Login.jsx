import React from "react";
import styles from "./login.module.css";
import LoginForm from "./LoginForm";
import LoginHeader from "./LoginHeader";
import LoginImg from "./LoginImg";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.log}>
        <LoginHeader />
        <LoginForm />
      </div>
      <div className={styles.imag}>
        <LoginImg />
      </div>
    </div>
  );
};

export default Login;
