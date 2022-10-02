import { Flex } from "@chakra-ui/react";
import React from "react";
import styles from "./login.module.css";
import LoginForm from "./LoginForm";
import LoginHeader from "./LoginHeader";
import LoginImg from "./LoginImg";
import LoginLeft from "./LoginLeft";

const Login = () => {
  return (
    <Flex backgroundColor={"#f2f6f8"} justifyContent={"space-between"}>
      <LoginLeft />
      <LoginImg />
    </Flex>
    // <div className={styles.container}>
    //   <div className={styles.log}>
    //     <LoginHeader />
    //     {/* <LoginForm /> */}
    //   </div>
    //   <div className={styles.imag}>
    //     <LoginImg />
    //   </div>
    // </div>
  );
};

export default Login;
